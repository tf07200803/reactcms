
import React, {useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Blog_menu=(props)=>{

    const mounted=useRef();
    const testpath='index.php?m=link&c=index&a=menu'
    const [jsondata,datachange]=useState(null);


    useEffect(()=>{
        if(!mounted.current){ //componentDidMount
            mounted.current=true;
            axios.get(testpath, {
            }).then(function (response) {
                var res=response.data;
                datachange(res.data)


            }).catch(function (err) {

                console.log(err);
            });

        }
        else{ //componentDidUpdate

        }

    },[props,jsondata]);
    return(
        <div>
        <div className="w-100 blogheader">

        <div className="container bloglogo pt-3 pb-3">
        <div className="row justify-content-end">




    {jsondata===null ? "": Object.entries(jsondata).map((t,k) => t[1].typeid==54 ? <Link key={t[0]} to={t[1].url}><div className="ml-3 mr-3" >{t[1].name}</div></Link> : '') }



    </div>
    </div>


        </div>



    {props.children}

        </div>
    );
}
export default Blog_menu;
