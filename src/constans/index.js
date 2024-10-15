import { TiGroup } from 'react-icons/ti';
import { FaTv, FaTools, FaUser } from 'react-icons/fa';

export const menuItems = user => {
  return [
    { name: 'Misiones', icon: FaTv, path: '/admin/dashboard' },
    { name: 'Score', icon: TiGroup, path: '/admin/clan' },
    {
      name: user.rol.name === 'student' ? 'Profile' : 'Room',
      icon: user.rol.name === 'student' ? FaUser : FaTools,
      path: '/admin/room',
    },
  ];
};
