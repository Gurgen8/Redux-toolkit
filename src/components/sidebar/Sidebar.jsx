import React, { useState } from 'react';
import "./sidebar.scss";
import { FiWifi, FiUser, FiRepeat, FiArrowLeft } from "react-icons/fi";
import { IoReorderThreeSharp, IoCloseSharp } from "react-icons/io5";


export default function Sidebar() {
    const [openSidebar, setOpensidebar] = useState(false)
    return (
        <div className='sidebar'>
            <div className={!openSidebar ? 'sidebar-window' : "open-sidebar"}>
                <h2 className='sidebar-title'>Sidebar</h2>
                <ul className='sidebar-ul'>
                    <li><FiWifi /> Settings</li>
                    <li><FiUser /> About</li>
                    <li><FiRepeat /> Contact</li>
                    <li><FiArrowLeft /> Exit</li>
                </ul>
            </div>
            {!openSidebar
                ? <IoReorderThreeSharp onClick={() => setOpensidebar(!openSidebar)} className='sidebar-toggle' />
                : <IoCloseSharp onClick={() => setOpensidebar(!openSidebar)} className='sidebar-toggle' />
            }
        </div>

    )
}
