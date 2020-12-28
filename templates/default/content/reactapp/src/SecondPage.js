import React from 'react';

const SecondPage=(props)=>{
    const StyleSheet={
        width:"100vw",
        height:"100vh",
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column",
    }

    console.log(props)
    console.log(props.match.params)
    return(
        <div style={StyleSheet}>

            <h1 style={{color:"#000",fontFamily:"Microsoft JhengHei"}}>我是第二頁</h1>
        </div>
    )
}

export default SecondPage;
