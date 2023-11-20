'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Button } from './ui/button';
import { signOut } from 'next-auth/react';

const UserAccountNav = () => {
  const router = useRouter();
  // console.log('window.location.origin:', window.location.origin);

  return (
    <Button
      onClick={() =>
        signOut({
          redirect: true,
          callbackUrl: `${window.location.origin}/sign-in`,
        }).then(() => router.push('/sign-in'))
      }
      variant='destructive'
    >
      Sign Out
    </Button>
  );
};

export default UserAccountNav;