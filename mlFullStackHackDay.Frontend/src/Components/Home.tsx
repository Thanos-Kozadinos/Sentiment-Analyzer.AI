import { FC, useEffect, useRef, useState } from 'react';
import './Home.css';
import { addNewUser, getUsersDataAxios, updateUser,} from '../Services/Services';
import { INewUser, ISentence, IUpdateUser, IUser} from '../Services/Interfaces';
import { Gallery } from './Gallery';
import { AddUserForm } from './AddUserForm';
import { UpdateUserForm } from './UpdateUserForm';

const App: FC = () => {
  const defaultSentenceData: ISentence = {
    id: 0,
    text: "init",
    forecastedSentiment: true,
    probability: 0,
    realSentiment: true
  };
  const defaultUserData: IUser = {
    id: 0,
    name: 'init',
    sentences: [defaultSentenceData]
  }

  const [inputUsersData, setInputUsersData] = useState<IUser[]>([defaultUserData]);
  const [usersLength, setUsersLength] = useState<number>(1);
  const [enableUpdate, setEnableUpdate] = useState<boolean>(false);
  const [userToUpdate, setUserToUpdate] = useState<IUser>(defaultUserData);

  const loadUserData = async () => {
    const users = await getUsersDataAxios();
    setUsersLength(users.slice(-1)[0].id)
    setInputUsersData(users.reverse());

  }

  const addNewUsertoList = async (newUser: INewUser) => {
    const user = await addNewUser(newUser);
    const users = await getUsersDataAxios();
    setUsersLength(users.slice(-1)[0].id)
    setInputUsersData(users.reverse());
  }

  const updateUserToList = async (upUser: IUpdateUser) =>{
    const user = await updateUser(upUser);
    const users = await getUsersDataAxios();
    setInputUsersData(users.reverse());
  }

  const enableUpdateFunc = () => {
    setEnableUpdate(!enableUpdate)
  }
  const enableUpdateUser = (upUsr: IUser) => {
    setUserToUpdate(upUsr);
  }

  useEffect(() => {
    loadUserData();
  }, [])

  if (usersLength > 1) {
    return (
      <div>
        {enableUpdate ? <UpdateUserForm updateUserToList={updateUserToList} enableUpdateFunc={enableUpdateFunc} userToUpdate={userToUpdate}/>:
        <AddUserForm addNewUsertoList={addNewUsertoList} />
        }
        <div className='App-h3'>
          <h2>Names</h2>
          <h2>Sentences</h2>
          <h2>Sentiment</h2>
        </div>
        <div >
          <Gallery users={inputUsersData} usersLength={usersLength} enableUpdateFunc={enableUpdateFunc} enableUpdateUser={enableUpdateUser}/>
        </div>
      </div>
    )
  }
  return (
    <></>
  )
}

export default App
