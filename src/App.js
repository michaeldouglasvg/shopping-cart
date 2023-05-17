import { ThemeProvider } from "styled-components";
import Globalstyles from "./components/globals/globalstyles"

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
      </div>

    </ThemeProvider>
  );
}

export default App;
