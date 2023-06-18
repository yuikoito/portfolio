import React, { useState, useEffect } from "react";
import { Text, keyframes, usePrefersReducedMotion } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
type Props = {
  text: string;
};
export const TypingText: React.FC<Props> = ({ text }) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [displayedText, setDisplayedText] = useState("");
  const typingSpeed = 160; // Speed in milliseconds
  const blinkTextCursor = keyframes`
  from{border-right-color: rgba(255,255,255,.75);}
  to{border-right-color: transparent;}
`;
  const animation = prefersReducedMotion
    ? undefined
    : `${blinkTextCursor} 500ms infinite`;

  useEffect(() => {
    if (!text) return;
    let index = 0;
    let _displayedText = "";
    const timer = setInterval(() => {
      if (index < text.length) {
        console.log(text.charAt(index));
        _displayedText += text.charAt(index);
        index++;
      } else {
        clearInterval(timer);
      }
      setDisplayedText(_displayedText);
    }, typingSpeed);

    // cleanup on unmount
    return () => clearInterval(timer);
  }, [text, typingSpeed]);

  return (
    <Text
      color="white"
      fontSize="7xl"
      animation={displayedText === text ? undefined : animation}
      borderRight={
        displayedText === text ? "none" : "2px solid rgba(255,255,255,.75)"
      }
    >
      <Typewriter
        options={{
          strings: ["Web Developer", "Tech Enthusiast", "Nature Lover"],
          autoStart: true,
          loop: true,
          delay: 50,
        }}
      />
    </Text>
  );
};
