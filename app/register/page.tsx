// import { auth } from 'auth';
// import { SessionProvider } from 'next-auth/react';

import RegisterForm from '@/app/ui/register-form';
import Header from '@/app/ui/header';
// import { fetchUserById } from '@/app/lib/data';


export default async function RegisterPage() {

  // const session = await auth();
  // const user = await fetchUserById(session?.user?.email)

  return (
    <>
    {/* <SessionProvider> */}
      <Header />
    {/* </SessionProvider>  */}
    <main className="mx-auto flex h-full min-h-screen justify-center pt-14">
      <div className="relative mx-auto mt-4 flex w-full max-w-[460px] flex-col space-y-2.5 p-4 sm:mt-8">
        <RegisterForm />
      </div>
    </main>
    </>
  );
}
