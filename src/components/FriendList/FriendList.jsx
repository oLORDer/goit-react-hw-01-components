import PropTypes from 'prop-types';
import s from './friendList.module.css';
import FriendListItem from './FriendListItem';

export default function FriendList({ props }) {
  return (
    <ul className={s.friendList}>
      <FriendListItem props={props} />
    </ul>
  );
}

FriendList.propTypes = {
  props: PropTypes.array,
};
