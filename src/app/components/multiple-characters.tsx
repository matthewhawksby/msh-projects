import React, { useState, useEffect, useRef } from 'react';

const MultipleCharactersAnimation = () => {
  const [characters, setCharacters] = useState([]);
  const [stayingCount, setStayingCount] = useState(0);
  const containerRef = useRef(null);
  const animationRef = useRef();
  
  // Hair colors
  const hairColors = [
    '#5D3915', // brown
    '#000000', // black
    '#FFD700', // blonde
    '#FF6347', // red
    '#A52A2A', // auburn
    '#D2B48C', // tan
    '#708090', // gray
    '#4B0082', // indigo
    '#800080', // purple
    '#8B4513'  // saddle brown
  ];
  
  // Shirt colors
  const shirtColors = [
    '#E25822', // orange
    '#FF0000', // red
    '#0000FF', // blue
    '#008000', // green
    '#800080', // purple
    '#FFD700', // yellow
    '#FFC0CB', // pink
    '#FFFFFF', // white
    '#000000', // black
    '#00FFFF'  // cyan
  ];
  
  // Skirt/pants colors
  const bottomColors = [
    '#1A365D', // navy blue
    '#000000', // black
    '#8B4513', // brown
    '#808080', // gray
    '#006400', // dark green
    '#FF0000', // red
    '#800080', // purple
    '#FFC0CB', // pink
    '#FFD700', // yellow
    '#FFFFFF'  // white
  ];

  // Initialize characters
  useEffect(() => {
    if (!containerRef.current) return;
    
    const containerWidth = containerRef.current.offsetWidth;
    const containerHeight = containerRef.current.offsetHeight;
    const characterWidth = 100;
    const characterHeight = 200;
    
    const newCharacters = Array.from({ length: 10 }, (_, index) => {
      // Randomize position but make sure they don't overlap too much
      const x = Math.random() * (containerWidth - characterWidth);
      const y = containerHeight - characterHeight - (Math.random() * 100);
      //const y = 10; // set it to close the bottom of the container

      return {
        id: index,
        x,
        y,
        direction: Math.random() > 0.5 ? 1 : -1,
        speed: 1 + Math.random() * 2,
        isWalking: true,
        hairColor: hairColors[index],
        shirtColor: shirtColors[index],
        bottomColor: bottomColors[index],
        lastDirectionChange: 0,
        lastPositionChange: 0
      };
    });
    
    setCharacters(newCharacters);
  }, []);
  
  // Handle keyboard input
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Numbers 1-9 and 0 (for 10)
      if (e.key >= '0' && e.key <= '9') {
        const numValue = e.key === '0' ? 10 : parseInt(e.key, 10);
        setStayingCount(numValue);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
  
  // Animation loop
  useEffect(() => {
    if (!containerRef.current || characters.length === 0) return;
    
    const containerWidth = containerRef.current.offsetWidth;
    const characterWidth = 60;
    const now = Date.now();
    
    const animate = () => {
      setCharacters(prevCharacters => {
        return prevCharacters.map((char, index) => {
          // If this character should stay still based on stayingCount
          if (index < stayingCount) {
            return { ...char, isWalking: false };
          }
          
          // Otherwise the character should be walking
          const updatedChar = { ...char, isWalking: true };
          const now = Date.now();
          
          // Randomly change direction sometimes (but not too often)
          if (now - char.lastDirectionChange > 5000 && Math.random() < 0.01) {
            updatedChar.direction *= -1;
            updatedChar.lastDirectionChange = now;
          }
          
          // Move the character
          let newX = char.x + (char.speed * char.direction);
          
          // Boundary check - reverse direction if hitting the edge
          if (newX < 0) {
            newX = 0;
            updatedChar.direction = 1;
            updatedChar.lastDirectionChange = now;
          } else if (newX > containerWidth - characterWidth) {
            newX = containerWidth - characterWidth;
            updatedChar.direction = -1;
            updatedChar.lastDirectionChange = now;
          }
          
          updatedChar.x = newX;
          updatedChar.lastPositionChange = now;
          
          return updatedChar;
        });
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [characters.length, stayingCount]);
  
  // Character component
  const Character = ({ character }) => {
    return (
      <div
        style={{
          position: 'absolute',
          left: `${character.x}px`,
          bottom: `${character.y}px`,
          transform: `scaleX(${character.direction})`,
          transition: character.isWalking ? 'none' : 'transform 0.5s ease'
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 120" width="60" height="120">
          <g>
            {/* Hair */}
            <path fill={character.hairColor} d="M30,10 C20,10 13,17 13,27 L13,42 C13,52 20,59 30,59 C40,59 47,52 47,42 L47,27 C47,17 40,10 30,10" />
            
            {/* Face */}
            <circle fill="#F8C8A6" cx="30" cy="30" r="15" />
            <circle fill="#000000" cx="25" cy="27" r="2" />
            <circle fill="#000000" cx="35" cy="27" r="2" />
            <path fill="#000000" d="M30,33 C32,33 34,34 34,34 C34,34 32,36 30,36 C28,36 26,34 26,34 C26,34 28,33 30,33" />
            
            {/* Shirt */}
            <rect fill={character.shirtColor} x="15" y="45" width="30" height="25" rx="5" />
            
            {/* Bottom (skirt/pants) */}
            <rect fill={character.bottomColor} x="18" y="70" width="24" height="20" rx="2" />
            
            {/* Legs */}
            {character.isWalking ? (
              // Walking legs
              <>
                <rect fill="#F8C8A6" x="22" y="90" width="6" height="20" transform="rotate(-15, 25, 90)" />
                <rect fill="#F8C8A6" x="32" y="90" width="6" height="20" transform="rotate(15, 35, 90)" />
                <rect fill="#5D3915" x="20" y="108" width="10" height="7" rx="2" transform="rotate(-15, 25, 108)" />
                <rect fill="#5D3915" x="30" y="108" width="10" height="7" rx="2" transform="rotate(15, 35, 108)" />
              </>
            ) : (
              // Standing legs
              <>
                <rect fill="#F8C8A6" x="22" y="90" width="6" height="20" />
                <rect fill="#F8C8A6" x="32" y="90" width="6" height="20" />
                <rect fill="#5D3915" x="20" y="110" width="10" height="7" rx="2" />
                <rect fill="#5D3915" x="30" y="110" width="10" height="7" rx="2" />
              </>
            )}
          </g>
        </svg>
      </div>
    );
  };
  
  return (
    <div className="flex flex-col items-center w-full">
      <div 
        ref={containerRef} 
        className="relative w-full h-96 border border-gray-300 bg-blue-50 overflow-hidden"
      >
        {characters.map(character => (
          <Character key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default MultipleCharactersAnimation;
