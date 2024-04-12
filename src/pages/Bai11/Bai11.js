import { links, social } from "./bai11_data";
import logo from './logo.svg'
import './bai11.css';

const Bai11 = () => {
    return (
        <div className="wrapper-bai11">
            <nav className="navBar">
                <div className="nav_header">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="links_container">
                    <ul className="links_container">
                        {links.map((link, index) => {
                            return (
                                <li key={index}>
                                    <a href={link.url} className="link_url">{link.text}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>    
                <div className="social_icons">
                    <ul className="social_icons">
                        {social.map((icon, index) => {
                            return (
                                <li key={index}>
                                    <a href={icon.url}>{icon.icon}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>        
            </nav>
        </div>
    )
}

export default Bai11;