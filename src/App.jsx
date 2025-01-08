import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import icon from "/Assets/icon.png";
import Header from "./components/Header";
import LoginPage from "./routes/LoginPage";
import Welcome from "./components/Welcome";

function App() {
  return (
    <Router>
      <div className="font-georgia">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </div>
    </Router>
  );
}

function LandingPage() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);

  const slideInEffect = useSpring({
    transform: loading ? "translateX(0%)" : "translateX(700%)",
    opacity: loading ? 1 : 0,
    from: { transform: "translateX(700%)", opacity: 0 },
    config: { duration: 500 },
  });

  const typingEffect = useSpring({
    opacity: loading ? 1 : 0,
    config: { duration: 300 },
    // login : {duration : 100}
  });

  useEffect(() => {
    const targetText = "Shhop Hebron";
    let index = 0;

    const interval = setInterval(() => {
      setText((prev) => prev + targetText[index]);
      index++;
      if (index === targetText.length - 1) {
        clearInterval(interval);
        setTimeout(() => {
          setLoading(false);
        }, 300);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="h-screen flex justify-center items-center bg-[#FADC41] gap-6">
          <animated.img
            src={icon}
            alt="Shop Hebron Icon"
            className="w-32 h-32"
            style={slideInEffect}
          />
          <animated.h1
            style={typingEffect}
            className="text-[#662D91] text-7xl font-bold"
          >
            {text}
          </animated.h1>
        </div>
      ) : (
        <>
          <Header />
        </>
      )}
    </div>
  );
}

export default App;
