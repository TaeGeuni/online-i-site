'use client';

import { useLanguage } from '@/lib/language-context';
import { MethodPageHeader } from '@/components/MethodPageHeader';
import { ChatRoom } from '@/components/ChatRoom';

export default function ChatPage() {
  const { t } = useLanguage();

  return (
    <main className="h-screen flex flex-col bg-purple-50">
      <MethodPageHeader title={t('chatTitle')} color="purple" />
      <ChatRoom roomName={t('chatTitle')} />
    </main>
  );
}
