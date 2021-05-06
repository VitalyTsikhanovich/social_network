import s from './Header.module.css'
import logo from '../common/assets/img/klipartz.com.png'
import {NavLink} from 'react-router-dom'
import {UsersPropsType} from "./HeaderContainer";


function Header(props: UsersPropsType) {
    return (
        <header className={s.header}>

            <img src={logo} alt="logo"/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div> {props.login}  <button onClick={props.logout}> Log out</button> </div>
                :<NavLink to={'/login'}>Login </NavLink>}
                {/*{props.isAuth ? props.email*/}
                {/*:<NavLink to={'/login'}>Email </NavLink>}*/}

            </div>
        </header>


    )
}

export default Header