import { useContext } from 'react';
import ContextUserPage from '../../context/ContextUserPage';

import usersIMG from '../../images/users.svg'
import userIMG from '../../images/user.svg'
import cubeIMG from '../../images/cube.svg'
import marketIMG from '../../images/market.svg'

function UserPageStatus() {
    const contextUser = useContext(ContextUserPage)

    // console.log('render status')

    const {followers, following, public_repos, public_gists} = contextUser;

  return (
    <div className="page_user-status">
                <div className="page_user-status_item">
                    <div className="page_user-status_item-left">
                        <p>Followers</p>
                        <h3>{followers}</h3>
                    </div>
                    <div className="page_user-status_item-right">
                        <img src={usersIMG} alt="" />
                    </div>
                </div>

                <div className="page_user-status_item">
                    <div className="page_user-status_item-left">
                        <p>Following</p>
                        <h3>{following}</h3>
                    </div>
                    <div className="page_user-status_item-right">
                        <img src={userIMG} alt="" />
                    </div>
                </div>

                <div className="page_user-status_item">
                    <div className="page_user-status_item-left">
                        <p>Public Repos</p>
                        <h3>{public_repos}</h3>
                    </div>
                    <div className="page_user-status_item-right">
                        <img src={cubeIMG} alt="" />
                    </div>
                </div>

                <div className="page_user-status_item">
                    <div className="page_user-status_item-left">
                        <p>Public Gists</p>
                        <h3>{public_gists}</h3>
                    </div>
                    <div className="page_user-status_item-right">
                        <img src={marketIMG} alt="" />
                    </div>
                </div>
            </div>
  )
}

export default UserPageStatus