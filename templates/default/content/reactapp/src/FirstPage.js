import React, {useEffect, useRef, useState} from 'react';
import {Link} from "react-router-dom";
import {useHistory} from 'react-router-dom';
import $ from "jquery";
import axios from 'axios';
import "./Layout.css";

const FirstPage=(props)=>{
    const StyleSheet={
        width:"100vw",
        height:"100vh",

        display: "flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column"
    }
    const testpath='index.php?m=content&c=index&a=reacttest'
    console.log(props)
    const history = useHistory();
    const handleClick=()=>{
        history.push("/second?id=1");
        changeNum(10)
        $(".testbox").css("marginLeft",150)


        axios.get(testpath, {
        }).then(function (response) {
            var res=response.data;

            console.log(res)


        }).catch(function (err) {
            console.log(err);
        });


    }


    const mounted=useRef();
    const [num,changeNum]=useState(0);
    useEffect(()=>{
        if(!mounted.current){ //componentDidMount
            console.log("初始化")
            mounted.current=true;


        }
        else{ //componentDidUpdate
            console.log('state植被換掉')
        }

    },[props,num]);




    return(
        <div style={StyleSheet}>

            <h1 style={{color:"#000",fontFamily:"Microsoft JhengHei"}}>我是第一頁{num}</h1>
    <Link to="/second" style={{marginLeft:"20px"}}>點我連到第二頁</Link>


            <div className="mybtn" onClick={handleClick}>js連我禁地2葉</div>



        <div className="mybtn" onClick={props.changefather}>呼叫賦改PORT{props.id}</div>
        <div className="testbox"></div>
        </div>
    )
}

export default FirstPage;
