import { FC, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { getUsersDataAxios, ISentence, IUser, userRequest } from './Services/Services';
import { Gallery } from './Components/Gallery';

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

  const defaultUsersData: userRequest = {
    users: [defaultUserData]
  };

  const [inputUsersData, setInputUsersData] = useState<IUser[]>([defaultUserData]);

  const loadUserData = async () => {
    const users2 = await getUsersDataAxios()
    setInputUsersData(await getUsersDataAxios());
  }

  
  useEffect(() => {
    loadUserData();
  }, [])
 
  return (
    <div className="App">
      <h1>Sentiment_Analyzer.AI</h1>
      <div >
        <Gallery users={inputUsersData}/>
        {/* <div className='testClass'>{inputUsersData.map(u => <div>
          <div>{u.name}</div>
          <div>{u.sentences.map(s => <div>{s.text}</div>)}</div>
          </div>
        
        )}</div> */}
      </div>
    </div>
  )
}

export default App
