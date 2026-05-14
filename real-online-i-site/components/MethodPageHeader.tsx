'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

interface MethodPageHeaderProps {
  title: string;
  color: 'blue' | 'green' | 'orange' | 'red' | 'purple';
}

const colorClasses = {
  blue: 'bg-blue-50 border-blue-200',
  green: 'bg-green-50 border-green-200',
  orange: 'bg-orange-50 border-orange-200',
  red: 'bg-red-50 border-red-200',
  purple: 'bg-purple-50 border-purple-200',
};

const textColorClasses = {
  blue: 'text-blue-700',
  green: 'text-green-700',
  orange: 'text-orange-700',
  red: 'text-red-700',
  purple: 'text-purple-700',
};

export function MethodPageHeader({
  title,
  color,
}: MethodPageHeaderProps) {
  const { t } = useLanguage();

  return (
    <header
      className={`border-b ${colorClasses[color]} sticky top-0 z-50`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ChevronLeft className="w-4 h-4 mr-1" />
              {t('backToHome')}
            </Button>
          </Link>
          <h1 className={`text-2xl font-bold ${textColorClasses[color]}`}>
            {title}
          </h1>
        </div>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
