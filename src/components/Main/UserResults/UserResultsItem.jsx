import { Link } from 'react-router-dom';

import Context from '../../../context/Context';

function UserResultsItem({login, avatarUrl}) {

  return (
    <Context.Provider value={login}>
        <div className="user_item">
            <img src={avatarUrl} alt="" />
            <div className="user_item-info">
                <h3>{login}</h3>
                <Link to={`/user/${login}`}>Visit Profile</Link>
            </div>
        </div>
    </Context.Provider>
  )
}

export default UserResultsItem