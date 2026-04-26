// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function Login() {

//   const navigate = useNavigate();


//   const [password, setPassword] = useState("");
// const [username, setUsername] = useState("");
//   const handleLogin = async () => {

//     if (!username || !password) {
//       alert("Enter email and password");
//       return;
//     }

//     try {
//       const res = await axios.post("http://localhost:8086/login", {
//       username,
//         password
//       });

//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("role", res.data.role);
//       localStorage.setItem("userId", res.data.userId);
//       localStorage.setItem("email", res.data.email);

//       if (res.data.role === "ADMIN") {
//         navigate("/admin");
//       } else {
//         navigate("/exam"); // make sure route exists
//       }

//     } catch (error: any) {
//       alert(error.response?.data || "Login Failed ❌");
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>

//       <input
//   type="text"
//   placeholder="Enter Username"
//   onChange={(e) => setUsername(e.target.value)}
// />


//       <input
//         type="password"
//         placeholder="Enter Password"
//         onChange={(e) => setPassword(e.target.value)}
//       />

//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// }

// export default Login;