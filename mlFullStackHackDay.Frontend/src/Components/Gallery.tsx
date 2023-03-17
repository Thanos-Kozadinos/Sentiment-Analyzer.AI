import React, { FC, useEffect, useState } from 'react'
import { IUser } from '../Services/Services'
import './Gallery.css';
import { SentenceCard } from './SentenceCard';
import { UserCard } from './UserCard';

type GalleryProps = {
  users: IUser[],
  usersLength: number,
  enableUpdateFunc: () => void,
  enableUpdateUser: (upId: IUser) => void
}

export const Gallery: FC<GalleryProps> = ({ users ,usersLength, enableUpdateFunc, enableUpdateUser}) => {
  const [showSentences, setShowSentences] = useState<number>(usersLength);

  useEffect(() => {
    setShowSentences(usersLength);
  }, [usersLength])

  const showSentencesOfUser = (devId: number) => {
    setShowSentences(devId);
  }
  return (

    <div className='Gallery'>
      <div className='Gallery-UserCard'>
        {/* <h4>Names</h4> */}
        <div >{users.map(user => <div>
          <div >
            <UserCard user={user} showSentencesOfUser={showSentencesOfUser} enableUpdateFunc={enableUpdateFunc} enableUpdateUser={enableUpdateUser}/>
          </div>
        </div>

        )}</div>
      </div>
      <div className='Gallery-SentenceCard'>
        {/* <h4>Sentences</h4> */}
        <div >
          <SentenceCard sentences={users[users.findIndex(u => u.id === showSentences)]?.sentences} />
        </div>
      </div>
    </div>
  )
}