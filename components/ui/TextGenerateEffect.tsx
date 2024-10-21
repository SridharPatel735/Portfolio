"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({ words, className }: { words: string; className?: string; }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0); // State for character index
  const [wordIndex, setWordIndex] = useState(0); // State for word index
  const [deleting, setDeleting] = useState(false); // State for deleting status
  const wordsArray = words.split(". "); // Split on period and space for full sentences
  const typingSpeed = 150; // Typing speed in ms
  const deletingSpeed = 75; // Deleting speed in ms
  const pauseTime = 1000; // Pause time before deleting

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (deleting) {
        // Deleting effect
        setDisplayedText(prev => prev.slice(0, -1));
        if (displayedText.length === 0) {
          setDeleting(false);
          setWordIndex((prev) => (prev + 1) % wordsArray.length); // Move to the next sentence
          setCharIndex(0); // Reset character index for the next sentence
        }
      } else {
        // Typing effect
        if (charIndex < wordsArray[wordIndex].length) {
          setDisplayedText(prev => prev + wordsArray[wordIndex][charIndex]);
          setCharIndex(prev => prev + 1); // Increment character index
        } else {
          setDeleting(true); // Start deleting after finishing typing the sentence
        }
      }
    }, deleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeoutId); // Clear timeout on unmount
  }, [displayedText, charIndex, wordIndex, deleting]); // Add necessary dependencies

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className="dark:text-white text-black leading-snug tracking-wide">
          <motion.span className="opacity-100 text-blue-500">{displayedText}</motion.span>
        </div>
      </div>
    </div>
  );
};
