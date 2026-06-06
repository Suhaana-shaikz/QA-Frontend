



import { useNavigate } from "react-router-dom";
import { useState } from "react";

function DemographicPage() {

  const navigate = useNavigate();

  const [data, setData] = useState({

    gender: "",
    age: "",
    qualification: "",
    email: ""

  });

  const handleNext = () => {

    if (
      !data.gender ||
      !data.age ||
      !data.qualification ||
      !data.email
    
    ) {

      alert("Please fill all details.");

      return;

    }

    localStorage.setItem(
      "demographic",
      JSON.stringify(data)
    );

    navigate("/expert");

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
          Demographic Information
        </h1>

        <p className="
          text-center
          text-slate-500
          text-lg
          mt-4
        ">
          Please provide your
          demographic details
          before continuing.
        </p>

        {/* FORM */}

        <div className="
          mt-10
          space-y-6
        ">

          {/* GENDER */}

          <div>

            <label className="
              text-lg
              font-bold
              text-slate-700
            ">
              Gender
            </label>

            <select

              value={data.gender}

              onChange={(e) =>
                setData({
                  ...data,
                  gender: e.target.value
                })
              }

              className="
                w-full
                mt-3

                px-5
                py-4

                rounded-2xl

                border
                border-slate-200

                bg-slate-50

                text-lg
                text-slate-700

                outline-none

                focus:border-cyan-400
                focus:ring-4
                focus:ring-cyan-100
              "

            >

              <option value="">
                Select Gender
              </option>

              <option value="Male">
                Male
              </option>

              <option value="Female">
                Female
              </option>

            </select>

          </div>

          {/* AGE */}

          <div>

            <label className="
              text-lg
              font-bold
              text-slate-700
            ">
              Age
            </label>

            <input

              type="number"

              placeholder="Enter Age"

              value={data.age}

              onChange={(e) =>
                setData({
                  ...data,
                  age: e.target.value
                })
              }

              className="
                w-full
                mt-3

                px-5
                py-4

                rounded-2xl

                border
                border-slate-200

                bg-slate-50

                text-lg
                text-slate-700

                outline-none

                focus:border-cyan-400
                focus:ring-4
                focus:ring-cyan-100
              "

            />

          </div>

          {/* QUALIFICATION */}

          <div>

            <label className="
              text-lg
              font-bold
              text-slate-700
            ">
              Qualification
            </label>

            <input

              type="text"

              placeholder="Enter Qualification"

              value={data.qualification}

              onChange={(e) =>
                setData({
                  ...data,
                  qualification:
                  e.target.value
                })
              }

              className="
                w-full
                mt-3

                px-5
                py-4

                rounded-2xl

                border
                border-slate-200

                bg-slate-50

                text-lg
                text-slate-700

                outline-none

                focus:border-cyan-400
                focus:ring-4
                focus:ring-cyan-100
              "

            />

          </div>

          {/* CITY */}

        

          {/* STATE */}

          <div>

            <label className="
              text-lg
              font-bold
              text-slate-700
            ">
             Email Id:
            </label>

            <input

              type="text"

              placeholder="Enter Your Email Id"

              value={data.state}

              onChange={(e) =>
                setData({
                  ...data,
                  state: e.target.value
                })
              }

              className="
                w-full
                mt-3

                px-5
                py-4

                rounded-2xl

                border
                border-slate-200

                bg-slate-50

                text-lg
                text-slate-700

                outline-none

                focus:border-cyan-400
                focus:ring-4
                focus:ring-cyan-100
              "

            />

          </div>












        </div>

        {/* BUTTONS */}

        <div className="
          flex
          justify-between

          mt-10
        ">

          <button

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
          </button>

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

      </div>

    </div>

  );

}

export default DemographicPage;