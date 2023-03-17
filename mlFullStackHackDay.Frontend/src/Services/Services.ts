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

export interface IFile {
  id: number,
  text: string,
  realSentiment: boolean
}

export interface IUpdateUser {
  id: number,
  text: string
}

export const getUsersDataAxios = async () => {
  const response = await axios.get<IUser[]>('http://localhost:5290/api/GetUsers');
  return response.data;
};

export const getDataFromFileAxios = async () => {
  const response = await axios.get<IFile[]>('http://localhost:5290/api/GetDataFromFile');
  return response.data;
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
  return json.user;
};

export const updateUser = async (user: IUpdateUser) => {
  // const url = `{http://localhost:5290/api/updateUser/${user.id}}`;
  const url = "http://localhost:5290/api/updateUser";
  console.log(url)
  const response = await fetch(url, {
    method: "PUT",
    body: JSON.stringify(user),
    headers: {
      "content-type": "application/json",
    },
  });
  const json = (await response.json()) as { user: IUser };
  return json.user;
};


export { }