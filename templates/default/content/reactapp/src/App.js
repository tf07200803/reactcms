import React, {useState} from 'react';
import {HashRouter,Route,Switch} from "react-router-dom";

import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import Layout from "./Layout";

const App=()=>{


    const [num,changeNum]=useState(17);

    const gochen=()=>{
        changeNum(21)
        console.log("yayaya")
    }


    return(
        <div>
        <HashRouter>
        <Switch>

        <Route exact path="/"  render={()=>{return( <FirstPage id={num} changefather={gochen}/> )}} />
        <Route path="/second" component={SecondPage}/>

    </Switch>
    </HashRouter>


    <div className="mybtn" onClick={gochen}>yayayaya</div>
        </div>


);
}
export default App;
