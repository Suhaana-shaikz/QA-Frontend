// import { useState } from "react"; 
// import { useNavigate } from "react-router-dom"; 
// import axios from "axios";
// function StudentForm() {
//    const [form, setForm] = useState({
//      name: "",
//       email: "",
//        gender: "",
//         age: "", 
//         qualification: "", 
//         college: "",
//          city: "",
//           state: "" });
//            const navigate = useNavigate(); 

//            const [loading, setLoading] = useState(false);


// const handleNext = async () => {

//   if (loading) return;

//   if(!form.name || !form.email){
//     alert("Please fill Name and Email");
//     return;
//   }


//   setLoading(true);

//   try {
//     // ✅ CHECK EMAIL
//     const check = await axios.get(`http://localhost:8082/student/check/${form.email}`);
//     console.log(check);

    
//     if(check.data === true || check.data === "true"){
//       alert("Email already attempted exam ❌");
//       return;
//     }
    

//     // 🔥 GET QUESTIONS (IMPORTANT)
//     const res = await axios.get("http://localhost:8082/student/questions");

//     // ✅ STORE EVERYTHING
//     localStorage.setItem("questions", JSON.stringify(res.data));
//     localStorage.setItem("studentData", JSON.stringify(form));

//     navigate("/exam");

//   } catch (err) {
//     console.log(err);
//     alert("Error checking user");
//   } finally {
//     setLoading(false);
//   }
// };


//              return ( 
//              <div> 
//               <h2>Student Details</h2> 
//               <input placeholder="Name" onChange={e => setForm({...form, name: e.target.value})}/>
//                <input placeholder="Email" onChange={e => setForm({...form, email: e.target.value})}/> 
//                <input placeholder="Gender" onChange={e => setForm({...form, gender: e.target.value})}/>
//                 <input placeholder="Age" onChange={e => setForm({...form, age: e.target.value})}/>
//                  <input placeholder="Qualification" onChange={e => setForm({...form, qualification: e.target.value})}/>
//                   <input placeholder="College" onChange={e => setForm({...form, college: e.target.value})}/>
//                    <input placeholder="City" onChange={e => setForm({...form, city: e.target.value})}/>
//                     <input placeholder="State" onChange={e => setForm({...form, state: e.target.value})}/> <br /><br /> 
//                     <button onClick={handleNext}>Next</button> </div> 
//                     );
//                    } 
//                    export default StudentForm;




// import { useState } from "react"; 
// import { useNavigate } from "react-router-dom"; 
// import axios from "axios";

// function StudentForm() {

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     gender: "",
//     age: "",
//     qualification: "",
//     college: "",
//     city: "",
//     state: ""
//   });

//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);

//   const handleNext = async () => {

//     if (loading) return;

//     if (!form.name || !form.email) {
//       alert("Please fill Name and Email");
//       return;
//     }

//     setLoading(true);

//     try {
//       const check = await axios.get(
//         `http://localhost:8082/student/check/${form.email}`
//       );

//       if (check.data === true || check.data === "true") {
//         alert("Email already attempted exam ❌");
//         return;
//       }

//       const res = await axios.get("http://localhost:8082/student/questions");

//       localStorage.setItem("questions", JSON.stringify(res.data));
//       localStorage.setItem("studentData", JSON.stringify(form));

//       navigate("/exam");

//     } catch (err) {
//       alert("Error checking user");
//     } finally {
//       setLoading(false);
//     }
//   };



import { useState } from "react"; 
import { useNavigate } from "react-router-dom"; 
import axios from "axios";

console.log("NEW BUILD USING DEPLOYED API");

// ✅ ADD THIS
const STUDENT_API = "https://examsystem-3.onrender.com";

function StudentForm() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    gender: "",
    age: "",
    qualification: "",
    college: "",
    city: "",
    state: ""
  });

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleNext = async () => {

    if (loading) return;

    if (!form.name || !form.email) {
      alert("Please fill Name and Email");
      return;
    }

    setLoading(true);

    try {

      // ✅ FIXED
      const check = await axios.get(
        `${STUDENT_API}/student/check/${form.email}`
      );

      if (check.data === true || check.data === "true") {
        alert("Email already attempted exam ❌");
        return;
      }

      // ✅ FIXED

      const limit =
  Number(localStorage.getItem("questionLimit")) || 20;

const res = await axios.get(
  `https://examsystem-4.onrender.com/questions/random/${limit}`
);

localStorage.setItem(
  "questions",
  JSON.stringify(res.data)
);


      navigate("/exam");

    } catch (err) {
      console.log(err); // ✅ debug
      alert("Error checking user");
    } finally {
      setLoading(false);
    }
  };

  return (
  <div className="min-h-screen relative overflow-hidden bg-[#0f172a] flex items-center justify-center px-4 py-10">

    {/* BACKGROUND BLOBS */}
    <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/30 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-0 right-0 w-80 h-80 bg-violet-500/30 blur-[120px] rounded-full"></div>

    {/* MAIN CARD */}
    <div className="
      relative z-10
      w-full max-w-5xl
      bg-white/10
      backdrop-blur-xl
      border border-white/20
      shadow-2xl
      rounded-[32px]
      overflow-hidden
      grid lg:grid-cols-2
    ">

      {/* LEFT SIDE */}
      <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-cyan-500 to-blue-700 p-12 text-white relative overflow-hidden">

        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative z-10">

          <div className="mb-6">
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-3xl shadow-lg">
              📝
            </div>
          </div>

          <h1 className="text-5xl font-black leading-tight">
            Online
            <br />
            Examination
          </h1>

          <p className="mt-6 text-lg text-blue-100 leading-relaxed">
            Secure and modern examination platform designed
            for students with seamless experience.
          </p>

          <div className="mt-10 space-y-4">

            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <p>Responsive Modern Design</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <p>Fast & Secure Examination</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <p>Professional User Experience</p>
            </div>

          </div>

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="p-6 md:p-10 lg:p-12 bg-white">

        {/* MOBILE HEADER */}
        <div className="lg:hidden text-center mb-8">

          <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-3xl shadow-lg">
            📝
          </div>

          <h1 className="text-3xl font-black text-slate-800 mt-5">
            Online Exam
          </h1>

          <p className="text-slate-500 mt-2">
            Student Registration Portal
          </p>

        </div>

        {/* DESKTOP HEADER */}
        <div className="hidden lg:block mb-8">

          <p className="text-blue-600 font-semibold tracking-wide uppercase">
            Welcome Back
          </p>

          <h2 className="text-4xl font-black text-slate-800 mt-2">
            Student Registration
          </h2>

          <p className="text-slate-500 mt-3 text-lg">
            Fill your details to begin the examination.
          </p>

        </div>

        {/* FORM */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* NAME */}
          <div className="md:col-span-2">
            <label className="text-sm font-semibold text-slate-700">
              Full Name
            </label>

            <input
              className="
                w-full mt-2 px-5 py-4
                rounded-2xl
                border border-slate-200
                bg-slate-50
                focus:bg-white
                focus:ring-4 focus:ring-cyan-100
                focus:border-cyan-500
                outline-none
                transition-all
              "
              placeholder="Enter your full name"
              onChange={e => setForm({ ...form, name: e.target.value })}
            />
          </div>

          {/* EMAIL */}
          <div className="md:col-span-2">
            <label className="text-sm font-semibold text-slate-700">
              Email Address
            </label>

            <input
              className="
                w-full mt-2 px-5 py-4
                rounded-2xl
                border border-slate-200
                bg-slate-50
                focus:bg-white
                focus:ring-4 focus:ring-cyan-100
                focus:border-cyan-500
                outline-none
                transition-all
              "
              placeholder="Enter your email"
              onChange={e => setForm({ ...form, email: e.target.value })}
            />
          </div>

          {/* GENDER */}
          <div>
            <label className="text-sm font-semibold text-slate-700">
              Gender
            </label>

            <select
              className="
                w-full mt-2 px-5 py-4
                rounded-2xl
                border border-slate-200
                bg-slate-50
                focus:bg-white
                focus:ring-4 focus:ring-cyan-100
                focus:border-cyan-500
                outline-none
                transition-all
              "
              onChange={e => setForm({ ...form, gender: e.target.value })}
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          {/* AGE */}
          <div>
            <label className="text-sm font-semibold text-slate-700">
              Age
            </label>

            <input
              type="number"
              className="
                w-full mt-2 px-5 py-4
                rounded-2xl
                border border-slate-200
                bg-slate-50
                focus:bg-white
                focus:ring-4 focus:ring-cyan-100
                focus:border-cyan-500
                outline-none
                transition-all
              "
              placeholder="Age"
              onChange={e => setForm({ ...form, age: e.target.value })}
            />
          </div>

          {/* QUALIFICATION */}
          <div>
            <label className="text-sm font-semibold text-slate-700">
              Qualification
            </label>

            <input
              className="
                w-full mt-2 px-5 py-4
                rounded-2xl
                border border-slate-200
                bg-slate-50
                focus:bg-white
                focus:ring-4 focus:ring-cyan-100
                focus:border-cyan-500
                outline-none
                transition-all
              "
              placeholder="Qualification"
              onChange={e => setForm({ ...form, qualification: e.target.value })}
            />
          </div>

          {/* COLLEGE */}
          <div>
            <label className="text-sm font-semibold text-slate-700">
              College
            </label>

            <input
              className="
                w-full mt-2 px-5 py-4
                rounded-2xl
                border border-slate-200
                bg-slate-50
                focus:bg-white
                focus:ring-4 focus:ring-cyan-100
                focus:border-cyan-500
                outline-none
                transition-all
              "
              placeholder="College name"
              onChange={e => setForm({ ...form, college: e.target.value })}
            />
          </div>

          {/* CITY */}
          <div>
            <label className="text-sm font-semibold text-slate-700">
              City
            </label>

            <input
              className="
                w-full mt-2 px-5 py-4
                rounded-2xl
                border border-slate-200
                bg-slate-50
                focus:bg-white
                focus:ring-4 focus:ring-cyan-100
                focus:border-cyan-500
                outline-none
                transition-all
              "
              placeholder="City"
              onChange={e => setForm({ ...form, city: e.target.value })}
            />
          </div>

          {/* STATE */}
          <div>

            <label className="text-sm font-semibold text-slate-700">
              State
            </label>

            <input
              className="
                w-full mt-2 px-5 py-4
                rounded-2xl
                border border-slate-200
                bg-slate-50
                focus:bg-white
                focus:ring-4 focus:ring-cyan-100
                focus:border-cyan-500
                outline-none
                transition-all
              "
              placeholder="State"
              onChange={e => setForm({ ...form, state: e.target.value })}
            />
          </div>

        </div>

        {/* BUTTON */}
        <button
          onClick={handleNext}
          disabled={loading}
          className="
            w-full mt-8
            bg-gradient-to-r from-cyan-500 to-blue-600
            hover:from-cyan-600 hover:to-blue-700
            text-white
            py-4
            rounded-2xl
            font-bold
            text-lg
            shadow-xl
            hover:scale-[1.02]
            transition-all
            disabled:opacity-60
          "
        >
          {loading ? "Processing..." : "Start Examination →"}
        </button>

      </div>
    </div>
  </div>
);
}

export default StudentForm;








  // return (
  //   <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">

  //     {/* CARD */}
  //     <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-3xl">

  //       <h2 className="text-2xl font-bold text-center mb-6">
  //         Student Details
  //       </h2>

  //       {/* FORM GRID */}
  //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

  //         <input
  //           className="p-3 border rounded"
  //           placeholder="Name"
  //           onChange={e => setForm({ ...form, name: e.target.value })}
  //         />

  //         <input
  //           className="p-3 border rounded"
  //           placeholder="Email"
  //           onChange={e => setForm({ ...form, email: e.target.value })}
  //         />

  //         <input
  //           className="p-3 border rounded"
  //           placeholder="Gender"
  //           onChange={e => setForm({ ...form, gender: e.target.value })}
  //         />

  //         <input
  //           className="p-3 border rounded"
  //           placeholder="Age"
  //           onChange={e => setForm({ ...form, age: e.target.value })}
  //         />

  //         <input
  //           className="p-3 border rounded"
  //           placeholder="Qualification"
  //           onChange={e => setForm({ ...form, qualification: e.target.value })}
  //         />

  //         <input
  //           className="p-3 border rounded"
  //           placeholder="College"
  //           onChange={e => setForm({ ...form, college: e.target.value })}
  //         />

  //         <input
  //           className="p-3 border rounded"
  //           placeholder="City"
  //           onChange={e => setForm({ ...form, city: e.target.value })}
  //         />

  //         <input
  //           className="p-3 border rounded"
  //           placeholder="State"
  //           onChange={e => setForm({ ...form, state: e.target.value })}
  //         />

  //       </div>

  //       {/* BUTTON */}
  //       <div className="mt-6 text-center">
  //         <button
  //           onClick={handleNext}
  //           disabled={loading}
  //           className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded w-full md:w-auto"
  //         >
  //           {loading ? "Loading..." : "Next"}
  //         </button>
  //       </div>

  //     </div>
  //   </div>
  // );