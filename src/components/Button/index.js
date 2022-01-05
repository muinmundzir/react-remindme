import './Button.css'

const Button = ({ children, variant, handleClick }) => {
  const buttonClass = `button ${variant}`
  return (
    <button className={buttonClass} onClick={handleClick}>
      {children}
    </button>
  )
}

export default Button
