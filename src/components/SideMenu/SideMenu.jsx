import React, { useState } from "react";

import './index.css';

const SideMenu = (props) => {
    const [isHidden, hideMenu] = useState(true);
    const { children } = props;
    return <div className={`side-menu ${isHidden ? '' : 'side-menu__opened'}`}>
        <div className="side-menu__button" onClick={() => hideMenu(!isHidden)}><i className="side-menu__button_icon"/></div>
        {children}
    </div>
};

export default SideMenu;
