import { Metadata } from 'next';
import { notFound } from 'next/navigation';
// import { auth } from 'auth';
import Image from 'next/image'
import Link from 'next/link';

import { getPostBySlug } from '@/app/lib/getPost';
import markdownToHtml from '@/app/lib/markdownToHtml';
import distanceToNow from '@/app/lib/dateRelative';
import markdownStyles from '@/app/ui/consultas/markdown-styles.module.css';
// import FormComment from '@/app/ui/consultas/comments/form-comment';
// import ListComment from '@/app/ui/consultas/comments/list-comment';
import {Frente} from '@/app/ui/marcos'
// import { fetchUserById } from '@/app/lib/data';
import IconPresupuesto from '@/app/ui/logosIconos/icon-presupuesto';
import IconConsulta from '@/app/ui/logosIconos/icon-consulta';
import  IconWhatsApp  from "@/app/ui/logosIconos/icon-whatsApp2";


export const metadata: Metadata = {
  title: 'Consultas',
  description:
    'En esta es una página enumeramos y detallamos las consultas más frecuentes ',
};

type Params = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params }: Params) {
  // const session = await auth();
  // const user = await fetchUserById(session?.user?.email)
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }
  const content = await markdownToHtml(post.content || '');

  return (
    <>
      <Frente className="!rounded-lg !bg-[#ffffffaa] ">
        <article className="px-3 pb-6 pt-6 md:px-6">
          <h1 className="mb-3 text-xl font-bold sm:mb-6 md:text-2xl">
            {post.excerpt}
          </h1>

          <div className="hidden md:mb-6 md:block">
            <div className="flex items-center">
              {post.avatar ? (
                <Image
                  src={`${post.avatar}`}
                  alt="my desk"
                  width={300}
                  height={300}
                  className="mr-4 h-auto w-12 rounded-full"
                />
              ) : null}
              <div className="text-lg font-semibold">{post.autor}</div>
            </div>
          </div>

          <div className="mx-auto mb-4 max-w-max rounded p-0.5 [box-shadow:inset_0_2px_0_#4d4d4db8,inset_0_-2px_0_#ffffff] md:mb-8 ">
            <div className="sm:mx-0">
              {post.image ? (
                <Image
                  src={`${post.image}`}
                  alt="my desk"
                  width={481}
                  height={361}
                  className="roundrd w-64 h-auto sm:w-96 "
                  priority
                />
              ) : null}
            </div>
          </div>

          <div className="mx-auto max-w-2xl">
            {/* <div className="mb-6 block md:hidden">
              <div className="flex items-center">
                {post.avatar ? (
                  <Image
                    src={`${post.avatar}`}
                    alt="my desk"
                    width={300}
                    height={300}
                    className="mr-4 h-auto w-12 rounded-full"
                  />
                ) : null}
                <div className="text-lg font-bold">{post.autor}</div>
              </div>
            </div> */}

            <div className="text-md mb-3 sm:mb-6">
              <time className="mt-2 flex text-[14px] text-[#020b1daa] ">
                {distanceToNow(new Date(`${post.date}`))}
              </time>
            </div>
          </div>

          <div className="mx-auto mb-8 max-w-2xl text-sm sm:text-base">
            <div
              className={` ${markdownStyles['markdown']}`}
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>

          {/* <div className="mt-20 mx-auto text-sm max-w-2xl sm:text-[15px]">
            <FormComment user={user} post={post} />
            <ListComment post={post} />
          </div> */}
        </article>
      </Frente>

      <Link 
        href={"https://api.whatsapp.com/send?phone=543476606595"}
        target="_blank"  
        className="py-0.5 px-3 w-max my-8 mx-auto bg-[#fff] duration-150 opacity-80 rounded-[10px] flex items-center gap-6 text-sm shadow-[0_10px_20px_#020b1d33] hover:opacity-100 active:opacity-80 sm:text-[15px] sm:mt-12 lg:hidden">
        <div className="flex flex-col gap-0 sm:gap-4 sm:flex-row">
          <div className="h-6 flex items-center justify-start sm:h-[26px]">
            <IconPresupuesto 
              className="mr-2 w-[15px] h-[15px] sm:w-[16px] sm:h-[16px]"
              color="#ffffffdd" color2="#020b1d"
              />
            <p>Pedí presupuesto</p>
          </div>
          <div className="h-6 flex items-center justify-start sm:h-[26px]">
            <IconConsulta 
              className="mr-2 w-[15px] h-[15px] sm:w-[16px] sm:h-[16px]"
              color="#ffffffdd" color2="#020b1d"
              />
            <p>Realizá tu consulta</p>
          </div>
        </div>
        <IconWhatsApp size="36" color="#57c061" colorFondo="#0000"  className=" " />
      </Link>
    </>
  );
}