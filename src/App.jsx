// 1. Import useEffect
import { useState, useEffect } from 'react'; 
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import './App.css'; 

function App() {
  const siteTitle = "Wild Chicken Booby Cat";
  const mainSubtitle = "The Official Lair";
  const footerText = "Copyright 2025 © Booby Kitterz Inc.";

  // --- 2. LAZY INITIALIZATION (The "Load" Step) ---
  // Instead of just passing the array, we pass a function.
  // This runs ONLY ONCE when the app first boots up.
  const [nicknames, setNicknames] = useState(() => {
    // Check local storage for a key called "boobyNicknames"
    const saved = localStorage.getItem("boobyNicknames");
    
    // If we found data, turn it from a string back into an array
    if (saved) {
        return JSON.parse(saved);
    } 
    // If no data found (first time visitor), use the defaults
    return ["Booby Chicken", "Slooby", "Blooters", "The Queen"];
  });

  // --- 3. THE SIDE EFFECT (The "Save" Step) ---
  // This runs every time the [nicknames] variable changes.
  useEffect(() => {
    // We save the array as a text string
    localStorage.setItem("boobyNicknames", JSON.stringify(nicknames));
  }, [nicknames]); // <--- The "Dependency Array" tells React what to watch

  function addNickname(newName) {
    setNicknames([...nicknames, newName]);
  }

  function removeNickname(nameToDelete) {
    setNicknames(nicknames.filter((name) => name !== nameToDelete));
  }

  return (
    <div className="appContainer"> 
      <Header title={siteTitle} /> 
      
      <MainContent 
        subtitle={mainSubtitle} 
        nicknames={nicknames} 
        onAddNickname={addNickname} 
        onRemoveNickname={removeNickname}
      />
      
      <Footer copyright={footerText} />
    </div>
  );
}

export default App;