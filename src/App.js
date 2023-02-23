import "./App.css";
import Nav from "./layout/Nav";
import Header from "./components/Header";
import Main from "./components/Main";
// import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />
      {/* <Routes>
        <Route path='/' element={<Home />} />
      </Routes> */}
      <Header />
      <Main />
    </div>
  );
}

export default App;
