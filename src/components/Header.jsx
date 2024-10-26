const Header = () => {
  return (
    <header className='flex flex-col lg:flex-row items-center justify-center lg:mt-5 mt-10'>
      <h1 className='text-2xl lg:text-4xl font-bold text-gray-50 lg:mb-0 mb-5'>
        Buscador de Perfiles en <span>GitHub</span>
      </h1>
      <figure>
        <img src='/github.png' alt='' className='size-36' />
      </figure>
    </header>
  );
};

export default Header;
