import Link from 'next/link';

type navbar = {
  route: string;
  message: string;
};

export default function BtnNavBar({ route, message }: navbar) {
  return (
    <li className='h-10 bg-white flex justify-center items-center hover:bg-slate-300'>
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
