import { useAuth } from '@/hooks';
import * as React from 'react';
import HeaderDeskTop from './header-desktop';
import HeaderMobile from './header-mobile';

export interface HeaderProps {}

export function Header(props: HeaderProps) {
  const { isLoggedIn, logout } = useAuth();

  const handleLogOutClick = async () => {
    try {
      await logout();
      console.log('redirect to login');
    } catch (error) {
      console.log('fail logout', error);
    }
  };

  return (
    <>
      <HeaderMobile isLoggedIn={isLoggedIn} logOutClick={handleLogOutClick} />
      <HeaderDeskTop isLoggedIn={isLoggedIn} logOutClick={handleLogOutClick} />
    </>
  );
}
