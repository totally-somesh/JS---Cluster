import { NavLink } from "react-router-dom";

const MainHeaderNavBar = () => {

    return (
    <div>
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand" to="/home">
        Home
  </NavLink>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarText"
    aria-controls="navbarText"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/table">
          Table <span className="sr-only">(current)</span>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" href="/form">
          Form
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" href="#">
          Pricing
        </NavLink>
      </li>
    </ul>
    <span className="navbar-text">India India India</span>
  </div>
</nav>

    </div>
    )
}

export default MainHeaderNavBar;