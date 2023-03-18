import { useEffect, useState } from 'react';
import { getDataFromFileAxios } from '../Services/Services';
import { IFile} from '../Services/Interfaces'
import './Datasets.css'

const Datasets = () => {

    const [inputFileData, setInputFileData] = useState<IFile[]>([]);
    const loadFileData = async () => {
        const files = await getDataFromFileAxios();
        console.log(files);
        setInputFileData(files)
    }

    useEffect(() => {
        loadFileData();
    }, [])

    return (
        <div className="datasets">
            <h3 > Machine Learning model: Logistic Regression</h3>
            <h3 >Metrics for ML model</h3>
            <div>
                <table className='datasets-table'>
                    <tr>
                        <th>Accuracy</th>
                        <th>84.81%</th>
                    </tr>
                    <tr>
                        <th>F1Score</th>
                        <th>84.81%</th>
                    </tr>
                    <tr>
                        <th>PositivePrecision</th>
                        <th>85.10%</th>
                    </tr>
                    <tr>
                        <th>NegativePrecision</th>
                        <th>84.60%</th>
                    </tr>
                </table>
            </div>
            <div >
                <h2>IMDB Dataset of 50K Movie Reviews</h2>
                <div>
                    {inputFileData.map(d =>
                        <div className='Datasets-files'>
                            <div className='Datasets-files-text'>{d.text}</div>
                            <div className='Datasets-files-sentiment'>{d.realSentiment ? "True" : "False"}</div>
                        </div>
                    )}
                </div>

            </div>
        </div>

    );
}

export default Datasets;
