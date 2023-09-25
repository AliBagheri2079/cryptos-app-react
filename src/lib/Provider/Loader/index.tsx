import { Alert, Center, Loader } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';
import type { FC, ReactNode } from 'react';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

type Props = {
  children: ReactNode;
};

function FallbackError({ error }: { error: Error }): JSX.Element {
  return (
    <Alert icon={<IconAlertCircle size={26} />} title='Bummer!' color='red'>
      {error.message}
    </Alert>
  );
}
const FallbackLoader = (
  <Center h='100vh'>
    <Loader />
  </Center>
);

const LoaderProvider: FC<Props> = ({ children }) => {
  return (
    <ErrorBoundary FallbackComponent={FallbackError}>
      <Suspense fallback={FallbackLoader}>{children}</Suspense>
    </ErrorBoundary>
  );
};

export default LoaderProvider;
