import { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import useGitHubAPI from "../../services/useGitHubAPI";

import UserPageContent from "./UserPageContent";
import Loader from "../Loader/Loader";
import ContextUserPage from "../../context/ContextUserPage";

import './userpage.css';

function UserPage() {

    const [dataUser, setDataUser] = useState([])
    const [isLoading, setLoading] = useState(true)
    const { getUser } = useGitHubAPI()

    const { loginUser } = useParams()

    useEffect(() => {
        setLoading(true)

        getUser(loginUser)
            .then(data => setDataUser(data))
            .catch(err => {
                console.error(err)
                alert('Something went wrong!')
            })
            .finally(() => setLoading(false))

    }, [])

    const styleLoading = {textAlign: isLoading ? 'center': 'left'}

  return (
    <ContextUserPage.Provider value={dataUser}>
        <div className="page_user" style={styleLoading}>
            {isLoading ? <Loader /> : 
                <div className="container">
                    <Link to="/">Back To Search</Link>

                    <UserPageContent />
                </div>
            }
        </div>
    </ContextUserPage.Provider>
  )
}

export default UserPage;