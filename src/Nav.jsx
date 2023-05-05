// import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="http://www.test.com">NASA POTW</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="http://www.test.com">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="http://www.test.com">More Pictures</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="http://www.test.com">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav;