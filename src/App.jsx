import { useState } from 'react';
import { getUserByName } from './api/userGitHub';
import Header from './components/Header';
import Search from './components/Search';
import UserProfile from './components/UserProfile';
import Spinner from './components/Spinner';

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUser = async (username) => {
    setLoading(true);
    setError(null);
    setUser(null);

    try {
      const userData = await new Promise((resolve) =>
        setTimeout(async () => {
          resolve(await getUserByName(username));
        }, 1000)
      );

      if (userData) {
        setUser(userData);
        setError(null);
      } else {
        setError('Usuario no encontrado :(');
      }
    } catch (error) {
      setError('Error fetching user data');
    } finally {
      setLoading(false);
    }
  };
  return (
    <main>
      <Header />
      <Search onSearch={fetchUser} />
      {error && (
        <p className='text-3xl lg:text-7xl text-gray-50 text-center'>{error}</p>
      )}
      {loading && <Spinner />}
      <UserProfile user={user} />
    </main>
  );
}

export default App;
