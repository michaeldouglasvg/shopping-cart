import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import Globalstyles from "./components/globals/globalstyles"
import Navbar from "./pages/navbar/navbar";
import Signup from "./pages/home/signup";
import { useState } from "react";
import Shopping from "./pages/home/shopping";

function App() {
  const[showpage, setShoepage] = useState(true)

  const theme = {
    colors: {
      header: "green",
    }
  }

  return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Globalstyles />
          {/* Navigation */}
          <Navbar setShoepage={setShoepage}/>
          <Routes>
          {showpage ? <>
            <Route path="/" element={<Signup />} exact/>
            <Route path="/Login" element={<Signup />}/>
           </>
           :
           <Route path="/shopping" element={<Shopping />}/>
          }
          </Routes>
        </div>
      </ThemeProvider>
  );
}

export default App;
