import "./MCQ.css";
import Options from "./Options";
import { questions } from "../utils/data";

function MCQ() {
  return (
    <>
      {questions.map((eachQuestion, i) => (
        <div className="question mb-10 w-[100%]" key={eachQuestion.id}>
          <h2 className="text-base font-medium mb-3">
            {eachQuestion.id}. {eachQuestion.question}
          </h2>
          <Options eachQuestion={eachQuestion} />
        </div>
      ))}
    </>
  );
}
export default MCQ;
