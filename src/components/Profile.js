export default function Profile(props) {
  const { username, tag, location, avatar, followers, views, likes } = props;
  return (
    <div class="profile">
      <div class="description">
        <img src={avatar} width="100" alt="User avatar" class="avatar" />
        <p class="name">{username}</p>
        <p class="tag">@{tag}</p>
        <p class="location">{location}</p>
      </div>
      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{followers}</span>
        </li>
        <li>
          <span class="label">views</span>
          <span class="quantity">{views}</span>
        </li>
        <li>
          <span class="label">likes</span>
          <span class="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
}
