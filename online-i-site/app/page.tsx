'use client';

import { useLanguage } from '@/lib/language-context';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { NavigationCard } from '@/components/NavigationCard';
import { HTTPMethodModal } from '@/components/HTTPMethodModal';

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="border-b bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{t('mainTitle')}</h1>
            <p className="text-sm text-gray-600 mt-1">{t('mainDescription')}</p>
          </div>
          <LanguageSwitcher />
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Master HTTP Methods
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Interactive tutorials to understand GET, POST, PUT, and DELETE methods
          </p>
          <HTTPMethodModal />
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <NavigationCard
            href="/get"
            title={t('getTitle')}
            description={t('getDesc')}
            icon="📥"
            color="blue"
          />
          <NavigationCard
            href="/post"
            title={t('postTitle')}
            description={t('postDesc')}
            icon="✍️"
            color="green"
          />
          <NavigationCard
            href="/put"
            title={t('putTitle')}
            description={t('putDesc')}
            icon="🔄"
            color="orange"
          />
          <NavigationCard
            href="/delete"
            title={t('deleteTitle')}
            description={t('deleteDesc')}
            icon="🗑️"
            color="red"
          />
          <NavigationCard
            href="/chat"
            title={t('chatTitle')}
            description={t('chatDesc')}
            icon="💬"
            color="purple"
          />
        </div>
      </section>
    </main>
  );
}
