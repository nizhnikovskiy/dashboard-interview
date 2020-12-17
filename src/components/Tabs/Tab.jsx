import React from "react";

import './index.css';

const Tab = (props) => {
    const { label, onClick, selectedTab } = props;
    return <div className={`tab-item ${selectedTab === label ? 'tab-item_active' : ''}`} onClick={() => onClick(label)}>
        {label}
    </div>
};

export default Tab;
