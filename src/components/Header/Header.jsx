import { NavLink } from "react-router-dom"
import Logo from "../Logo/Logo"
import Button from "../ui-kit/Button/Button"
import style from './Header.module.css'

const Header = () => {
  return (
    <div className={style.header}>
      <Logo />
      <div className={style.content}>
        <nav>
          <NavLink to="/signin">Sign-In</NavLink>
          <NavLink to="/signup">Sign-Up</NavLink>
        </nav>
        <div className={style.buttons}>
          <Button text={'Log in'} />
          <Button text={'Sign up'} />
        </div>
      </div>
    </div>
  )
}
export default Header;
