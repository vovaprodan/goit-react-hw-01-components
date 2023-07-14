import PropTypes from 'prop-types';
import css from './FriendListItem.module.css'

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return <li className={css.item}>
    <span className={`${css.status} ${isOnline ? css.true : css.false}`}></span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
</li>
}

FriendListItem.prototype = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool 
}