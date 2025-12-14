import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="px-10">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
