/* eslint-disable react/display-name */
// hoc/withAuth.tsx
"use client"
import { useAuth } from '@/selectors/auth';
import { useRouter } from 'next/navigation';
import { useEffect, ComponentType } from 'react';

const withAuth = (WrappedComponent: ComponentType) => {
  return (props: any) => {
    const user = useAuth();
    console.log(user);
    
    const router = useRouter();

    useEffect(() => {
      if (!user) {
        router.push('/auth/login');
      }
    }, [user, router]);

    if (!user) {
      return null; // or a loading spinner
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
