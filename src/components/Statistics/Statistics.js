import PropTypes from 'prop-types';
import s from './statistics.module.css';

export default function Statistics(props) {
  return (
    <section className={s.statistics}>
      {props.title && <h2 className={s.title}>{props.title}</h2>}
      <ul className={s.statList}>
        {props.stats.map(el => (
          <li
            className={s.item}
            key={el.id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className={s.label}>{el.label}</span>
            <span className={s.percentage}>{el.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

Statistics.propTypes = {
  // username: PropTypes.string.isRequired,
};
