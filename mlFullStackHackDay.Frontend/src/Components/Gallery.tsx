import React, { FC, useEffect, useState } from 'react'
import { IUser } from '../Services/Services'
import './Gallery.css';
import { SentenceCard } from './SentenceCard';
import { UserCard } from './UserCard';

type GalleryProps = {
  users: IUser[],
  usersLength: number
}

export const Gallery: FC<GalleryProps> = ({ users ,usersLength}) => {
  const [showSentences, setShowSentences] = useState<number>(usersLength);

  const showSentencesOfUser = (devId: number) => {
    setShowSentences(devId);
  }
console.log(users);
  return (

    <div className='Gallery'>
      <div>
        <h4>Names</h4>
        <div >{users.map(user => <div>
          <div >
            <UserCard user={user} showSentencesOfUser={showSentencesOfUser} />
          </div>
        </div>

        )}</div>
      </div>
      <div>
        <h4>Sentences</h4>
        <div className='SentenceCard'>
          <SentenceCard sentences={users[users.findIndex(u => u.id === showSentences)]?.sentences} />
        </div>
      </div>
    </div>
  )
}