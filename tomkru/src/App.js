import LandingPage from "./LandingPage/LandingPage";
// import RegisterPage from "./LandingPage/RegisterPage";
// import SignInPage from "./LandingPage/SignInPage";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from './Components/Login'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
<Route>
  <Route path="/" element={<LandingPage />} />
  <Route path="/login" element={<Login />} />
 
</Route>
      </Routes>
      </BrowserRouter>

      {/* <SignInPage/> */}
      {/* <RegisterPage/> */}
    </div>
  );
}

export default App;
