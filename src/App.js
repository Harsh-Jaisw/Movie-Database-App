import Users from "./component/userComponent/userComponent";
import SearchField from "./component/searchcomponent/searchcomponent"
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Users/>} path="/" />
        <Route element={<SearchField/>} path="/search" />
      </Routes>
    </div>
  );
}
