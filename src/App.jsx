import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MCQ from "./components/MCQ";
import Navbar from "./components/Navbar/Navbar";
import OutputJson from "./utils/OutputJson";
import { allQuestions, quizzQuestions } from "./utils/data";
import { IPConnectivity } from "./utils/IP-Connectivity";
import { NetworkingFundamentals } from "./utils/NetworkFundamentals";

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
                  All Questions Section
                </h1>
                <MCQ questions={allQuestions} />
              </section>
            }
          ></Route>
          <Route
            path="/network-fundamentals"
            element={
              <section className="mx-auto w-[80%] min-h-[100vh]">
                <h1 className="text-2xl font-bold mb-10">
                  Network Fundamentals Section
                </h1>
                <MCQ questions={NetworkingFundamentals} />
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
          <Route
            path="/quizzes"
            element={
              <section className="mx-auto w-[80%] min-h-[100vh]">
                <h1 className="text-2xl font-bold mb-10">Quiz Section</h1>
                <MCQ questions={quizzQuestions} />
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
