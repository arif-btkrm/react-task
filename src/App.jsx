import { Routes, Route,useLocation } from "react-router-dom";
import Problem1 from "./components/problem1/Problem-1.jsx";
import Menu from "./components/Menu.jsx";
import Problem2 from "./components/problem2/Problem-2.jsx";
import Modal from './components/problem2/modal/modal';

import Index from "./components/Index.jsx";

function App() {

  return (
    <>
      <Routes >
        <Route path="/" element={<Index />} />
        <Route path="/" element={<Menu />}/>
          <Route path="problem-1" element={<Problem1 />} />
          <Route path="problem-2" element={<Problem2 />} />
      </Routes>
    </>
  );
}

export default App;
