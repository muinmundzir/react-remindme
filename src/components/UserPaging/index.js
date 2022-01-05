import Button from '../Button'
import './UserPaging.css'

const UserPaging = () => {
  return (
    <section className="userpaging">
      <h2 className="userpaging__header">
        Download an app now and the various benefits you will get immediately
      </h2>
      <div className="userpaging__cta">
        <Button variant="userpaging__button button-inverse">
          Download App
        </Button>
        <Button variant="userpaging__button button-outline-inverse">
          About App
        </Button>
      </div>
    </section>
  )
}

export default UserPaging
