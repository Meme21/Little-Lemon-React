import logo from '../icons_assets/logo.svg';
const Header = () => {
    return (
    <header className="App-header">
        <img src={logo}/>
        <ul>
            <li><a href=''>Home</a></li>
            <li><a href=''>About</a></li>
            <li><a href=''>Menu</a></li>
            <li><a href=''>Reservations</a></li>

        </ul>
    </header>
    )
 }

 export default Header;