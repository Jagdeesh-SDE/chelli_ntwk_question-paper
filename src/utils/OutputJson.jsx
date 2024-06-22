import { questionData } from "./questionData";

const formatQuestion = {
  id: 1,
  question: questionData[0],
  options: [questionData[1], questionData[2], questionData[3], questionData[4]],
  answer: questionData[5],
};

const x = {
  id: 1,
  question: "A network prefix is used to differentiate between:",
  options: [
    "Individual devices on a network",
    "The network itself and the devices connected to it",
    "Different types of network traffic (e.g., voice vs. data)",
    "Public and private IP addresses",
  ],
  answer: "The network itself and the devices connected to it",
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
