'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/language-context';
import { MethodPageHeader } from '@/components/MethodPageHeader';
import { MethodVisualization } from '@/components/MethodVisualization';
import { InteractiveDemo } from '@/components/InteractiveDemo';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function PostPage() {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: t('clientRequest'),
      description: t('postClientRequest'),
      code: 'POST /api/users HTTP/1.1\nHost: api.example.com\nContent-Type: application/json\n\n{\n  "name": "Jane Smith",\n  "email": "jane@example.com",\n  "age": 28\n}',
    },
    {
      title: t('serverProcessing'),
      description: t('postServerProcessing'),
      code: 'INSERT INTO users (name, email, age) \nVALUES ("Jane Smith", "jane@example.com", 28);',
    },
    {
      title: t('serverResponse'),
      description: t('postServerResponse'),
      code: 'HTTP/1.1 201 Created\nContent-Type: application/json\nLocation: /api/users/456\n\n{\n  "id": 456,\n  "name": "Jane Smith",\n  "email": "jane@example.com",\n  "age": 28\n}',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-slate-100">
      <MethodPageHeader title="POST Method" color="green" />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Overview Card */}
        <Card className="p-6 mb-12 border-l-4 border-green-500 bg-green-50">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            {t('post')} {t('whatIsMethod')}
          </h2>
          <p className="text-gray-700 mb-4">
            {t('postDescription')}
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            {Array.isArray(t('postProperties')) ? (
              (t('postProperties') as string[]).map((prop: string, idx: number) => (
                <li key={idx}>{prop}</li>
              ))
            ) : (
              <li>{t('postProperties')}</li>
            )}
          </ul>
        </Card>

        {/* Visualization */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('requestFlow')}</h2>
          <MethodVisualization steps={steps} currentStep={currentStep} color="green" />
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
          <InteractiveDemo method="POST" endpoint="/api/users" color="green" />
        </div>

        {/* Form Data Card */}
        <Card className="p-6 border-l-4 border-green-500">
          <h3 className="text-xl font-bold text-green-700 mb-4">
            {t('requestBodyFormats')}
          </h3>
          <p className="text-gray-600 mb-4">
            {t('requestBodyFormatsDesc')}
          </p>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-2">
                {t('jsonFormat')}
              </p>
              <code className="block bg-gray-100 p-3 rounded text-xs overflow-x-auto font-mono">
                {"Content-Type: application/json\n\n{\"name\": \"John\", \"email\": \"john@example.com\"}"}
              </code>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-2">
                {t('formDataFormat')}
              </p>
              <code className="block bg-gray-100 p-3 rounded text-xs overflow-x-auto font-mono">
                Content-Type: application/x-www-form-urlencoded<br/>
                name=John&email=john@example.com
              </code>
            </div>
          </div>
        </Card>
      </section>
    </main>
  );
}
