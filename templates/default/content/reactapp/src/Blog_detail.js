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
    const [message,messagechange]=useState(null);
    const [pageid,idchange]=useState(data.id)
    const [_pageid,_idchange]=useState(data.id)
    const history = useHistory();
    const [content, setcontent] = useState('');



    const createMarkup=(str)=>{
        return {__html: str};
    }
    const pagelink=(id,catid)=>{
        history.push("/Blog_detail?id="+id+'&catid='+catid);

    }
    const getapi=()=>{
        props.loading(true)
        axios.get('index.php?m=content&c=index&a=show&catid=6&id='+pageid, {
        }).then(function (response) {
            props.loading(false)
            var res=response.data;
            datachange(res.data)


        }).catch(function (err) {
            props.loading(false)
            console.log(err);
        });
    }

    const getmessage=()=>{
        axios.get('index.php?m=comment&c=index&a=getmessage&commentid=content_'+data.catid+'-'+data.id+'-1', {
        }).then(function (response) {
            var res=response.data;
            messagechange(res.data)


        }).catch(function (err) {

            console.log(err);
        });
    }

    const messagepost=()=>{
        props.loading(true)
        var self=this
        var bodyFormData = new FormData();
        bodyFormData.set('title', '');
        bodyFormData.set('url', '');
        bodyFormData.set('content', content);
        axios({
            method: 'post',
            url: 'index.php?m=comment&c=index&a=post&commentid=content_'+data.catid+'-'+data.id+'-1',
            data: bodyFormData,
            headers: {'Content-Type': 'multipart/form-data' }
        })
            .then(function (response) {
                props.loading(false)
                var res=response.data;
                if(res.status==-1){
                    alert(res.msg)
                }else if(res.status==1){

                    setcontent('');
                    getmessage();
                }

            })
            .catch(function (response) {
                //handle error
                props.loading(false)
                console.log(response);
            });


    }
    useEffect(()=>{
        var self=this;
        if(!mounted.current){ //componentDidMount
            mounted.current=true;
            console.log(pageid)
            getapi();
            getmessage();

        }
        else{ //componentDidUpdate
            console.log('觸發內容更動function')
            console.log(message)
            data=getUrlParam(window.location.href);
            idchange(data.id)
            if(pageid!=_pageid){
                console.log("pageid有變動");
                _idchange(data.id)
                getapi();
                getmessage();
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


        <div className="col-12 mt-4">


            <div>我要留言</div>
            <div> <textarea style={{width:"100%"}} value={content} onChange={e => setcontent(e.target.value)}></textarea> <input type="submit" value="送出留言" onClick={() => messagepost()}/> </div>


        </div>



    <div className="col-12 mb-4 mt-4">
    {message===null ? "": Object.entries(message).map((t,k) => <div className="messagestyle" key={t[0]}><div>{t[0]} {t[1].username}：</div><div>{t[1].content}</div></div>)}


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
