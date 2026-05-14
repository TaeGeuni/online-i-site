'use client';

import { ReactNode } from 'react';
import { Card } from '@/components/ui/card';

export interface VisualizationStep {
  title: string;
  description: string;
  code?: string;
  status?: 'pending' | 'active' | 'complete';
}

interface MethodVisualizationProps {
  steps: VisualizationStep[];
  currentStep: number;
  color: 'blue' | 'green' | 'orange' | 'red';
}

const colorClasses = {
  blue: 'border-blue-500 bg-blue-50',
  green: 'border-green-500 bg-green-50',
  orange: 'border-orange-500 bg-orange-50',
  red: 'border-red-500 bg-red-50',
};

const textColorClasses = {
  blue: 'text-blue-600',
  green: 'text-green-600',
  orange: 'text-orange-600',
  red: 'text-red-600',
};

const stepColorClasses = {
  blue: 'bg-blue-100 text-blue-700',
  green: 'bg-green-100 text-green-700',
  orange: 'bg-orange-100 text-orange-700',
  red: 'bg-red-100 text-red-700',
};

export function MethodVisualization({
  steps,
  currentStep,
  color,
}: MethodVisualizationProps) {
  return (
    <div className="space-y-6">
      {steps.map((step, index) => (
        <div key={index} className="relative">
          <Card
            className={`p-6 border-l-4 ${
              index === currentStep ? colorClasses[color] : ''
            } transition-all duration-300`}
          >
            <div className="flex items-start gap-4">
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full font-bold flex-shrink-0 ${
                  index === currentStep
                    ? `${textColorClasses[color]} ring-2 ring-offset-2 ring-${color}-500`
                    : stepColorClasses[color]
                }`}
              >
                {index + 1}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{step.description}</p>
                {step.code && (
                  <code className="block bg-gray-900 text-gray-100 p-4 rounded text-xs overflow-x-auto font-mono">
                    {step.code}
                  </code>
                )}
              </div>
            </div>
          </Card>
          {index < steps.length - 1 && (
            <div className="flex justify-center my-2">
              <div className={`w-1 h-6 ${textColorClasses[color]}`}></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
