import "./MCQ.css";
import Options from "./Options";
import { questions } from "../utils/data";

function MCQ() {
  return (
    <>
      {questions.map((eachQuestion, i) => (
        <div className="question" key={eachQuestion.id}>
          <h2>
            {eachQuestion.id}. {eachQuestion.question}
          </h2>
          <Options eachQuestion={eachQuestion} />
        </div>
      ))}
    </>
  );
}
export default MCQ;
