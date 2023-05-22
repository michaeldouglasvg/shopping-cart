import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import Globalstyles from "./components/globals/globalstyles"
import Navbar from "./pages/navbar/navbar";
import Signup from "./pages/home/signup";
import Shopping from "./pages/home/shopping";
import Cartdisplay from "./pages/cart/cartdisplay";
import { ShopContextProvider } from "./context/shop-context";

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
          <Navbar/>
          <Routes>
            <Route path="/" element={<Signup />} exact/>
            <Route path="/Login" element={<Signup />}/>
            <Route path="/shopping" element={<Shopping />}/>
            <Route path="/cart" element={<Cartdisplay />}/>
          </Routes>
          </ShopContextProvider>
        </div>
      </ThemeProvider>
  );
}

export default App;
