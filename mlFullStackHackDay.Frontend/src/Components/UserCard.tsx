import React, { FC } from 'react'
import { IUser, userRequest } from '../Services/Services'
import './UserCard.css';

type UserCardProps = {
    user: IUser,
    showSentencesOfUser: (devId: number) => void
}

export const UserCard: FC<UserCardProps> = ({ user, showSentencesOfUser }) => {

    return (

        <div className='Gallery_UserCard-user-name' onClick={() => { showSentencesOfUser(user.id) }}>
            {user.name}
        </div>

    )
}