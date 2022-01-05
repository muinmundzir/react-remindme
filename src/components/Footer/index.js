import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <img
        className="footer__logo"
        src="./images/Logo-lg.png"
        alt="RemindMe footer logo"
      />
      <div className="footer__item">
        <h5 className="footer__summary">
          Task deadlines and scheduling applications with various benefits and
          advantages
        </h5>
        <div className="footer__sitemap">
          <ul className="sitemap__list">
            <li className="sitemap__item">
              <a className="item__link" href="#home">
                Home
              </a>
            </li>
            <li className="sitemap__item">
              <a className="item__link" href="#features">
                Features
              </a>
            </li>
            <li className="sitemap__item">
              <a className="item__link" href="#about">
                About Us
              </a>
            </li>
          </ul>
          <ul className="sitemap__list">
            <li className="sitemap__item">Set Task Better</li>
            <li className="sitemap__item">Easy Manage</li>
            <li className="sitemap__item">Get Notification</li>
          </ul>
        </div>
        <h6 className="footer__info">Follow Us</h6>
        <div className="social-media-links">
          <img className="social-icons" src="./svg/uim_facebook-f.svg" alt="facebook icon" />
          <img className="social-icons" src="./svg/Vector.svg" alt="twitter icon" />
          <img className="social-icons" src="./svg/uim_linkedin-alt.svg" alt="linkedin icon" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
