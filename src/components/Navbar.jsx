import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();
  const isAuth = localStorage.getItem("auth");

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">

      <div className="container">

        <Link className="navbar-brand fw-bold" to="/">
          🎓 StudentMS
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">

          <ul className="navbar-nav align-items-center">

            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/students">Students</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/add">Add Student</Link>
            </li>

            <li className="nav-item ms-3">
              {isAuth ? (
                <button
                  className="btn btn-danger btn-sm"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              ) : (
                <Link className="btn btn-success btn-sm" to="/login">
                  Login
                </Link>
              )}
            </li>

          </ul>

        </div>

      </div>

    </nav>

  )

}

export default Navbar;
