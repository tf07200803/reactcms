import React, {useEffect, useRef, useState} from 'react';
import banner1 from './try.png'
import banner2 from './try2.png'
import banner3 from './try3.png'
import axios from "axios";
import {useHistory} from 'react-router-dom';
import $ from "jquery";
import {Link} from "react-router-dom";

const Blog_detail=(props)=>{


    const mounted=useRef();
    const [jsondata,datachange]=useState(null);
    const [pageid,idchange]=useState(props.location.search.replace('?id=',''))
    const [_pageid,_idchange]=useState(props.location.search.replace('?id=',''))
    const history = useHistory();

    const createMarkup=(str)=>{
        return {__html: str};
    }
    const pagelink=(id)=>{
        history.push("/Blog_detail?id="+id);

    }
    const getapi=()=>{
        axios.get('index.php?m=content&c=index&a=show&catid=6&id='+pageid, {
        }).then(function (response) {
            var res=response.data;
            datachange(res.data)


        }).catch(function (err) {

            console.log(err);
        });
    }
    useEffect(()=>{
        var self=this;
        if(!mounted.current){ //componentDidMount
            mounted.current=true;
            console.log(pageid)
            getapi();

        }
        else{ //componentDidUpdate
            console.log('觸發內容更動function')
            idchange(props.location.search.replace('?id=',''))
            if(pageid!=_pageid){
                console.log("pageid有變動");
                _idchange(props.location.search.replace('?id=',''))
                getapi();
            }
        }

    },[props,jsondata,pageid]);



    return(
        <div>

        <div className="center1200">

        <div className="container">





        <div className='row mt-4 mb-4'>


<div className="col-12 col-lg-8">

        <div className="contentnews row">

        <div className="col-12 pagetitle">{jsondata==null ? '':jsondata.title}</div>

        <div className="col-12" dangerouslySetInnerHTML={jsondata==null ? createMarkup(''): createMarkup(jsondata.content)}></div>

        <div className="col-12">

        <div className={jsondata!=null && jsondata.prev.title=='empty'  ? 'pagebtn float-right col-4 d-none': 'pagebtn float-right col-4'} onClick={(e) => pagelink(jsondata==null ? '': jsondata.prev.id, e)}>{jsondata==null ? '': jsondata.prev.title}</div>
        <div className={jsondata!=null && jsondata.next.title=='empty'  ? 'pagebtn float-left col-4 d-none': 'pagebtn float-left col-4'} onClick={(e) => pagelink(jsondata==null ? '': jsondata.next.id, e)}>{jsondata==null ? '': jsondata.next.title}</div>

        </div>


        </div>



        </div>

        <div className="col-4 rightbar d-none d-lg-block"><div><img src={banner1} /></div><div><img src={banner2} /></div><div><img src={banner3} /></div></div>



        </div>











        </div>
        </div>
        </div>
    )
}

export default Blog_detail;
