// 



import { useNavigate } from "react-router-dom";
import { useState } from "react";

function IntroPage() {

  const navigate = useNavigate();

  const [accepted, setAccepted] =
    useState(false);

  const handleNext = () => {

    if (!accepted) {

      alert(
        "I consent to participate in this surevey."
      );

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
      from-[#eef7ff]
      via-[#f8fbff]
      to-[#e0f2fe]
    ">

      {/* TOP RIGHT BLUR */}

      <div className="
        absolute
        top-[-100px]
        right-[-100px]

        w-[300px]
        h-[300px]

        bg-cyan-200/50

        rounded-full
        blur-3xl
      "></div>

      {/* BOTTOM LEFT BLUR */}

      <div className="
        absolute
        bottom-[-100px]
        left-[-100px]

        w-[280px]
        h-[280px]

        bg-blue-200/50

        rounded-full
        blur-3xl
      "></div>

      {/* MAIN CARD */}

      <div className="
        relative
        z-10

        w-full
        max-w-4xl

        bg-white/80
        backdrop-blur-xl

        border
        border-white/40

        rounded-[32px]

        shadow-[0_20px_80px_rgba(0,0,0,0.08)]

        px-14
        py-12

        mx-4
      ">

        {/* SMALL TOP BADGE */}

        <div className="
          flex
          justify-center
        ">

          <div className="
            px-5
            py-2

            rounded-full

            bg-cyan-100

            text-cyan-700

            text-sm
            font-bold
          ">
            Research Survey
          </div>

        </div>

        {/* TITLE */}

        <h1 className="
          mt-5

          text-5xl
          font-black

          text-center

          text-slate-800
        ">
          Triaging SOS Messages 
        </h1>

        {/* SUBTITLE */}

        <p className="
          mt-5

          text-center

          text-slate-500

          text-xl
          leading-relaxed
        ">
          Your responses will help us
          better understand disaster
          urgency assessment and
          decision-making perspectives.
        </p>

        {/* INSTRUCTIONS BOX */}

        <div className="
          mt-10

          grid
          md:grid-cols-3

          gap-5
        ">

          {/* CARD 1 */}

          <div className="
            bg-[#f8fbff]

            border
            border-slate-100

            rounded-3xl

            p-5

            text-center
          ">

            <div className="
              text-4xl
            ">
              📝
            </div>

            <h2 className="
              mt-3

              text-lg
              font-black

              text-slate-700
            ">
              Honest Answers
            </h2>

            <p className="
              mt-2

              text-sm
              leading-relaxed

              text-slate-500
            ">
              Please answer based on
              your personal perspective.
            </p>

          </div>

          {/* CARD 2 */}

          <div className="
            bg-[#f8fbff]

            border
            border-slate-100

            rounded-3xl

            p-5

            text-center
          ">

            <div className="
              text-4xl
            ">
              📊
            </div>

            <h2 className="
              mt-3

              text-lg
              font-black

              text-slate-700
            ">
              20 Questions
            </h2>

            <p className="
              mt-2

              text-sm
              leading-relaxed

              text-slate-500
            ">
              The survey contains
              disaster scenario-based
              urgency questions.
            </p>

          </div>

          {/* CARD 3 */}

          <div className="
            bg-[#f8fbff]

            border
            border-slate-100

            rounded-3xl

            p-5

            text-center
          ">

            <div className="
              text-4xl
            ">
              🔒
            </div>

            <h2 className="
              mt-3

              text-lg
              font-black

              text-slate-700
            ">
              Privacy Protected
            </h2>

            <p className="
              mt-2

              text-sm
              leading-relaxed

              text-slate-500
            ">
              Your responses are
              secure and used only
              for research purposes.
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

            bg-slate-50

            border
            border-slate-200

            px-6
            py-4

            rounded-2xl

            cursor-pointer
          ">

            <input

              type="checkbox"

              checked={accepted}

              onChange={(e) =>
                setAccepted(
                  e.target.checked
                )
              }

              className="
                w-5
                h-5

                accent-cyan-500
              "

            />

            <span className="
              text-lg
              font-bold

              text-slate-700
            ">
              I accept the privacy policy
            </span>

          </label>

        </div>


   <div className="
          flex
          justify-end

          mt-10
        ">

          {/* <button

            onClick={() =>
              navigate("/")
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

          <button

            onClick={handleNext}

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
            "

          >
            Next
          </button>

        </div>






        {/* BUTTON */}

        {/* <div className="
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

              text-xl
              font-black

              shadow-lg

              transition-all
              duration-300

              hover:scale-105
            "

          >
            I consent to participate in this survey
          </button>

        </div> */}

      </div>

    </div>

  );

}

export default IntroPage;