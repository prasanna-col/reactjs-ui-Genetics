import { ThemeProvider } from "@material-ui/core/styles";

import Login from "./components/login/Login";
import RouterPage from "./RouterPage";
import { Provider } from "react-redux";
import Store from "./redux/Store";
import { theme } from "./theme";
import "./App.css";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Provider store={Store}>
          <RouterPage />
        </Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
