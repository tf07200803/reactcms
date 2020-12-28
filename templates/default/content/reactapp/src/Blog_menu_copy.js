
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import logo from './logo.png';

const Blog_menu=(props)=>{


    return(
        <div>


            /*<div className='blogheader'>




        <div className="header1200">

        <table width="100%" border="0"   height="100%">
        <tbody>
        <tr>
        <td valign="middle" height="100%"><img src={logo}  /></td>
    <td valign="middle">Trang Chủ</td>
    <td valign="middle">Link Vào Bog8</td>
    <td valign="middle">Nhận Định Soi Kèo</td>
    <td valign="middle">Tip Cá Cược</td>
    <td valign="middle">Tin Hot</td>
    <td valign="middle">Góc Nhà Cái</td>
    <td valign="middle">Khuyến Mãi</td>











    </tr>
    </tbody>
    </table>


        </div>








        </div>*/

    {props.children}

        </div>
    );
}
export default Blog_menu;
