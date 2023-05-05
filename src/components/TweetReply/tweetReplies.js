import React, { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { tweetData } from '../../atom'
import style from '../TweetReply/tweetReply.module.css'
import VerifiedIcon from "@mui/icons-material/Verified"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, useSearchParams } from 'react-router-dom'
import Left from '../LeftSide/left'
import Right from '../Right/right'

export default function ShowTweetReplies() {
  const [dataList, setDataList] = useRecoilState(tweetData)
  const [searchParam] = useSearchParams();
  const [activeProfile, setActiveProfile] = useState([])
  const [likes, setLikes] = useState(100);
  const navigate = useNavigate()

  useEffect(() => {
    console.log(searchParam.get("handlerName"))
    let clickingIndex = dataList.filter((ele) => ele.handlerName == searchParam.get("handlerName"))
    console.log(clickingIndex)
    setActiveProfile(clickingIndex)
  }, [])


  function handleLike(index, item) {
    // console.log("hi")
    if (likes == 101) {
      setLikes(likes - 1)
    }
    else {
      setLikes(likes + 1)
    }
    // console.log(likes)

  }

 function arrow(){
  navigate("/")
 }
 
  return (
    <div className={style.maincontainer}>
    <Left/>
    <div className={style.mid}>
    <div onClick={arrow}><ArrowBackIcon /></div>
    <h2>Tweet</h2>
      {activeProfile.map((item) => (
        <div>
        <div className={style.topitems}>
        <div className={style.top}>
          {item.profileIcon}
          <b> {item.name}</b>
          {item.handlerName}
          </div>
          <div className={style.more}>
          {item.more}
          </div>
          </div>
          {item.tweets.map((ele) => (
            <div className={style.miditems} >
              <p>{ele.tweetText}</p>
              <img src={ele.tweetPic} />
              <div className={style.icons}>
                {item.icons1}
                {item.icons2}
                {item.icons3}
                {item.icons4}
                {item.icons5}
              </div>
              {ele.TweetReplies.map((element) => (
                <div className={style.comment}>
               <div className={style.reply}>
               <div className={style.replytop}>
                 {element.profileIcon}'
                <h3><b>{element.name}</b></h3>
                {element.handlerName}
                </div>
                <div className={style.more}>
                {item.more}
                </div>
               </div>
               <div className={style.text} >
                {element.tweetReplyText}
              </div>
               </div>
              ))}
            </div>

          ))}
        </div>

      ))}
      </div>
      <Right/>
    </div>
  )
}