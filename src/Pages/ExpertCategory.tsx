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
    ) return;

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

    } finally {

      setLoading(false);

    }

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
        max-w-4xl
        mx-auto
      ">

        <h1 className="
          text-3xl
          font-black
        ">
          Expert Category
        </h1>

        <p className="
          text-base
          text-slate-600
          mt-2
        ">
          Please answer before
          starting the exam.
        </p>

        <div className="
          mt-6
          space-y-6
        ">

          <div>

            <h2 className="
              text-xl
              font-bold
            ">
              Are you an AI Expert?
            </h2>

            <div className="
              flex
              gap-6
              mt-3
            ">

              <label className="
                flex
                items-center
                gap-2
                text-base
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
                    w-4
                    h-4
                  "

                />

                Yes

              </label>

              <label className="
                flex
                items-center
                gap-2
                text-base
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
                    w-4
                    h-4
                  "

                />

                No

              </label>

            </div>

          </div>

          <div>

            <h2 className="
              text-xl
              font-bold
            ">
              Are you a Triage Expert?
            </h2>

            <div className="
              flex
              gap-6
              mt-3
            ">

              <label className="
                flex
                items-center
                gap-2
                text-base
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
                    w-4
                    h-4
                  "

                />

                Yes

              </label>

              <label className="
                flex
                items-center
                gap-2
                text-base
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
                    w-4
                    h-4
                  "

                />

                No

              </label>

            </div>

          </div>

        </div>

        <div className="
          flex
          justify-between
          mt-8
        ">

          <button

            onClick={() =>
              navigate("/demographic")
            }

            className="
              px-5
              py-2
              bg-slate-300
              rounded-lg
              text-base
            "

          >
            Previous
          </button>

          <button

            onClick={handleStart}

            disabled={loading}

            className="
              px-5
              py-2
              bg-green-500
              text-white
              rounded-lg
              text-base
              font-bold
            "

          >

            {

              loading

              ?

              "Loading..."

              :

              "Start Questions"

            }

          </button>

        </div>

      </div>

    </div>

  );

}

export default ExpertCategory;