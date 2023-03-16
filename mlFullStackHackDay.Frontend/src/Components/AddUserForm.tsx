import React, { FC, SyntheticEvent, useEffect, useState } from 'react'
import { INewUser, IUser, } from '../Services/Services'
import './AddUserForm.css';

type AddUserFormProps = {
    addNewUsertoList: (user: INewUser) => void
}

export const AddUserForm: FC<AddUserFormProps> = ({ addNewUsertoList }) => {
    const [userName, setUserName] = useState('');
    const [sentimentText, setSentimentText] = useState('');

    const onFormSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        const newUser: INewUser = {
            name: userName,
            text: sentimentText
        }
        addNewUsertoList(newUser)
    }
    useEffect(() => {
      }, [])

    return (
        <form className='add-dev-form' onSubmit={onFormSubmit}>
            <input onChange={(e) => {
                setUserName(e.target.value);
            }} placeholder='Enter user name' type="text" />
            <input onChange={(e) => {
                setSentimentText(e.target.value);
            }} placeholder='Enter sentence for sentiment analysis' type="text" />
            <button>Add</button>
        </form>
    )
}
