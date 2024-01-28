import Link from 'next/link';
import { buttonVariants } from './ui/button';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import UserAccountNav from './UserAccountNav';
import Image from 'next/image';

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className=' bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0'>
      <div className='container flex items-center justify-between'>
        <Link href='/' className='my-2'>
          <Image 
            src='/images/telkomi.png'
            width={80}
            height={60} 
            alt='Telkom Indonesia'/>
        </Link>
        <Image 
        src='/images/innocent1.png'
        width={200}
        height={100}
        alt='Telkom InnoCent'/>
        {session?.user ? (
          <UserAccountNav/>
        ) : (
          <Link className={buttonVariants()} href='/sign-in'>
          Sign in
        </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
