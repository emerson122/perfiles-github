import Atropos from 'atropos/react';
import 'atropos/atropos.css';

const BackgroundPattern = () => (
  <svg
    id='patternId'
    width='200%'
    height='200%'
    xmlns='http://www.w3.org/2000/svg'
  >
    <defs>
      <pattern id='a' patternUnits='userSpaceOnUse' width='180' height='45'>
        <path
          d='m0 5.625 14.06 7.03 16.876-8.438L22.502 0H11.25l8.436 4.219-5.623 2.81L0 0ZM33.75 0l2.81 1.406L39.374 0Zm16.871 0h.002L19.686 15.469l16.877 8.44 30.939-15.47 5.625 2.811-30.94 15.47 16.875 8.438 14.063-7.031 5.623 2.812L50.621 45h11.25l28.131-14.063L73.126 22.5l-14.065 7.033-5.623-2.812L84.374 11.25 67.498 2.81 36.561 18.282l-5.625-2.814L61.87 0H50.62Zm22.505 0L90 8.437l14.06-7.03 5.626 2.812-30.938 15.469 16.874 8.438 30.939-15.472 5.625 2.815L73.126 45h11.25l59.061-29.532L126.56 7.03 95.622 22.499l-5.621-2.814 30.934-15.467L112.498 0H95.621l-5.623 2.813L84.376 0Zm50.624 0h-.002l44.998 22.5-5.623 2.813-14.063-7.032-16.876 8.44 30.941 15.468-2.813 1.407L157.499 45h11.249l5.628-2.813-30.938-15.468 5.624-2.813 14.064 7.033L180 22.501 134.998 0Zm33.749 45L126.56 29.532l-16.877 8.439L123.749 45h11.249l-14.062-7.03 5.625-2.812L146.248 45ZM146.248 0l11.25 5.625L168.748 0Zm16.875 8.44L180 16.877V11.25l-5.625-2.815L180 5.625V0ZM0 11.25v5.627l42.186 21.092-5.625 2.814-30.938-15.47L0 28.122v5.629l5.623-2.813L33.75 45h5.624l14.062-7.031zm0 22.502v5.625L11.251 45h11.251zm180-5.631v.002l-11.252 5.627L180 39.377Zm-75.939 12.662L95.621 45h16.877z'
          strokeWidth='1'
          stroke='none'
          fill='rgba(255, 255, 255, .1)'
        />
      </pattern>
    </defs>
    <rect
      width='800%'
      height='800%'
      transform='translate(0,0)'
      fill='url(#a)'
    />
  </svg>
);

const UserProfile = ({ user }) => {
  if (!user) {
    return null;
  }

  return (
    <section className='flex justify-center mt-5'>
      <Atropos className='text-gray-50 border-4 border-gray-50 rounded-2xl lg:w-1/2 lg:h-96 h-60 w-96 overflow-hidden relative'>
        {/* Fondo con patrón */}
        <div className='absolute inset-0 flex items-start justify-center'>
          <div className='h-full w-full overflow-hidden'>
            <BackgroundPattern />
          </div>
        </div>

        {/* Contenido del perfil */}
        <div className='flex items-center justify-between p-4 relative z-10'>
          {/* Sección izquierda con ID */}
          <div className='flex flex-col text-center'>
            <h2 className='text-lg font-semibold'>#{user.id}</h2>
          </div>

          {/* Sección derecha con imagen y login */}
          <div className='flex flex-col items-center relative'>
            <img
              src={user.avatar_url}
              alt='Avatar'
              className='lg:size-20 size-14 rounded-full border-2 border-gray-300 mb-2'
            />
            <h3 className='text-xs'>{user.login}</h3>
          </div>
        </div>

        {/* Información adicional */}
        <div className='flex flex-col items-center lg:w-full'>
          <h2 className='text-2xl lg:text-7xl font-bold px-4'>{user.name}</h2>
          <p className='pt-3 lg:text-lg'>
            Total de Repositorios: {user.public_repos}
          </p>
          <a
            href={user.html_url}
            className='hover:underline hover:decoration-blue-500 relative lg:self-end lg:mx-4 lg:pt-16 lg:text-lg'
            target='_blank'
            rel='noopener noreferrer'
          >
            Ver Perfil en GitHub
          </a>
        </div>
      </Atropos>
    </section>
  );
};

export default UserProfile;
