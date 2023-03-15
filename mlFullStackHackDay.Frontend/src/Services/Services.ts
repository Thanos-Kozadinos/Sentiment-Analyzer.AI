import axios from 'axios';

export interface ISentence {
    Id: number,
    Text: string,
    ForecastedSentiment: boolean,
    RealSentiment: boolean 
}

export interface IUser {
    Id: number,
    Name: string,
    Sentences: ISentence[]
}
export type userRequest = {
    users: IUser[]
};

export const getUsersDataAxios = async () => {
    const response = await axios.get<userRequest>('http://localhost:5290/GetUsers');
    return  response.data;
};

export const getUsers = async () => {
    const response = await fetch('http://localhost:5290/GetUsers');
    const json = (await response.json()) as IUser[];
    return json;
  };
  
export {}