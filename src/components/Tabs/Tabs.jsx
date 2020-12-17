import React, { useState } from "react";

import Tab from "./Tab";
import './index.css';

const Tabs = (props) => {
    const { children } = props;
    const [selectedTab, selectTab] = useState(children[0].props.label);

    const handleClick = (tab) => {
        selectTab(tab);
    };

    return <div>
        <div className="tab__list">
            {children.map((child) => {
                const { label } = child.props;
                return <Tab
                    selectedTab={selectedTab}
                    key={label}
                    label={label}
                    onClick={handleClick}
                />
            })}
        </div>
        <div className="tab__content">
            {children.map((child) => {
                if (child.props.label !== selectedTab) return undefined;
                return child.props.children;
            })}
        </div>
    </div>
};

export default Tabs;
