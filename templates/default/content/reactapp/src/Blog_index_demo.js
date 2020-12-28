
import React, {useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom';

import axios from 'axios';

const Blog_index=(props)=>{
    const mounted=useRef();
    const testpath='index.php?m=content&c=index&a=getallnews'
    const [jsondata,datachange]=useState(null);


    useEffect(()=>{
        if(!mounted.current){ //componentDidMount
            console.log("初始化")
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

            console.log(jsondata)
            console.log('觸發內容更動function')
        }

    },[props,jsondata]);
    return(
        <div>







            <div className="center1200">

                <div className="container">



                    <div className="row mt-4">


                        <div className="col-6 p-1">


                            {jsondata===null ? "": Object.entries(jsondata).map((t,k) => k==0 ? <Link key={t[0]} to={'/Blog_detail?id='+t[1].id}><div  key={t[0]} className="col heimax fullimg" style={{backgroundImage: `url(${jsondata===null ? "":t[1].thumb})`}} ><div className='txtbg'>{t[1].title}</div></div></Link>:'') }


                        </div>
                        <div className="col-6">
                                <div className="row">


                                {jsondata===null ? "": Object.entries(jsondata).map((t,k) => k>0&&k<5 ? <Link key={t[0]} to={'/Blog_detail?id='+t[1].id}><div key={t[0]} className="col-6 p-1 heimin"><div className="fulldiv fullimg" style={{backgroundImage: `url(${jsondata===null ? "":t[1].thumb})`}}><div className='txtbg'>{t[1].title}</div></div></div></Link>:'') }


                                </div>
                        </div>




                    </div>



                    <div className="row mt-4 mb-4">

                        <div className="col-8">
                        <div className="row">
                            <div className="col-12">
                                <div className="specialtitle">NEWS</div>
                            </div>

    {jsondata===null ? "": Object.entries(jsondata).map((t,k) => k>5&&k<12 ? <Link key={t[0]} to={'/Blog_detail?id='+t[1].id}><div key={t[0]} className="col-4 p-1 heimin"><div className="fulldiv fullimg" style={{backgroundImage: `url(${jsondata===null ? "":t[1].thumb})`}}><div className='txtbg'>{t[1].title}</div></div></div></Link>:'') }

                        </div>
                        </div>

                        <div className="col-4">


                            <div className="col-12">
                            <div className="specialtitle">HOT</div>
                            </div>

        <div className="setlists">

        <ul>




        {jsondata===null ? "": Object.entries(jsondata).map((t,k) => k>0&&k<10 ? <li key={t[0]}>{t[1].title}</li> : '')}

        </ul>



        </div>



                        </div>

                    </div>




                </div>



        </div>



        </div>
    );
}
export default Blog_index;
