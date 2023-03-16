import { FC, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { addNewUser, getUsersDataAxios, INewUser, ISentence, IUser, } from './Services/Services';
import { Gallery } from './Components/Gallery';
import { AddUserForm } from './Components/AddUserForm';

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
    // setUsersLength(users.length)
    // setInputUsersData(users.reverse());
    setInputUsersData(users);
  }

  const addNewUsertoList = async (newDev: INewUser) => {
    const newUser = await addNewUser(newDev);
    setInputUsersData([...inputUsersData, newUser])
  }

  
  useEffect(() => {
    loadUserData();
  }, [])
  
  if (usersLength > 0)
  {
    return (
      <div className="App">
        <h1>Sentiment_Analyzer.AI</h1>
        <AddUserForm addNewUsertoList={addNewUsertoList}/>
        <div >
          <Gallery users={inputUsersData} usersLength={usersLength}/>
        </div>
      </div>
    )
  }
  return (
    <div className="App">
      <h1>Sentiment_Analyzer.AI</h1>
    </div>
  )
}

export default App
