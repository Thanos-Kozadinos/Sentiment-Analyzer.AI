import axios from 'axios';

export interface ISentence {
    id: number,
    text: string,
    forecastedSentiment: boolean,
    realSentiment: boolean 
}

export interface IUser {
    id: number,
    name: string,
    sentences: ISentence[]
}
export type userRequest = {
    users: IUser[]
};

export const getUsersDataAxios = async () => {
    const response = await axios.get<IUser[]>('http://localhost:5290/GetUsers');
    return  response.data;
};

export const getUsers = async () => {
    const response = await fetch('http://localhost:5290/GetUsers');
    const json = (await response.json()) as IUser[];
    return json;
  };
  
export {}