import { useSyncExternalStore } from 'react';

function getSnapshot(): boolean {
  return navigator.onLine;
}

function subscribe(callback: any): () => void {
  window.addEventListener('online', callback);
  window.addEventListener('offline', callback);
  return () => {
    window.removeEventListener('online', callback);
    window.removeEventListener('offline', callback);
  };
}

const useOnlineStatus = (): boolean => {
  const isOnline = useSyncExternalStore(subscribe, getSnapshot);
  return isOnline;
};

export default useOnlineStatus;
