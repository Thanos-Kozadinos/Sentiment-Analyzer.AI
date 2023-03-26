import { FC, SyntheticEvent, useEffect, useRef, useState } from 'react';
import { getPredictionAxios } from '../Services/Services';

export const SinglePrediction: FC = () => {
    const [text, setText] = useState<string>("");
    const [prediction, setPrediction] = useState<string>("");

    const predictionResponse = async (text: string) => {
        return await getPredictionAxios(text);
    }

    const onFormSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        const predictionRes = await predictionResponse(text);
        setPrediction(predictionRes);
    }
    // console.log(prediction);

    useEffect(() => {
      }, [])
    return (
        <div>
            <form className='add-dev-form' onSubmit={onFormSubmit}>
                <input className='AddUserForm-sentence' onChange={(e) => {
                    setText(e.target.value);
                }} placeholder='Enter sentence for sentiment analysis' type="text" />
                <button className='AddUserForm-buton'>SEND</button>
            </form>
            <p className='AddUserForm-sentence' id='single prediciton'>{prediction}</p>
        </div>
    )
}