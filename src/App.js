import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer closeOnClick pauseOnHover />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
