import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col items-center justify-center px-10 overflow-x-hidden">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
