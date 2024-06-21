import { useState } from "react";

function Options({ eachQuestion }) {
  const [selected, setSelcted] = useState([]);

  function handleClick(event) {
    setSelcted([...selected, event.target.value]);
  }
  return (
    <article>
      {eachQuestion.options.map((mcqOption) => (
        <div
          className={
            selected.includes(mcqOption) && mcqOption === eachQuestion.answer
              ? "option correct-option"
              : selected.includes(mcqOption) &&
                mcqOption !== eachQuestion.answer
              ? "option wrong-option"
              : "option"
          }
          key={mcqOption}
        >
          <label
            className="container"
            htmlFor={mcqOption + eachQuestion.id}
            onClick={(e) => {
              handleClick(e);
            }}
          >
            {mcqOption}
            <input
              value={mcqOption}
              name={eachQuestion.question}
              id={mcqOption + eachQuestion.id}
              type="radio"
            />
            <span className="checkmark"></span>
          </label>
        </div>
      ))}
    </article>
  );
}
export default Options;
