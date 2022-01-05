import Button from '../Button'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__description">
        <h1 className="description__header">Manage Schedule and Task Easy</h1>
        <p className="description__info">
          Create and organize schedule and task deadline become better, easy
          manage and certainly no longer lagging behind schedule of activities
          and task
        </p>
        <Button variant="hero__button button--fill">Download App</Button>
      </div>
      <img
        className="hero__image"
        src="./images/Hero Image.png"
        alt="App Illustration"
      />
    </section>
  )
}

export default Hero
