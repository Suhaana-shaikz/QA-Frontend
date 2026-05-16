import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const QUESTION_API =
  "https://examsystem-4.onrender.com";

function ExpertCategory() {

  const navigate = useNavigate();

  const [data, setData] = useState({

    aiExpert: "",
    triageExpert: ""

  });

  const [loading,
  setLoading]
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

  const handleStart = async () => {

    if (loading) return;

    if (
      !data.aiExpert ||
      !data.triageExpert
    ) {

      setError(
        "Please select all expert category options."
      );

      setShowModal(true);

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

      setError(
        "Failed to load questions."
      );

      setShowModal(true);

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="
      min-h-screen
      bg-[#f5f5f5]
      px-6
      py-10
    ">

      <div className="
        max-w-5xl
        mx-auto
      ">

        <h1 className="
          text-5xl
          font-black
        ">
          Expert Category
        </h1>

        <p className="
          text-2xl
          text-slate-600
          mt-6
        ">
          Please answer the following
          questions before starting
          the examination.
        </p>

        {/* ERROR */}

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
                ● Validation Required
              </p>

              <p>
                ● {error}
              </p>

            </div>

          )

        }

        <div className="
          mt-16
          space-y-16
        ">

          {/* AI EXPERT */}

          <div>

            <h2 className="
              text-3xl
              font-bold
            ">
              Are you an AI Expert?
            </h2>

            <div className="
              flex
              gap-10
              mt-6
            ">

              <label className="
                flex
                items-center
                gap-3
                text-2xl
                font-semibold
              ">

                <input

                  type="radio"

                  name="aiExpert"

                  value="Yes"

                  checked={
                    data.aiExpert === "Yes"
                  }

                  onChange={(e) => {

                    setData({
                      ...data,
                      aiExpert:
                      e.target.value
                    });

                    setError("");

                  }}

                  className="
                    w-6
                    h-6
                  "

                />

                Yes

              </label>

              <label className="
                flex
                items-center
                gap-3
                text-2xl
                font-semibold
              ">

                <input

                  type="radio"

                  name="aiExpert"

                  value="No"

                  checked={
                    data.aiExpert === "No"
                  }

                  onChange={(e) => {

                    setData({
                      ...data,
                      aiExpert:
                      e.target.value
                    });

                    setError("");

                  }}

                  className="
                    w-6
                    h-6
                  "

                />

                No

              </label>

            </div>

          </div>

          {/* TRIAGE */}

          <div>

            <h2 className="
              text-3xl
              font-bold
            ">
              Are you a Triage Expert?
            </h2>

            <div className="
              flex
              gap-10
              mt-6
            ">

              <label className="
                flex
                items-center
                gap-3
                text-2xl
                font-semibold
              ">

                <input

                  type="radio"

                  name="triageExpert"

                  value="Yes"

                  checked={
                    data.triageExpert
                    === "Yes"
                  }

                  onChange={(e) => {

                    setData({
                      ...data,
                      triageExpert:
                      e.target.value
                    });

                    setError("");

                  }}

                  className="
                    w-6
                    h-6
                  "

                />

                Yes

              </label>

              <label className="
                flex
                items-center
                gap-3
                text-2xl
                font-semibold
              ">

                <input

                  type="radio"

                  name="triageExpert"

                  value="No"

                  checked={
                    data.triageExpert
                    === "No"
                  }

                  onChange={(e) => {

                    setData({
                      ...data,
                      triageExpert:
                      e.target.value
                    });

                    setError("");

                  }}

                  className="
                    w-6
                    h-6
                  "

                />

                No

              </label>

            </div>

          </div>

        </div>

        {/* BUTTONS */}

        <div className="
          flex
          justify-between
          mt-20
        ">

          <button

            onClick={() =>
              navigate("/demographic")
            }

            className="
              px-8
              py-4
              bg-slate-300
              rounded-xl
              text-xl
              font-semibold
            "

          >
            Previous
          </button>

          <button

            onClick={handleStart}

            disabled={loading}

            className="
              px-10
              py-4
              bg-green-500
              text-white
              rounded-xl
              text-xl
              font-bold
            "

          >

            {

              loading

              ?

              "Loading Questions..."

              :

              "Start Questions"

            }

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
                    px-8
                    py-3
                    bg-blue-500
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

export default ExpertCategory;