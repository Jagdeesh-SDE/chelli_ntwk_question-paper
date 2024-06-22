import { questionData } from "./questionData";

const formatQuestion = {
  id: 1,
  question: questionData[0],
  options: [questionData[1], questionData[2], questionData[3], questionData[4]],
  answer: questionData[5],
};

const x = {
  id: 1,
  question: "What is the primary purpose of OSPF areas in a network?",
  options: [
    "To define different security zones for routing information.",
    "To group routers with similar characteristics for faster convergence.",
    "To simplify route advertisement and reduce traffic on the network backbone",
    "To create separate routing tables for different parts of the network.",
  ],
  answer:
    "To simplify route advertisement and reduce traffic on the network backbone",
};

function OutputJson() {
  return (
    <div>
      {JSON.stringify(formatQuestion)}

      {/* h1{text-$}*20 */}
    </div>
  );
}
export default OutputJson;
