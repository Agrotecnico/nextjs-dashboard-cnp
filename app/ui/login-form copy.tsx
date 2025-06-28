'use client';

import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
// import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useFormState, useFormStatus } from 'react-dom';

import { Button } from './button';
// import { authenticate } from '@/app/lib/actions';
import LogoGoogle from './logosIconos/logo-google';
import { Fondo, Frente } from '@/app/ui/marcos';

export default function LoginForm() {

  // const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <>
      <form /* action={dispatch} */ className="mt-2 sm:mt-4">
        <h1 className={` mb-3 text-center text-2xl sm:text-4xl`}>Acceso</h1>
        <Fondo>
          <div className="flex flex-col gap-2 p-4 ">
            <Frente className="duration-150 hover:bg-[#ffffffaa] hover:[box-shadow:_0_0_0_1px_#c737c739]">
              <div
                onClick={async () => {
                  // await signIn('google', {
                  //   callbackUrl: '/dashboard',
                  // });
                  sessionStorage.removeItem("email")
                  sessionStorage.removeItem("name")
                }}
                className="py-[3px] flex cursor-pointer place-items-center items-center justify-start px-10 sm:py-1 duration-200  "
              >
                <div className="text-[14.3px] ">Continuar con</div>
                <LogoGoogle
                  filter="filterGoogle1"
                  sombraX="2"
                  sombraY="2"
                  // size="94"
                  className="ml-4 w-20 sm:w-[94px]"
                />
              </div>
            </Frente>
          </div>
        </Fondo>

        <div className="flex w-full items-center gap-2 py-6 text-sm">
          <div className="h-px w-full bg-[#020b1d33]"></div>O
          <div className="h-px w-full bg-[#020b1d33]"></div>
        </div>

        <Fondo>
          <div className="flex flex-col gap-2 p-4 ">
            <Frente>
              <div className="relative">
                <input
                  className="!hover:bg-transparent rounded-md peer block w-full border border-transparent bg-transparent py-[6px] duration-150 pl-10 text-sm outline-2 placeholder:text-[#1d021599] sm:py-[9px] hover:bg-[#ffffff3d] hover:[box-shadow:_0_0_0_1px_#c737c739] focus:[box-shadow:_0_0_0_1px_#c737c7ee] focus:bg-[#ffffffbb] focus:border-[#2f6feb00] focus:outline-1 focus:outline-[#c37bc336] "
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
                <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-900 peer-focus:text-gray-900" />
              </div>
            </Frente>
            <Frente>
              <div className="relative">
                <input
                  className="!hover:bg-transparent rounded-md peer block w-full border border-transparent bg-transparent py-[6px] duration-150 pl-10 text-sm outline-2 placeholder:text-[#1d021599] sm:py-[9px] hover:bg-[#ffffff3d] hover:[box-shadow:_0_0_0_1px_#c737c739] focus:[box-shadow:_0_0_0_1px_#c737c7ee] focus:bg-[#ffffffbb] focus:border-[#2f6feb00] focus:outline-1 focus:outline-[#c37bc336]  "
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Contraseña"
                  autoComplete="new password"
                  required
                  minLength={6}
                />
                <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-900 peer-focus:text-gray-900" />
              </div>
            </Frente>
          </div>
        </Fondo>

        <LoginButton />
      </form>
      {/* <div
        className="my-3 flex items-end space-x-1"
        aria-live="polite"
        aria-atomic="true"
      >
        {errorMessage && (
          <>
            <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
            <p className="text-sm text-red-500">{errorMessage}</p>
          </>
        )}
      </div> */}
      <Link
        href={'/register'}
        className="mx-auto !mt-0 flex items-center justify-start rounded-xl px-4 py-2 text-sm opacity-80 duration-200 hover:opacity-100 "
      >
        <p className="mr-[10px] hover:no-underline">No tienes una cuenta?</p>
        <p className="text-[#ae09e1] hover:underline hover:underline-offset-2">
          Créala
        </p>
      </Link>
    </>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      className="mt-4 !h-[34px] w-full justify-center bg-[#39507f] text-base  text-[#ffffffcc] duration-150 sm:!h-10 hover:bg-[#071f50] hover:text-[#fff] active:!bg-[#39507f] "
      aria-disabled={pending}
      onClick={() => {
        sessionStorage.removeItem("email")
        sessionStorage.removeItem("name")
      }}
    >
      Continuar
    </Button>
  );
}