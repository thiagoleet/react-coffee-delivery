import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/theme/default";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { CoffeesContextProvider } from "./contexts/CoffeesContextProvider";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeesContextProvider>
          <Router />
        </CoffeesContextProvider>
      </BrowserRouter>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
      />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
