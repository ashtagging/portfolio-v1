import React, {useState} from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage"
import ErrorPage from "./pages/error/Error";
import ProductiveHomepage from "./pages/productive/menu/ProductiveHomepage";
import Calculator from "./pages/productive/calculator/Calculator";
import Timer from "./pages/productive/timer/Timer";
import TodoList from "./pages/productive/todolist/TodoList";
import Rating from "./pages/interactive-rating-component/Rating";
import Submit from "./pages/interactive-rating-component/Submit";
import Wildernest from "./pages/wildernest/Wildernest";
import Readbay from "./pages/readbay/Readbay";

function App() {
  const [rating, setRating] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="*" element={<ErrorPage/>}/>
        <Route path="/productive" element={<ProductiveHomepage/>}/>
        <Route path="/calculator" element={<Calculator/>}/>
        <Route path="/timer" element={<Timer/>}/>
        <Route path="/todolist" element={<TodoList/>}/>
        <Route path="/rating-component" element={<Rating rating={rating} setRating={setRating}/>}/>
        <Route path="/rating-component-submit" element={<Submit rating={rating} setRating={setRating}/>}/>
        <Route path="/wildernest" element={<Wildernest />} />
        <Route path="/readbay" element={<Readbay />} />
      </Routes>
    </Router>
  );
}

export default App;
