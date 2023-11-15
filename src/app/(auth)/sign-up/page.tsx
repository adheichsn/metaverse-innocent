import MetaHead from '@/components/MetaHead';
import SignUpForm from '@/components/form/SignUpForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign Up | Telkom InnoCent',
  description: 'smarteye.id',
};
const page = () => {
  return (
    <div className='w-full'>
      <MetaHead title={'metadata.title'}/>
      <SignUpForm />
    </div>
  );
};

export default page;
