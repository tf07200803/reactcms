
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import "./Layout.css";
import ProgressDIY from "./ProgressDIY";
const Layout=(props)=>{
    const StyleSheet={
        //backgroundColor:(props.location.pathname==="/")?"#FF2E63":"#08D9D6",
    }
    const [value,setValue]=useState(10);
    return(
        <div style={StyleSheet}>
        <nav>
        <Link to="/">點我連到第一頁</Link>
        <Link to="/second" style={{marginLeft:"20px"}}>點我連到第二頁</Link>
    <ProgressDIY value={value} onClick={(e)=>{setValue(e.target.value)}}/>
    </nav>
    {props.children}

</div>
);
}
export default Layout;
