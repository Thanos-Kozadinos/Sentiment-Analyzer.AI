import React, { FC, SyntheticEvent, useState } from 'react'
import { INewUser} from '../Services/Interfaces'
import './AddUserForm.scss';

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
    return (
        <form className='add-dev-form' onSubmit={onFormSubmit}>
            <input className='AddUserForm-name' onChange={(e) => {
                setUserName(e.target.value);
            }} placeholder='Enter user name' type="text" />
            <input className='AddUserForm-sentence' onChange={(e) => {
                setSentimentText(e.target.value);
            }} placeholder='Enter sentence for sentiment analysis' type="text" />
            <button className='AddUserForm-buton'>Add</button>
        </form>
    )
}
