import React from 'react';

import './index.css';
import UtilizationItem from "./UtilizationItem";

const Utilization = (props) => {
    const { utilizationData } = props;
    const { available, regular, carpool } = utilizationData;
    const sum = Object.values(utilizationData).reduce((a, b) => a + b, 0);
    const utilizationArr = [
        { sum, itemValue: available, selector:"available", label:"Available" },
        { sum, itemValue: regular, selector:"regular", label:"Regular rides" },
        { sum, itemValue: carpool, selector:"carpool", label:"Carpool" }
    ];

    return <div className="utilization">
        <div className="utilization__header">
            Utilization({sum})
        </div>
        <div className="utilization__content">
            {utilizationArr.map((props) => <UtilizationItem key={props.selector} {...props}/>)}
        </div>
    </div>;
};

export default Utilization;
