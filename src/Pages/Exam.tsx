import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const STUDENT_API =
"https://examsystem-3.onrender.com";

// type Question = {

//   id: number;
//   question: string;

//   option1: string;
//   option2: string;
//   option3: string;
//   option4: string;

// };

type Question = {

  id: number;
  questionNumber: number;   // <-- ADD THIS
  question: string;

  option1: string;
  option2: string;
  option3: string;
  option4: string;

    aiScore: string;

};
type Answer = {
    questionId: number;
    questionNumber: number;
    selectedOption: string;
};

function Exam() {

  const [questions, setQuestions] =
  useState<Question[]>([]);

  const [answers, setAnswers] =
  useState<Answer[]>([]);

  const [currentQuestion,
  setCurrentQuestion]
  =
  useState(0);

  const [error, setError] =
  useState("");

  const [showModal,
  setShowModal]
  =
  useState(false);

  const navigate = useNavigate();

  // LOAD QUESTIONS

  useEffect(() => {

    const saved =
      localStorage.getItem("questions");

    if (!saved) {

      setError("Session expired");

      setShowModal(true);

      return;

    }

    setQuestions(JSON.parse(saved));

  }, []);

  // CURRENT QUESTION

  const question =
    questions[currentQuestion];


if (questions.length === 0) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h2 className="text-2xl font-bold text-gray-600">
        Loading Questions...
      </h2>
    </div>
  );
}


  // SELECT OPTION

  const handleSelect = (
    option: string
  ) => {

    if (!question) return;

    setAnswers(prev => [

      ...prev.filter(
        a =>
          a.questionId !== question.id
      ),

//  {
//     questionId: question.id,
//     questionNumber: currentQuestion + 1,
//     selectedOption: option
// }
{
    questionId: question.id,
    questionNumber: question.questionNumber,
    selectedOption: option
}

    ]);

    setError("");

  };

  // CURRENT ANSWER

  const selected =
    answers.find(
      a =>
        a.questionId === question?.id
    );

  // PROGRESS

  const progress =
    questions.length === 0
    ?
    0
    :
    ((currentQuestion + 1)
    /
    questions.length) * 100;

  // NEXT

  const handleNext = () => {

    if (!selected) {

      setError(
        "Please select an option before continuing."
      );

      return;

    }

    if (
      currentQuestion
      <
      questions.length - 1
    ) {

      setCurrentQuestion(
        prev => prev + 1
      );

    }

  };

  // PREVIOUS

  const handlePrevious = () => {

    if (currentQuestion > 0) {

      setCurrentQuestion(
        prev => prev - 1
      );

    }

  };

  // SUBMIT

  const handleSubmit =
  async () => {

    if (
      answers.length !==
      questions.length
    ) {

      setError(
        "Please answer all questions before submitting."
      );

      return;

    }

    // const studentData = JSON.parse(

    //   localStorage.getItem(
    //     "studentData"
    //   ) || "null"

    // );

    const studentData = JSON.parse(

  localStorage.getItem(
    "demographic"
  ) || "null"

);

    try {

      await axios.post(

        `${STUDENT_API}/student/submit`,

        {
          ...studentData,
          answers
        }

      );

      localStorage.removeItem(
        "questions"
      );

      setShowModal(true);

      setError(
        "Survey Submitted Successfully"
      );

      setTimeout(() => {

        navigate("/");

      }, 2000);

    } catch (err) {

      setError(
        "Submission failed"
      );

      setShowModal(true);

    }

  };

  return (

    <div className="
      min-h-screen

      bg-gradient-to-br
      from-sky-50
      via-white
      to-cyan-50

      flex
      items-center
      justify-center

      p-4
    ">

      <div className="
        w-full
        max-w-4xl

        bg-white/90
        backdrop-blur-xl

        border
        border-slate-200

        rounded-[32px]

        shadow-2xl

        overflow-hidden
      ">

        {/* TOP */}

        <div className="
          p-6
          md:p-8

          border-b
          border-slate-200
        ">

          <div className="
            flex
            flex-col
            md:flex-row

            md:items-center
            md:justify-between

            gap-4
          ">

            <div>

              <h1 className="
                text-3xl
                md:text-4xl

                font-black

                bg-gradient-to-r
                from-cyan-500
                to-blue-600

                bg-clip-text
                text-transparent
              ">
                Disaster Survey
              </h1>

              <p className="
                mt-2

                text-slate-500
                text-sm
                md:text-base
              ">
                Please answer honestly
              </p>

            </div>

            {/* QUESTION COUNT */}
{/* 
            <div className="
              bg-slate-100

              px-5
              py-3

              rounded-2xl
            ">

              <p className="
                text-sm
                text-slate-500
              ">
                Question
              </p>

              <h2 className="
                text-2xl
                font-black
                text-blue-600
              ">  {currentQuestion + 1}</h2>

 <p className="mt-3 text-2xl font-semibold">
    {question?.question}
</p>

            </div> */}



            {/* QUESTION COUNT */}

<div className="
  bg-slate-100
  px-5
  py-3
  rounded-2xl
">

  <p className="
    text-sm
    text-slate-500
  ">
    Question
  </p>

  <h2 className="
    text-2xl
    font-black
    text-blue-600
  ">
    {currentQuestion + 1} / {questions.length}
  </h2>

</div>

          </div>

          {/* PROGRESS */}

          <div className="
            mt-6
          ">

            <div className="
              h-3

              bg-slate-200

              rounded-full
              overflow-hidden
            ">

              <div

                style={{
                  width: `${progress}%`
                }}

                className="
                  h-full

                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-600

                  transition-all
                  duration-500
                "

              ></div>

            </div>

          </div>

          {/* QUESTION NAVIGATION */}

          <div className="
            mt-6

            flex
            flex-wrap

            gap-3
          ">

            {

          questions.map((q, index) => {

            const answered = answers.some(
    a => a.questionId === q.id
);

    // const answered =
    //   answers.find(
    //     a =>
    //       a.questionNumber === index + 1
    //   );

    return (

        <button
            key={q.id}
            onClick={() => setCurrentQuestion(index)}
            className={`
              w-11
              h-11
              rounded-xl
              text-sm
              font-bold
              transition-all

              ${
                currentQuestion === index
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg scale-110"
                  : answered
                  ? "bg-green-500 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }
            `}
        >
            {index + 1}
            {/* {q.questionNumber} */}
        </button>

    );

})

            }

          </div>

        </div>

        {/* QUESTION */}

        {

          question && (

            <div className="
              p-6
              md:p-10
            ">

              {/* AI SCORE */}

         

              {/* QUESTION */}

              {/* <h2 className="
                font-medium text-xl text-gray-700

                text-2xl
                md:text-3xl

            

      

                leading-relaxed
              ">

                {question.question}

              </h2> */}


              {/* QUESTION */}

<h2
  className="
    font-medium
    text-xl
    text-gray-700
    text-2xl
    md:text-3xl
    leading-relaxed
  "
>
  {question.question}
</h2>





{/* AI SCORE */}

<div
  className="inline-flex
    items-center
    mt-4
    bg-blue-100
    text-blue-700
    px-4
    py-2
    rounded-xl
    font-semibold
  "

>

  <span className="font-bold text-blue-700">
      AI Score :
  </span>

  <span className="ml-2 font-semibold text-slate-700">
      {question.aiScore}
  </span>

</div>





              {/* ERROR */}

              {

                error && (

                  <div className="
                    mt-8

                    text-red-500

                    text-lg
                    font-semibold
                  ">

                    ● {error}

                  </div>

                )

              }

              {/* OPTIONS */}

              <div className="
                mt-10

                grid
                gap-4
              ">

                {

                  [
                    question.option1,
                    question.option2,
                    question.option3,
                 
                  ]

                  .map(option => (

                    <button

                      key={option}

                      onClick={() =>
                        handleSelect(option)
                      }

                      className={`
                        w-full

                        p-5

                        rounded-2xl

                        border-2

                        text-left

                        transition-all

                        ${
                          selected?.
                          selectedOption
                          === option

                          ?

                          "border-cyan-500 bg-cyan-50"

                          :

                          "border-slate-200 bg-white hover:border-cyan-300"
                        }
                      `}

                    >

                      <div className="
                        flex
                        items-center
                        justify-between
                      ">

                        <div>

                          <h3 className="
                            text-xl
                            font-bold

                            text-slate-700
                          ">

                            {option}

                          </h3>

                        </div>

                        <div className={`
                          w-6
                          h-6

                          rounded-full

                          border-2

                          ${
                            selected?.
                            selectedOption
                            === option

                            ?

                            "bg-cyan-500 border-cyan-500"

                            :

                            "border-slate-300"
                          }
                        `}></div>

                      </div>

                    </button>

                  ))

                }

              </div>

              {/* BUTTONS */}

              <div className="
                flex
                justify-between

                mt-12
              ">

                <button

                  onClick={handlePrevious}

                  disabled={
                    currentQuestion === 0
                  }

                  className="
                    px-6
                    py-3

                    rounded-2xl

                    bg-slate-200

                    text-slate-700
                    font-bold

                    disabled:opacity-50
                  "

                >
                  Previous
                </button>

                {

                  currentQuestion
                  ===
                  questions.length - 1

                  ?

                  <button

                    onClick={handleSubmit}

                    className="
                      px-8
                      py-3

                      rounded-2xl

                      bg-gradient-to-r
                      from-green-500
                      to-emerald-600

                      text-white
                      font-bold

                      shadow-lg
                    "

                  >
                    Submit Survey
                  </button>

                  :

                  <button

                    onClick={handleNext}

                    className="
                      px-8
                      py-3

                      rounded-2xl

                      bg-gradient-to-r
                      from-cyan-500
                      to-blue-600

                      text-white
                      font-bold

                      shadow-lg
                    "

                  >
                    Next
                  </button>

                }

              </div>

            </div>

          )

        }

      </div>

      {/* MODAL */}

      {

        showModal && (

          <div className="
            fixed
            inset-0

            bg-black/50

            flex
            items-center
            justify-center

            z-50
          ">

            <div className="
              bg-white

              p-10

              rounded-3xl

              w-[450px]

              shadow-2xl
            ">

              <h1 className="
                text-3xl
                font-black

                text-red-500
              ">
                Notification
              </h1>

              <p className="
                mt-6

                text-xl

                text-slate-700
              ">

                {error}

              </p>

              <div className="
                flex
                justify-end

                mt-10
              ">

                <button

                  onClick={() =>
                    setShowModal(false)
                  }

                  className="
                    px-6
                    py-3

                    bg-blue-500

                    text-white

                    rounded-xl

                    font-bold
                  "

                >
                  OK
                </button>

              </div>

            </div>

          </div>

        )

      }

    </div>

  );

}

export default Exam;