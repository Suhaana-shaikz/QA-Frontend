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

  const [error, setError] =
    useState("");

  const [showModal,
  setShowModal]
  =
  useState(false);

  const handleNext = () => {

    if (
      !data.gender ||
      !data.age ||
      !data.qualification ||
      !data.city ||
      !data.state
    ) {

      setError(
        "Please fill all demographic details."
      );

      setShowModal(true);

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
          text-slate-900
        ">
          Demographic Information
        </h1>

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
                ● This form is mandatory
              </p>

              <p>
                ● {error}
              </p>

            </div>

          )

        }

        <div className="
          mt-12
          space-y-10
        ">

          {/* Gender */}

          <div>

            <p className="
              text-2xl
              font-bold
            ">
              Gender
            </p>

            <select

              value={data.gender}

              onChange={(e) => {

                setData({
                  ...data,
                  gender: e.target.value
                });

                setError("");

              }}

              className="
                w-full
                mt-4
                p-4
                border
                rounded-xl
                text-xl
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

            <p className="
              text-2xl
              font-bold
            ">
              Age
            </p>

            <input

              type="number"

              value={data.age}

              onChange={(e) => {

                setData({
                  ...data,
                  age: e.target.value
                });

                setError("");

              }}

              placeholder="Enter Age"

              className="
                w-full
                mt-4
                p-4
                border
                rounded-xl
                text-xl
              "

            />

          </div>

          {/* QUALIFICATION */}

          <div>

            <p className="
              text-2xl
              font-bold
            ">
              Qualification
            </p>

            <input

              type="text"

              value={data.qualification}

              onChange={(e) => {

                setData({
                  ...data,
                  qualification:
                  e.target.value
                });

                setError("");

              }}

              placeholder="Enter Qualification"

              className="
                w-full
                mt-4
                p-4
                border
                rounded-xl
                text-xl
              "

            />

          </div>

          {/* CITY */}

          <div>

            <p className="
              text-2xl
              font-bold
            ">
              City
            </p>

            <input

              type="text"

              value={data.city}

              onChange={(e) => {

                setData({
                  ...data,
                  city: e.target.value
                });

                setError("");

              }}

              placeholder="Enter City"

              className="
                w-full
                mt-4
                p-4
                border
                rounded-xl
                text-xl
              "

            />

          </div>

          {/* STATE */}

          <div>

            <p className="
              text-2xl
              font-bold
            ">
              State
            </p>

            <input

              type="text"

              value={data.state}

              onChange={(e) => {

                setData({
                  ...data,
                  state: e.target.value
                });

                setError("");

              }}

              placeholder="Enter State"

              className="
                w-full
                mt-4
                p-4
                border
                rounded-xl
                text-xl
              "

            />

          </div>

        </div>

        {/* BUTTONS */}

        <div className="
          flex
          justify-between
          mt-16
        ">

          <button

            onClick={() =>
              navigate("/")
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

            onClick={handleNext}

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
                Please complete all
                demographic fields
                before continuing.
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

export default DemographicPage;