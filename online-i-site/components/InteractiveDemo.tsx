'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/language-context';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface InteractiveDemoProps {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  endpoint: string;
  color: 'blue' | 'green' | 'orange' | 'red';
}

const methodColors = {
  GET: 'bg-blue-100 text-blue-700 border-blue-500',
  POST: 'bg-green-100 text-green-700 border-green-500',
  PUT: 'bg-orange-100 text-orange-700 border-orange-500',
  DELETE: 'bg-red-100 text-red-700 border-red-500',
};

const textColors = {
  GET: 'text-blue-700',
  POST: 'text-green-700',
  PUT: 'text-orange-700',
  DELETE: 'text-red-700',
};

interface User {
  id: number;
  name: string;
  email: string;
}

const initialUsers: User[] = [
  { id: 123, name: 'John Doe', email: 'john@example.com' },
  { id: 124, name: 'Jane Johnson', email: 'jane@example.com' },
  { id: 125, name: 'Bob Wilson', email: 'bob@example.com' },
];

export function InteractiveDemo({
  method,
  endpoint,
  color,
}: InteractiveDemoProps) {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<{
    status: number;
    time: string;
    data: string;
    isError?: boolean;
  } | null>(null);
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [currentEndpoint, setCurrentEndpoint] = useState<string>(endpoint);
  const [requestBody, setRequestBody] = useState<string>(
    method === 'POST'
      ? JSON.stringify({ name: 'New User', email: 'newuser@example.com' }, null, 2)
      : method === 'PUT'
      ? JSON.stringify({ name: 'John Smith Updated', email: 'john.updated@example.com' }, null, 2)
      : ''
  );

  // Extract ID from URL
  const extractIdFromUrl = (url: string): number | null => {
    const match = url.match(/\/(\d+)$/);
    return match ? parseInt(match[1], 10) : null;
  };

  // Find user by ID
  const findUserById = (id: number): User | undefined => {
    return users.find(user => user.id === id);
  };

  const handleExecute = async () => {
    setIsLoading(true);
    setResponse(null);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    let responseData: string;
    let statusCode: number;
    let newUsers = [...users];
    let isError = false;

    if (method === 'GET') {
      const userId = extractIdFromUrl(currentEndpoint);
      
      if (!userId) {
        statusCode = 400;
        isError = true;
        responseData = JSON.stringify({
          error: 'Bad Request',
          message: 'Invalid URL format',
          details: 'URL must end with a numeric ID (e.g., /api/users/123)',
          received: currentEndpoint
        }, null, 2);
      } else {
        const user = findUserById(userId);
        if (user) {
          statusCode = 200;
          responseData = JSON.stringify(user, null, 2);
        } else {
          statusCode = 404;
          isError = true;
          responseData = JSON.stringify({
            error: 'Not Found',
            message: 'User not found',
            details: `No user with ID ${userId} exists in the database`,
            availableIds: users.map(u => u.id)
          }, null, 2);
        }
      }
    } else if (method === 'POST') {
      // Validate request body for POST
      let parsedBody;
      try {
        parsedBody = JSON.parse(requestBody);
      } catch (error) {
        statusCode = 400;
        isError = true;
        responseData = JSON.stringify({
          error: 'Bad Request',
          message: 'Invalid JSON format in request body',
          details: 'Please ensure your JSON is properly formatted'
        }, null, 2);
        setResponse({
          status: statusCode,
          time: `${Math.random() * 500 + 100}ms`,
          data: responseData,
          isError: true,
        });
        setIsLoading(false);
        return;
      }

      // Validate required fields
      if (!parsedBody.name || !parsedBody.email) {
        statusCode = 400;
        isError = true;
        responseData = JSON.stringify({
          error: 'Bad Request',
          message: 'Missing required fields',
          requiredFields: ['name', 'email'],
          received: Object.keys(parsedBody)
        }, null, 2);
      } else if (typeof parsedBody.name !== 'string' || typeof parsedBody.email !== 'string') {
        statusCode = 400;
        isError = true;
        responseData = JSON.stringify({
          error: 'Bad Request',
          message: 'Invalid field types',
          details: 'name and email must be strings'
        }, null, 2);
      } else if (!parsedBody.email.includes('@')) {
        statusCode = 400;
        isError = true;
        responseData = JSON.stringify({
          error: 'Bad Request',
          message: 'Invalid email format',
          details: 'Email must contain @ symbol'
        }, null, 2);
      } else {
        const newUser: User = {
          id: Math.max(...users.map(u => u.id)) + 1,
          name: parsedBody.name,
          email: parsedBody.email,
        };
        newUsers = [...users, newUser];
        setUsers(newUsers);
        statusCode = 201;
        responseData = JSON.stringify(newUser, null, 2);
      }
    } else if (method === 'PUT') {
      const userId = extractIdFromUrl(currentEndpoint);
      
      if (!userId) {
        statusCode = 400;
        isError = true;
        responseData = JSON.stringify({
          error: 'Bad Request',
          message: 'Invalid URL format',
          details: 'URL must end with a numeric ID (e.g., /api/users/123)',
          received: currentEndpoint
        }, null, 2);
        setResponse({
          status: statusCode,
          time: `${Math.random() * 500 + 100}ms`,
          data: responseData,
          isError: true,
        });
        setIsLoading(false);
        return;
      }

      // Validate request body for PUT
      let parsedBody;
      try {
        parsedBody = JSON.parse(requestBody);
      } catch (error) {
        statusCode = 400;
        isError = true;
        responseData = JSON.stringify({
          error: 'Bad Request',
          message: 'Invalid JSON format in request body',
          details: 'Please ensure your JSON is properly formatted'
        }, null, 2);
        setResponse({
          status: statusCode,
          time: `${Math.random() * 500 + 100}ms`,
          data: responseData,
          isError: true,
        });
        setIsLoading(false);
        return;
      }

      // Validate required fields
      if (!parsedBody.name || !parsedBody.email) {
        statusCode = 400;
        isError = true;
        responseData = JSON.stringify({
          error: 'Bad Request',
          message: 'Missing required fields',
          requiredFields: ['name', 'email'],
          received: Object.keys(parsedBody)
        }, null, 2);
      } else if (typeof parsedBody.name !== 'string' || typeof parsedBody.email !== 'string') {
        statusCode = 400;
        isError = true;
        responseData = JSON.stringify({
          error: 'Bad Request',
          message: 'Invalid field types',
          details: 'name and email must be strings'
        }, null, 2);
      } else if (!parsedBody.email.includes('@')) {
        statusCode = 400;
        isError = true;
        responseData = JSON.stringify({
          error: 'Bad Request',
          message: 'Invalid email format',
          details: 'Email must contain @ symbol'
        }, null, 2);
      } else {
        const user = findUserById(userId);
        if (user) {
          const updatedUser = { ...user, name: parsedBody.name, email: parsedBody.email };
          newUsers = users.map(u => u.id === userId ? updatedUser : u);
          setUsers(newUsers);
          statusCode = 200;
          responseData = JSON.stringify(updatedUser, null, 2);
        } else {
          statusCode = 404;
          isError = true;
          responseData = JSON.stringify({
            error: 'Not Found',
            message: 'Resource not found',
            details: `Cannot update: no user with ID ${userId} exists in the database`,
            availableIds: users.map(u => u.id)
          }, null, 2);
        }
      }
    } else if (method === 'DELETE') {
      const userId = extractIdFromUrl(currentEndpoint);
      
      if (!userId) {
        statusCode = 400;
        isError = true;
        responseData = JSON.stringify({
          error: 'Bad Request',
          message: 'Invalid URL format',
          details: 'URL must end with a numeric ID (e.g., /api/users/123)',
          received: currentEndpoint
        }, null, 2);
      } else {
        const user = findUserById(userId);
        if (user) {
          newUsers = users.filter(u => u.id !== userId);
          setUsers(newUsers);
          statusCode = 204;
          responseData = JSON.stringify({ message: 'Resource deleted successfully', deletedUser: user }, null, 2);
        } else {
          statusCode = 404;
          isError = true;
          responseData = JSON.stringify({
            error: 'Not Found',
            message: 'Resource not found',
            details: `Cannot delete: no user with ID ${userId} exists in the database`,
            availableIds: users.map(u => u.id)
          }, null, 2);
        }
      }
    }

    setResponse({
      status: statusCode,
      time: `${Math.random() * 500 + 100}ms`,
      data: responseData,
      isError: isError || statusCode >= 400,
    });
    setIsLoading(false);
  };

  return (
    <Card className={`p-6 border-l-4 border-${color}-500`}>
      <h3 className={`text-xl font-bold ${textColors[method]} mb-4`}>
        Try It Out
      </h3>

      {/* Request */}
      <div className="space-y-3 mb-6">
        <label className="block text-sm font-semibold text-gray-700">
          Request URL
        </label>
        <div className="flex items-center gap-2">
          <span
            className={`px-3 py-1 rounded font-mono font-bold text-sm ${methodColors[method]}`}
          >
            {method}
          </span>
          <Input
            value={currentEndpoint}
            onChange={(e) => setCurrentEndpoint(e.target.value)}
            className="flex-1 font-mono text-sm"
            placeholder={endpoint}
          />
        </div>
        <p className="text-xs text-gray-500">
          Example: /api/users/123 (Change the ID to query different users: 123, 124, 125)
        </p>
      </div>

      {/* Request Body Input for POST and PUT */}
      {(method === 'POST' || method === 'PUT') && (
        <div className="mb-6 space-y-2">
          <label className="block text-sm font-semibold text-gray-700">
            Request Body (JSON)
          </label>
          <textarea
            value={requestBody}
            onChange={(e) => setRequestBody(e.target.value)}
            className="w-full h-32 p-3 border border-gray-300 rounded bg-gray-50 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter JSON request body..."
          />
          <p className="text-xs text-gray-500">
            {method === 'POST' ? 'Example: {"name": "John Doe", "email": "john@example.com"}' : 'Example: {"name": "Updated Name", "email": "updated@example.com"}'}
          </p>
        </div>
      )}

      {/* Execute Button */}
      <Button
        onClick={handleExecute}
        disabled={isLoading}
        className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
      >
        {isLoading ? 'Sending...' : 'Execute Request'}
      </Button>

      {/* Response */}
      {response && (
        <div className="space-y-4 mb-6 p-4 rounded border-2" style={{
          borderColor: response.isError ? '#ef4444' : '#22c55e',
          backgroundColor: response.isError ? '#fee2e2' : '#f0fdf4',
        }}>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-gray-700">Response:</span>
            <span className="text-xs text-gray-500">{response.time}</span>
          </div>
          <div
            className={`px-3 py-2 rounded font-mono font-bold text-sm ${
              response.isError
                ? 'bg-red-100 text-red-700'
                : 'bg-green-100 text-green-700'
            }`}
          >
            {response.status} {response.isError ? 'Error' : 'Success'}
          </div>
          <code className={`block p-4 rounded text-xs overflow-x-auto font-mono ${
            response.isError
              ? 'bg-red-900 text-red-100'
              : 'bg-gray-900 text-green-400'
          }`}>
            {response.data}
          </code>
        </div>
      )}

      {/* Database State - Always Visible */}
      <div className="mt-6 pt-6 border-t">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-semibold text-gray-700">
            {t('databaseState')}
          </h4>
          <span className={`text-xs px-2 py-1 rounded ${
            users.length > 0 ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'
          }`}>
            {users.length} {t('users')}
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="text-left px-3 py-2 font-semibold text-gray-700">
                  {t('userId')}
                </th>
                <th className="text-left px-3 py-2 font-semibold text-gray-700">
                  {t('userName')}
                </th>
                <th className="text-left px-3 py-2 font-semibold text-gray-700">
                  {t('userEmail')}
                </th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user) => (
                  <tr key={user.id} className="border-b hover:bg-gray-50">
                    <td className="px-3 py-2 text-gray-600">{user.id}</td>
                    <td className="px-3 py-2 text-gray-600">{user.name}</td>
                    <td className="px-3 py-2 text-gray-600">{user.email}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="px-3 py-2 text-center text-gray-500 py-4">
                    No data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  );
}
