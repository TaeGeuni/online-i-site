'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/language-context';
import { MethodPageHeader } from '@/components/MethodPageHeader';
import { MethodVisualization } from '@/components/MethodVisualization';
import { InteractiveDemo } from '@/components/InteractiveDemo';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function PutPage() {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: t('clientRequest'),
      description: t('putClientRequest'),
      code: 'PUT /api/users/123 HTTP/1.1\nHost: api.example.com\nContent-Type: application/json\n\n{\n  "name": "John Smith Updated",\n  "email": "john.updated@example.com",\n  "age": 31\n}',
    },
    {
      title: t('serverProcessing'),
      description: t('putServerProcessing'),
      code: 'UPDATE users SET name="John Smith Updated", \nemail="john.updated@example.com", age=31 \nWHERE id = 123;',
    },
    {
      title: t('serverResponse'),
      description: t('putServerResponse'),
      code: 'HTTP/1.1 200 OK\nContent-Type: application/json\n\n{\n  "id": 123,\n  "name": "John Smith Updated",\n  "email": "john.updated@example.com",\n  "age": 31\n}',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 to-slate-100">
      <MethodPageHeader title="PUT Method" color="orange" />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Overview Card */}
        <Card className="p-6 mb-12 border-l-4 border-orange-500 bg-orange-50">
          <h2 className="text-2xl font-bold text-orange-700 mb-4">
            {t('put')} {t('whatIsMethod')}
          </h2>
          <p className="text-gray-700 mb-4">
            {t('putDescription')}
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            {Array.isArray(t('putProperties')) ? (
              (t('putProperties') as string[]).map((prop: string, idx: number) => (
                <li key={idx}>{prop}</li>
              ))
            ) : (
              <li>{t('putProperties')}</li>
            )}
          </ul>
        </Card>

        {/* Visualization */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('requestFlow')}</h2>
          <MethodVisualization steps={steps} currentStep={currentStep} color="orange" />
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
          <InteractiveDemo method="PUT" endpoint="/api/users/123" color="orange" />
        </div>

        {/* PUT vs PATCH Card */}
        <Card className="p-6 border-l-4 border-orange-500">
          <h3 className="text-xl font-bold text-orange-700 mb-4">
            {t('putVsPatch')}
          </h3>
          <p className="text-gray-600 mb-4">
            {t('putVsPatchDesc')}
          </p>
          <div className="space-y-4">
            <div className="border-l-4 border-orange-500 pl-4">
              <p className="font-semibold text-gray-700 mb-2">
                {t('putFullReplacement')}
              </p>
              <p className="text-sm text-gray-600">
                {t('putFullReplacementDesc')}
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="font-semibold text-gray-700 mb-2">
                {t('patchPartialUpdate')}
              </p>
              <p className="text-sm text-gray-600">
                {t('patchPartialUpdateDesc')}
              </p>
            </div>
          </div>
        </Card>
      </section>
    </main>
  );
}
