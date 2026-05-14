'use client';

import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/lib/language-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

export interface ChatMessage {
  id: string;
  user: string;
  message: string;
  timestamp: Date;
  isCurrentUser: boolean;
}

interface ChatRoomProps {
  roomName?: string;
}

export function ChatRoom({ roomName = 'General' }: ChatRoomProps) {
  const { t } = useLanguage();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [messageInput, setMessageInput] = useState('');
  const [connected, setConnected] = useState(true);
  const [currentUser, setCurrentUser] = useState('');
  const [nickname, setNickname] = useState('');
  const [isEntered, setIsEntered] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleEnterChat = () => {
    if (!nickname.trim()) return;
    setCurrentUser(nickname);
    setIsEntered(true);
  };

  const handleSendMessage = () => {
    if (!messageInput.trim()) return;

    const newMessage: ChatMessage = {
      id: String(messages.length + 1),
      user: currentUser,
      message: messageInput,
      timestamp: new Date(),
      isCurrentUser: true,
    };

    setMessages([...messages, newMessage]);
    setMessageInput('');
  };

  const handleResetChat = () => {
    setMessages([]);
  };

  if (!isEntered) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-50 to-slate-100">
        <Card className="w-full max-w-md p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {t('chatTitle')}
            </h2>
            <p className="text-gray-600">
              {t('chatDescription')}
            </p>
          </div>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="nickname" className="block text-sm font-medium text-gray-700 mb-2">
                {t('enterNickname')}
              </label>
              <Input
                id="nickname"
                placeholder={t('enterNickname')}
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleEnterChat();
                  }
                }}
                className="w-full"
              />
            </div>
            
            <Button
              onClick={handleEnterChat}
              disabled={!nickname.trim()}
              className="w-full bg-purple-600 hover:bg-purple-700"
            >
              {t('enter')}
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Chat Header */}
      <div className="bg-white border-b p-4 sticky top-16">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="text-lg font-bold text-gray-900">
              {roomName}
            </h2>
            <p className="text-xs text-gray-500">
              {t('chatDescription')}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div
                className={`w-3 h-3 rounded-full ${
                  connected ? 'bg-green-500' : 'bg-red-500'
                }`}
              ></div>
              <span className="text-xs text-gray-600">
                {connected ? t('connected') : t('disconnected')}
              </span>
            </div>
            <Button
              onClick={handleResetChat}
              variant="outline"
              size="sm"
              className="text-xs"
            >
              {t('resetChat')}
            </Button>
          </div>
        </div>
        <div className="text-xs text-gray-500 flex items-center gap-2">
          <span className="font-medium text-gray-700">{t('userName')}:</span>
          <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded">
            {currentUser}
          </span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.isCurrentUser ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs rounded-lg px-4 py-2 ${
                msg.isCurrentUser
                  ? 'bg-purple-500 text-white rounded-br-none'
                  : 'bg-gray-200 text-gray-900 rounded-bl-none'
              }`}
            >
              <p className="text-xs font-semibold opacity-75 mb-1">
                {msg.user}
              </p>
              <p className="text-sm break-words">{msg.message}</p>
              <p
                className={`text-xs mt-1 ${
                  msg.isCurrentUser ? 'opacity-75' : 'text-gray-500'
                }`}
              >
                {msg.timestamp.toLocaleTimeString()}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="border-t bg-white p-4 sticky bottom-0">
        <div className="flex gap-2">
          <Input
            placeholder={t('enterMessage')}
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
            className="flex-1"
          />
          <Button onClick={handleSendMessage} className="bg-purple-600 hover:bg-purple-700">
            {t('send')}
          </Button>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          {t('chatDescription')}
        </p>
      </div>
    </div>
  );
}
