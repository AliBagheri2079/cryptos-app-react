import { Alert, Text } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';
import type { FC } from 'react';
import { useRouteError } from 'react-router-dom';

const CoinError: FC = () => {
  const { message, name, stack } = useRouteError() as Error;

  return (
    <div className='container'>
      <Alert
        icon={<IconAlertCircle size={24} stroke={1.5} />}
        title={name}
        mih={300}
        color='red'
        radius='lg'
        variant='filled'
        p='xl'
      >
        <Text fz='sm' ta='justify'>
          {message}
        </Text>
        -
        <Text fz='sm' ta='justify'>
          {stack}
        </Text>
      </Alert>
    </div>
  );
};

export default CoinError;
