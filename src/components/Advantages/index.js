import './Advantages.css'

const Advantages = () => {
  return (
    <section className="advantages">
      <div className="advantages__item">
        <img
          className="advantages__image"
          src="./images/Image.png"
          alt="advantages illustration"
        />
        <div className="advantages__info">
          <h2 className="info__header">
            Set up task and schedule with a best features
          </h2>
          <p className="info__description">
            The best features makes you better, with the latest technology to
            meet your needs. Of course, with such features as organizing
            schedules and leading assignments, it will make you easier, So get
            the application now !
          </p>
        </div>
      </div>
      <div className="advantages__item">
        <img
          className="advantages__image"
          src="./images/Image-2.png"
          alt="advantages illustration"
        />
        <div className="advantages__info">
          <h2 className="info__header">
            Get the highest priority application notification
          </h2>
          <p className="info__description">
            The best feature makes you better, with the latest technology to
            meet your needs. Of course, with such features as organizing
            schedules and leading assignments, it will make you easier, So get
            the application now !
          </p>
        </div>
      </div>
    </section>
  )
}

export default Advantages
