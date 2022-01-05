import './Features.css'

const Features = () => {
  return (
    <section className="features" id="features">
      <div className="features__card">
        <div className="card__icon">
          <img src="./images/uim_schedule.png" alt="schedule icon" />
        </div>
        <h2 className="card__header">Set a better deadline tasks</h2>
        <p className="card__description">
          You can make your duty deadlines better and more orderly
        </p>
      </div>
      <div className="features__card">
        <div className="card__icon">
          <img src="./images/uim_layer-group.png" alt="schedule icon" />
        </div>
        <h2 className="card__header">Manage the tasks so easily</h2>
        <p className="card__description">
          You can manage the deadlines and schedule become easy
        </p>
      </div>
      <div className="features__card">
        <div className="card__icon">
          <img src="./images/ri_notification-fill.png" alt="schedule icon" />
        </div>
        <h2 className="card__header">Wouldn't miss notifications</h2>
        <p className="card__description">
          Of course you will always get the tasks and schedule notifications
        </p>
      </div>
    </section>
  )
}

export default Features
