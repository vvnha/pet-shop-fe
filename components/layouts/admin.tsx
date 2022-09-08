import { useAuth } from '@/hooks';
import { LayoutProps } from '@/models';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { Auth } from '../common/auth';

export function AdminLayout({ children }: LayoutProps) {
  const { logout } = useAuth();
  const router = useRouter();

  async function handleLogoutClick() {
    try {
      await logout();
      router.push('/login');
    } catch (error) {
      console.log('fail logout', error);
    }
  }
  return (
    <Auth>
      <div>
        <h1>Admin Layout</h1>
        <div>
          <button onClick={handleLogoutClick}>Logout</button>
        </div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/">
          <a>About</a>
        </Link>

        <div>{children}</div>
      </div>
    </Auth>
  );
}
