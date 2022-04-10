import React, { useEffect } from 'react'
import './Story.css'
import { useState } from 'react'
import { Users,Posts } from '../../dummydata'
import Profilepic1 from '../../assets/images/person.png';
import {FiMoreHorizontal} from 'react-icons/fi'
import {BiHeartCircle} from 'react-icons/bi'
import {GoComment } from 'react-icons/go'
import { AiOutlineDislike} from 'react-icons/ai'
import {GrLike }from 'react-icons/gr'
import {BsCheck2Circle , BsFlagFill} from 'react-icons/bs'
import axios from 'axios'


const Story = (props) => {
    const [user, setUser]= useState({});
    console.log("prop test",props.post)
    const [like ,setLike] =useState(2);
    const [isLiked ,setIsLiked] = useState(false);
    const likeHandler =() =>{
        setLike(isLiked ? like - 1: like + 1);
        setIsLiked(!isLiked)
    }
    //for looping userId
    // const urlId= props.post.map((item)=>{
    //     console.log("user ids :",item.userId)
    // })
    
    useEffect(()=>{
      const fetchUser= async()=>{
        const result =await axios.get(`http://localhost:5000/api/users/6251871b34db952c4ebf5928`);
        console.log("from user",result);
        setUser(result.data);
      };
      fetchUser();
    },[])
    console.log("user info",user)
    
  return (
      <>
               {
            props.post.map((item)=>(
                <div key={item.id}>
                    <div className='story'>
                        <div className='storyWrapper'>
                            <div className='top-story'>
                                <div className='left-story'>
                                   <img src={ Profilepic1} className='storyImg' alt='pic'/>
                                   <span className='storyUser'>{user.name}</span>
                                   <span className="storyDate">{item?.date}</span>
                                </div>
                                <div className='right-story'>
                                    <span className='story-icon-check'><BsCheck2Circle /></span>
                                    <span className='story-icon-flag'><BsFlagFill /></span>
                                    <span className='story-icon'><FiMoreHorizontal /></span>
                                 </div>
                            </div>
                            <div className='centerstory'>
                                <span className='storyText'>{item?.description}</span>
                                <img className='storypost' src={item?.image} />
                            </div>
                            <div className='bottomstory'>
                                <GrLike className='likeicon'onClick={likeHandler} /><span>{like} liked it</span>
                                <BiHeartCircle className='hearticon'/>
                                <span className='comicon'>{item.comment} comment</span>
                             </div> 
                            
                            <div className='icons'>
                                    <span className='bottom_icon'><GrLike className='icon1' onClick={likeHandler}/> Like</span>
                                    {/* <span className='bottom_icon'><AiOutlineDislike className='icon2'  onClick={likeHandler}/> Dislike</span> */}
                                    <span className='bottom_icon'><GoComment className='icon3'  onClick={likeHandler}/> Comment</span>
                            </div>
                            <div className='commentsection'>
                                <img className='profileimg' src={Profilepic1} alt='profile '/>
                                <input className='input' placeholder="Write a Comment.." />
                            </div>
                        </div>
                    </div>
                </div>
            ))
        }
        {
            
            Posts.map((item)=>(
                <div key={item.id}>
                    <div className='story'>
                        <div className='storyWrapper'>
                            <div className='top-story'>
                                <div className='left-story'>
                                    <img src={Users.filter(u=>u.id === item.userId)[0].profilePicture} className='storyImg' alt='pic' />
                                    <span className='storyUser'>{Users.filter(u=>u.id === item.userId)[0].username}</span>
                                    <span className="storyDate">{item.date}</span>
                                </div>
                                <div className='right-story'>
                                    <span className='story-icon-check'><BsCheck2Circle /></span>
                                    <span className='story-icon-flag'><BsFlagFill /></span>
                                    <span className='story-icon'><FiMoreHorizontal /></span>
                                 </div>
                            </div>
                            <div className='centerstory'>
                                <span className='storyText'>{item?.desc}</span>
                                <img className='storypost' src={item.photo} alt='First post'/>
                            </div>
                            <div className='bottomstory'>
                                <GrLike className='likeicon'onClick={likeHandler} /><span>{like} liked it</span>
                                <BiHeartCircle className='hearticon'/>
                                <span className='comicon'>{item.comment} comment</span>
                             </div> 
                            <div className='icons'>
                                    <span className='bottom_icon'><GrLike className='icon1' onClick={likeHandler}/> Like</span>
                                    {/* <span className='bottom_icon'><AiOutlineDislike className='icon2'  onClick={likeHandler}/> Dislike</span> */}
                                    <span className='bottom_icon'><GoComment className='icon3'  onClick={likeHandler}/> Comment</span>
                            </div>
                            <div className='commentsection'>
                                <img className='profileimg' src={Profilepic1} alt='profile '/>
                                <input className='input' placeholder="Write a Comment.." />
                            </div>

                        </div>
                    </div>
                </div>
            ))
        }
 
      
    
      </>
    
  )
}

export default Story