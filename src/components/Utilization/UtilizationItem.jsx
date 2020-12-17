import React from 'react';

import './index.css';

const UtilizationItem = (props) => {
    const { sum, itemValue, selector, label } = props;

    return <div className="utilization__item">
        <div className="utilization__item_header">
            {label}
        </div>
        <div className="utilization__item-content">
            <i className={`utilization__item_icon utilization__item_icon-${selector}`} />
            <div className="utilization__item-row">
                <div style={{width: `${itemValue / sum * 100}%`}} className={`utilization__item-filled utilization__item-filled_${selector}`} />
            </div>
            <span className="utilization__item_number">{ itemValue }</span>
        </div>
    </div>;
};

export default UtilizationItem;
