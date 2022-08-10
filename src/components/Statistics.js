export default function Statistics(props) {
  return (
    <section className="statistics">
      {props.title && <h2 className="title">{props.title}</h2>}
      <ul className="stat-list">
        {props.stats.map(el => (
          <li className="item" key={el.id}>
            <span className="label">{el.label}</span>
            <span className="percentage">{el.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
