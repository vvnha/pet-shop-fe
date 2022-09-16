import { useAuth } from '@/hooks';
import { Box, Container, Skeleton } from '@mui/material';
import { useRouter } from 'next/router';
import * as React from 'react';

export interface AuthProps {
  children: any;
}

export function Auth({ children }: AuthProps) {
  const router = useRouter();
  const { profile, firstLoading } = useAuth();

  React.useEffect(() => {
    if (!firstLoading && !(profile as any)?.email) {
      router.push('/login');
    }
  }, [router, profile, firstLoading]);

  if (!(profile as any)?.email)
    return (
      <Box>
        <Container>
          <Skeleton
            animation="wave"
            variant="rectangular"
            sx={{
              my: 1,
            }}
            height={80 * 6}
          />
        </Container>
      </Box>
    );

  return <div>{children}</div>;
}
