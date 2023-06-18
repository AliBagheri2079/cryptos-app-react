import { type FC } from 'react';

const BrandLogo: FC = () => {
  return (
    <div className='inline-flex h-[26px] w-[26px] flex-wrap gap-[2px]'>
      <div
        className='basis-3 rounded-[3.82px] rounded-tr-none bg-black'
        style={{
          transform: 'matrix(1, 0, 0, -1, 0, 0)',
        }}
      />
      <div
        className='basis-3 rounded-[3.82px] rounded-tr-none bg-black'
        style={{
          transform: 'matrix(-1, 0, 0, -1, 0, 0)',
        }}
      />
      <div className='basis-3 rounded-[3.82px] rounded-tr-none bg-black' />
    </div>
  );
};

export default BrandLogo;
