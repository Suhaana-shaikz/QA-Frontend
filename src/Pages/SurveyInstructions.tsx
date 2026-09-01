import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const QUESTION_API =
  "https://examsystem-4.onrender.com";

function SurveyInstructions() {
  const navigate = useNavigate();

  // const [consent, setConsent] = useState(false);

  const [consent, setConsent] = useState(
  localStorage.getItem("surveyConsent") === "true"
);
  const [loading, setLoading] = useState(false);

  const handleStartSurvey = async () => {
    if (!consent) {
      alert("Please provide your consent before starting the survey.");
      return;
    }

    setLoading(true);

    try {
      // Get number of questions
      const limit =
        Number(localStorage.getItem("questionLimit")) || 20;

      // Get random questions from backend
      const res = await axios.get(
        `${QUESTION_API}/questions/random/${limit}`
      );

      // Save questions
      localStorage.setItem(
        "questions",
        JSON.stringify(res.data)
      );

      // Save consent
      localStorage.setItem(
        "surveyConsent",
        "true"
      );

      // Go to actual survey
      navigate("/exam");

    } catch (error) {
      console.log(error);

      alert(
        "Failed to load questions. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        relative
        overflow-hidden
        bg-gradient-to-br
        from-sky-50
        via-white
        to-cyan-50
        p-4
      "
    >

      {/* BACKGROUND BLURS */}

      <div
        className="
          absolute
          top-[-120px]
          left-[-120px]
          w-[320px]
          h-[320px]
          bg-cyan-200/40
          rounded-full
          blur-3xl
        "
      ></div>

      <div
        className="
          absolute
          bottom-[-120px]
          right-[-120px]
          w-[320px]
          h-[320px]
          bg-blue-200/40
          rounded-full
          blur-3xl
        "
      ></div>


      {/* MAIN CARD */}

      <div
        className="
          relative
          z-10
          w-full
          max-w-4xl
          bg-white/90
          backdrop-blur-xl
          border
          border-slate-200
          rounded-[40px]
          shadow-2xl
          p-10
          mx-4
        "
      >

        {/* TITLE */}

        <h1
          className="
            text-4xl
            md:text-5xl
            font-black
            text-center
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            bg-clip-text
            text-transparent
          "
        >
          Instructions for Survey Participants
        </h1>


        {/* INSTRUCTIONS */}

        <div
          className="
            mt-8
            bg-slate-50
            border
            border-slate-200
            rounded-3xl
            p-7
            text-slate-700
            leading-7
          "
        >

          <p>
            You are participating in a disaster response survey
            based on real-time SOS tweets posted during the
            COVID-19 pandemic in India on the X platform
            (formerly Twitter).
          </p>

          <p className="mt-4">
            Please read each tweet carefully before responding.
          </p>


          <p className="mt-4">
            Each tweet contains a request for emergency medical
            assistance, such as the need for an oxygen cylinder,
            a hospital bed, or other critical medical resources.
            Alongside, the tweets also provide information about
            the COVID-19 patient's medical condition.
          </p>


          <p className="mt-4">
            Your task is to evaluate from the perspective of a
            Disaster Relief Organization the urgency of the
            request by selecting one of the following options:
          </p>


          <ul className="list-disc ml-6 mt-3 space-y-2">

            <li>
              <strong>Low Urgency</strong> – Negligible to slight
              medical needs exist but patient is stable, can wait
              24+ hours.
            </li>

            <li>
              <strong>Medium Urgency</strong> – Declining condition
              requiring attention within hours, oxygen levels 75-90.
            </li>

            <li>
              <strong>High Urgency</strong> – Serious condition
              requiring immediate medical intervention, oxygen
              levels below 75.
            </li>

          </ul>


          <p className="mt-5">
            Please base your assessment on the following factors:
          </p>


          <ul className="list-disc ml-6 mt-3 space-y-2">

            <li>
              The severity of the patient's medical condition.
            </li>

            <li>
              The immediacy of the requested assistance
              (e.g., the need for an oxygen cylinder, ICU bed,
              or emergency hospitalization).
            </li>

            <li>
              The overall tone and context of the tweet,
              including whether it conveys a direct plea for help,
              indicates a lack of available assistance, or suggests
              that the situation is time sensitive.
            </li>

          </ul>


          <p className="mt-5">
            After selecting your response, click
            <strong> "Next" </strong>
            to proceed to the next tweet or
            <strong> "Previous" </strong>
            if you wish to review your previous response.
          </p>


          <p className="mt-4">
            Please answer each question thoughtfully and to the
            best of your judgment. Your responses will contribute
            to research on how people assess the urgency of SOS
            requests during disaster and public health emergencies.
          </p>

        </div>


        {/* CONSENT */}

        <label
          className="
            mt-7
            flex
            items-center
            justify-center
            gap-3
            cursor-pointer
            text-slate-700
            font-semibold
          "
        >

          <input
            type="checkbox"
            checked={consent}
            onChange={(e) =>
              setConsent(e.target.checked)
            }
            className="
              w-5
              h-5
              accent-cyan-500
            "
          />

          <span>
            I consent to participate in this survey
          </span>

        </label>


        {/* BUTTONS */}

        {/* <div
          className="
            flex
            justify-between
            mt-8
          "
        >  */}

          {/* PREVIOUS */}

          {/* <button
            onClick={() =>
              navigate("/expert-category")
            }
            className="
              px-8
              py-4
              rounded-2xl
              bg-slate-200
              text-slate-700
              text-lg
              font-bold
              hover:bg-slate-300
              transition-all
            "
          >
            Previous
          </button> */}


          {/* START SURVEY */}
{/* 
          <button
            onClick={handleStartSurvey}
            disabled={loading}
            className="
              px-8
              py-4
              rounded-2xl
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              hover:from-cyan-600
              hover:to-blue-700
              text-white
              text-lg
              font-black
              shadow-xl
              transition-all
              duration-300
              hover:scale-105
              disabled:opacity-50
              disabled:cursor-not-allowed
            "
          >
            {loading
              ? "Loading..."
              : "Start Survey"}
          </button> */}


          

        {/* </div> */}





<div className="flex justify-between items-center mt-8 sm:mt-10 gap-3 sm:gap-6">

  {/* Previous Button */}
  <button
    onClick={() =>
              navigate("/expert")
            }
    className="
      px-4 py-2.5
      sm:px-6 sm:py-3
      md:px-8 md:py-4
      rounded-xl sm:rounded-2xl
      bg-slate-200
      text-slate-700
      text-sm sm:text-base md:text-lg
      font-bold
      hover:bg-slate-300
      transition-all
      whitespace-nowrap
    "
  >
    Previous
  </button>

  {/* Start Survey Button */}
  <button
      onClick={handleStartSurvey}
            disabled={loading}
    className="
      px-4 py-2.5
      sm:px-6 sm:py-3
      md:px-8 md:py-4
      rounded-xl sm:rounded-2xl
      bg-gradient-to-r
      from-cyan-500
      to-blue-600
      hover:from-cyan-600
      hover:to-blue-700
      text-white
      text-sm sm:text-base md:text-lg
      font-black
      shadow-xl
      transition-all
      duration-300
      hover:scale-105
      whitespace-nowrap
    "
  >
    Start Survey
  </button>

</div>















      </div>

    </div>
  );
}

export default SurveyInstructions;