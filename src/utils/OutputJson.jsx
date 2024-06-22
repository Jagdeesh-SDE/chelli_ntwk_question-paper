import { questionData } from "./questionData";

const formatQuestion = {
  id: 1,
  question: questionData[0],
  options: [
    questionData[1],
    questionData[2],
    questionData[3],
    questionData[4],
    questionData[5],
    // questionData[6],
  ],
  answer: questionData[6],
  // answer: questionData[7],
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
