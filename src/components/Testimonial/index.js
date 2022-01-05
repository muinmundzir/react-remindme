import './Testimonial.css'

const Testimonial = () => {
  return (
    <section className="testimonial">
      <img
        className="testimonial__image"
        src="./images/Testimonial Img.png"
        alt="testimonial illustration"
      />
      <div className="testimonial__info">
        <h3 className="testimonial__header">What do they think</h3>
        <div className="testimonial__user">
          <img className="user__avatar" src="./images/Profile(1).png" alt="" />
          <div>
            <h4 className="user__name">Samantha Sench</h4>
            <p className="user__status">Student at university</p>
          </div>
        </div>
        <p className="testimonial__description">
          “ Hi, it’s Samantha. After using it made me a lot of benefits,
          starting with convenience of setting a deadline of tasks and schedule
          after that the app is very simple using. “
        </p>
      </div>
    </section>
  )
}

export default Testimonial
