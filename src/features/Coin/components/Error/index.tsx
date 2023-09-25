import { Alert, Text } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';
import { type FC } from 'react';

type Props = {
  title: string;
};

const ErrorPart: FC<Props> = ({ title }) => {
  return (
    <Alert
      icon={<IconAlertCircle size={24} stroke={1.5} />}
      title={title}
      mih={150}
      color='red'
      radius='lg'
      variant='light'
      p='xl'
    >
      <Text fz='sm' ta='justify'>
        {title}
      </Text>
    </Alert>
  );
};

export default ErrorPart;
