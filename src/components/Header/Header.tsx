import s from  './Header.module.css'


function Header (){
    return(
        <div className={s.header}>
            <img  src="https://miro.medium.com/max/855/0*Ui5MlPFZS4xYwTn2.jpg" alt="лого"/>
        </div>
    )
}

export default Header