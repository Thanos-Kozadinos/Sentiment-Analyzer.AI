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
export type userRequest = {
    users: IUser[]
};

export const getUsersDataAxios = async () => {
    const response = await axios.get<IUser[]>('http://localhost:5290/api/GetUsers');
    return  response.data;
};

  
export {}