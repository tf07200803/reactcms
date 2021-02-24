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
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const loginpath='index.php?m=member&c=index&a=login';


    const logsend=()=>{
        props.loading(true)
        var self=this;
        var bodyFormData = new FormData();
        bodyFormData.set('webtype', 'vue');
        bodyFormData.set('username', username);
        bodyFormData.set('password', password);
        bodyFormData.set('dosubmit', '登录');

        axios({
            method: 'post',
            url: loginpath,
            data: bodyFormData,
            headers: {'Content-Type': 'multipart/form-data' }
        })
            .then(function (response) {
                props.loading(false)
                var res=response.data;
                if(res.status==-1){
                    alert(res.msg)
                }else if(res.status==1){
                    alert(res.msg)
                    window.location.href="./"
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


        }
        else{ //componentDidUpdate

            console.log('觸發內容更動function')

        }

    },[props]);



    return(
        <div>

        <div className="center1200">

        <div className="container">





        <div className="row mt-4">




        <div className="col-12">
        <div className="specialtitle">會員登入</div>
        </div>


        <div className="col-12 col-lg-6 p-1">

        <div className="row">
        <div className="col-12">用户名：</div>
        <div className="col-12"><input type="text" className="w-100" value={username} onChange={e => setusername(e.target.value)}/></div>
        </div>

        </div>



    <div className="col-12 col-lg-6 p-1">

        <div className="row">
        <div className="col-12">密码：</div>
    <div className="col-12"><input type="password"  className="w-100" value={password} onChange={e => setpassword(e.target.value)}/></div>
    </div>

    </div>



    <div className="col-12 p-1">

        <div className="row justify-content-center">

        <div className="mt-3 mb-3"><input type="submit" value="送出資料" onClick={() => logsend()}/></div>

    </div>

    </div>






        </div>











        </div>
        </div>
        </div>
    )
}

export default Blog_login;
