import { Route, Routes ,Navigate} from "react-router-dom";

import { BrowserRouter } from 'react-router-dom';
import Header from "./components/Header";
import SignIn from "./Pages/SignIn";
import PrivateRoute from "./components/PrivateRoute";
import AuthentificationRoute from "./components/AuthentificationRoute";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
      <Route element={<AuthentificationRoute/>} >
        <Route path="/" element={<Navigate to="/signin" />} />
        <Route path="/signin" element={< SignIn/>} />
      </Route>
        <Route element={<PrivateRoute/>} >
        <Route path="/Dashboard" element={<Dashboard/>} />
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
