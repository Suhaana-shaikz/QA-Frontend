// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import StudentForm from "./Pages/StudentForm.tsx";
// import Exam from "./Pages/Exam.tsx";
// import { Navigate } from "react-router-dom";


// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Navigate to="/student" />} />
//         <Route path="/student" element={<StudentForm />} />
//         <Route path="/exam" element={<Exam />} />


    


    
      
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import StudentForm from "./Pages/StudentForm";
// import Exam from "./Pages/Exam";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>

//         <Route path="/" element={<Navigate to="/student" />} />

//         <Route path="/student" element={<StudentForm />} />

//         <Route path="/exam" element={<Exam />} />

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import StudentForm from "./Pages/StudentForm";
import Exam from "./Pages/Exam";
import AdminLogin from "./Pages/AdminLogin";
import AdminDashboard from "./Pages/AdminDasboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* USER FLOW */}
        <Route path="/student" element={<StudentForm />} />
        <Route path="/exam" element={<Exam />} />

        {/* ADMIN FLOW */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminDashboard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;