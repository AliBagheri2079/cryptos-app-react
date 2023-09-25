import { Alert, Text } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';
import { type FC } from 'react';

const ErrorPart: FC<Error> = ({ name, message, stack }) => {
  return (
    <Alert
      icon={<IconAlertCircle size={24} stroke={1.5} />}
      title={name}
      mih={150}
      color='red'
      radius='lg'
      variant='light'
      p='xl'
    >
      <Text fz='sm' ta='justify'>
        {message}
      </Text>
      <Text fz='sm' ta='justify'>
        {stack}
      </Text>
    </Alert>
  );
};

export default ErrorPart;
