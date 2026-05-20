


import { useNavigate } from "react-router-dom";
import { useState } from "react";

function DemographicPage() {

  const navigate = useNavigate();

  const [data, setData] = useState({

    gender: "",
    age: "",
    qualification: "",
    city: "",
    state: ""

  });

  const handleNext = () => {

    if (
      !data.gender ||
      !data.age ||
      !data.qualification ||
      !data.city ||
      !data.state
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
          Demographic Information
        </h1>

        <div className="
          mt-5
          space-y-4
        ">

          <div>

            <p className="
              text-base
              font-bold
            ">
              Gender
            </p>

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
                mt-2
                p-2
                border
                rounded-lg
                text-base
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

          <div>

            <p className="
              text-base
              font-bold
            ">
              Age
            </p>

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
                mt-2
                p-2
                border
                rounded-lg
                text-base
              "

            />

          </div>

          <div>

            <p className="
              text-base
              font-bold
            ">
              Qualification
            </p>

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
                mt-2
                p-2
                border
                rounded-lg
                text-base
              "

            />

          </div>

          <div>

            <p className="
              text-base
              font-bold
            ">
              City
            </p>

            <input

              type="text"

              placeholder="Enter City"

              value={data.city}

              onChange={(e) =>
                setData({
                  ...data,
                  city: e.target.value
                })
              }

              className="
                w-full
                mt-2
                p-2
                border
                rounded-lg
                text-base
              "

            />

          </div>

          <div>

            <p className="
              text-base
              font-bold
            ">
              State
            </p>

            <input

              type="text"

              placeholder="Enter State"

              value={data.state}

              onChange={(e) =>
                setData({
                  ...data,
                  state: e.target.value
                })
              }

              className="
                w-full
                mt-2
                p-2
                border
                rounded-lg
                text-base
              "

            />

          </div>

        </div>

        <div className="
          flex
          justify-between
          mt-6
        ">

          <button

            onClick={() =>
              navigate("/")
            }

            className="
              px-5
              py-2
              bg-slate-300
              rounded-lg
              text-base
              font-semibold
            "

          >
            Previous
          </button>

          <button

            onClick={handleNext}

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
            Next
          </button>

        </div>

      </div>

    </div>

  );

}

export default DemographicPage;