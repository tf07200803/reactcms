
import {HashRouter,Route,Switch} from "react-router-dom";
import './blog.css';


import Blog_menu from "./Blog_menu";
import Blog_index from "./Blog_index";
import Blog_detail from "./Blog_detail";
import Blog_footer from "./Blog_footer";
import Blog_list from "./Blog_list";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import {useState} from "react";


const Blog=()=>{

    const [pageid,changeid]=useState(0);
    return(

        <div>
        <HashRouter>
        <Switch>

        <Blog_menu>







    <Route exact path="/"  render={()=>{return( <Blog_index /> )}} />
    <Route path="/Blog_detail" component={Blog_detail}/>
    <Route path="/Blog_list" component={Blog_list}/>




        </Blog_menu>


        </Switch>
        </HashRouter>

    <Blog_footer />


        </div>


);
}
export default Blog;
