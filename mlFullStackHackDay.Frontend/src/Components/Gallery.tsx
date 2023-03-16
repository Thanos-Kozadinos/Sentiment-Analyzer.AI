import React, { FC, useState } from 'react'
import { IUser, userRequest } from '../Services/Services'
import './Gallery.css';
import { SentenceCard } from './SentenceCard';
import { UserCard } from './UserCard';

type GalleryProps = {
  users: IUser[],
}

export const Gallery: FC<GalleryProps> = ({ users }) => {
  const [showSentences, setShowSentences] = useState<number>(1);

  const showSentencesOfUser = (devId: number) => {
    setShowSentences(devId);
  }

  return (
    <div className='Gallery'>
        <div>Names</div>
      <div >{users.map(user => <div>
        <div >
          <UserCard user={user} showSentencesOfUser={showSentencesOfUser} />
        </div>
      </div>

      )}</div>
      <div className='SentenceCard'>
        {/* <SentenceCard sentences={users[showSentences].sentences} /> */}
        <SentenceCard sentences={users[users.findIndex(u => u.id === showSentences)]?.sentences} />
      </div>
    </div>
  )
}