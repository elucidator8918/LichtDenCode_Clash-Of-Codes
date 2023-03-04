import React, { useState } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const LikeDislikeCounter = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <button onClick={handleLike}>
        <FaThumbsUp />
      </button>
      <span>{likes} likes</span>
      <button onClick={handleDislike}>
        <FaThumbsDown />
      </button>
      <span>{dislikes} dislikes</span>
    </div>
  );
};

export default LikeDislikeCounter;
