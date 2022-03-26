import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Models/Pages/Home";
import Schedule from "./Models/Pages/Schedule";
import Category from "./Models/Pages/Category";
import "./App.css";

 function App() {
  return (
    <BrowserRouter className='App'>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Schedule />} />
          <Route path="category" element={<Category />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
