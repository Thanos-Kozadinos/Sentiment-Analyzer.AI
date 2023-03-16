import './Datasets.css'
const Datasets = () => {
    return (
        <div className="datasets">
            <h3 >Ensemble Machine Learning model: Logistic Regression, Support Vector Machines, Linear Regression</h3>
            <h3 >Metrics for ML model</h3>
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

    );
}

export default Datasets;

// *       Accuracy: 84.81%
// *       Area Under Curve:      92.34%
// *       Area under Precision recall Curve:  92.27%
// *       F1Score:  84.81%
// *       LogLoss:  .52
// *       LogLossReduction:  .48
// *       PositivePrecision:  .85
// *       PositiveRecall:  .85
// *       NegativePrecision:  .85
// *       NegativeRecall:  84.60%