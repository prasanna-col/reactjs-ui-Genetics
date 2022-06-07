import Login from "./components/login/Login";
import RouterPage from "./RouterPage";
import { Provider } from "react-redux";
import Store from "./redux/Store";


function App() {
  return (
    <div>
      <Provider store={Store}>
        <RouterPage />
      </Provider>
    </div>
  );
}

export default App;
