// // 

// import { useNavigate } from "react-router-dom";

// function Home() {

//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">

//       <div className="bg-white shadow-2xl rounded-2xl p-8 md:p-12 text-center max-w-md w-full">

//         {/* TITLE */}
//         <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//           Exam Portal
//         </h1>

//         <p className="text-gray-500 mb-8">
//           Choose your role to continue
//         </p>

//         {/* USER BUTTON */}
//         <button
//           onClick={() => navigate("/student")}
//           className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg font-semibold mb-4 transition"
//         >
//           👨‍🎓 I am Student
//         </button>

//         {/* ADMIN BUTTON */}
//         <button
//           onClick={() => navigate("/admin-login")}
//           className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-lg text-lg font-semibold transition"
//         >
//           🔐 I am Admin
//         </button>

//       </div>

//     </div>
//   );
// }

// export default Home;


import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">

      <div className="bg-white shadow-2xl rounded-2xl p-8 md:p-12 text-center max-w-md w-full">

        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Exam Portal
        </h1>

        <p className="text-gray-500 mb-8">
          Choose your role to continue
        </p>

        <button
          onClick={() => navigate("/student")}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg font-semibold mb-4 transition"
        >
          👨‍🎓 I am Student
        </button>

        <button
          onClick={() => navigate("/admin-login")}
          className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-lg text-lg font-semibold transition"
        >
          🔐 I am Admin
        </button>

      </div>

    </div>
  );
}

export default Home;