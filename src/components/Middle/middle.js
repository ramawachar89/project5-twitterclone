import React, { useEffect, useState,useRef } from "react";
import CustomButton from "../../atoms/button/button";
import CustomInputFields from "../../atoms/InputFields/input";
import Card from "../Cards/card";
import middleStyle from "../Middle/middle.module.css";
import { tweetData } from "../../atom";
import { useRecoilState } from "recoil";
import CollectionsIcon from '@mui/icons-material/Collections';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import SwapCallsIcon from '@mui/icons-material/SwapCalls';
import IosShareIcon from '@mui/icons-material/IosShare';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import img from '../Middle/imagee/3.jpg'
import tweetimg from '../LeftSide/Image/tweetimg.jpg'
import HomeIcon from "@mui/icons-material/Home";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SearchIcon from '@mui/icons-material/Search';
import Homemobile from "../Homemobile.js/Homemobile";



function Middle() {
  const [newTweetText, setNewTweetText] = useRecoilState(tweetData);
 const [input, setInput] = useState("");
  const [image,setImage]=useState("")
 

  console.log(newTweetText);
const inputRef = useRef(null)

function handleNewTweet(inputTweet) {
    setInput(inputTweet);
  }
  let userName = JSON.parse(localStorage.getItem("userData"));

  function handleClick() {
    // console.log("clicked");
    
    const newTweet = {
      profileIcon: <img src={img} className={middleStyle.img}/>,
      name:`${userName[0].phoneNumber}`,
      handlerName: `@${userName[0].username}`,
  
    tweets :[
      {
        tweetText:input,
      tweetPic:image
    }
    ],
      icons1:<ChatBubbleOutlineIcon/>,
            icons2:<SwapCallsIcon/>,
            icons3:<FavoriteBorderIcon/>,
            icons4: <EqualizerIcon/>,
           icons5:<IosShareIcon/>,
           more:<MoreHorizIcon/>
    };
    console.log(newTweet)
      
    setNewTweetText([newTweet, ...newTweetText]);
    setInput("")
    setImage("")
    inputRef.current.value=""
  }
  console.log(newTweetText,"kuch bhi")
  const iconList = [
    {
        icon : <CollectionsIcon
        className={middleStyle.icon}
        />,
        action : 'pickImage'

    },
    {
        icon : <GifBoxOutlinedIcon
        className={middleStyle.icon}
        />,

    },
    {
        icon : <ListOutlinedIcon
        className={middleStyle.icon}
        />,
    },
    {
        icon : <EmojiEmotionsOutlinedIcon
        className={middleStyle.icon}
        />,
    },
    {
        icon :  <LocationOnOutlinedIcon
        className={middleStyle.icon}
        />
    }  
]
function handleOnClickIcon(action){
  // alert("hi")
  if(action==='pickImage'){
inputRef.current.click()
  }

}
 function handleOnSelectImage(e){
  let reader=new FileReader();
  reader.onload=(e)=>{
    setImage(e.target.result);
    //inputRef.current=null
  }
  reader.readAsDataURL(e.target.files[0])

 }

  return (
    <div className={middleStyle.container}>
      <section className={middleStyle.section}>
        <header>
          <nav className={middleStyle.nav}>
          <div className={middleStyle.mobile} >
          <Homemobile/>
          </div>
            <div className={middleStyle.home}>
            <span>home</span>
            </div>
            <div className={middleStyle.forYou}>
              <div className={middleStyle.div1}> For You</div>
              <div className={middleStyle.div3}> Following</div>
            </div>
          </nav>
        </header>
       
        <div className={middleStyle.div2}>
          <div className={middleStyle.top}>
        <img src={img}  className={middleStyle.img}/>

          <CustomInputFields
            abc="What's happening?"
            style={{
              outline: "none",
              padding: "1rem",
              width: "30rem",
              border: "none",
              fontSize:"1.6rem"
            }}
            handleChange={handleNewTweet}
            value={input}
          />
          {
            image && 
            <div className={middleStyle.imageWrapper}>
              <img 
              src={image}
              height="100%"
              width="100%"
              alt="IMAGE"
              />
            </div>
          }
          </div>
          <div className={middleStyle.btn}>
            
          {iconList.map(({icon,action},index)=>(
             <div onClick={()=>handleOnClickIcon(action)}> {icon}</div>
            ))}
            <CustomButton
              btnVal="Tweet"
              style={{
                width: "6rem",
                borderRadius: "20px",
                margin: "1rem",
                color: "white",
                backgroundColor: "#007bff",
                cursor:"pointer"
              }}
              onClicking={handleClick}
            />
            
          {/* </div> */}
         
          </div>
          
            {/* hidden input */}
            <input
                type = 'file'
                hidden
                ref={inputRef}
                 onChange = {handleOnSelectImage}
                name = 'tweetPic'
            />
        </div>
        <Card/>
        <div className={middleStyle.footericon}>
       <HomeIcon sx={{ fontSize: 40 }}/>
       <SearchIcon sx={{ fontSize: 40 }}/>
       <NotificationsNoneIcon sx={{ fontSize: 40 }}/>
       <MailOutlineIcon sx={{ fontSize: 40 }}/>
      </div>
      </section>
      <div className={middleStyle.mobileicon}>
      <img  onClick={handleClick}
      style={{width:"4rem", borderRadius:"100px"}} src={tweetimg}/>
      </div>
    </div>
    
  );
}

export default Middle;
