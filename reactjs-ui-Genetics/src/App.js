import { ThemeProvider } from "@material-ui/core/styles";
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloProvider,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import RouterPage from "./RouterPage";
import { Provider } from "react-redux";
import Store from "./redux/Store";
import { theme } from "./theme";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const httpLink = createHttpLink({
    uri: "http://localhost:5000/graphql",
  });

  const token = localStorage.getItem("token");
  const userData = JSON.parse(token);
console.log(userData)
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: token ? "Bearer " + userData?.token : "",
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
  return (
    <div>
      {/* <ToastContainer /> */}
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <Provider store={Store}>
            <RouterPage />
          </Provider>
        </ThemeProvider>
      </ApolloProvider>
    </div>
  );
}

export default App;
