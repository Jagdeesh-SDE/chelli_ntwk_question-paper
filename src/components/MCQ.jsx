import { useEffect } from "react";
import "./MCQ.css";
import Options from "./Options";
import { useLocation } from "react-router-dom";

function MCQ({ questions }) {
  const location = useLocation();

  useEffect(() => {
    // myRef.current.scrollIntoView({ behavior: "smooth" });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);
  return (
    <div>
      {questions.map((eachQuestion, i) => (
        <div className="question mb-10 w-[100%]" key={eachQuestion.id}>
          <h2 className="text-base font-medium mb-3">
            {eachQuestion.id}. {eachQuestion.question}
          </h2>
          <Options eachQuestion={eachQuestion} />
        </div>
      ))}
    </div>
  );
}
export default MCQ;
