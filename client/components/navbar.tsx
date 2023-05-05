/* eslint-disable react/no-unused-prop-types */
import Link from 'next/link';
import { useState } from 'react';

type OptionsNavbar = {
  path: string;
  name: string;
  // eslint-disable-next-line no-undef
  img?: JSX.Element;
};

function Navbar() {
  const [mouse, enterOrLeave] = useState(false);

  function handleOnMouseEnter() {
    enterOrLeave(true);
  }

  function handleOnMouseLeave() {
    enterOrLeave(false);
  }

  const opciones: OptionsNavbar[] = [
    {
      path: '/',
      name: 'Home',
      img: (
        <svg
          width='40'
          height='40'
          viewBox='0 0 67 67'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M60.0042 16.0158L40.856 2.61872C35.6368 -1.03806 27.6252 -0.838596 22.6055 3.05088L5.95057 16.049C2.62623 18.642 0 23.961 0 28.1495V51.0874C0 59.5645 6.88138 66.4791 15.3584 66.4791H51.1947C59.6718 66.4791 66.5532 59.5977 66.5532 51.1207V28.5816C66.5532 24.0939 63.661 18.5755 60.0042 16.0158ZM35.7698 53.1818C35.7698 54.5447 34.6395 55.675 33.2765 55.675C31.9136 55.675 30.7833 54.5447 30.7833 53.1818V43.2087C30.7833 41.8458 31.9136 40.7155 33.2765 40.7155C34.6395 40.7155 35.7698 41.8458 35.7698 43.2087V53.1818Z'
            fill='white'
          />
        </svg>
      ),
    },
    {
      path: '/menu',
      name: 'Menu',
      img: (
        <svg
          width='40'
          height='35'
          viewBox='0 0 67 63'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            opacity='0.4'
            d='M33.275 8.77658V62.1163C32.7093 62.1163 32.1104 62.0164 31.6445 61.7502L31.5114 61.6837C25.1226 58.1898 13.9755 54.5296 6.75483 53.5646L5.78985 53.4315C2.59545 53.0322 0 50.0375 0 46.8431V6.64698C0 2.68726 3.22767 -0.30749 7.1874 0.0252597C14.1751 0.590935 24.7566 4.11809 30.6796 7.81161L31.5114 8.31073C32.0106 8.61021 32.6428 8.77658 33.275 8.77658Z'
            fill='white'
          />
          <path
            d='M66.55 6.68044V46.8433C66.55 50.0377 63.9546 53.0324 60.7602 53.4317L59.6621 53.5648C52.4082 54.5298 41.2278 58.2233 34.839 61.7505C34.4064 62.0167 33.874 62.1165 33.275 62.1165V8.77676C33.9072 8.77676 34.5395 8.61038 35.0386 8.31091L35.6043 7.94489C41.5272 4.21809 52.142 0.657661 59.1297 0.0587108H59.3293C63.2891 -0.274039 66.55 2.68744 66.55 6.68044Z'
            fill='white'
          />
          <path
            d='M19.1333 21.8871H11.6464C10.2821 21.8871 9.15076 20.7558 9.15076 19.3915C9.15076 18.0272 10.2821 16.8959 11.6464 16.8959H19.1333C20.4975 16.8959 21.6289 18.0272 21.6289 19.3915C21.6289 20.7558 20.4975 21.8871 19.1333 21.8871Z'
            fill='white'
          />
          <path
            d='M21.6289 31.8697H11.6464C10.2821 31.8697 9.15076 30.7383 9.15076 29.374C9.15076 28.0098 10.2821 26.8784 11.6464 26.8784H21.6289C22.9932 26.8784 24.1245 28.0098 24.1245 29.374C24.1245 30.7383 22.9932 31.8697 21.6289 31.8697Z'
            fill='white'
          />
        </svg>
      ),
    },
    {
      path: '/events',
      name: 'Eventos',
      img: (
        <svg
          width='40'
          height='39'
          viewBox='0 0 52 51'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M49.3156 50.58H9.32209C4.4523 50.58 0.5 46.6277 0.5 41.7579V1.76442C0.5 0.79987 1.29987 0 2.26442 0C3.22897 0 4.02884 0.79987 4.02884 1.76442V41.7579C4.02884 44.6751 6.40492 47.0512 9.32209 47.0512H49.3156C50.2801 47.0512 51.08 47.851 51.08 48.8156C51.08 49.7801 50.2801 50.58 49.3156 50.58Z'
            fill='white'
          />
          <path
            d='M9.32168 38.8167C8.92174 38.8167 8.49828 38.6756 8.16892 38.3933C7.43963 37.7581 7.34553 36.6524 7.98072 35.8996L18.779 23.2899C19.9552 21.9254 21.649 21.102 23.437 21.0314C25.2249 20.9843 26.9893 21.6431 28.2597 22.9134L30.4947 25.1484C31.0828 25.7365 31.8356 26.0188 32.6825 26.0188C33.5059 25.9953 34.2587 25.6189 34.7998 24.9837L45.5981 12.374C46.2333 11.6447 47.339 11.5506 48.0918 12.1858C48.8211 12.821 48.9152 13.9267 48.28 14.6795L37.4818 27.2892C36.3055 28.6537 34.6116 29.4771 32.8237 29.5477C31.0122 29.5947 29.2713 28.936 28.0009 27.6656L25.7895 25.4307C25.2014 24.8425 24.4251 24.5367 23.6017 24.5602C22.7783 24.5838 22.0254 24.9602 21.4844 25.5954L10.6862 38.2051C10.3098 38.605 9.81572 38.8167 9.32168 38.8167Z'
            fill='white'
          />
        </svg>
      ),
    },
    {
      path: '/gallery',
      name: 'Galeria',
      img: (
        <svg
          width='40'
          height='36'
          viewBox='0 0 68 64'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M61.0613 0H51.5979C47.51 0 45.0637 2.44631 45.0637 6.53423V15.9976C45.0637 20.0855 47.51 22.5318 51.5979 22.5318H61.0613C65.1492 22.5318 67.5955 20.0855 67.5955 15.9976V6.53423C67.5955 2.44631 65.1492 0 61.0613 0ZM61.7694 10.6543C61.3831 11.0406 60.8681 11.2337 60.3531 11.2337C59.8381 11.2337 59.3231 11.0406 58.9368 10.6543L58.3574 10.075V17.2851C58.3574 18.4117 57.4562 19.313 56.3296 19.313C55.203 19.313 54.3017 18.4117 54.3017 17.2851V10.075L53.7223 10.6543C52.9498 11.4269 51.6623 11.4269 50.8897 10.6543C50.1172 9.88182 50.1172 8.59429 50.8897 7.82177L54.9133 3.79822C55.0742 3.63728 55.2996 3.50853 55.5249 3.41196C55.5892 3.37978 55.6536 3.37978 55.718 3.34759C55.8789 3.28321 56.0399 3.25102 56.233 3.25102H56.4261C56.6515 3.25102 56.8446 3.28321 57.0699 3.37978H57.1343C57.3596 3.47634 57.5527 3.60509 57.7137 3.76604C57.7459 3.79822 57.7459 3.79822 57.7781 3.79822L61.8016 7.82177C62.5741 8.59429 62.5741 9.88182 61.7694 10.6543Z'
            fill='white'
          />
          <path
            opacity='0.4'
            d='M64.3767 21.7912V25.7503H0V21.0508C0 13.6797 5.98703 7.72485 13.3582 7.72485H45.0637V15.9973C45.0637 20.0852 47.51 22.5315 51.5979 22.5315H61.0613C62.3488 22.5315 63.4432 22.3062 64.3767 21.7912Z'
            fill='white'
          />
          <path
            d='M0 25.7507V49.7632C0 57.1344 5.98703 63.0892 13.3582 63.0892H51.0185C58.3896 63.0892 64.3767 57.1344 64.3767 49.7632V25.7507H0ZM19.313 52.3061H12.8753C11.5556 52.3061 10.4612 51.2117 10.4612 49.892C10.4612 48.5723 11.5556 47.4779 12.8753 47.4779H19.313C20.6327 47.4779 21.7271 48.5723 21.7271 49.892C21.7271 51.2117 20.6327 52.3061 19.313 52.3061ZM40.2354 52.3061H27.3601C26.0404 52.3061 24.946 51.2117 24.946 49.892C24.946 48.5723 26.0404 47.4779 27.3601 47.4779H40.2354C41.5551 47.4779 42.6495 48.5723 42.6495 49.892C42.6495 51.2117 41.5551 52.3061 40.2354 52.3061Z'
            fill='white'
          />
        </svg>
      ),
    },
  ];

  return (
    <section className='containerAll'>
      <section
        style={{ width: mouse ? '250px' : '70px' }}
        className='containerNabvar'
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
      >
        {opciones.map((element) => (
          <Link
            key={element.name}
            href={`/dashboard${element.path.toLowerCase()}`}
          >
            <button
              type='button'
              className={`${mouse ? 'openNavbar' : 'closeNavbar'} font-bold`}
            >
              {element.img}
              <h1>{element.name}</h1>
            </button>
          </Link>
        ))}
      </section>
    </section>
  );
}

export default Navbar;
