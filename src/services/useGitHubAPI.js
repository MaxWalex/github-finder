const useGitHubAPI = () => {

    
    const _baseUrl = 'https://api.github.com';
    const _tokenGitHub = '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';
    const headers = {
        Authorization: `token ${_tokenGitHub}`
    };

    // console.log(process.env.REACT_APP_GITHUB_TOKEN)

    const getAllUsers = async () => {
        const response = await fetch(`${_baseUrl}/users`, {headers})
        const data = await response.json()

        return data;
    }

    const getUser = async login => {
        const response = await fetch(`${_baseUrl}/users/${login}`, {headers})
        const data = await response.json()

        return data;
    }

    const getUserRepos = async login => {
        const response = await fetch(`${_baseUrl}/users/${login}/repos`, {headers})
        const data = await response.json()

        return data;
    }

    const getSearchUser = async (login) => {
        const response = await fetch(`${_baseUrl}/search/users?q=${login}`, {headers})
        const data = await response.json()

        return data;
    }
    
    return {
        getUser,
        getAllUsers,
        getUserRepos,
        getSearchUser
    }
    
}

export default useGitHubAPI;