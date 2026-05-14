'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/language-context';
import { MethodPageHeader } from '@/components/MethodPageHeader';
import { MethodVisualization } from '@/components/MethodVisualization';
import { InteractiveDemo } from '@/components/InteractiveDemo';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function DeletePage() {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: t('clientRequest'),
      description: t('deleteClientRequest'),
      code: 'DELETE /api/users/123 HTTP/1.1\nHost: api.example.com\nAuthorization: Bearer token123',
    },
    {
      title: t('serverProcessing'),
      description: t('deleteServerProcessing'),
      code: 'DELETE FROM users WHERE id = 123;',
    },
    {
      title: t('serverResponse'),
      description: t('deleteServerResponse'),
      code: 'HTTP/1.1 204 No Content\n\nor\n\nHTTP/1.1 200 OK\nContent-Type: application/json\n\n{"message": "User deleted successfully"}',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-red-50 to-slate-100">
      <MethodPageHeader title="DELETE Method" color="red" />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Overview Card */}
        <Card className="p-6 mb-12 border-l-4 border-red-500 bg-red-50">
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            {t('delete')} {t('whatIsMethod')}
          </h2>
          <p className="text-gray-700 mb-4">
            {t('deleteDescription')}
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            {Array.isArray(t('deleteProperties')) ? (
              (t('deleteProperties') as string[]).map((prop: string, idx: number) => (
                <li key={idx}>{prop}</li>
              ))
            ) : (
              <li>{t('deleteProperties')}</li>
            )}
          </ul>
        </Card>

        {/* Visualization */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('requestFlow')}</h2>
          <MethodVisualization steps={steps} currentStep={currentStep} color="red" />
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
          <InteractiveDemo method="DELETE" endpoint="/api/users/123" color="red" />
        </div>

        {/* Security Card */}
        <Card className="p-6 border-l-4 border-red-500">
          <h3 className="text-xl font-bold text-red-700 mb-4">
            {t('securityConsiderations')}
          </h3>
          <p className="text-gray-600 mb-4">
            {t('securityConsiderationsDesc')}
          </p>
          <ul className="space-y-3 text-sm text-gray-600">
            <li><strong>{t('authenticationRequired')}</strong></li>
            <li><strong>{t('authorizationRequired')}</strong></li>
            <li><strong>{t('auditLogging')}</strong></li>
            <li><strong>{t('softDeletes')}</strong></li>
            <li><strong>{t('deleteConfirmation')}</strong></li>
          </ul>
        </Card>
      </section>
    </main>
  );
}
