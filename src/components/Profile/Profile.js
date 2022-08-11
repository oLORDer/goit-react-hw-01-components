import PropTypes from 'prop-types';
import s from './profile.module.css';

export default function Profile(props) {
  const { username, tag, location, avatar, followers, views, likes } = props;
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} width="100" alt="User avatar" className={s.avatar} />
        <p className={s.name}>{username}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>
      <ul className={s.stats}>
        <li>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{followers}</span>
        </li>
        <li>
          <span className={s.label}>views</span>
          <span className={s.quantity}>{views}</span>
        </li>
        <li>
          <span className={s.label}>likes</span>
          <span className={s.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.defaultProps = {
  username: 'err',
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
