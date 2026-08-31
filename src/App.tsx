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
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";



import IntroPage
from "./Pages/IntroPage";

import DemographicPage
from "./Pages/DemographicPage";

import ExpertCategory
from "./Pages/ExpertCategory";

import Exam
from "./Pages/Exam";

import AdminLogin
from "./Pages/AdminLogin";

import AdminDashboard
from "./Pages/AdminDasboard";

import SurveyInstructions from "./Pages/SurveyInstructions";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* STUDENT FLOW */}

        <Route
          path="/"
          element={<IntroPage />}
        />

        <Route
          path="/demographic"
          element={<DemographicPage />}
        />

        <Route
          path="/expert"
          element={<ExpertCategory />}
        />

        <Route
  path="/instructions"
  element={<SurveyInstructions />}
/>

        <Route
          path="/exam"
          element={<Exam />}
        />

        {/* ADMIN FLOW */}

        <Route
          path="/admin-login"
          element={<AdminLogin />}
        />

        <Route
          path="/admin"
          element={<AdminDashboard />}
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;