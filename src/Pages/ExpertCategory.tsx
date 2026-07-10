// 

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const QUESTION_API =
"https://examsystem-4.onrender.com";

function ExpertCategory() {

  const navigate = useNavigate();

  const [data, setData] =
  useState({

    aiExpert: "",
    triageExpert: ""

  });

  const [loading,
  setLoading]
  =
  useState(false);

  const handleStart =
  async () => {

    if (
      !data.aiExpert ||
      !data.triageExpert
    ) {

      alert(
        "Please answer all questions."
      );

      return;

    }

    setLoading(true);

    try {

      localStorage.setItem(
        "expertCategory",
        JSON.stringify(data)
      );

      const limit =
      Number(
        localStorage.getItem(
          "questionLimit"
        )
      ) || 20;

      const res =
      await axios.get(
        `${QUESTION_API}/questions/random/${limit}`
      );

      localStorage.setItem(
        "questions",
        JSON.stringify(res.data)
      );

      navigate("/exam");

    } catch (error) {

      console.log(error);

      alert(
        "Failed to load questions."
      );

    } finally {

      setLoading(false);

    }

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

      {/* BACKGROUND BLURS */}

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

      {/* MAIN CARD */}

      <div className="
        relative
        z-10

        w-full
        max-w-3xl

        bg-white/90
        backdrop-blur-xl

        border
        border-slate-200

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
          from-cyan-500
          to-blue-600

          bg-clip-text
          text-transparent
        ">
          Expert Category
        </h1>

        <p className="
          text-center
          text-slate-500
          text-lg
          mt-4
        ">
          Please answer the following
          questions before starting
          the survey.
        </p>

        {/* QUESTIONS */}

        <div className="
          mt-10
          space-y-8
        ">

          {/* AI EXPERT */}

          <div className="
            bg-slate-50

            border
            border-slate-200

            rounded-3xl

            p-6
          ">

            <h2 className="
              text-2xl
              font-bold
              text-slate-700
            ">
              Are you an AI Expert?
            </h2>


<p className="
    mt-3
    text-slate-500
    text-base
    leading-8
">
    <span className="font-semibold">Note:</span> Think of AI as a tool that can be trained to perform specific intelligent tasks, rather than as a human-like robot or brain.
</p>


            <div className="
              flex
              gap-5
              mt-5
            ">

              {/* YES */}

              <label className="
                flex
                items-center
                gap-3

                px-6
                py-4

                rounded-2xl

                bg-white

                border
                border-slate-200

                shadow-sm

                cursor-pointer
              ">

                <input

                  type="radio"

                  name="aiExpert"

                  value="Yes"

                  checked={
                    data.aiExpert === "Yes"
                  }

                  onChange={(e) =>
                    setData({
                      ...data,
                      aiExpert:
                      e.target.value
                    })
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
                  Yes
                </span>

              </label>

              {/* NO */}

              <label className="
                flex
                items-center
                gap-3

                px-6
                py-4

                rounded-2xl

                bg-white

                border
                border-slate-200

                shadow-sm

                cursor-pointer
              ">

                <input

                  type="radio"

                  name="aiExpert"

                  value="No"

                  checked={
                    data.aiExpert === "No"
                  }

                  onChange={(e) =>
                    setData({
                      ...data,
                      aiExpert:
                      e.target.value
                    })
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
                  No
                </span>

              </label>

            </div>

          </div>

          {/* TRIAGE EXPERT */}

          <div className="
            bg-slate-50

            border
            border-slate-200

            rounded-3xl

            p-6
          ">

            <h2 className="
              text-2xl
              font-bold
              text-slate-700
            ">
              Are you a Triage Expert?
            </h2>

            <div className="
              flex
              gap-5
              mt-5
            ">

              {/* YES */}

              <label className="
                flex
                items-center
                gap-3

                px-6
                py-4

                rounded-2xl

                bg-white

                border
                border-slate-200

                shadow-sm

                cursor-pointer
              ">

                <input

                  type="radio"

                  name="triageExpert"

                  value="Yes"

                  checked={
                    data.triageExpert
                    === "Yes"
                  }

                  onChange={(e) =>
                    setData({
                      ...data,
                      triageExpert:
                      e.target.value
                    })
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
                  Yes
                </span>

              </label>

              {/* NO */}

              <label className="
                flex
                items-center
                gap-3

                px-6
                py-4

                rounded-2xl

                bg-white

                border
                border-slate-200

                shadow-sm

                cursor-pointer
              ">

                <input

                  type="radio"

                  name="triageExpert"

                  value="No"

                  checked={
                    data.triageExpert
                    === "No"
                  }

                  onChange={(e) =>
                    setData({
                      ...data,
                      triageExpert:
                      e.target.value
                    })
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
                  No
                </span>

              </label>

            </div>

          </div>

        </div>

        {/* BUTTONS */}

        <div className="
          flex
          justify-between

          mt-10
        ">

          {/* PREVIOUS */}

          <button

            onClick={() =>
              navigate("/demographic")
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
          </button>

          {/* START */}

          <button

            onClick={handleStart}

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
            "

          >

            {

              loading

              ?

              "Loading..."

              :

              "Start Survey"

            }

          </button>

        </div>

      </div>

    </div>

  );

}

export default ExpertCategory;