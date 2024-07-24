import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MCQ from "./components/MCQ";
import Navbar from "./components/Navbar/Navbar";
import OutputJson from "./utils/OutputJson";
import {
  allQuestions,
  ipServicesNetwork,
  quizzQuestions,
  wirelessLocalNetwork,
} from "./utils/data";
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
          <Route
            path="/wireless-lan"
            element={
              <section className="mx-auto w-[80%] min-h-[100vh]">
                <h1 className="text-2xl font-bold mb-10">
                  Wireless-Local-Area-Network
                </h1>
                <MCQ questions={wirelessLocalNetwork} />
              </section>
            }
          ></Route>
          <Route
            path="/ip-services-network"
            element={
              <section className="mx-auto w-[80%] min-h-[100vh]">
                <h1 className="text-2xl font-bold mb-10">
                  IP Services-Network Associate
                </h1>
                <MCQ questions={ipServicesNetwork} />
              </section>
            }
          ></Route>
          <Route
            path="/quick-revision"
            element={
              <section className="mx-auto w-[80%] min-h-[100vh]">
                <h1 className="text-2xl font-bold mb-10">
                  Quick Revision Section
                </h1>
                <MCQ
                  questions={allQuestions}
                  readingMode={true}
                  questionNo={1}
                />
                <MCQ
                  questions={IPConnectivity}
                  readingMode={true}
                  questionNo={46}
                />
                <MCQ
                  questions={NetworkingFundamentals}
                  readingMode={true}
                  questionNo={61}
                />
                <MCQ
                  questions={quizzQuestions}
                  readingMode={true}
                  questionNo={72}
                />
                <MCQ
                  questions={wirelessLocalNetwork}
                  readingMode={true}
                  questionNo={72}
                />
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
