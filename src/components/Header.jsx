import '../style/header.css'
import menu from '../assets/Menu.png'

const Header = () => {
    return(
        <div className='header-container'>
            <div className='logo'>SCHOLA</div>
            <div className='hamburger'>
                <img src={menu} alt="hamburger menu"></img>
            </div>
        </div>
    )
}

export default Header;