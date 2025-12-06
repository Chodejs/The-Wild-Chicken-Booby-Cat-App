import { useState, useEffect } from 'react'; 
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import './App.css'; 

function App() {
  const siteTitle = "Wild Chicken Booby Cat";
  const mainSubtitle = "The Official Lair of Nicknames";
  const footerText = "Copyright 2025 © Booby Kitterz Inc.";

  // --- Theme State ---
  const [isDarkMode, setIsDarkMode] = useState(false);

  // --- Nicknames State ---
  const [nicknames, setNicknames] = useState(() => {
    const saved = localStorage.getItem("boobyNicknames");
    if (saved) return JSON.parse(saved);
    return ["Booby Chicken", "Slooby", "Blooters", "Queen Boobers", "Reow Reow", "Boodles"];
  });

  useEffect(() => {
    localStorage.setItem("boobyNicknames", JSON.stringify(nicknames));
  }, [nicknames]);

  function addNickname(newName) {
    setNicknames([...nicknames, newName]);
  }

  function removeNickname(nameToDelete) {
    setNicknames(nicknames.filter((name) => name !== nameToDelete));
  }

  function toggleTheme() {
    setIsDarkMode(prev => !prev);
  }

  return (
    // Dynamic Class for Dark Mode
    <div className={`appContainer ${isDarkMode ? 'dark-mode' : ''}`}> 
      
      <Header 
        title={siteTitle} 
        isDarkMode={isDarkMode} 
        toggleTheme={toggleTheme} 
      /> 
      
      <MainContent 
        subtitle={mainSubtitle} 
        nicknames={nicknames} 
        onAddNickname={addNickname} 
        onRemoveNickname={removeNickname} 
      />
      
      <Footer 
        copyright={footerText} 
      />
    </div>
  );
}

export default App;