import React, {useEffect, useRef, useState} from 'react';
import banner1 from './try.png'
import banner2 from './try2.png'
import banner3 from './try3.png'
import axios from "axios";
import {useHistory} from 'react-router-dom';
import $ from "jquery";
import {Link} from "react-router-dom";
import empty from "./empty.jpg";

const Blog_detail=(props)=>{


    const mounted=useRef();
    const [jsondata,datachange]=useState(null);
    const [catid,idchange]=useState(null)
    const [_catid,_idchange]=useState(null)
    const [pageid,pageidchange]=useState(null)
    const [_pageid,_pageidchange]=useState(null)



    const getapi=()=>{

        console.log(catid)

        axios({
            method: 'get',
            url: 'index.php?m=content&c=index&a=getallnewsp3',
            params: {'catid': catid,'page': pageid,'type':'news'}
        })
            .then(function (response) {
                var res=response.data;
                datachange(res.data)
            })
            .catch(function (err) {
                console.log(err);
            });



    }

    const createMarkup=(str)=>{
        return {__html: str};
    }
    const checkurl=(string)=>{

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


    useEffect(()=>{
        var self=this;
        var url = checkurl(window.location.href);

        if(!mounted.current){ //componentDidMount
            mounted.current=true;
            idchange(url.id)
            pageidchange(url.page)
            //getapi();

        }
        else{ //componentDidUpdate
            var url = checkurl(window.location.href);
            idchange(url.id)
            pageidchange(url.page)
            console.log('觸發內容更動function')
            if(catid!=_catid || pageid!=_pageid){
                console.log("catid有變動");
                _idchange(url.id)
                _pageidchange(url.page)
                getapi();
            }
        }

    },[props,jsondata,catid,pageid]);



    return(
        <div>

        <div className="center1200">

        <div className="container">





        <div className='row mt-4 mb-4'>

        <div className="col-12">
        <div className="specialtitle">{catid==9 ? '專題新聞':''}{catid==10 ? '熱門新聞':''}{catid==6 ? '國外新聞':''}</div>
        </div>
        <div className="col-12 col-lg-8">

        <div className="contentnews row">

    {jsondata===null ? "": Object.entries(jsondata.data).map((t,k) =>

        <Link key={t[0]} to={'/Blog_detail?id='+t[1].id+'&catid='+t[1].catid}><div className="col-12 onelist" >

                <div className="row">

                    <div className="col-12 col-lg-3">

                        <div className="oneimg fullimg" style={{backgroundImage: `url(${t[1].thumb=='' ? empty:t[1].thumb})`}}></div>

                    </div>


                    <div className="col-12 col-lg-9">

                        <div className="row">

                            <div className="col-12 p-2">

                                <div className="imgtitle">{t[1].title}</div>

                                <div className="imgdetail">{t[1].description}...</div>

                            </div>

                            <div className="imgmore">詳全文</div>

                        </div>

                    </div>

                </div>

            </div></Link>

) }

        <div className="pages" dangerouslySetInnerHTML={jsondata===null ? createMarkup(''): createMarkup(jsondata.pages)}>



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
