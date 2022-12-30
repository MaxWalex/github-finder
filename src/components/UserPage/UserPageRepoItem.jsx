import React from 'react';
import link from '../../images/link.svg';

function UserPageRepoItem({repo}) {
  return (
    <div className="user_repo">
      <div className="user_repo-items">
        <div className="user_repo-item" style={{backgroundColor: 'rgb(155 155 53)'}}>
          Fork: {repo.forks}
        </div>
        <div className="user_repo-item" style={{backgroundColor: '#3939bf'}}>
          Watchers: {repo.watchers}
        </div>
        <div className="user_repo-item" style={{backgroundColor: '#e15757'}}>
          Issue: {repo.open_issues}
        </div>
      </div>

      <div className="user_repo-top">
        <img src={link} alt="" />
        <a href={repo.html_url} target="_blank">{repo.name}</a>
      </div>

      {repo.description && <div className="user_repo-desc">
        {repo.description}
      </div>}
      
    </div>
  )
}

export default UserPageRepoItem