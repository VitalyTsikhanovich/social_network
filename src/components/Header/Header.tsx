import s from  './Header.module.css'
import logo from '../common/assets/img/klipartz.com.png'


function Header (){
    return(
        <div className={s.header}>
            <img  src={logo} alt="logo"/>
        </div>
    )
}

export default Header