import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import UserPageRepoItem from './UserPageRepoItem';
import useGitHubAPI from '../../services/useGitHubAPI';

function UserPageRepos() {
  
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)

  const { getUserRepos } = useGitHubAPI()

  const { loginUser } = useParams()
  
  useEffect(() => {
    getUserRepos(loginUser)
      .then(data => setRepos(data))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="page_user-repos">
        <h2>Latest Repositories</h2>
        <div className="user_repos">
          {loading ? <Loader /> :
            repos.map(repo => {
              return <UserPageRepoItem key={repo.id} repo={repo} />
            })
          }
        </div>
    </div>
  )
}

export default UserPageRepos