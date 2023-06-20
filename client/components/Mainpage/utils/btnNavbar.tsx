import Link from 'next/link';

interface navbar {
  route: string;
  message: string;
}

export default function BtnNavbar({ route, message }: navbar) {
  return (
    <li className='h-[10vh] bg-white flex justify-center items-center hover:bg-slate-400'>
      <Link
        className='flex justify-center items-center w-full h-full'
        href={route}
        scroll={false}
      >
        {message}
      </Link>
    </li>
  );
}
