import React, {useEffect, useRef, useState} from 'react';
import banner1 from './try.png'
import banner2 from './try2.png'
import banner3 from './try3.png'
import axios from "axios";
import {useHistory} from 'react-router-dom';
import $ from "jquery";
import {Link} from "react-router-dom";
import empty from "./empty.jpg";

const Blog_login=(props)=>{


    const mounted=useRef();


    useEffect(()=>{
        var self=this;

        if(!mounted.current){ //componentDidMount
            mounted.current=true;


        }
        else{ //componentDidUpdate

            console.log('觸發內容更動function')

        }

    },[props]);



    return(
        <div>

        <div className="center1200">

        <div className="container">





        登入頁











        </div>
        </div>
        </div>
    )
}

export default Blog_login;
