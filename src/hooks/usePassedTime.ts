import { useEffect, useState } from 'react';

const usePassedTime = (value: string | number | Date): number => {
  const [passedTime, setPassedTime] = useState<number>(0);

  useEffect(() => {
    const currentTime = new Date(Date.now()).getUTCSeconds();
    const previesTime = new Date(value).getUTCSeconds();
    setPassedTime(currentTime - previesTime);

    return () => setPassedTime(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return passedTime;
};

export { usePassedTime };
