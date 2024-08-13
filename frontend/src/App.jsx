import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import { Dashboard } from "./pages/Dashboard"
import Map from "./components/Map";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Map" element={<Map />
  } />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
