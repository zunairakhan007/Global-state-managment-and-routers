import React, { useContext, memo } from "react";
import { EmojiContext } from "../context/EmojiContext";

const EmojiList = () => {
  const { selectedCategory, emojiData } = useContext(EmojiContext);

  const emojis = emojiData[selectedCategory] || [];

  return (
    <div className="emoji-list">
      {emojis.map((emoji, index) => (
        <span key={index} className="emoji">{emoji}</span>
      ))}
    </div>
  );
};

export default memo(EmojiList);
