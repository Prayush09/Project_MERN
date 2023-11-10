import {Link} from 'react-router-dom';
function Nav(){
    return (
        <>
        <nav className="navbar bg-dark">
            <Link to="/" className="nav-logo">
                
            </Link>
            <div className='d-flex justify-content-between h-25 w-25'>
                <Link to="/sign-up">Sign Up</Link>
                <Link to="/sign-in">Sign In</Link>
            </div>

        </nav>
        </>
    )
}
export default Nav;