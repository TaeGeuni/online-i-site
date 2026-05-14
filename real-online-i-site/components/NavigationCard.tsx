'use client';

import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { ReactNode } from 'react';

interface NavigationCardProps {
  href: string;
  title: string;
  description: string;
  icon: ReactNode;
  color: 'blue' | 'green' | 'orange' | 'red' | 'purple';
}

const colorClasses = {
  blue: 'border-l-4 border-blue-500 hover:shadow-lg hover:shadow-blue-200',
  green: 'border-l-4 border-green-500 hover:shadow-lg hover:shadow-green-200',
  orange: 'border-l-4 border-orange-500 hover:shadow-lg hover:shadow-orange-200',
  red: 'border-l-4 border-red-500 hover:shadow-lg hover:shadow-red-200',
  purple: 'border-l-4 border-purple-500 hover:shadow-lg hover:shadow-purple-200',
};

const iconColorClasses = {
  blue: 'text-blue-600',
  green: 'text-green-600',
  orange: 'text-orange-600',
  red: 'text-red-600',
  purple: 'text-purple-600',
};

export function NavigationCard({
  href,
  title,
  description,
  icon,
  color,
}: NavigationCardProps) {
  return (
    <Link href={href}>
      <Card
        className={`p-6 cursor-pointer transition-all duration-200 ${colorClasses[color]}`}
      >
        <div className={`text-3xl mb-3 ${iconColorClasses[color]}`}>{icon}</div>
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </Card>
    </Link>
  );
}
