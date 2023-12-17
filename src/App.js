import React, { useState, useEffect } from 'react';
import './App.css'; // Import a CSS file for styling if needed
import left from "./assets/output_image.jpeg"
import telegramIcon from "./assets/telegram.png";
import twitterIcon from "./assets/twitter.png";
import {isMobile} from 'react-device-detect';

const App = () => {
  const [showChat, setShowChat] = useState(false);
  const [randomLine, setRandomLine] = useState('');

  const lines=[
    "Left curve market particpants are highly unlikely outperform the S&P500. Infact they can barely maintain a longterm profitable PnL",
    "Proud lobotomy survivor and activist",
    
  ]

  useEffect(() => {
    getRandomLine();
  }, []); // Fetch a random line when the component mounts

  const getRandomLine = async () => {
    try {
      const randomIndex = Math.floor(Math.random() * lines.length);
      setRandomLine(lines[randomIndex]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleImageClick = () => {
    setShowChat(!showChat);
    if (!showChat) {
      getRandomLine();
    }
  };
  let pSize = isMobile ? '14px' : '22px'
  let picSize = isMobile ? "75%" : "45%"
  let chatStyle = isMobile ? { width: "45%", position: 'absolute', right: '10%', top: '80%', transform: 'translateY(-50%)', backgroundColor: 'lightgray', padding: '10px', borderRadius: '10px', fontFamily: 'Comic Sans MS', fontSize: '16px' } : { width: "20%", position: 'absolute', right: '10%', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'lightgray', padding: '10px', borderRadius: '10px', fontFamily: 'Comic Sans MS', fontSize: '26px' }
  return (
    <div style={{ backgroundColor: 'white', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'Comic Sans MS' }}>
      <div style={{ fontWeight: "bold", position: 'absolute', top: '20px', left: '20px', fontSize: '24px', color: 'black' }}>
        $RETARD 
      </div>

      <div style={{ display: 'flex', gap: '2em', position: 'absolute', top: '20px', right: '50px' }}>
        <a href="https://t.me/your_telegram_link" target="_blank" rel="noopener noreferrer">
          <img src={telegramIcon} alt="Telegram" style={{ width: '30px', height: '30px', marginRight: '10px', cursor: 'pointer' }} />
        </a>
        <a href="https://twitter.com/your_twitter_link" target="_blank" rel="noopener noreferrer">
          <img src={twitterIcon} alt="Twitter" style={{ width: '30px', height: '30px', cursor: 'pointer' }} />
        </a>
      </div>

      <div style={{ textAlign: 'center' }}>
        <p style={{ fontSize: pSize, width: '50%', margin: 'auto' }}>this shitcoin has cool edgy ticker. its not gud investment. bcus its fuckin $RETARDed. built for left curve market participants. this is not a good coin. its a great coin. that is why it will pump. it was always meant to, since before the inception of Solana itself. embrace retardation. nothing else matters. or makes sense.</p>
        <button
          style={{ fontSize: "22px", backgroundColor: 'lightblue', color: 'white', padding: '10px 20px', borderRadius: '20px', border: 'none', margin: '10px', cursor: 'pointer', fontFamily: 'Comic Sans MS' }}
          onMouseOver={(e) => e.target.style.backgroundColor = 'skyblue'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'lightblue'}
          onClick={() => window.location.href = 'https://www.dextools.io/app/en/solana/pair-explorer/By1JyfYNStqtxMFM7h3rYt9pc9jKZpc1beVdhbKjR4nm'}
        >
          Buy $RETARD
        </button>
        <button
          style={{ fontSize: "22px", backgroundColor: 'lightblue', color: 'white', padding: '10px 20px', borderRadius: '20px', border: 'none', margin: '10px', cursor: 'pointer', fontFamily: 'Comic Sans MS' }}
          onMouseOver={(e) => e.target.style.backgroundColor = 'skyblue'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'lightblue'}
          onClick={() => window.location.href = 'https://www.dextools.io/app/en/solana/pair-explorer/By1JyfYNStqtxMFM7h3rYt9pc9jKZpc1beVdhbKjR4nm'}
        >
          Dextools
        </button>

        <img
          src={left}
          alt="Large Image"
          style={{
            width: picSize, 
            height: 'auto',
            display: 'block',
            margin: 'auto',
            cursor: 'pointer',
            transition: 'transform 0.3s, width 0.3s',
            fontFamily: 'Comic Sans MS'
          }}
          onClick={handleImageClick}
          onMouseOver={(e) => e.target.style.transform = 'scale(0.97) rotate(3deg)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1) rotate(0)'}
        />
                <p style={{ width: '50%', margin: 'auto' }}>click me</p>
        {showChat && (
          <div style={chatStyle}>
            {randomLine}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;