import React, { useState, useEffect } from 'react';
import './App.css'; // Import a CSS file for styling if needed
import left from "./assets/output_image.png";
import bgGif from './assets/monkey-cute.gif';
import telegramIcon from "./assets/telegram.png";
import twitterIcon from "./assets/twitter.png";
import { isMobile } from 'react-device-detect';
import song from './assets/song.mp3';

const App = () => {
  const divStyle = {
    position: 'relative',
    backgroundColor: 'white',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Comic Sans MS',
    zIndex: 0,
  };

  const gifBackgroundStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0.45,
    zIndex: -1,
    backgroundImage: `url(${bgGif})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    objectFit: 'cover', // Added object-fit property
  };

  const initialText = 'cLiCk mE';
  const otherText = 'funny monkey gif'
  const otherText2 = 'funny funny monkey gif'
  const title = "$funnymonkeygif"
  
  const playAudio = () => {
    const audio = new Audio(song);
    audio.play();
  };

  const getRandomColor = () => {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  };

  const [letters, setLetters] = useState(initialText.split('').map(() => getRandomColor()));
  const [letters2, setLetters2] = useState(otherText.split('').map(() => getRandomColor()));
  const [letters3, setLetters3] = useState(otherText2.split('').map(() => getRandomColor()));
  const [letters4, setLetters4] = useState(title.split('').map(() => getRandomColor()));

  const handleClick = () => {
    setLetters(initialText.split('').map(() => getRandomColor()));
    playAudio();
  };

  const size = isMobile ? '24px' : '72px'

  const textStyle = {
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: size,
    transition: 'color 0.3s ease-in-out',
  };

  const textStyle2 = {
    cursor: 'pointer',
    fontSize: '32px',
    transition: 'color 0.3s ease-in-out',
  };

  const rainbowBackground = {
    background: 'linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet)',
    fontSize: '22px',
    color: 'black',
    fontWeight: 'bold',
    padding: '10px 20px',
    borderRadius: '20px',
    border: 'none',
    margin: '10px',
    cursor: 'pointer',
    fontFamily: 'Comic Sans MS',
    backgroundSize: '300% 300%',
    transition: 'background 0.5s ease-in-out',
  };

  useEffect(() => {
    const img = document.getElementById('movingImage');
  
    const moveImage = () => {
      const x = Math.floor(Math.random() * 61) - 30; // Random value between -30 and 30 for X-axis movement
      const rotation = Math.floor(Math.random() * 61) - 30; // Random value between -30 and 30 for rotation

      img.style.transform = `translateX(${x}px) rotate(${rotation}deg)`;
  
      setTimeout(moveImage, 700); // Repeat the movement after 1 second (1000ms)
    };
  
    moveImage(); // Start the movement initially
  }, []);
  

  const redirectToURL = (url) => {
    window.open(url, "_blank");
  };

  let pSize = '14px' ;
  let picSize = "25%" ;

  return (
    <div style={divStyle}>
      <div style={gifBackgroundStyle}></div>
      <div style={{ fontWeight: "bold", position: 'absolute', top: '20px', left: '20px', fontSize: '24px', color: 'black' }}>
        {letters4.map((color, index) => (
            <span key={index} style={{ ...textStyle, color }}>{title[index]}</span>
          ))}
      </div>

      <div style={{ display: 'flex', gap: '2em', position: 'absolute', top: '20px', right: '50px', zIndex: 10 }}>
        <img src={telegramIcon} alt="Telegram" style={{ width: '60px', height: '60px', cursor: 'pointer' }} onClick={() => redirectToURL("https://t.me/+KCkDA3bdOiE5OTQx")} />
      </div>

      
      <div style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
      
        <div onClick={handleClick}>
          {letters.map((color, index) => (
            <span key={index} style={{ ...textStyle, color }}>{initialText[index]}</span>
          ))}
        </div>

        <p style={{ fontSize: pSize, width: '50%', margin: 'auto' }}>
          
        {letters2.map((color, index) => (
            <span key={index} style={{ ...textStyle2, color }}>{otherText[index]}</span>
          ))}

        </p>
        <p style={{ fontSize: pSize, width: '50%', margin: 'auto' }}>
          
        {letters3.map((color, index) => (
            <span key={index} style={{ ...textStyle2, color }}>{otherText2[index]}</span>
          ))}

        </p>

        <button
          style={rainbowBackground}
          onMouseOver={(e) => e.target.style.backgroundColor = 'skyblue'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'lightblue'}
          onClick={() => redirectToURL("https://raydium.io/swap/?inputCurrency=sol&outputCurrency=CvQVDpuF3jYvQb9uKWctLDnSMCAXvziGYa1MdQwDR1Lv&outputSymbol=FUNNYMON&fixed=in")}
        >
          Buy $funnymonkeygif
        </button>

        <button
          style={rainbowBackground}
          onMouseOver={(e) => e.target.style.backgroundColor = 'skyblue'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'lightblue'}
          onClick={() => redirectToURL("https://dexscreener.com/solana/")}
        >
          Dextools
        </button>
      </div>

      <img
        id="movingImage"
        src={left}
        alt="Large Image"
        style={{
          width: picSize,
          height: 'auto',
          display: 'block',
          margin: 'auto',
          cursor: 'pointer',
          transition: 'transform 0.3s, width 0.3s',
          fontFamily: 'Comic Sans MS',
          position: 'absolute',
        }}
      />
    </div>
  );
};

export default App;
