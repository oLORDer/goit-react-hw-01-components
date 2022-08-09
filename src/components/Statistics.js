export default function Statistics(props) {
  return (
    <section class="statistics">
      {props.title && <h2 class="title">{props.title}</h2>}
      <ul class="stat-list">
        {props.stats.map(el => (
          <li class="item" key={el.id}>
            <span class="label">{el.label}</span>
            <span class="percentage">{el.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
