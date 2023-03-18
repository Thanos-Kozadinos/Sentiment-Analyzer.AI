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