import { FC, useEffect, useRef, useState } from 'react'
import './Main.css'
import { addNewUser, getUsersDataAxios, INewUser, ISentence, IUser, } from '../Services/Services';
import { Gallery } from './Gallery';
import { AddUserForm } from './AddUserForm';


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

  useEffect(() => {
    loadUserData();
  }, [])

  if (usersLength > 1) {
    return (
      <div className="App">
          <AddUserForm addNewUsertoList={addNewUsertoList} />
          <div className='App-h3'>
            <h2>Names</h2>
            <h2>Sentences</h2>
            <h2>Sentiment</h2>
          </div>
          <div >
            <Gallery users={inputUsersData} usersLength={usersLength} />
          </div>
      </div>
    )
  }
  return (
<></>
  )
}

export default App
