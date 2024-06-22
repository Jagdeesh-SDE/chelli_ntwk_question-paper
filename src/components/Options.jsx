import { useState } from "react";

function Options({ eachQuestion }) {
  const [selected, setSelcted] = useState([]);

  function handleClick(event) {
    setSelcted([...selected, event.target.value]);
    // console.log(typeof mcqOption);
  }
  return (
    <article>
      {eachQuestion.options.map((mcqOption) =>
        !eachQuestion.mutlipleAnswers ? (
          <div
            className={
              selected.includes(mcqOption) && mcqOption === eachQuestion.answer
                ? "option correct-option p-1.5"
                : selected.includes(mcqOption) &&
                  mcqOption !== eachQuestion.answer
                ? "option wrong-option p-1.5"
                : "option p-1.5"
            }
            key={mcqOption}
          >
            <label
              className="container text-sm"
              htmlFor={mcqOption + eachQuestion.id}
              onClick={(e) => {
                handleClick(e, eachQuestion.answer);
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
        ) : (
          <div
            className={
              selected.includes(mcqOption) &&
              eachQuestion.answer.includes(mcqOption)
                ? "option correct-option p-0.5"
                : selected.includes(mcqOption) &&
                  mcqOption !== eachQuestion.answer
                ? "option wrong-option p-0.5"
                : "option p-0.5"
            }
            key={mcqOption}
          >
            <div className="form-control w-[100%]">
              <label
                className="cursor-pointer label"
                htmlFor={mcqOption + eachQuestion.id}
                onClick={(e) => {
                  handleClick(e, mcqOption);
                }}
              >
                <input
                  type="checkbox"
                  value={mcqOption}
                  name={eachQuestion.question}
                  id={mcqOption + eachQuestion.id}
                  className={
                    !selected.includes(mcqOption)
                      ? "checkbox checkbox-sm"
                      : !eachQuestion.answer.includes(mcqOption)
                      ? "checkbox checkbox-sm checkbox-error"
                      : "checkbox checkbox-sm checkbox-success"
                  }
                />
                <span className="label-text text-sm ml-5 w-[100%]">
                  {mcqOption}
                </span>
              </label>
            </div>
          </div>
        )
      )}
    </article>
  );
}
export default Options;
