import React, {FC} from 'react'
import { IUser, userRequest } from '../Services/Services'

type GalleryProps = {
    users: IUser[],
  }
  
  export const Gallery: FC<GalleryProps> = ({ users}) =>{

    return(
        <div>{users[0].Name}</div>
    )
  }