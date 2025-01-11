import { Outlet, Link } from "react-router";
import styles from './header.module.css'

const Header = ({ children }) => {
    return (
        <>
            <header>
                <nav>
                    <Link to='/mass-spec-web-ui/' className={styles.link}>Process Mass Val</Link>
                    <Link to='/mass-spec-web-ui/graphs' className={styles.link}>Process Graphs</Link>
                </nav>
            </header>
            {children}
            <Outlet />
        </>
    );
}

export default Header;