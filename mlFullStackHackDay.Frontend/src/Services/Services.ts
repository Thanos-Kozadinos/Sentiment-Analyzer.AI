import axios from 'axios';
import {IFile, INewUser, ISentence, IUpdateUser, IUser,} from './Interfaces'

// https://newsentimentaiapi.azurewebsites.net/

export const getUsersDataAxios = async () => {
  const response = await axios.get<IUser[]>('https://newsentimentaiapi.azurewebsites.net/api/GetUsers');
  // const response = await axios.get<IUser[]>('http://localhost:5290/api/GetUsers');
  return response.data;
};

export const getDataFromFileAxios = async () => {
  // const response = await axios.get<IFile[]>('http://localhost:5290/api/GetDataFromFile');
  const response = await axios.get<IFile[]>('https://newsentimentaiapi.azurewebsites.net/api/GetDataFromFile');
  return response.data;
};

export const addNewUser = async (user: INewUser) => {
  // const response = await fetch("http://localhost:5290/api/createUser", {
    const response = await fetch("https://newsentimentaiapi.azurewebsites.net/api/createUser", {
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
  // const url = "http://localhost:5290/api/updateUser";
  const url = "https://newsentimentaiapi.azurewebsites.net/api/updateUser";

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

