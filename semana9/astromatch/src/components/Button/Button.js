import React, { useState } from "react";
import { LikeButton, DislikeButton } from "./ButtonStyles";

function Button(props) {
  const [buttonType, setIsLiked] = useState(props.type);

  const renderButton = () => {
    if (buttonType === "like") {
      return (<LikeButton onClick={props.onClick}>{props.text}</LikeButton>)
    }
    if (buttonType === "dislike") {
      return (<DislikeButton onClick={props.onClick}>{props.text}</DislikeButton>)
    }
  }

  return (
    <div>
      {renderButton()}
    </div>
  )
}

export default Button;