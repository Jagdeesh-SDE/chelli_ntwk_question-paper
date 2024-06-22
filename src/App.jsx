import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MCQ from "./components/MCQ";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <section className="mx-auto w-[80%] min-h-[100vh]">
                <MCQ />
              </section>
            }
          ></Route>
          <Route
            path="/ip-connectivity"
            element={
              <section className="mx-auto w-[80%] min-h-[100vh]">
                <h1 className="text-3xl">
                  IP-Connectivity Question will be coming here
                </h1>
              </section>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
