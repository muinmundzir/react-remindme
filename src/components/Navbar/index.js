import Button from '../Button'
import './Navbar.css'

const MENU = [
  { name: 'Home', href: 'home', active: true },
  { name: 'Features', href: 'features', active: false },
  { name: 'About Us', href: 'about', active: false },
]

const Navbar = () => {
  return (
    <nav className="nav" id="home">
      <img className="nav__logo" src="./images/Logo.png" alt="RemindMe icon" />
      <ul className="nav__menu">
        {MENU.map((item) => {
          return (
            <li key={item.name}>
              <a
                className={`menu__item ${item.active ? 'active' : ''}`}
                href={`#${item.href}`}
              >
                {item.name}
              </a>
            </li>
          )
        })}
      </ul>
      <Button variant="nav__button button--outline">About App</Button>

      <button className="nav__hamburger">
        <img
          src="./svg/radix-icons_hamburger-menu.svg"
          alt="hamburger menu icon"
        />
      </button>
    </nav>
  )
}

export default Navbar
