import s from './friendList.module.css';

export default function FriendList({ props }) {
  return (
    <ul className={s.friendList}>
      {props.map(({ id, avatar, name, isOnline = false }) => (
        <li className={s.item} key={id}>
          <span className={isOnline ? s.online : s.offLine}></span>
          <img className="avatar" src={avatar} alt="User avatar" width="48" />
          <p className="name">{name}</p>
        </li>
      ))}
    </ul>
  );
}
