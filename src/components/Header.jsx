import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header >    
    <nav className="navbar navbar-expand-lg  text-secondary">
        <div className="container">
        <Link to="" className="navbar-brand">Poll Now</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
         data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Create-Poll</Link></li>
            <li className="nav-item" ><Link className="nav-link" to="/view-poll-list">View-Poll</Link></li>
            <li className="nav-item" ><Link className="nav-link" to="/vote">Vote</Link></li>
        </ul>
    </div>
    </div>
    </nav>

</header>

  )
}

export default Header
