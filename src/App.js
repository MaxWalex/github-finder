import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Hedaer';
import Main from './components/Main/Main';
import UserPage from './components/UserPage/UserPage';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

import useGitHubAPI from './services/useGitHubAPI';

import Context from './context/Context';

import './App.css';

function App() {

  const [searchText, setSerchText] = useState('')
  const [cleanUsers, setCleanUsers] = useState(false)
  const [error, setError] = useState(false)
  const [users, setUsers] = useState([])
  const [isLoading, setLoading] = useState(true)

  const { getAllUsers, getSearchUser } = useGitHubAPI()

  useEffect(() => {
      setLoading(true)

      setAllUsers()
  }, [])

  const setAllUsers = () => {
    setError(false)

    getAllUsers()
    .then(data => setUsers(data))
    .catch(err => {
        console.error(err)
        alert('Something went wrong!')
    })
    .finally(() => setLoading(false))
  }

  const handleClickSearch = (e, name) => {
    e.preventDefault()

    if (name.length !== 0) {
      setLoading(true)
      setError(false)
      
      getSearchUser(name)
        .then(data => setUsers([...data.items]))
        .catch(err => {
          console.error(err)
          alert('Something went wrong!')
        })
        .finally(() => {
          setLoading(false)
          setCleanUsers(true)
        })
    } else setError(true)
  }

  const handleClickClear = e => {
    e.preventDefault()
    setLoading(true)

    setSerchText('')
    setCleanUsers(false)
    setAllUsers()
  }

  const contextValue = {
    users,
    isLoading,
    searchText,
    cleanUsers,
    error,
    setLoading,
    setSerchText,
    handleClickSearch,
    handleClickClear,
  }
  
  return (
    <Context.Provider value={contextValue}>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:loginUser" element={<UserPage />} />
        </Routes>

        <Footer />
      </Router>
    </Context.Provider> 
  );
}

export default App;
