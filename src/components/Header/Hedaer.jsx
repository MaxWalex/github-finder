import {Link} from 'react-router-dom';

import logo from '../../images/logoGit.svg';

function Hedaer() {
  return (
    <header>
      <div className='container'>
          <Link to="/">
            <div className='logo'>
              <img src={logo} />
              <p>Github Finder</p>
            </div>
          </Link>

        <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </nav>
      </div>
    </header>
  )
}

export default Hedaer