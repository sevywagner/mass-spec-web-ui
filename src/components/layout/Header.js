import { Outlet, Link } from "react-router";
import styles from './header.module.css'

const Header = ({ children }) => {
    return (
        <>
            <header>
                <nav>
                    <Link to='/' className={styles.link}>Process Mass Val</Link>
                    <Link to='/graphs' className={styles.link}>Process Graphs</Link>
                </nav>
            </header>
            {children}
            <Outlet />
        </>
    );
}

export default Header;