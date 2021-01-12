
import React, {useEffect, useRef, useState ,forwardRef} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fas } from '@fortawesome/free-solid-svg-icons'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import {useHistory} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
        backgroundColor: '#df0000',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
}));

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const Blog_menu=(props)=>{

    const mounted=useRef();
    const testpath='index.php?m=link&c=index&a=menu'
    const [jsondata,datachange]=useState(null);

    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const history = useHistory();


    const pagelink=(url)=>{
        history.push(url);
        setOpen(false);

    }

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



    <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
<Toolbar>
    <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
        <CloseIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
    MENU
    </Typography>

        </Toolbar>
        </AppBar>
        <List>


    {jsondata===null ? "": Object.entries(jsondata).map((t,k) => t[1].typeid==54 ? <ListItem button onClick={(e) => pagelink(t[1].url)} key={t[0]}><ListItemText primary={t[1].name}  /></ListItem> : '') }




        </List>
        </Dialog>



        <div className="w-100 blogheader">

        <div className="container bloglogo pt-3 pb-3">


        <div className="row justify-content-end d-lg-none">

        <div className="menubtn" onClick={handleClickOpen}><FontAwesomeIcon icon={fas.faAlignJustify} size="2x" color="#afafaf"/> </div>

        </div>


        <div className="row justify-content-end d-none d-lg-flex">




    {jsondata===null ? "": Object.entries(jsondata).map((t,k) => t[1].typeid==54 ? <Link key={t[0]} to={t[1].url}><div className="ml-3 mr-3" >{t[1].name}</div></Link> : '') }



    </div>
    </div>


        </div>



    {props.children}

        </div>
    );
}
export default Blog_menu;
