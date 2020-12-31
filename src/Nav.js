import React ,{useEffect ,useState} from 'react';
import './Nav.css';

function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
   
        window.addEventListener("scroll", () => {
        
            if (window.scrollY > 100) {
                handleShow(true);
            }
            else {
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener('scroll');
        };
   
    }, []);
    return (
        <div className=  {(show ? "nav nav_black" : "nav")}>
            
            <img className="nav_logo" src="
            https://upload.wikimedia.org/wikipedia/commons/1/1f/Netflix.png"
             alt="Netflix Logo" />
            
            <img
                className="nav_avatar"
                src="https://assets.dryicons.com/uploads/icon/svg/8841/63a0a827-681d-4160-963c-efdbdbfc0c46.svg"
            />
        </div>
    )
}

export default Nav
