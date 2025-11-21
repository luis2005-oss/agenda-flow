import PropTypes from 'prop-types';
import styles from './myTemplate.module.css';

function MyTemplate({ children, className = '' }) {
  return (
    <div className={`${styles.template} ${className}`}>
      {children}
    </div>
  );
}

MyTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export { MyTemplate };
