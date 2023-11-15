import MetaHead from '@/components/MetaHead';
import SignInForm from '@/components/form/SignInForm';
import { Metadata } from 'next/types';

export const metadata: Metadata = {
  title: 'Sign In | Telkom InnoCent',
  description: 'smarteye.id',
};
const page = () => {
  return (
    <div className='w-full'>
      <MetaHead title={''}/>
      <SignInForm />
    </div>
  );
};

export default page;
