import React, { useEffect, useContext } from "react";
import { EmojiContext } from "../context/EmojiContext";
import EmojiList from "../components/EmojiList";

const AnimalsPage = () => {
  const { setSelectedCategory } = useContext(EmojiContext);

  useEffect(() => {
    setSelectedCategory("Animals");
  }, [setSelectedCategory]);

  return <EmojiList />;
};

export default AnimalsPage;
