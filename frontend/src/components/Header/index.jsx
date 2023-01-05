import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logout, reset } from "../../app/slices/authSlice";

function Header(props) {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logout());
    dispatch(reset());
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Dashboard
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {user && (
              <>
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/todos"
                  >
                    Todo
                  </NavLink>
                </li>
              </>
            )}
          </ul>
          <div className="d-flex">
            {!user && (
              <>
                <NavLink
                  className="nav-link me-3"
                  aria-current="page"
                  to="/login"
                >
                  Login
                </NavLink>
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/register"
                >
                  Register
                </NavLink>
              </>
            )}
            {user && (
              <button
                type="button"
                className="btn btn-link nav-link"
                onClick={handleLogout}
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
