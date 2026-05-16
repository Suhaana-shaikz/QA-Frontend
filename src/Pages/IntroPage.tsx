import { useNavigate } from "react-router-dom";
import { useState } from "react";

function IntroPage() {

  const navigate = useNavigate();

  const [accepted,
  setAccepted]
  =
  useState(false);

  const [error,
  setError]
  =
  useState("");

  const [showModal,
  setShowModal]
  =
  useState(false);

  const handleNext = () => {

    if (!accepted) {

      setError(
        "To continue please first accept our survey privacy policy."
      );

      setShowModal(true);

      return;
    }

    setError("");

    navigate("/demographic");

  };

  return (

    <div className="
      min-h-screen
      bg-[#f5f5f5]
      px-6
      py-10
    ">

      <div className="
        max-w-6xl
        mx-auto
      ">

        {/* TITLE */}

        <h1 className="
          text-7xl
          font-black
          text-slate-900
        ">
          Triage Case
        </h1>

        {/* DESCRIPTION */}

        <div className="
          mt-10
          space-y-10
          text-slate-700
        ">

          <p className="
            text-3xl
            leading-relaxed
          ">
            Your participation matters
            to us, and your honest
            opinion is essential for
            understanding your
            viewpoint for this study.
          </p>

          <div>

            <h2 className="
              text-4xl
              font-bold
              text-slate-900
            ">
              Instructions:
            </h2>

            <div className="
              mt-8
              space-y-8
              text-3xl
              leading-relaxed
            ">

              <p>
                Please answer all
                questions based on
                your personal experience
                and honest opinions.
              </p>

              <p>
                There are no right or
                wrong answers —
                we are simply interested
                in your perspective.
              </p>

              <p>
                Your input is a vital
                part of our research.
                We are truly grateful
                for your time and
                contribution.
              </p>

            </div>

          </div>

          <div className="pt-6">

            <p className="
              text-3xl
              text-slate-800
            ">
              Triage Case
            </p>

            <p className="
              mt-6
              text-4xl
              font-bold
              text-slate-800
            ">
              There are 20 questions
              in this survey.
            </p>

          </div>

        </div>

        {/* CHECKBOX */}

        <div className="
          mt-20
        ">

          <label className="
            flex
            items-center
            gap-5
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
                w-8
                h-8
              "
            />

            <span className="
              text-3xl
              font-bold
              text-green-600
            ">
              To continue please first
              accept our survey
              privacy policy.
            </span>

          </label>

        </div>

        {/* RED ERROR TEXT */}

        {

          error && (

            <div className="
              mt-8
              text-red-500
              text-2xl
              font-semibold
              space-y-2
            ">

              <p>
                ● This field is mandatory
              </p>

              <p>
                ● {error}
              </p>

            </div>

          )

        }

        {/* BUTTON */}

        <div className="
          flex
          justify-end
          mt-20
        ">

          <button

            onClick={handleNext}

            className="
              px-12
              py-5
              bg-green-500
              hover:bg-green-600
              text-white
              rounded-xl
              text-2xl
              font-bold
              transition-all
            "

          >
            Next
          </button>

        </div>

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
              w-[500px]
              shadow-2xl
            ">

              <h1 className="
                text-4xl
                font-black
                text-red-500
              ">
                Validation Error
              </h1>

              <p className="
                mt-6
                text-2xl
                text-slate-700
                leading-relaxed
              ">
                Please accept the
                privacy policy before
                continuing to the exam.
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
                    px-8
                    py-3
                    bg-blue-500
                    hover:bg-blue-600
                    text-white
                    rounded-xl
                    text-xl
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