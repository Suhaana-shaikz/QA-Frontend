// 


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

      flex
      items-center
      justify-center

      relative
      overflow-hidden

      bg-gradient-to-br
      from-sky-50
      via-white
      to-cyan-50
    ">

      {/* LIGHT BACKGROUND BLURS */}

      <div className="
        absolute
        top-[-120px]
        left-[-120px]

        w-[320px]
        h-[320px]

        bg-cyan-200/40

        rounded-full
        blur-3xl
      "></div>

      <div className="
        absolute
        bottom-[-120px]
        right-[-120px]

        w-[320px]
        h-[320px]

        bg-blue-200/40

        rounded-full
        blur-3xl
      "></div>

      {/* CARD */}

      <div className="
        relative
        z-10

        w-full
        max-w-5xl

        bg-white/90
        backdrop-blur-xl

        border
        border-slate-200

        rounded-[40px]

        shadow-2xl

        p-12

        mx-4
      ">

        {/* TITLE */}

        <h1 className="
          text-6xl
          font-black
          text-center

          bg-gradient-to-r
          from-cyan-500
          to-blue-600

          bg-clip-text
          text-transparent
        ">
          Triage Case
        </h1>

        {/* DESCRIPTION */}

        <div className="
          mt-10
          space-y-6
        ">

          <p className="
            text-2xl
            text-slate-600
            text-center
            leading-relaxed
          ">
            Your participation matters
            to us, and your honest
            opinion is essential for
            understanding your viewpoint
            for this study
          </p>

          {/* INSTRUCTIONS */}

          <div>

            <h2 className="
              text-4xl
              font-black
              text-center

              text-cyan-600
            ">
              Instructions
            </h2>

            <div className="
              mt-6
              space-y-5

              text-xl
              text-slate-600

              text-center
              leading-relaxed
            ">

              <p>
                Please answer all questions
                based on your personal
                experience and honest opinions.
              </p>

              <p>
                There are no right or wrong
                answers — we are simply
                interested in your perspective.
              </p>

              <p>
                Your input is a vital part
                of our research. We are truly
                grateful for your time and
                contribution.
              </p>

            </div>

          </div>

          {/* QUESTION COUNT */}

          <div className="
            text-center
            pt-3
          ">

            <p className="
              text-3xl
              font-black
              text-cyan-600
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

            bg-slate-100

            border
            border-slate-200

            px-8
            py-5

            rounded-3xl

            cursor-pointer

            shadow-sm
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
                w-6
                h-6

                accent-cyan-500
              "

            />

            <span className="
              text-2xl
              font-bold

              text-slate-700
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

              text-center

              text-red-500
              text-lg
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

          mt-12
        ">

          <button

            onClick={handleNext}

            className="
              px-12
              py-5

              rounded-3xl

              bg-gradient-to-r
              from-cyan-500
              to-blue-600

              hover:from-cyan-600
              hover:to-blue-700

              text-white

              text-2xl
              font-black

              shadow-xl

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

            bg-black/40

            flex
            items-center
            justify-center

            z-50
          ">

            <div className="
              bg-white

              p-8

              rounded-3xl

              w-[420px]

              shadow-2xl
            ">

              <h1 className="
                text-3xl
                font-black

                text-red-500
              ">
                Validation Error
              </h1>

              <p className="
                mt-4

                text-lg
                text-slate-600

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

                    rounded-2xl

                    bg-gradient-to-r
                    from-cyan-500
                    to-blue-600

                    text-white

                    font-bold
                    text-lg

                    hover:scale-105

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