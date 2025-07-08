import React, { useContext, useEffect } from "react";
import { EmojiContext } from "../context/EmojiContext";
import EmojiList from "../components/EmojiList";

const FoodPage = () => {
  const { setSelectedCategory } = useContext(EmojiContext);

  useEffect(() => {
    setSelectedCategory("Food");
  }, [setSelectedCategory]);

  return <EmojiList />;
};

export default FoodPage;
