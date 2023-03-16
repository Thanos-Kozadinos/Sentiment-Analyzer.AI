import axios from 'axios';

export interface ISentence {
    id: number,
    text: string,
    forecastedSentiment: boolean,
    probability: number,
    realSentiment: boolean 
}

export interface IUser {
    id: number,
    name: string,
    sentences: ISentence[]
}

export interface INewUser {
    name: string,
    text: string
}

export const getUsersDataAxios = async () => {
    const response = await axios.get<IUser[]>('http://localhost:5290/api/GetUsers');
    return  response.data;
};

export const addNewUser = async (user: INewUser) => {
    const response = await fetch("http://localhost:5290/api/createUser", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "content-type": "application/json",
      },
    });
    const json = (await response.json()) as { user: IUser };
    return  json.user;
  };

  
export {}