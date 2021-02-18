import React, {useEffect, useRef, useState} from 'react';
import banner1 from './try.png'
import banner2 from './try2.png'
import banner3 from './try3.png'
import axios from "axios";
import {useHistory} from 'react-router-dom';
import $ from "jquery";
import {Link} from "react-router-dom";

const Blog_detail=(props)=>{

    const getUrlParam=(string)=>{
        var obj = new Object();
        if (string.indexOf("?") != -1) {
            var string = string.substr(string.indexOf("?") + 1);
            var strs = string.split("&");
            for (var i = 0; i < strs.length; i++) {
                var tempArr = strs[i].split("=");
                obj[tempArr[0]] = tempArr[1];
            }
        }
        return obj;
    }

    var data = getUrlParam(window.location.href);


    const mounted=useRef();
    const [jsondata,datachange]=useState(null);
    const [pageid,idchange]=useState(data.id)
    const [_pageid,_idchange]=useState(data.id)
    const history = useHistory();




    const createMarkup=(str)=>{
        return {__html: str};
    }
    const pagelink=(id,catid)=>{
        history.push("/Blog_detail?id="+id+'&catid='+catid);

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
    const messagepost=()=>{
        var self=this
        var data = {"title":'',"url":"","content":""};
        axios.post('index.php?m=comment&c=index&a=post&commentid=content_'+data.catid+'-'+data.id+'-1', data,{
        }).then(function (response) {
            console.log(response)

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
            data=getUrlParam(window.location.href);
            idchange(data.id)
            if(pageid!=_pageid){
                console.log("pageid有變動");
                _idchange(data.id)
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

        <div className={jsondata!=null && jsondata.prev.title=='empty'  ? 'pagebtn float-right col-4 d-none': 'pagebtn float-right col-4'} onClick={() => pagelink(jsondata==null ? '': jsondata.prev.id,jsondata.prev.catid)}>{jsondata==null ? '': jsondata.prev.title}</div>
        <div className={jsondata!=null && jsondata.next.title=='empty'  ? 'pagebtn float-left col-4 d-none': 'pagebtn float-left col-4'} onClick={() => pagelink(jsondata==null ? '': jsondata.next.id,jsondata.next.catid)}>{jsondata==null ? '': jsondata.next.title}</div>

        </div>


        <div className="col-12">


            <div>我要留言</div>
            <div>
        <textarea style={{width:"100%"}}>

    </textarea>
    <input type="submit" value="送出留言" onClick={() => messagepost()}/>
            </div>


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
