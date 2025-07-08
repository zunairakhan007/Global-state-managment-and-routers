import React, { useContext, useEffect } from "react";
import { EmojiContext } from "../context/EmojiContext";
import EmojiList from "../components/EmojiList";

const SmileysPage = () => {
  const { setSelectedCategory } = useContext(EmojiContext);

  useEffect(() => {
    setSelectedCategory("Smileys");
  }, [setSelectedCategory]);

  return <EmojiList />;
};

export default SmileysPage;
