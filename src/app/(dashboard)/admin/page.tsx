import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import React from 'react'

const page = async () => {
    const session = await getServerSession(authOptions);
    console.log(session);

    if(session?.user) {
        return <div>page {session?.user.username}</div>
    }

  return (
    <div>login dulu bang</div>
  )
}

export default page