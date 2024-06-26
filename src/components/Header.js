import React, {useState, useContext} from 'react'
import Menu from './svg/bars-solid.svg'
import Close from './svg/times-solid.svg'
import Cart from './svg/cart.svg'
import {Link} from 'react-router-dom'
import {DataContext} from './DataProvider'

export default function Header() {
    const [menu, setMenu] = useState(false)
    const value = useContext(DataContext)
    const [cart] = value.cart

    const toggleMenu = () =>{
        setMenu(!menu)
    }

    const styleMenu = {
        left: menu ? 0 : "-100%"
    }
    const click = ()  => {
        var Home =  document.getElementById('a');
        var product = document.getElementById('b');
        var About = document.getElementById('c');
        var Contact = document.getElementById('d');
        var login = document.getElementById('e');
        var title = document.getElementById('f');
        
        

        Home.addEventListener('click',function() {
            Home.classList.add('a');
            product.classList.remove('a');
            About.classList.remove('a');
            Contact.classList.remove('a');
            login.classList.remove('a');
        })
        product.addEventListener('click',function() {
            Home.classList.remove('a');
            product.classList.add('a');
            About.classList.remove('a');
            Contact.classList.remove('a');
            login.classList.remove('a');
        })
        About.addEventListener('click',function() {
            Home.classList.remove('a');
            product.classList.remove('a');
            About.classList.add('a');
            Contact.classList.remove('a');
            login.classList.remove('a');
        })
        Contact.addEventListener('click',function() {
            Home.classList.remove('a');
            product.classList.remove('a');
            About.classList.remove('a');
            Contact.classList.add('a');
            login.classList.remove('a');
        })
        login.addEventListener('click',function() {
            Home.classList.remove('a');
            product.classList.remove('a');
            About.classList.remove('a');
            Contact.classList.remove('a');
            login.classList.add('a');
        })
        title.addEventListener('click',function() {

            Home.classList.add('a');
            product.classList.remove('a');
            About.classList.remove('a');
            Contact.classList.remove('a');
            login.classList.remove('a');
            
        })
        
          
    }
    return (
        <header>
            <div className="menu" onClick={toggleMenu}>
                <img src={Menu} alt="" width="30" />
            </div>

            <div className="logo">
                <h1><Link id="f" to="/Home" onClick={click}>HaiCute</Link></h1>
            </div>
            <ul style={styleMenu} >
                <li className="nav-item is-active"><Link to="/Home"  onClick={click} id="a">Trang chủ</Link></li>
                <li className="nav-item"><Link to="/products" onClick={click} id="b">Sản phẩm</Link></li>
                <li className="nav-item"><Link to="/About" onClick={click} id="c"> Giới thiệu </Link></li>
                <li className="nav-item"><Link to="/Contact" onClick={click} id="d">Địa chỉ</Link></li>
                <li className="nav-item"><Link to="/Login" onClick={click} id="e">Đăng nhập/Đăng ký</Link></li>
                
                <li onClick={toggleMenu}>
                    <img src={Close} alt="" width="30" className="menu" />
                </li>
            </ul>

            <div className="cart-icon">
                <span>{cart.length}</span>
                <Link to="/cart">
                    <img src={Cart} alt="" width="30" />
                </Link>
            </div>
            
      </header>
    )
}
