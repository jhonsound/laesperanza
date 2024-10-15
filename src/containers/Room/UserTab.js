import CardTable from 'components/Cards/CardTable';
import { LoadingComponent } from 'components/Loading/Loading';
import Podium from 'components/Podium/Podium';
import PodiumStep from 'components/Podium/PodiumStep';
import PodiumData from 'dummy/PodiumData';
import { motion } from "framer-motion";
import useFetchQuery from 'hooks/queries/useFetchQuery';
import { useContext, useEffect, useState } from 'react';
import { toast } from 'sonner';
import { AuthContext } from 'store/authContext';
import { getKeys } from 'utils/getKeys';

export const UserList = ({ onEdit }) => {
  const [headers, setHeaders] = useState([])
  const { data: users, error, isPending } = useFetchQuery('https://la-esperanza-backe-end.onrender.com/users');
  
  useEffect(() => {
    if (error) {
      toast.error(error.response.data.message)
    }
  }, [users, error]);

  useEffect(() => {
    setHeaders([...getKeys(users)])
  }, [users])

  const sortedUsers = users.sort((a, b) => b.score - a.score)
  const top3Users = sortedUsers.slice(0, 3)

  return (
    <div className='flex flex-wrap items-center'>
      {isPending && <LoadingComponent />}
      <div className='w-full px-2 flex items-center justify-center h-full'>
        <PodiumStep winners={top3Users} type='student'/>
      </div> 
      <div className='w-full overflow-y-auto max-h-screen'>
        <CardTable headers={headers} data={sortedUsers} color="dark" title="Tabla de Usuarios" onEdit={onEdit} />
      </div>

    </div>
  )
}