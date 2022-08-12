import PropTypes from 'prop-types';
import s from './friendList.module.css';

export default function FriendListItem({ props }) {
  return props.map(({ id, avatar, name, isOnline = false }) => (
    <li className={s.item} key={id}>
      <span className={isOnline ? s.online : s.offLine}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  ));
}

FriendListItem.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool,
    })
  ),
};
