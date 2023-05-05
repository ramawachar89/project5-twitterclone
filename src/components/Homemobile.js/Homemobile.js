import React, { useState } from "react";
import Drawer from '@mui/material/Drawer';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import images from "../LeftSide/Image/3.jpg"
import CloseIcon from '@mui/icons-material/Close';
import mobilestyle from './Homemobile.module.css';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { useNavigate } from "react-router-dom";

  function Homemobile(){
    const navigate = useNavigate();
    const [state, setState] = useState({
        left: false,
      });

   const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, ["left"]: open });
  };
  function profileNav(index){
    const clicked =items.map((item) => item.title === "Profile")
    if (clicked[index] === true) {

      navigate('/userProfile')
    }
  }
    const items=[
      {
        icon:<PersonOutlineIcon  sx={{ fontSize: 75,marginLeft:"10px",marginTop:"10px"}}/>,
        title:"Profile"
      },
      {
        icon:<MarkUnreadChatAltIcon sx={{ fontSize: 75,marginLeft:"10px",marginTop:"10px"}}/>,
        title:"Topics"
      },
      {
        icon:<BookmarkBorderIcon sx={{ fontSize: 75,marginLeft:"10px",marginTop:"10px"}}/>,
        title:"Bookmarks"
      },
      {
        icon:<ListAltIcon sx={{ fontSize: 75,marginLeft:"10px",marginTop:"10px"}}/>,
        title:"Lists"
      },
      {
        icon:<PersonSearchIcon sx={{ fontSize: 75,marginLeft:"10px",marginTop:"10px"}}/>,
        title:"Twitter Circle"
      }
    ]
    let userName = JSON.parse(localStorage.getItem("userData"));

    return(
        <div>
          {['left'].map((anchor) => (
            <div>
              <img onClick={toggleDrawer(anchor, true)}
              className={mobilestyle.img}
              src={images}/>
              <Drawer
              PaperProps={{
                sx:{width:"70%"}, 
              }}
                anchor="left"
                open={state["left"]}
                onClose={toggleDrawer(anchor, false)}
              >
              <div>
                <div  className={mobilestyle.top}>
                <div className={mobilestyle.topsection}>
                <b>Account info</b>
                 <CloseIcon onClick={toggleDrawer(anchor, false)}
                 sx={{ fontSize: 45,marginRight:"25px",marginTop:"8px" }}/>
                 </div>
                 <div className={mobilestyle.user}>
                 <img className={mobilestyle.usericon}
                  src={images}/>
                  <AddCircleOutlineIcon sx={{ fontSize: 75,marginRight:"20px",marginTop:"19px", background: "none" }}/>
                 </div>
                 <div  className={mobilestyle.userdetails}>
              
                <p><b>145</b> Followers <b>167</b> Following </p>
                 </div>
                </div>
                {items.map((x,index)=>(
                  <div onClick={()=>profileNav(index)} className={mobilestyle.bottom}>
                  {x.icon}
                  <span>{x.title}</span>
                  </div>
                  
                ))}
                </div>
              </Drawer>
            </div>
          ))}
        </div>
    )
}
export default Homemobile;