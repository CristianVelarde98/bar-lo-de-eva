export default function Location() {
  return (
    <div className='w-full h-full bg-black flex flex-col justify-center items-center'>
      <figure className='w-full flex justify-center items-center h-3/6'>
        <iframe
          title='Restaurant Location'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13130.02747332929!2d-58.47650879430838!3d-34.64190011336645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccbeabf75a487%3A0x1dd256a7c880b9ac!2sLo%20de%20Eva!5e0!3m2!1ses-419!2spe!4v1683461507197!5m2!1ses-419!2spe'
          loading='lazy'
          className='border w-full sm:w-5/6 h-full'
        />
      </figure>
      <div className='w-full h-1/6 bg-white flex items-center justify-center m-6'>
        UBICANOS ACA!
      </div>
    </div>
  );
}
