import { useState } from "react";

const eachQuestion = [
  {
    id: 1,
    question:
      "Which of the following statements accurately describes a routing table?",
    options: [
      "A dynamic table in a router that stores information about connected networks and how to reach them.",
      "A static list of websites a user frequently visits.",
      "A table used to calculate the distance between two network devices.",
      "A database containing all IP addresses on the internet.",
    ],
    answer:
      "A dynamic table in a router that stores information about connected networks and how to reach them.",
  },
  {
    id: 2,
    question: "A network mask is used for",
    options: [
      "Specifying the number of usable IP addresses within a subnet.",
      "Creating strong passwords for network devices.",
      "Preventing data corruption during packet transmission.",
      "Filtering incoming email messages.",
    ],
    mutlipleAnswers: true,
    answer: [
      "Specifying the number of usable IP addresses within a subnet.",
      "Filtering incoming email messages.",
    ],
  },
  {
    id: 3,
    question:
      "You suspect an OSPF router is not purging stale entries from its Link-State Database (LSDB). What might be the cause",
    options: [
      "The router is configured as a Designated Router (DR) in its area.",
      "The neighbor relationship with other routers is down.",
      "The administrative distance of a route is set too high.",
      "The network mask of a subnet is incorrect.",
    ],
    answer: "The neighbor relationship with other routers is down.",
  },
  {
    id: 4,
    question:
      "If two OSPF routers have discrepancies in their Link-State Databases, what is a common approach to resolve the issue?",
    options: [
      "Manually configure static routes on both routers.",
      "Restart the OSPF process on one or both routers.",
      "Change the area type of one of the routers.",
      "Increase the HELLO timer interval on the interfaces.",
    ],
    answer: "Restart the OSPF process on one or both routers.",
  },
];

function CheckBoxLogic() {
  return (
    <>
      <div>CheckBoxLogic</div>
      <h2 className="text-base font-medium mb-3">
        {eachQuestion[0].id}. {eachQuestion[0].question}
      </h2>
      <Options eachQuestion={eachQuestion[0]}></Options>
      <h2 className="text-base font-medium mb-3">
        {eachQuestion[1].id}. {eachQuestion[1].question}
      </h2>

      <Options eachQuestion={eachQuestion[1]}></Options>
      <h2 className="text-base font-medium mb-3">
        {eachQuestion[2].id}. {eachQuestion[2].question}
      </h2>
      <Options eachQuestion={eachQuestion[2]}></Options>
      <h2 className="text-base font-medium mb-3">
        {eachQuestion[3].id}. {eachQuestion[3].question}
      </h2>
      <Options eachQuestion={eachQuestion[3]}></Options>
    </>
  );
}
export default CheckBoxLogic;

function Options({ eachQuestion }) {
  const [selected, setSelcted] = useState([]);

  function handleClick(event) {
    setSelcted([...selected, event.target.value]);
    // console.log(typeof mcqOption);
  }
  return (
    <>
      <article>
        {eachQuestion.options.map((mcqOption) =>
          !eachQuestion.mutlipleAnswers ? (
            <div
              className={
                selected.includes(mcqOption) &&
                mcqOption === eachQuestion.answer
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
                  ? "option correct-option p-1.5"
                  : selected.includes(mcqOption) &&
                    mcqOption !== eachQuestion.answer
                  ? "option wrong-option p-1.5"
                  : "option p-1.5"
              }
              key={mcqOption}
            >
              <label>
                <div className="form-control">
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
                          ? "checkbox"
                          : !eachQuestion.answer.includes(mcqOption)
                          ? "checkbox checkbox-error"
                          : "checkbox checkbox-success"
                      }
                    />
                    <span className="label-text text-sm ml-5">{mcqOption}</span>
                  </label>
                </div>
              </label>
            </div>
          )
        )}
      </article>
    </>
  );
}
