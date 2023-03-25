import React, { FC, useEffect, useState } from 'react'
import { IUser, } from '../Services/Interfaces';
import './UserCard.css';

type UserCardProps = {
    user: IUser,
    showSentencesOfUser: (devId: number) => void,
    enableUpdateFunc: () => void
    enableUpdateUser: (upId: IUser) => void
}

export const UserCard: FC<UserCardProps> = ({ user, showSentencesOfUser, enableUpdateFunc, enableUpdateUser }) => {
    const [showUpdate, setShowUpdate] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowUpdate(false)
        }, 4000);
      }, [showUpdate]);

    return (

        <div className='Gallery_UserCard-user-name-and-update' onClick={() => {
            showSentencesOfUser(user.id)
            setShowUpdate(!showUpdate)
        }}>
            <div className='Gallery_UserCard-user-name'>{user.name}</div>
            {
                showUpdate ? <button className='UserCard-updateBtn' onClick={() => {
                    //   deleteDev?.(person.id)

                    enableUpdateUser(user)
                    enableUpdateFunc();
                }}>Update</button> : null
            }
            {
                showUpdate ? <button className='UserCard-updateBtn' onClick={() => {
                    //   deleteDev?.(person.id)
                }}>Delete</button> : null
            }
        </div>

    )
}
