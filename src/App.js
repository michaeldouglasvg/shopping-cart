import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import Globalstyles from "./components/globals/globalstyles"
import Navbar from "./pages/navbar/navbar";
import Signup from "./pages/home/signup";
import Shopping from "./pages/home/shopping";
import Cartdisplay from "./pages/cart/cartdisplay";
import { ShopContextProvider } from "./context/shop-context";
import AboutUs from "./pages/about/about-us";
import { SignupInContextProvider } from "./context/firebaseauth";

function App() {

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
          <ShopContextProvider>
            <SignupInContextProvider>
              <Navbar/>
              <Routes>
                <Route path="/" element={<Signup />} exact/>
                <Route path="/Login" element={<Signup />}/>
                <Route path="/shopping" element={<Shopping />}/>
                <Route path="/cart" element={<Cartdisplay />}/>
                <Route path="/about" element={<AboutUs />}/>
              </Routes>
            </SignupInContextProvider>
          </ShopContextProvider>
        </div>
      </ThemeProvider>
  );
}

export default App;
