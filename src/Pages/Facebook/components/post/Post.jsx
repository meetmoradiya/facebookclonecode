import {
  AccountCircle,
  EmojiEmotionsOutlined,
  EmojiFlagsOutlined,
  GifOutlined,
  Lock,
  ModeCommentOutlined,
  MoreHoriz,
  PhotoCameraOutlined,
  ThumbUpAlt,
} from "@material-ui/icons";
import React, { useRef } from "react";
import { useState } from "react";
import PostMenu from "../postmenu/PostMenu";

const Post = (props) => {
  const [menuOpen , setMenuOpen] =useState(false)
  const [pageLike, setPageLike] = useState(0);
  const [count, setCount] = useState(true);
  const [liked, setLiked] = useState("#000000");
  const commentBar = useRef(null);
  const commentBtn = () => {
    commentBar.current.focus();
  };
  const [menu , setmenu] =useState(false)
  const menuclosed = () =>{
    setmenu(!menu)
  }
  const menuClose = ()=>{
    setMenuOpen(!menuOpen)
  }
  return (
    <div className="w-full mx-auto shadow-lg bg-white">
      <div className="space-x-5">
        <div className="flex relative items-center w-full justify-between p-5">
          <div className="userwraper flex items-center space-x-5 ">
            <span className=" rounded-full overflow-hidden ">
            <AccountCircle
            className="text-gray-300 cursor-pointer transform scale-100 hover:scale-105 transition-all duration-100 ease"
            style={{ fontSize: 45 }}
          />
            </span>
            <div className="space-y-2">
              <h1 className="username text-sm cursor-pointer">
                {props.username}
              </h1>
              <div className="flex items-center space-x-2">
                <span className="time text-xs text-gray-500 tracking-widest cursor-pointer">
                  {props.time}
                </span>
                <span className="privacyIcon flex items-center cursor-pointer">
                  <Lock style={{ fontSize: 15 }} />
                </span>
              </div>
            </div>
          </div>
          {menuOpen?<PostMenu menuclose={menuClose} reloadmenu={props.reload } menuclose={menuclosed} id={props.id} />:null}
          <span onClick={()=>{setMenuOpen(!menuOpen)}}>
            < MoreHoriz className="cursor-pointer" />
          </span>
        </div>
        <span className="postStatus flex items-center py-5 tracking-widest font-medium">
          {props.status}
        </span>
      </div>
      <img
        alt=""
        className="imgBox w-full object-contain"
        style={{ height: 450 }}
        src={props.img}
      />
      <div className="box ">
      <span className="w-full block pl-5 pt-3 text-gray-500 font-bold text-sm tracking-widest">
          {props.like + pageLike} Likes
        </span>
        <div className="w-full flex items-center my-2">
          <div
            className="w-1/2 flex items-center space-x-5 justify-center cursor-pointer"
            style={{ color: liked }}
            onClick={() => {
              setCount(!count);
              if (count) {
                setLiked("#1877f2");
                setPageLike(pageLike + 1);
              } else {
                setLiked("#000000");
                setPageLike(pageLike - 1);
              }
            }}
          >
            <ThumbUpAlt />
            <h1 className="font-bold text-xs">Like</h1>
          </div>
          <div
            className="w-1/2 flex items-center space-x-5 justify-center cursor-pointer"
            onClick={commentBtn}
          >
            <ModeCommentOutlined className="" />
            <h1 className="font-bold text-xs">Comment</h1>
          </div>
        </div>
        <span className="block border-b-2 mx-auto border-gray-500 w-11/12"></span>
        <div className="flex items-center p-5 space-x-3">
          <AccountCircle
            className="text-gray-300 cursor-pointer "
            style={{ fontSize: 45 }}
          />
          <span className="relative w-full  ">
            <input
              ref={commentBar}
              className="w-full  h-full outline-none bg-gray-200 border-gray-300 p-2 text-xs text-black rounded-full"
              type="text"
              name=""
              id=""
              placeholder="Write a comment..."
              id={props.key}
            />
            <span className="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center space-x-3 p-5">
              <EmojiEmotionsOutlined className="text-gray-700 cursor-pointer" />
              <PhotoCameraOutlined className="text-gray-700 cursor-pointer" />
              <GifOutlined className="border-2 rounded-md border-gray-700 text-gray-700 cursor-pointer" />
              <EmojiFlagsOutlined className="text-gray-700 cursor-pointer" />
            </span>
          </span>
        </div>
      </div>
     
    </div>
  );
};

export default Post;
