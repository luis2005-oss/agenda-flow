import PropTypes from "prop-types";
import styles from './customLink.module.css'

function Link({href, text,children, onClick, className=''}) {
  return (
    <a 
      href={href}
      onClick={onClick}
      className={`${styles.link} ${className}`}
    >
      {children || text}
    </a>
  )
}

Link.PropTypes = {
  href : PropTypes.string.isRequired,
  text : PropTypes.string,
  children : PropTypes.node,
  onClick : PropTypes.func,
  className : PropTypes.string
}
export { Link }