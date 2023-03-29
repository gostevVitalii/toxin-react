import { NavLink } from "react-router-dom"
import Logo from "../Logo/Logo"
import s from './Header.module.css'

const Header = () => {
  return (
    <div className={s.header}>
      <Logo />
      <NavLink to="/signin">Sign-In</NavLink>
      <NavLink to="/signup">Sign-Up</NavLink>
    </div>
  )
}
export default Header;
