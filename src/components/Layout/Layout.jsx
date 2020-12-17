import React from "react";

import './index.css';
import SideMenu from "../SideMenu/SideMenu";
import Tabs from "../Tabs/Tabs";
import Utilization from "../Utilization/Utilization";
import UtilizationText from "../Utilization/UtilizationText";

import data1 from "../../Mock1";
import data2 from "../../Mock2";


const Layout = (props) => {
    const { children } = props;
    const data = data1;

    return <div className="main-layout">
        <div className="main-layout__nav-menu"/>
        <div>
            {children}
        </div>
        <SideMenu>
            <Tabs>
                <div label="Utilization Bars">
                    <Utilization utilizationData={data} />
                </div>
                <div label="Utilization Text">
                    <UtilizationText utilizationData={data} />
                </div>
            </Tabs>
        </SideMenu>
    </div>
};

export default Layout;
