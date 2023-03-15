import { FC, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { getUsers, getUsersDataAxios, ISentence, IUser, userRequest } from './Services/Services';

const App: FC = () => {
  const defaultSentenceData: ISentence = {
    Id: 0,
    Text: "init",
    ForecastedSentiment: true,
    RealSentiment: true
  };
  const defaultUserData: IUser = {
    Id: 0,
    Name: 'init',
    Sentences: [defaultSentenceData]
}
  
  const defaultUsersData: userRequest = {
    users: [defaultUserData]
  };

  const [inputUsersData2, setInputUsersData2] = useState<userRequest>(defaultUsersData);
  const [users, setInputUsersData] = useState<IUser[]>([]);

  const loadUserData = async () => {
    const users = await getUsers();
    // console.log(users);
    setInputUsersData(users);
    const users2 = await getUsersDataAxios()
    // console.log(users2);
    setInputUsersData2(await getUsersDataAxios());
  }

  useEffect(() => {
    loadUserData();
  }, [])
  // console.log(users);
  // console.log(inputUsersData2);
  const thanos = inputUsersData2.users[0].Name;
  console.log(thanos)
  return (
    <div className="App">
      <div> TEST</div>
      <h1>Sentiment_Analyzer.AI</h1>
      <div></div>
      {/* <div>{inputUsersData.Users?.map(u => <div>u.Name</div>)}</div> */}
      {/* <div>{inputUsersData.Users[0].Name}</div> */}
      {/* <div>{users[0].Name}</div> */}
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

    </div>
  )
}

export default App
