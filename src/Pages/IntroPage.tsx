import { useNavigate } from "react-router-dom";
import { useState } from "react";

function IntroPage() {

  const navigate = useNavigate();

  const [accepted, setAccepted] =
    useState(false);

  const [error, setError] =
    useState("");

  const [showModal,
  setShowModal]
  =
  useState(false);

  const handleNext = () => {

    if (!accepted) {

      setError(
        "Please accept the privacy policy."
      );

      setShowModal(true);

      return;

    }

    navigate("/demographic");

  };

  return (

    <div className="
      min-h-screen
      overflow-hidden
      flex
      items-center
      justify-center
      relative

      bg-gradient-to-br
      from-slate-900
      via-blue-950
      to-cyan-950
    ">

      {/* BACKGROUND BLUR CIRCLES */}

      <div className="
        absolute
        top-[-120px]
        left-[-120px]
        w-[350px]
        h-[350px]
        bg-cyan-500/20
        rounded-full
        blur-3xl
      "></div>

      <div className="
        absolute
        bottom-[-120px]
        right-[-120px]
        w-[350px]
        h-[350px]
        bg-blue-500/20
        rounded-full
        blur-3xl
      "></div>

      {/* MAIN CARD */}

      <div className="
        relative
        z-10

        w-full
        max-w-5xl

        bg-white/10
        backdrop-blur-2xl

        border
        border-white/20

        rounded-[40px]

        shadow-2xl

        p-10

        mx-4
      ">

        {/* TITLE */}

        <h1 className="
          text-5xl
          font-black
          text-center

          bg-gradient-to-r
          from-cyan-300
          to-blue-400

          bg-clip-text
          text-transparent
        ">
          Triage Case
        </h1>

        {/* DESCRIPTION */}

        <div className="
          mt-8
          space-y-5
          text-slate-200
        ">

          <p className="
            text-xl
            leading-relaxed
            text-center
          ">
          Your participation matters to us, and your honest opinion is essential for understanding your viewpoint for this study
          </p>

          {/* INSTRUCTIONS */}

          <div>

            <h2 className="
              text-3xl
              font-bold
              text-cyan-300
              text-center
            ">
              Instructions
            </h2>

            <div className="
              mt-5
              space-y-4
              text-lg
              leading-relaxed
              text-center
              text-slate-200
            ">

              <p>
           Please answer all questions based on your personal experience and honest opinions.
              </p>

              <p>
             There are no right or wrong answers—we are simply interested in your perspective.
              </p>

              <p>
               Your input is a vital part of our research. We are truly grateful for your time and contribution.
              </p>

            </div>

          </div>

          {/* QUESTION COUNT */}

          <div className="
            text-center
            pt-2
          ">

            <p className="
              text-xl
              font-bold
              text-cyan-200
            ">
              There are 20 questions
              in this survey.
            </p>

          </div>

        </div>

        {/* CHECKBOX */}

        <div className="
          mt-10
          flex
          justify-center
        ">

          <label className="
            flex
            items-center
            gap-4

            bg-white/10
            border border-white/10

            px-6 py-4

            rounded-2xl

            cursor-pointer
          ">

            <input

              type="checkbox"

              checked={accepted}

              onChange={(e) => {

                setAccepted(
                  e.target.checked
                );

                setError("");

              }}

              className="
                w-5
                h-5
                accent-cyan-500
              "

            />

            <span className="
              text-lg
              font-semibold
              text-cyan-200
            ">
              Accept survey privacy policy
            </span>

          </label>

        </div>

        {/* ERROR */}

        {

          error && (

            <div className="
              mt-5
              text-red-400
              text-center
              font-semibold
            ">

              {error}

            </div>

          )

        }

        {/* BUTTON */}

        <div className="
          flex
          justify-center
          mt-10
        ">

          <button

            onClick={handleNext}

            className="
              px-10
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

              shadow-2xl

              transition-all
              duration-300

              hover:scale-105
            "

          >
            Start Survey
          </button>

        </div>

      </div>

      {/* MODAL */}

      {

        showModal && (

          <div className="
            fixed
            inset-0
            bg-black/60
            flex
            items-center
            justify-center
            z-50
          ">

            <div className="
              bg-[#111827]
              border
              border-white/10
              p-8
              rounded-3xl
              w-[400px]
              shadow-2xl
            ">

              <h1 className="
                text-3xl
                font-black
                text-red-400
              ">
                Validation Error
              </h1>

              <p className="
                mt-4
                text-lg
                text-slate-300
                leading-relaxed
              ">
                Please accept the
                privacy policy before
                continuing.
              </p>

              <div className="
                flex
                justify-end
                mt-8
              ">

                <button

                  onClick={() =>
                    setShowModal(false)
                  }

                  className="
                    px-6
                    py-3

                    bg-gradient-to-r
                    from-cyan-500
                    to-blue-600

                    hover:from-cyan-600
                    hover:to-blue-700

                    text-white

                    rounded-xl

                    text-base
                    font-bold

                    transition-all
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

export default IntroPage;