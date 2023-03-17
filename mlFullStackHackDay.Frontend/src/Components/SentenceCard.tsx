import React, {FC} from 'react'
import { ISentence, IUser } from '../Services/Services'
import './SentenceCard.css';

type SentenceCardProps = {
    sentences: ISentence[],
  }
  
  export const SentenceCard: FC<SentenceCardProps> = ({ sentences}) =>{

    return(
      <div>
        {sentences?.map(s => 
        <div className='Gallery_SentenceCard-sentences'>
            <div className='Gallery_SentenceCard-sentences-text'>{s.text}</div>
            <div className='Gallery_SentenceCard-prediction'>
                <div className='Gallery_SentenceCard-Negative'>{s.forecastedSentiment?"Negative":"Positive"}</div>
                <div>{s.forecastedSentiment?Math.round(s.probability*100)+ "%":100 -Math.round(s.probability*100)+ "%"}</div>
            </div>
        </div>
        )}
      </div>
    )
  }