import React, { FC, SyntheticEvent, useEffect, useState } from 'react'
import { IUpdateUser, ISentence, IUser, } from '../Services/Services'
import './UpdateUserForm.scss';
// @use '/AddUserForm.scss';

type UpdateUserFormProps = {
    updateUserToList: (user: IUpdateUser) => void,
    enableUpdateFunc: () => void,
    userToUpdate: IUser
}

export const UpdateUserForm: FC<UpdateUserFormProps> = ({ updateUserToList,enableUpdateFunc ,userToUpdate}) => {
    const [sentimentText, setSentimentText] = useState('');

    const onFormSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        const upUser: IUpdateUser = {
            id: userToUpdate.id,
            text: sentimentText
        };
        updateUserToList(upUser);
        enableUpdateFunc();
    }
    return (
        <form className='add-dev-form' onSubmit={onFormSubmit}>
            <input className='UpdateUserForm-name' placeholder={`${userToUpdate.name}`} type="text" />
            <input className='UpdateUserForm-sentence' onChange={(e) => {
                setSentimentText(e.target.value);
            }} placeholder='Enter sentence for sentiment analysis' type="text" />
            {/* <button className='UpdateUserForm-buton' onClick={() => {
            enableUpdateFunc();
            } }>Update</button> */}
            <button className='UpdateUserForm-buton'>Update</button>
        </form>
    )
}
