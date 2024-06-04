import Loading from '@/app/loading';
import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, ReactNode } from 'react';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return;
    if (!session) {
    router.push("/auth/login"); // Redirect to the sign-in page if not authenticated
    }
  }, [session, status, router]);

  if (status === 'loading' && !session) {
    return <Loading/>; // Show a loading spinner or nothing while checking authentication
  }

  return <>{children}</>;
};

export default ProtectedRoute;
