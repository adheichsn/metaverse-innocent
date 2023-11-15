import { FC, ReactNode } from 'react';
import { Button } from './ui/button';
import { signIn } from 'next-auth/react';

interface GoogleSignInButtonProps {
  children: ReactNode;
}
const GoogleSignInButton: FC<GoogleSignInButtonProps> = ({ children }) => {
  const loginWithGoogle = () => signIn('google', { callbackUrl: '/admin' });

  return (
    <Button onClick={loginWithGoogle} className='w-full'>
      <img 
      src='/images/google.png'
      alt=''
      className='w-6 h-6 mr-2'/>
      {children}
    </Button>
  );
};

export default GoogleSignInButton;
