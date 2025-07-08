import React, { createContext, useState } from "react";

export const EmojiContext = createContext();

export const EmojiProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("Smileys");

  const emojiData = {
    Smileys: ["😀", "😅", "😂", "😍", "🤔", "🥲", "😭"],
    Animals: ["🐶", "🐱", "🐯", "🦁", "🐷", "🦊", "🐼"],
    Food: ["🍎", "🍕", "🍩", "🍰", "🍔", "🍟", "🥤"],
  };

  return (
    <EmojiContext.Provider value={{ selectedCategory, setSelectedCategory, emojiData }}>
      {children}
    </EmojiContext.Provider>
  );
};
