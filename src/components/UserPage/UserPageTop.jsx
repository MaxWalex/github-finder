import {useContext} from 'react';
import ContextUserPage from '../../context/ContextUserPage';

function UserPageTop() {
    const contextUser = useContext(ContextUserPage)

    const {avatar_url, name, login, html_url, location, blog} = contextUser;

  return (
    <div className="page_user-top">
        <div className="user_top-img" style={{
            backgroundImage: `url(${avatar_url})`
        }}>
            <div className="user_top-img_wrap">
                <div className="user_name">{name}</div>
                <div className="user_login">{login}</div>
            </div>
        </div>

        <div className="user_top-info">
            <div className="user_name-wrap">
                <h1 className="user_name">{name}</h1>
                
            </div>
            <a href={html_url} target="_blank">Visit github profile</a>

            <div className="user_top-about">
                <div className="user_top-location">
                    <p>Location</p>
                    <p>{location ? location : '-'}</p>
                </div>
                <div className="user_top-website">
                    <p>Website</p>
                    {
                        blog ? 
                        <a href={blog} target="_blank">{blog}</a> : '-'
                    }
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserPageTop