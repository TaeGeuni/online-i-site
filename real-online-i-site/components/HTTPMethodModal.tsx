'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/language-context';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export function HTTPMethodModal() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">{t('learnMore')}</Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{t('httpMethodsExplain')}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-bold text-lg text-blue-600 mb-2">{t('getTitle')}</h3>
            <p className="text-sm text-gray-600">{t('getExplain')}</p>
            <code className="block mt-2 bg-gray-100 p-2 rounded text-xs overflow-x-auto">
              GET /api/users/123
            </code>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-bold text-lg text-green-600 mb-2">{t('postTitle')}</h3>
            <p className="text-sm text-gray-600">{t('postExplain')}</p>
            <code className="block mt-2 bg-gray-100 p-2 rounded text-xs overflow-x-auto">
              POST /api/users
            </code>
          </div>

          <div className="border-l-4 border-orange-500 pl-4">
            <h3 className="font-bold text-lg text-orange-600 mb-2">{t('putTitle')}</h3>
            <p className="text-sm text-gray-600">{t('putExplain')}</p>
            <code className="block mt-2 bg-gray-100 p-2 rounded text-xs overflow-x-auto">
              PUT /api/users/123
            </code>
          </div>

          <div className="border-l-4 border-red-500 pl-4">
            <h3 className="font-bold text-lg text-red-600 mb-2">{t('deleteTitle')}</h3>
            <p className="text-sm text-gray-600">{t('deleteExplain')}</p>
            <code className="block mt-2 bg-gray-100 p-2 rounded text-xs overflow-x-auto">
              DELETE /api/users/123
            </code>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
