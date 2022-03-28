import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Pages/Header";
import Schedule from "./components/Pages/Schedule";
import Category from "./components/Pages/Category";
import "./App.css";

 function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Schedule />} />
          <Route path="category" element={<Category />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
