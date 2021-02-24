
import {HashRouter,Route,Switch} from "react-router-dom";
import './blog.css';


import Blog_menu from "./Blog_menu";
import Blog_index from "./Blog_index";
import Blog_detail from "./Blog_detail";
import Blog_footer from "./Blog_footer";
import Blog_list from "./Blog_list";
import Blog_race from "./Blog_race";
import Blog_login from "./Blog_login";
import Blog_reg from "./Blog_reg";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import ReactLoading from 'react-loading';

const Blog=()=>{

    const [pageid,changeid]=useState(0);
    const memberpath='index.php?m=member&c=index&a=init&webtype=vue'
    const mounted=useRef();
    const [jsondata,datachange]=useState(null);
    const [loadcc,loadtype]=useState(false);

    const _loading=(cc)=>{
        if(cc){
            loadtype(true)
        }else{
            loadtype(false)
        }

    }


    useEffect(()=>{
        if(!mounted.current){ //componentDidMount
            mounted.current=true;


            axios.get(memberpath, {
            }).then(function (response) {
                var res=response.data;
                datachange(res.data)


            }).catch(function (err) {

                console.log(err);
            });


        }
        else{ //componentDidUpdate
            console.log(jsondata)
        }

    },[jsondata]);
    return(

        <div>
        <HashRouter>
        <Switch>

        <Blog_menu logindata={jsondata}>







    <Route exact path="/"  render={()=>{return( <Blog_index /> )}} />
    <Route path="/Blog_detail" render={()=>{return( <Blog_detail loading={_loading}/> )}}/>
    <Route path="/Blog_list" component={Blog_list}/>
    <Route path="/Blog_race" component={Blog_race}/>
    <Route path="/Blog_login" render={()=>{return( <Blog_login loading={_loading}/> )}}/>
    <Route path="/Blog_reg" component={Blog_reg}/>


        </Blog_menu>


        </Switch>
        </HashRouter>

    <Blog_footer />

    <div className={loadcc ? 'loading':'d-none'}><ReactLoading   width={40} /></div>
        </div>


);
}
export default Blog;
