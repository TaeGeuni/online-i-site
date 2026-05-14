'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/language-context';
import { MethodPageHeader } from '@/components/MethodPageHeader';
import { MethodVisualization } from '@/components/MethodVisualization';
import { InteractiveDemo } from '@/components/InteractiveDemo';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function GetPage() {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: t('clientRequest'),
      description: t('getClientRequest'),
      code: 'GET /api/users/123 HTTP/1.1\nHost: api.example.com\nAccept: application/json',
    },
    {
      title: t('serverProcessing'),
      description: t('getServerProcessing'),
      code: 'SELECT * FROM users WHERE id = 123;',
    },
    {
      title: t('serverResponse'),
      description: t('getServerResponse'),
      code: 'HTTP/1.1 200 OK\nContent-Type: application/json\n\n{\n  "id": 123,\n  "name": "John Doe",\n  "email": "john@example.com"\n}',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
      <MethodPageHeader title="GET Method" color="blue" />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Overview Card */}
        <Card className="p-6 mb-12 border-l-4 border-blue-500 bg-blue-50">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            {t('get')} {t('whatIsMethod')}
          </h2>
          <p className="text-gray-700 mb-4">
            {t('getDescription')}
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            {Array.isArray(t('getProperties')) ? (
              (t('getProperties') as string[]).map((prop: string, idx: number) => (
                <li key={idx}>{prop}</li>
              ))
            ) : (
              <li>{t('getProperties')}</li>
            )}
          </ul>
        </Card>

        {/* Visualization */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('requestFlow')}</h2>
          <MethodVisualization steps={steps} currentStep={currentStep} color="blue" />
        </div>

        {/* Controls */}
        <div className="flex gap-4 justify-center mb-12">
          <Button
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            variant="outline"
          >
            {t('previous')}
          </Button>
          <span className="flex items-center text-gray-600">
            {t('step')} {currentStep + 1} {t('post')} {steps.length}
          </span>
          <Button
            onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
            disabled={currentStep === steps.length - 1}
          >
            {t('next')}
          </Button>
        </div>

        {/* Interactive Demo */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Interactive Demo</h2>
          <InteractiveDemo method="GET" endpoint="/api/users/123" color="blue" />
        </div>

        {/* Query Parameters Card */}
        <Card className="p-6 border-l-4 border-blue-500">
          <h3 className="text-xl font-bold text-blue-700 mb-4">
            {t('queryParameters')}
          </h3>
          <p className="text-gray-600 mb-4">
            {t('queryParametersDesc')}
          </p>
          <code className="block bg-gray-100 p-4 rounded text-sm overflow-x-auto font-mono">
            GET /api/users?page=1&limit=10&sort=name
          </code>
          <p className="text-xs text-gray-500 mt-3">
            {t('parametersNote')}
          </p>
        </Card>
      </section>
    </main>
  );
}
