import "./App.css";
import { SnackbarProvider } from "notistack";

import Home from "./components/Pages/Home";

function App() {
  return (
    <>
      <SnackbarProvider>
        <div>
          <Home />
        </div>
      </SnackbarProvider>
    </>
  );
}

export default App;
