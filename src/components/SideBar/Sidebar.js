import React from 'react'
import { Link, useHistory } from "react-router-dom"
import './Sidebar.css'
import line from '../../assets/line.svg'
import logo from '../../assets/logo.svg'





export default function Sidebar() {
    return (
        <div className="containerg">
            <div className="sidebar">
                <div className="hearderside">
                    <img src={logo} id="logo"alt=""></    img>
                    <img src={line} id="line" alt=""></   img>
                </div>
                <div className="mainside">
                    <nav>
                        <ul>
                            <li><Link to="/inventory" className="txt">Inventory</Link> 
                            </li>
                            <li><Link to="/weather" className="txt">Weather</Link> 
                            </li>
                            <li><Link to="/login" className="txt">Log Out</Link> 
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="credits">Beta 0.10.2 -      Rodolfo Andino</div>
            </div>
        </div>
    )
}

