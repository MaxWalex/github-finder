import { useContext } from 'react';
import UserResultsItem from './UserResultsItem';
import Context from '../../../context/Context';

import Loader from '../../Loader/Loader';

function UserResults() {

    const {users, isLoading} = useContext(Context)

  return (
    <>
        {isLoading ? <Loader /> :
        <div className="users">       
            {users.map(({login, id, avatar_url}) => {
                return <UserResultsItem key={id} login={login} avatarUrl={avatar_url} />
            })} 
        </div>
        }
    </>
  )
}

export default UserResults