import user from 'user.json';
const { username, tag, location, avatar } = user;
const { followers, views, likes } = user.stats;

export default function Profile(props) {
  return (
    <div class="profile">
      <div class="description">
        <img src={avatar} alt="User avatar" class="avatar" />
        <p class="name">{username}</p>
        <p class="tag">@{tag}</p>
        <p class="location">{location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">{followers}</span>
          <span class="quantity">1000</span>
        </li>
        <li>
          <span class="label">{views}</span>
          <span class="quantity">2000</span>
        </li>
        <li>
          <span class="label">{likes}</span>
          <span class="quantity">3000</span>
        </li>
      </ul>
    </div>
  );
}
