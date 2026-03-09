import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header/Header";
import { useIsTablet } from "./hooks/useMediaQuery";
import { AppRoutes } from "./app/router/routes";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <BrowserRouter>
          <Header showNav={true} showUserMenu={true} />
          <AppRoutes />
        </BrowserRouter>
      </SnackbarProvider>
    </>
  );
}

export default App;
