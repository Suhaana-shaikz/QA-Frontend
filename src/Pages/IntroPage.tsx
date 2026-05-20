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
      overflow-hidden
      bg-[#f5f5f5]
      px-4
      py-4
    ">

      <div className="
        max-w-5xl
        mx-auto
      ">

        <h1 className="
          text-4xl
          font-black
          text-slate-900
        ">
          Triage Case
        </h1>

        <div className="
          mt-4
          space-y-4
          text-slate-700
        ">

          <p className="
            text-lg
            leading-relaxed
          ">
            Your participation matters
            to us and your honest
            opinion is essential for
            this study.
          </p>

          <div>

            <h2 className="
              text-2xl
              font-bold
              text-slate-900
            ">
              Instructions
            </h2>

            <div className="
              mt-3
              space-y-3
              text-lg
              leading-relaxed
            ">

              <p>
                Please answer all
                questions honestly.
              </p>

              <p>
                There are no right
                or wrong answers.
              </p>

              <p>
                Your contribution
                is valuable for
                our research.
              </p>

            </div>

          </div>

          <div>

            <p className="
              text-lg
              text-slate-800
            ">
              There are 20 questions
              in this survey.
            </p>

          </div>

        </div>

        <div className="
          mt-6
        ">

          <label className="
            flex
            items-center
            gap-3
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
                w-4
                h-4
              "
            />

            <span className="
              text-base
              font-semibold
              text-green-600
            ">
              Accept survey privacy policy
            </span>

          </label>

        </div>

        {

          error && (

            <div className="
              mt-3
              text-red-500
              text-sm
              font-semibold
            ">

              {error}

            </div>

          )

        }

        <div className="
          flex
          justify-end
          mt-6
        ">

          <button

            onClick={handleNext}

            className="
              px-6
              py-2
              bg-green-500
              hover:bg-green-600
              text-white
              rounded-lg
              text-base
              font-bold
            "

          >
            Next
          </button>

        </div>

      </div>

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
              p-6
              rounded-2xl
              w-[350px]
            ">

              <h1 className="
                text-2xl
                font-bold
                text-red-500
              ">
                Validation Error
              </h1>

              <p className="
                mt-3
                text-base
              ">
                Please accept the
                privacy policy.
              </p>

              <div className="
                flex
                justify-end
                mt-5
              ">

                <button

                  onClick={() =>
                    setShowModal(false)
                  }

                  className="
                    px-5
                    py-2
                    bg-blue-500
                    text-white
                    rounded-lg
                    text-sm
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

export default IntroPage;