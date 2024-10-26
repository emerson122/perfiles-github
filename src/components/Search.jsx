import { useState } from 'react';
import Loupe from './Loupe';

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState('');

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(username);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearchClick();
    }
  };
  return (
    <div className='flex items-center justify-center p-5'>
      <div className='rounded-lg bg-gray-200 p-1'>
        <div className='flex'>
          <div className='flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5'>
            <Loupe />
          </div>
          <input
            type='text'
            className='w-full max-w-[160px] bg-white pl-2 text-base font-semibold outline-0'
            placeholder='Escribe Aquí'
            value={username}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <button
            type='submit'
            className='bg-blue-500 p-2 rounded-tr-lg rounded-br-lg
            text-white font-semibold hover:bg-blue-800 transition-colors'
            onClick={handleSearchClick}
          >
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
