import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MCQ from "./components/MCQ";
import Navbar from "./components/Navbar/Navbar";
import OutputJson from "./utils/OutputJson";
import { questions } from "./utils/data";
import { IPConnectivity } from "./utils/IP-Connectivity";

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
                <h1 className="text-2xl font-bold mb-10">
                  Network Fundamentals Section
                </h1>
                <MCQ questions={questions} />
              </section>
            }
          ></Route>
          <Route
            path="/ip-connectivity"
            element={
              <section className="mx-auto w-[80%] min-h-[100vh]">
                <h1 className="text-2xl font-bold mb-10">
                  IP-Connectivity Section
                </h1>
                <MCQ questions={IPConnectivity} />
              </section>
            }
          ></Route>
          <Route path="/formatter" element={<OutputJson />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
