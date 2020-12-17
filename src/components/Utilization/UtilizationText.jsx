import React from 'react';

import './index.css';

const UtilizationText = (props) => {
    const { utilizationData } = props;
    const { available, regular, carpool } = utilizationData;
    const sum = Object.values(utilizationData).reduce((a, b) => a + b, 0);

    return <div className="utilization">
        <div className="utilization__header">
            Utilization({sum})
        </div>
        <div className="utilization__content">
            <div>
                Available: {available}
            </div>
            <div>
                Regular Rides: {regular}
            </div>
            <div>
                Carpool: {carpool}
            </div>
        </div>
    </div>;
};

export default UtilizationText;
