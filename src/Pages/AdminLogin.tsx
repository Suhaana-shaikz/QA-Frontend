// 

// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function AdminLogin() {

//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate();

//   const handleLogin = async () => {

//     if (!username || !password) {
//       alert("Enter username & password");
//       return;
//     }

//     try {

//       // 🔥 BASIC AUTH HEADER
//       const token = btoa(`${username}:${password}`);

//       // ✅ CALL ANY PROTECTED API TO VERIFY LOGIN
//       await axios.get("http://localhost:8082/questions/all", {
//         headers: {
//           Authorization: `Basic ${token}`
//         }
//       });

//       // ✅ STORE TOKEN
//       localStorage.setItem("auth", token);

//       alert("Login Success ✅");
//       navigate("/admin");

//     } catch (err) {
//       alert("Invalid credentials ❌");
//     }
//   };


//   return (
//   <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center">

//     <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 w-full max-w-md">

//       {/* TITLE */}
//       <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
//         🔐 Admin Login
//       </h2>

//       {/* USERNAME */}
//       <div className="mb-4">
//         <label className="block text-gray-600 mb-1">Username</label>
//         <input
//           type="text"
//           placeholder="Enter username"
//           onChange={(e) => setUsername(e.target.value)}
//           className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>

//       {/* PASSWORD */}
//       <div className="mb-6">
//         <label className="block text-gray-600 mb-1">Password</label>
//         <input
//           type="password"
//           placeholder="Enter password"
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>

//       {/* BUTTON */}
//       <button
//         onClick={handleLogin}
//         className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
//       >
//         Login
//       </button>

//       {/* FOOTER */}
//       <p className="text-center text-gray-500 text-sm mt-4">
//         Authorized access only
//       </p>

//     </div>

//   </div>
// );
// }

// export default AdminLogin;











import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// ✅ ADD THIS
const QUESTION_API = "https://examsystem-4.onrender.com";

function AdminLogin() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {

    if (!username || !password) {
      alert("Enter username & password");
      return;
    }

    try {

      // 🔥 BASIC AUTH HEADER
      const token = btoa(`${username}:${password}`);

      // ✅ FIXED URL
      await axios.get(`${QUESTION_API}/questions/all`, {
        headers: {
          Authorization: `Basic ${token}`
        }
      });

      // ✅ STORE TOKEN
      localStorage.setItem("auth", token);

      alert("Login Success ✅");
      navigate("/admin");

    } catch (err) {
      alert("Invalid credentials ❌");
    }
  };

  return (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center">

    <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 w-full max-w-md">

      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
        🔐 Admin Login
      </h2>

      <div className="mb-4">
        <label className="block text-gray-600 mb-1">Username</label>
        <input
          type="text"
          placeholder="Enter username"
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 border rounded-lg"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-600 mb-1">Password</label>
        <input
          type="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border rounded-lg"
        />
      </div>

      <button
        onClick={handleLogin}
        className="w-full bg-blue-600 text-white py-3 rounded-lg"
      >
        Login
      </button>

      <p className="text-center text-gray-500 text-sm mt-4">
        Authorized access only
      </p>

    </div>

  </div>
);
}

export default AdminLogin;



























  // return (

  //   <div style={{ textAlign: "center", marginTop: "100px" }}>
  //     <h2>Admin Login</h2>

  //     <input
  //       placeholder="Username"
  //       onChange={(e) => setUsername(e.target.value)}
  //     />

  //     <br /><br />

  //     <input
  //       type="password"
  //       placeholder="Password"
  //       onChange={(e) => setPassword(e.target.value)}
  //     />

  //     <br /><br />

  //     <button onClick={handleLogin}>Login</button>
  //   </div>
  // );