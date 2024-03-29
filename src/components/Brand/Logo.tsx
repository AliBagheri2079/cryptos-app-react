import { type FC } from 'react';

import { useDirection } from '@/hooks';

const BrandLogo: FC = () => {
  const [dir] = useDirection();

  return (
    <div className='inline-flex h-[26px] w-[26px] flex-wrap gap-[2px]'>
      <div
        className='basis-3 rounded-[4px] rounded-tr-none bg-current'
        style={{
          transform:
            dir === 'ltr'
              ? 'matrix(1, 0, 0, -1, 0, 0)'
              : 'matrix(-1, 0, 0, -1, 0, 0)',
        }}
      />
      <div
        className='basis-3 rounded-[4px] rounded-tr-none bg-current'
        style={{
          transform:
            dir === 'ltr'
              ? 'matrix(-1, 0, 0, -1, 0, 0)'
              : 'matrix(1, 0, 0, -1, 0, 0)',
        }}
      />
      <div
        className='basis-3 rounded-[4px] rounded-tr-none bg-current'
        style={{
          transform: dir === 'ltr' ? 'unset' : 'matrix(-1, 0, 0, 1, 0, 0)',
        }}
      />
    </div>
  );
};

export default BrandLogo;
