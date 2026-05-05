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
      const res = await axios.get(
        "https://examsystem-4.onrender.com/questions/random"
      );

      localStorage.setItem("questions", JSON.stringify(res.data));
      localStorage.setItem("studentData", JSON.stringify(form));

      navigate("/exam");

    } catch (err) {
      console.log(err); // ✅ debug
      alert("Error checking user");
    } finally {
      setLoading(false);
    }
  };

  return (
  <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center p-4">

    <div className="bg-white shadow-2xl rounded-2xl p-6 md:p-10 w-full max-w-4xl">

      {/* HEADER */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">
          Student Registration
        </h2>
        <p className="text-gray-500 mt-1">
          Fill your details to start the exam
        </p>
      </div>

      {/* FORM GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {/* NAME */}
        <div>
          <label className="text-sm text-gray-600">Full Name</label>
          <input
            className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Enter your name"
            onChange={e => setForm({ ...form, name: e.target.value })}
          />
        </div>

        {/* EMAIL */}
        <div>
          <label className="text-sm text-gray-600">Email</label>
          <input
            className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Enter your email"
            onChange={e => setForm({ ...form, email: e.target.value })}
          />
        </div>

        {/* GENDER */}
        <div>
          <label className="text-sm text-gray-600">Gender</label>
          <select
            className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
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
          <label className="text-sm text-gray-600">Age</label>
          <input
            type="number"
            className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Enter age"
            onChange={e => setForm({ ...form, age: e.target.value })}
          />
        </div>

        {/* QUALIFICATION */}
        <div>
          <label className="text-sm text-gray-600">Qualification</label>
          <input
            className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Enter qualification"
            onChange={e => setForm({ ...form, qualification: e.target.value })}
          />
        </div>

        {/* COLLEGE */}
        <div>
          <label className="text-sm text-gray-600">College</label>
          <input
            className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Enter college name"
            onChange={e => setForm({ ...form, college: e.target.value })}
          />
        </div>

        {/* CITY */}
        <div>
          <label className="text-sm text-gray-600">City</label>
          <input
            className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Enter city"
            onChange={e => setForm({ ...form, city: e.target.value })}
          />
        </div>

        {/* STATE */}
        <div>
          <label className="text-sm text-gray-600">State</label>
          <input
            className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Enter state"
            onChange={e => setForm({ ...form, state: e.target.value })}
          />
        </div>

      </div>

      {/* BUTTON */}
      <div className="mt-8 text-center">
        <button
          onClick={handleNext}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition w-full md:w-auto"
        >
          {loading ? "Processing..." : "Start Exam →"}
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