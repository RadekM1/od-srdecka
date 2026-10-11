'use client';
import { useState, useEffect } from 'react';
import { getNotification } from '@/lib/fetch/get-notification';

export const Notification = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [notification, setNotification] = useState<{
    titulek: string;
    obsah: string;
  } | null>(null);

  useEffect(() => {
    getNotification().then(tempNotif => {
      setNotification(tempNotif);
      setLoading(false);
    });
  }, []);

  return (
    <div className="min-h-64 w-full rounded-2xl bg-[#061E4C] p-5 font-oldStandard text-white">
      <div className="flex w-full flex-col justify-center">
        {loading && (
          <div role="status" className="animate-pulse">
            <div className="mb-2.5 h-8 max-w-[360px] rounded-full bg-gray-200/50 dark:bg-gray-700"></div>
            <div className="mb-2.5 h-4 max-w-[330px] rounded-full bg-gray-200/50 dark:bg-gray-700"></div>
            <div className="mb-2.5 h-4 max-w-[300px] rounded-full bg-gray-200/50 dark:bg-gray-700"></div>
            <div className="mb-2.5 h-4 max-w-[315px] rounded-full bg-gray-200/50 dark:bg-gray-700"></div>
            <div className="mb-2.5 h-4 max-w-[285px] rounded-full bg-gray-200/50 dark:bg-gray-700"></div>
          </div>
        )}
        {!loading && notification && (
          <p className="mb-4 text-start text-2xl">{notification.titulek}</p>
        )}
        {!loading && notification && (
          <p className="whitespace-pre-line text-start text-base lg:text-lg">
            {notification.obsah}
          </p>
        )}
      </div>
    </div>
  );
};
