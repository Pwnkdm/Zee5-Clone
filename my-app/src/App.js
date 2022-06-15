import "./App.css";
import Navbar from "./componants/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Footer from "./componants/Footer";
import Homepage from "./Pages/Homepage";
import Tvshows from "./Pages/Tvshows";
import Movies from "./Pages/Movies";
import Music from "./Pages/Music";
import Login from "./Pages/Login";
import Ragister from "./Pages/Ragister";
import Aboutus from "./Pages/Aboutus";
function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/tvshows" element={<Tvshows />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/music" element={<Music />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Ragister />}></Route>
          <Route path="/aboutus" element={<Aboutus />}></Route>
        </Routes>
        <Footer />
      </ChakraProvider>
    </div>
  );
}

export default App;
