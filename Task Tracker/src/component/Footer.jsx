import {Link} from 'react-router-dom';
const Footer = () => {
    return (
        <footer>
            <p>Task Tracker &copy; 2023 by Ermias Sintayehu</p>
            <Link to='/about'>About</Link>
        </footer>
    )
}
export default Footer