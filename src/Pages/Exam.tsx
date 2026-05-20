// // import { useEffect, useState } from "react";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";

// // // ✅ QUESTION TYPE
// // type Question = {
// //   id: number;
// //   question: string;
// //   option1: string;
// //   option2: string;
// //   option3: string;
// //   option4: string;
// // };

// // // ✅ ANSWER TYPE
// // type Answer = {
// //   questionId: number;
// //   selectedOption: string;
// // };

// // function Exam() {


// //   const [questions, setQuestions] = useState<Question[]>([]);
// //   const [answers, setAnswers] = useState<Answer[]>([]);

// //   const navigate = useNavigate();

// //   // 🔥 LOAD QUESTIONS ONLY FROM LOCAL STORAGE
// //   useEffect(() => {
// //     const saved = localStorage.getItem("questions");

// //     if (!saved) {
// //       alert("Session expired");
// //       navigate("/student");
// //       return;
// //     }

// //     setQuestions(JSON.parse(saved));
// //   }, []);

// //   // 🔥 HANDLE OPTION SELECT
// //   const handleSelect = (qId: number, option: string) => {
// //     setAnswers(prev => [
// //       ...prev.filter(a => a.questionId !== qId),
// //       { questionId: qId, selectedOption: option }
// //     ]);
// //   };

// //   // 🔥 SUBMIT EXAM
// //   const handleSubmit = async () => {

// //     const studentData = JSON.parse(localStorage.getItem("studentData") || "null");

// //     if (!studentData) {
// //       alert("Session expired");
// //       navigate("/student");
// //       return;
// //     }

// //     if (answers.length !== questions.length) {
// //       alert("Please answer all questions");
// //       return;
// //     }

// //     try {
// //       await axios.post("http://localhost:8082/student/submit", {
// //         ...studentData,
// //         answers
// //       });

// //       alert("Submitted Successfully");

// //       // 🔥 CLEAR DATA AFTER SUBMIT
// //       localStorage.removeItem("studentData");
// //       localStorage.removeItem("questions");

// //       navigate("/");

// //     } catch (err) {
// //       alert("Error submitting exam");
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Exam</h2>

// //       {questions.map((q, index) => (
// //         <div key={q.id} style={{ marginBottom: "20px" }}>
// //           <p><b>{index + 1}. {q.question}</b></p>

// //           {[
// //             { key: "A", value: q.option1 },
// //             { key: "B", value: q.option2 },
// //             { key: "C", value: q.option3 },
// //             { key: "D", value: q.option4 },
// //           ].map(opt => (
// //             <label key={opt.key} style={{ display: "block", marginBottom: "8px" }}>
// //               <input
// //                 type="radio"
// //                 name={q.id.toString()}
// //                 onChange={() => handleSelect(q.id, opt.key)}
// //               />
// //               {opt.value}
// //             </label>
// //           ))}
// //         </div>
// //       ))}

// //       <button onClick={handleSubmit}>Submit</button>
// //     </div>
// //   );
// // }

// // export default Exam;












// // import { useEffect, useState } from "react";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";

// // // ✅ TYPES
// // type Question = {
// //   id: number;
// //   question: string;
// //   option1: string;
// //   option2: string;
// //   option3: string;
// //   option4: string;
// // };

// // type Answer = {
// //   questionId: number;
// //   selectedOption: string;
// // };

// // function Exam() {

// //   const [questions, setQuestions] = useState<Question[]>([]);
// //   const [answers, setAnswers] = useState<Answer[]>([]);

// //   const navigate = useNavigate();

// //   // 🔥 LOAD QUESTIONS FROM LOCAL STORAGE
// //   useEffect(() => {
// //     const saved = localStorage.getItem("questions");

// //     if (!saved) {
// //       alert("Session expired");
// //       navigate("/student");
// //       return;
// //     }

// //     setQuestions(JSON.parse(saved));
// //   }, []);

// //   // 🔥 HANDLE OPTION SELECT
// //   const handleSelect = (qId: number, option: string) => {
// //     setAnswers(prev => [
// //       ...prev.filter(a => a.questionId !== qId),
// //       { questionId: qId, selectedOption: option }
// //     ]);
// //   };

// //   // 🔥 SUBMIT
// //   const handleSubmit = async () => {

// //     const studentData = JSON.parse(localStorage.getItem("studentData") || "null");

// //     if (!studentData) {
// //       alert("Session expired");
// //       navigate("/student");
// //       return;
// //     }

// //     if (answers.length !== questions.length) {
// //       alert("Please answer all questions");
// //       return;
// //     }

// //     try {
// //       await axios.post("http://localhost:8082/student/submit", {
// //         ...studentData,
// //         answers
// //       });

// //       alert("Submitted Successfully ✅");

// //       // 🔥 CLEAR DATA
// //       localStorage.removeItem("studentData");
// //       localStorage.removeItem("questions");

// //       navigate("/");

// //     } catch (err) {
// //       alert("Error submitting exam");
// //     }
// //   };



// // return (
// //   <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100">

// //     {/* 🔹 HEADER */}
// //     <div className="sticky top-0 z-10 bg-white shadow px-4 py-3 flex justify-between items-center">
// //       <h2 className="text-lg md:text-xl font-bold text-blue-700">
// //         📝 Online Exam
// //       </h2>

// //       <span className="text-sm text-gray-600">
// //         Total Questions: {questions.length}
// //       </span>
// //     </div>

// //     {/* 🔹 MAIN */}
// //     <div className="max-w-5xl mx-auto p-4 md:p-6">

// //       {/* 🔹 PROGRESS */}
// //       <div className="mb-6">
// //         <p className="text-sm text-gray-600 mb-2">
// //           Answered {answers.length} of {questions.length}
// //         </p>

// //         <div className="w-full bg-gray-200 h-2 rounded-full">
// //           <div
// //             className="bg-blue-600 h-2 rounded-full transition-all"
// //             style={{
// //               width: `${(answers.length / questions.length) * 100}%`
// //             }}
// //           ></div>
// //         </div>
// //       </div>

// //       {/* 🔹 QUESTIONS */}
// //       {questions.map((q, index) => (
// //         <div
// //           key={q.id}
// //           className="bg-white rounded-xl shadow-md p-5 mb-6 hover:shadow-lg transition"
// //         >
// //           {/* QUESTION */}
// //           <div className="flex justify-between items-center mb-4">
// //             <p className="font-semibold text-lg text-gray-800">
// //               Q{index + 1}. {q.question}
// //             </p>

// //             <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
// //               #{index + 1}
// //             </span>
// //           </div>

// //           {/* OPTIONS */}
// //           <div className="grid gap-3">

// //             {[
// //               { key: "A", value: q.option1 },
// //               { key: "B", value: q.option2 },
// //               { key: "C", value: q.option3 },
// //               { key: "D", value: q.option4 },
// //             ].map(opt => {

// //               const isSelected = answers.find(
// //                 a => a.questionId === q.id && a.selectedOption === opt.key
// //               );

// //               return (
// //                 <label
// //                   key={opt.key}
// //                   className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition
// //                     ${isSelected
// //                       ? "bg-blue-100 border-blue-500"
// //                       : "hover:bg-gray-50"}
// //                   `}
// //                 >
// //                   <input
// //                     type="radio"
// //                     name={q.id.toString()}
// //                     checked={!!isSelected}
// //                     onChange={() => handleSelect(q.id, opt.key)}
// //                     className="accent-blue-600"
// //                   />

// //                   <span className="font-medium text-gray-700">
// //                     <span className="font-bold mr-2">{opt.key}.</span>
// //                     {opt.value}
// //                   </span>
// //                 </label>
// //               );
// //             })}
// //           </div>
// //         </div>
// //       ))}

// //       {/* 🔹 SUBMIT */}
// //       <div className="sticky bottom-0 bg-white py-4">
// //         <div className="text-center">
// //           <button
// //             onClick={handleSubmit}
// //             className="bg-green-600 hover:bg-green-700 text-white px-10 py-3 rounded-lg text-lg font-semibold shadow-md transition"
// //           >
// //             Submit Exam ✅
// //           </button>
// //         </div>
// //       </div>

// //     </div>
// //   </div>
// // );
// // }

// // export default Exam;








// // import { useEffect, useState } from "react";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";

// // // ✅ ADD THIS
// // const STUDENT_API = "https://examsystem-3.onrender.com";

// // // ✅ TYPES
// // type Question = {
// //   id: number;
// //   question: string;
// //   option1: string;
// //   option2: string;
// //   option3: string;
// //   option4: string;
// // };

// // type Answer = {
// //   questionId: number;
// //   selectedOption: string;
// // };

// // function Exam() {

// //   const [questions, setQuestions] = useState<Question[]>([]);
// //   const [answers, setAnswers] = useState<Answer[]>([]);

// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const saved = localStorage.getItem("questions");

// //     if (!saved) {
// //       alert("Session expired");
// //       navigate("/student");
// //       return;
// //     }

// //     setQuestions(JSON.parse(saved));
// //   }, []);

// //   const handleSelect = (qId: number, option: string) => {
// //     setAnswers(prev => [
// //       ...prev.filter(a => a.questionId !== qId),
// //       { questionId: qId, selectedOption: option }
// //     ]);
// //   };

// //   const handleSubmit = async () => {

// //     const studentData = JSON.parse(localStorage.getItem("studentData") || "null");

// //     if (!studentData) {
// //       alert("Session expired");
// //       navigate("/student");
// //       return;
// //     }

// //     if (answers.length !== questions.length) {
// //       alert("Please answer all questions");
// //       return;
// //     }

// //     try {
// //       // ✅ FIXED URL
// //       await axios.post(`${STUDENT_API}/student/submit`, {
// //         ...studentData,
// //         answers
// //       });

// //       alert("Submitted Successfully ✅");

// //       localStorage.removeItem("studentData");
// //       localStorage.removeItem("questions");

// //       navigate("/");

// //     } catch (err) {
// //       alert("Error submitting exam");
// //     }
// //   };

// //  return (
// //   <div className="min-h-screen bg-[#0b1120] text-white">

// //     {/* TOP NAVBAR */}
// //     <div className="
// //       sticky top-0 z-50
// //       bg-[#0f172a]/90
// //       backdrop-blur-xl
// //       border-b border-white/10
// //     ">

// //       <div className="
// //         max-w-7xl mx-auto
// //         px-4 py-4
// //       ">

// //         {/* HEADER */}
// //         <div className="
// //           flex flex-col lg:flex-row
// //           lg:items-center lg:justify-between
// //           gap-5
// //         ">

// //           <div>

// //             <h1 className="
// //               text-2xl font-black
// //               bg-gradient-to-r from-cyan-400 to-blue-500
// //               bg-clip-text text-transparent
// //             ">
// //               Online Examination
// //             </h1>

// //             <p className="text-slate-400 text-sm mt-1">
// //               Complete all questions carefully
// //             </p>

// //           </div>

// //           {/* STATS */}
// //           <div className="flex items-center gap-4">

// //             <div className="
// //               bg-white/5
// //               border border-white/10
// //               px-5 py-3
// //               rounded-2xl
// //             ">
// //               <p className="text-xs text-slate-400">
// //                 Total
// //               </p>

// //               <h2 className="text-xl font-black text-cyan-400">
// //                 {questions.length}
// //               </h2>
// //             </div>

// //             <div className="
// //               bg-white/5
// //               border border-white/10
// //               px-5 py-3
// //               rounded-2xl
// //             ">
// //               <p className="text-xs text-slate-400">
// //                 Answered
// //               </p>

// //               <h2 className="text-xl font-black text-emerald-400">
// //                 {answers.length}
// //               </h2>
// //             </div>

// //           </div>

// //         </div>

// //         {/* PROGRESS */}
// //         <div className="mt-5">

// //           <div className="
// //             h-3
// //             bg-white/10
// //             rounded-full
// //             overflow-hidden
// //           ">

// //             <div
// //               style={{ width: `${progress}%` }}
// //               className="
// //                 h-full
// //                 bg-gradient-to-r
// //                 from-cyan-500 to-blue-600
// //                 rounded-full
// //                 transition-all duration-500
// //               "
// //             ></div>

// //           </div>

// //           <div className="
// //             flex justify-between
// //             mt-2 text-sm
// //           ">

// //             <p className="text-slate-400">
// //               Progress
// //             </p>

// //             <p className="text-cyan-400 font-semibold">
// //               {Math.round(progress)}%
// //             </p>

// //           </div>

// //         </div>

// //       </div>

// //     </div>

// //     {/* MAIN */}
// //     <div className="
// //       max-w-7xl mx-auto
// //       px-4 py-8
// //       grid lg:grid-cols-[1fr_300px]
// //       gap-8
// //     ">

// //       {/* QUESTIONS */}
// //       <div className="space-y-5">

// //         {questions.map((q, index) => (

// //           <div
// //             key={q.id}
// //             className="
// //               bg-white/5
// //               border border-white/10
// //               rounded-3xl
// //               p-6
// //               backdrop-blur-xl
// //             "
// //           >

// //             {/* QUESTION */}
// //             <div className="
// //               flex items-start gap-4
// //             ">

// //               <div className="
// //                 min-w-[45px] h-[45px]
// //                 rounded-2xl
// //                 bg-gradient-to-br
// //                 from-cyan-500 to-blue-600
// //                 flex items-center justify-center
// //                 font-black
// //                 text-lg
// //               ">
// //                 {index + 1}
// //               </div>

// //               <div className="flex-1">

// //                 <h2 className="
// //                   text-lg md:text-xl
// //                   font-bold text-white
// //                 ">
// //                   {q.question}
// //                 </h2>

// //               </div>

// //             </div>

// //             {/* OPTIONS */}
// //             <div className="
// //               mt-5
// //               grid gap-3
// //             ">

// //               {[
// //                 { key: "A", value: q.option1 },
// //                 { key: "B", value: q.option2 },
// //                 { key: "C", value: q.option3 },
// //                 { key: "D", value: q.option4 }
// //               ].map(opt => {

// //                 const isSelected = answers.find(
// //                   a =>
// //                     a.questionId === q.id &&
// //                     a.selectedOption === opt.key
// //                 );

// //                 return (

// //                   <label
// //                     key={opt.key}
// //                     className={`
// //                       cursor-pointer
// //                       rounded-2xl
// //                       border
// //                       px-5 py-4
// //                       flex items-center gap-4
// //                       transition-all duration-300

// //                       ${isSelected
// //                         ? "bg-cyan-500 border-cyan-400"
// //                         : "bg-white/[0.03] border-white/10 hover:border-cyan-400"
// //                       }
// //                     `}
// //                   >

// //                     <input
// //                       type="radio"
// //                       name={q.id.toString()}
// //                       checked={!!isSelected}
// //                       onChange={() =>
// //                         handleSelect(q.id, opt.key)
// //                       }
// //                       className="hidden"
// //                     />

// //                     <div className={`
// //                       min-w-[38px] h-[38px]
// //                       rounded-xl
// //                       flex items-center justify-center
// //                       font-bold

// //                       ${isSelected
// //                         ? "bg-white text-cyan-600"
// //                         : "bg-white/10 text-white"
// //                       }
// //                     `}>
// //                       {opt.key}
// //                     </div>

// //                     <p className={`
// //                       font-medium

// //                       ${isSelected
// //                         ? "text-white"
// //                         : "text-slate-200"
// //                       }
// //                     `}>
// //                       {opt.value}
// //                     </p>

// //                   </label>

// //                 );
// //               })}

// //             </div>

// //           </div>

// //         ))}

// //         {/* SUBMIT */}
// //         <div className="pt-4">

// //           <button
// //             onClick={handleSubmit}
// //             className="
// //               w-full
// //               bg-gradient-to-r
// //               from-emerald-500 to-green-600
// //               hover:from-emerald-600 hover:to-green-700
// //               py-5 rounded-2xl
// //               text-lg font-black
// //               shadow-2xl
// //               transition-all hover:scale-[1.01]
// //             "
// //           >
// //             Submit Examination
// //           </button>

// //         </div>

// //       </div>

// //       {/* SIDE PANEL */}
// //       <div className="
// //         h-fit sticky top-[140px]
// //         bg-white/5
// //         border border-white/10
// //         rounded-3xl
// //         p-6
// //         backdrop-blur-xl
// //       ">

// //         <h2 className="
// //           text-xl font-black
// //           text-white
// //         ">
// //           Question Status
// //         </h2>

// //         <div className="
// //           grid grid-cols-5
// //           gap-3 mt-6
// //         ">

// //           {questions.map((q, i) => {

// //             const answered = answers.find(
// //               a => a.questionId === q.id
// //             );

// //             return (

// //               <div
// //                 key={q.id}
// //                 className={`
// //                   h-12 rounded-xl
// //                   flex items-center justify-center
// //                   font-bold text-sm
// //                   transition-all

// //                   ${answered
// //                     ? "bg-cyan-500 text-white"
// //                     : "bg-white/10 text-slate-300"
// //                   }
// //                 `}
// //               >
// //                 {i + 1}
// //               </div>

// //             );
// //           })}

// //         </div>

// //         {/* LEGEND */}
// //         <div className="mt-8 space-y-4">

// //           <div className="flex items-center gap-3">

// //             <div className="
// //               w-5 h-5 rounded-md
// //               bg-cyan-500
// //             "></div>

// //             <p className="text-slate-300 text-sm">
// //               Answered
// //             </p>

// //           </div>

// //           <div className="flex items-center gap-3">

// //             <div className="
// //               w-5 h-5 rounded-md
// //               bg-white/10 border border-white/10
// //             "></div>

// //             <p className="text-slate-300 text-sm">
// //               Not Answered
// //             </p>

// //           </div>

// //         </div>

// //       </div>

// //     </div>

// //   </div>
// // );
// // }

// // export default Exam;











// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const STUDENT_API = "https://examsystem-3.onrender.com";

// // ✅ QUESTION TYPE
// type Question = {
//   id: number;
//   question: string;
//   option1: string;
//   option2: string;
//   option3: string;
//   option4: string;
// };

// // ✅ ANSWER TYPE
// type Answer = {
//   questionId: number;
//   selectedOption: string;
// };

// function Exam() {

//   const [questions, setQuestions] = useState<Question[]>([]);
//   const [answers, setAnswers] = useState<Answer[]>([]);

//   const navigate = useNavigate();

//   // ✅ PROGRESS
//   const progress =
//     questions.length === 0
//       ? 0
//       : (answers.length / questions.length) * 100;

//   // ✅ LOAD QUESTIONS
//   useEffect(() => {

//     const saved = localStorage.getItem("questions");

//     if (!saved) {
//       alert("Session expired");
//       navigate("/student");
//       return;
//     }

//     setQuestions(JSON.parse(saved));

//   }, []);

//   // ✅ HANDLE SELECT
//   const handleSelect = (qId: number, option: string) => {

//     setAnswers(prev => [
//       ...prev.filter(a => a.questionId !== qId),
//       {
//         questionId: qId,
//         selectedOption: option
//       }
//     ]);

//   };

//   // ✅ SUBMIT
//   const handleSubmit = async () => {

//     const studentData = JSON.parse(
//       localStorage.getItem("studentData") || "null"
//     );

//     if (!studentData) {
//       alert("Session expired");
//       navigate("/student");
//       return;
//     }

//     if (answers.length !== questions.length) {
//       alert("Please answer all questions");
//       return;
//     }

//     try {

//       await axios.post(
//         `${STUDENT_API}/student/submit`,
//         {
//           ...studentData,
//           answers
//         }
//       );

//       alert("Submitted Successfully ✅");

//       localStorage.removeItem("studentData");
//       localStorage.removeItem("questions");

//       navigate("/");

//     } catch (err) {

//       alert("Error submitting exam");

//     }
//   };

//   return (

//     <div className="min-h-screen bg-[#0b1120] text-white">

//       {/* TOP NAVBAR */}
//       <div className="
//         sticky top-0 z-50
//         bg-[#0f172a]/90
//         backdrop-blur-xl
//         border-b border-white/10
//       ">

//         <div className="
//           max-w-7xl mx-auto
//           px-4 py-4
//         ">

//           {/* HEADER */}
//           <div className="
//             flex flex-col lg:flex-row
//             lg:items-center lg:justify-between
//             gap-5
//           ">

//             <div>

//               <h1 className="
//                 text-2xl font-black
//                 bg-gradient-to-r
//                 from-cyan-400 to-blue-500
//                 bg-clip-text text-transparent
//               ">
//                 Online Examination
//               </h1>

//               <p className="text-slate-400 text-sm mt-1">
//                 Complete all questions carefully
//               </p>

//             </div>

//             {/* STATS */}
//             <div className="flex items-center gap-4">

//               {/* TOTAL */}
//               <div className="
//                 bg-white/5
//                 border border-white/10
//                 px-5 py-3
//                 rounded-2xl
//               ">

//                 <p className="text-xs text-slate-400">
//                   Total
//                 </p>

//                 <h2 className="
//                   text-xl font-black
//                   text-cyan-400
//                 ">
//                   {questions.length}
//                 </h2>

//               </div>

//               {/* ANSWERED */}
//               <div className="
//                 bg-white/5
//                 border border-white/10
//                 px-5 py-3
//                 rounded-2xl
//               ">

//                 <p className="text-xs text-slate-400">
//                   Answered
//                 </p>

//                 <h2 className="
//                   text-xl font-black
//                   text-emerald-400
//                 ">
//                   {answers.length}
//                 </h2>

//               </div>

//             </div>

//           </div>

//           {/* PROGRESS */}
//           <div className="mt-5">

//             <div className="
//               h-3
//               bg-white/10
//               rounded-full
//               overflow-hidden
//             ">

//               <div
//                 style={{ width: `${progress}%` }}
//                 className="
//                   h-full
//                   bg-gradient-to-r
//                   from-cyan-500 to-blue-600
//                   rounded-full
//                   transition-all duration-500
//                 "
//               ></div>

//             </div>

//             <div className="
//               flex justify-between
//               mt-2 text-sm
//             ">

//               <p className="text-slate-400">
//                 Progress
//               </p>

//               <p className="
//                 text-cyan-400 font-semibold
//               ">
//                 {Math.round(progress)}%
//               </p>

//             </div>

//           </div>

//         </div>

//       </div>

//       {/* MAIN CONTENT */}
//       <div className="
//         max-w-7xl mx-auto
//         px-4 py-8
//         grid lg:grid-cols-[1fr_300px]
//         gap-8
//       ">

//         {/* QUESTIONS */}
//         <div className="space-y-5">

//           {questions.map((q, index) => (

//             <div
//               key={q.id}
//               className="
//                 bg-white/5
//                 border border-white/10
//                 rounded-3xl
//                 p-6
//                 backdrop-blur-xl
//               "
//             >

//               {/* QUESTION */}
//               <div className="
//                 flex items-start gap-4
//               ">

//                 <div className="
//                   min-w-[45px]
//                   h-[45px]
//                   rounded-2xl
//                   bg-gradient-to-br
//                   from-cyan-500 to-blue-600
//                   flex items-center justify-center
//                   font-black text-lg
//                 ">
//                   {index + 1}
//                 </div>

//                 <div className="flex-1">

//                   <h2 className="
//                     text-lg md:text-xl
//                     font-bold text-white
//                   ">
//                     {q.question}
//                   </h2>

//                 </div>

//               </div>

//               {/* OPTIONS */}
//               <div className="
//                 mt-5
//                 grid gap-3
//               ">

//                 {
//                [
//                   { key: "A", value: q.option1 },
//                   { key: "B", value: q.option2 },
//                   { key: "C", value: q.option3 },
//                   { key: "D", value: q.option4 }
//                ]
//               .filter(opt => opt.value.trim() !== "")
//               .map(opt => {


                  

//                   const isSelected = answers.find(
//                     a =>
//                       a.questionId === q.id &&
//                       a.selectedOption === opt.key
//                   );

//                   return (

//                     <label
//                       key={opt.key}
//                       className={`
//                         cursor-pointer
//                         rounded-2xl
//                         border
//                         px-5 py-4
//                         flex items-center gap-4
//                         transition-all duration-300

//                         ${isSelected
//                           ? "bg-cyan-500 border-cyan-400"
//                           : "bg-white/[0.03] border-white/10 hover:border-cyan-400"
//                         }
//                       `}
//                     >

//                       <input
//                         type="radio"
//                         name={q.id.toString()}
//                         checked={!!isSelected}
//                         onChange={() =>
//                           handleSelect(q.id, opt.key)
//                         }
//                         className="hidden"
//                       />

//                       {/* OPTION LETTER */}
//                       <div className={`
//                         min-w-[38px]
//                         h-[38px]
//                         rounded-xl
//                         flex items-center justify-center
//                         font-bold

//                         ${isSelected
//                           ? "bg-white text-cyan-600"
//                           : "bg-white/10 text-white"
//                         }
//                       `}>
//                         {opt.key}
//                       </div>

//                       {/* OPTION TEXT */}
//                       <p className={`
//                         font-medium

//                         ${isSelected
//                           ? "text-white"
//                           : "text-slate-200"
//                         }
//                       `}>
//                         {opt.value}
//                       </p>

//                     </label>

//                   );
//                 })}

//               </div>

//             </div>

//           ))}

//           {/* SUBMIT */}
//           <div className="pt-4">

//             <button
//               onClick={handleSubmit}
//               className="
//                 w-full
//                 bg-gradient-to-r
//                 from-emerald-500 to-green-600
//                 hover:from-emerald-600 hover:to-green-700
//                 py-5 rounded-2xl
//                 text-lg font-black
//                 shadow-2xl
//                 transition-all hover:scale-[1.01]
//               "
//             >
//               Submit Examination
//             </button>

//           </div>

//         </div>

//         {/* SIDE PANEL */}
//         <div className="
//           h-fit sticky top-[140px]
//           bg-white/5
//           border border-white/10
//           rounded-3xl
//           p-6
//           backdrop-blur-xl
//         ">

//           <h2 className="
//             text-xl font-black
//             text-white
//           ">
//             Question Status
//           </h2>

//           {/* QUESTION NUMBERS */}
//           <div className="
//             grid grid-cols-5
//             gap-3 mt-6
//           ">

//             {questions.map((q, i) => {

//               const answered = answers.find(
//                 a => a.questionId === q.id
//               );

//               return (

//                 <div
//                   key={q.id}
//                   className={`
//                     h-12 rounded-xl
//                     flex items-center justify-center
//                     font-bold text-sm

//                     ${answered
//                       ? "bg-cyan-500 text-white"
//                       : "bg-white/10 text-slate-300"
//                     }
//                   `}
//                 >
//                   {i + 1}
//                 </div>

//               );
//             })}

//           </div>

//           {/* LEGEND */}
//           <div className="mt-8 space-y-4">

//             <div className="
//               flex items-center gap-3
//             ">

//               <div className="
//                 w-5 h-5 rounded-md
//                 bg-cyan-500
//               "></div>

//               <p className="
//                 text-slate-300 text-sm
//               ">
//                 Answered
//               </p>

//             </div>

//             <div className="
//               flex items-center gap-3
//             ">

//               <div className="
//                 w-5 h-5 rounded-md
//                 bg-white/10
//                 border border-white/10
//               "></div>

//               <p className="
//                 text-slate-300 text-sm
//               ">
//                 Not Answered
//               </p>

//             </div>

//           </div>

//         </div>

//       </div>

//     </div>

//   );
// }

// export default Exam;






























// //  return (

// //   <div className="min-h-screen bg-gray-100 p-4 md:p-8">

// //     <div className="max-w-4xl mx-auto">

// //       {/* HEADER */}
// //       <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
// //         Online Exam
// //       </h2>

// //       {/* QUESTIONS */}
// //       {questions.map((q, index) => (
// //         <div
// //           key={q.id}
// //           className="bg-white p-5 rounded-xl shadow mb-6"
// //         >
// //           {/* QUESTION */}
// //           <p className="font-semibold text-lg mb-4">
// //             {index + 1}. {q.question}
// //           </p>

// //           {/* OPTIONS */}
// //           <div className="space-y-3">

// //             {[
// //               { key: "A", value: q.option1 },
// //               { key: "B", value: q.option2 },
// //               { key: "C", value: q.option3 },
// //               { key: "D", value: q.option4 },
// //             ].map(opt => {

// //               const isSelected = answers.find(
// //                 a => a.questionId === q.id && a.selectedOption === opt.key
// //               );

// //               return (
// //                 <label
// //                   key={opt.key}
// //                   className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition
// //                     ${isSelected ? "bg-blue-100 border-blue-500" : "hover:bg-gray-50"}
// //                   `}
// //                 >
// //                   <input
// //                     type="radio"
// //                     name={q.id.toString()}
// //                     checked={!!isSelected}
// //                     onChange={() => handleSelect(q.id, opt.key)}
// //                     className="accent-blue-600"
// //                   />

// //                   <span className="font-medium">
// //                     {opt.key}. {opt.value}
// //                   </span>
// //                 </label>
// //               );
// //             })}

// //           </div>
// //         </div>
// //       ))}

// //       {/* SUBMIT BUTTON */}
// //       <div className="text-center mt-6">
// //         <button
// //           onClick={handleSubmit}
// //           className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
// //         >
// //           Submit Exam
// //         </button>
// //       </div>

// //     </div>
// //   </div>
// // );



import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const STUDENT_API =
"https://examsystem-3.onrender.com";

type Question = {
  id: number;
  question: string;
  aiScore?: string;
};

type Answer = {
  questionId: number;
  selectedOption: string;
};

function Exam() {

  const [questions, setQuestions] =
  useState<Question[]>([]);

  const [answers, setAnswers] =
  useState<Answer[]>([]);

  const navigate = useNavigate();

  // ✅ PROGRESS
  const progress =
    questions.length === 0
      ? 0
      : (answers.length / questions.length) * 100;

  // ✅ LOAD QUESTIONS
  useEffect(() => {

    const saved =
      localStorage.getItem("questions");

    if (!saved) {

      alert("Session expired");

      navigate("/student");

      return;

    }

    setQuestions(JSON.parse(saved));

  }, []);

  // ✅ HANDLE SELECT
  const handleSelect = (
    qId: number,
    option: string
  ) => {

    setAnswers(prev => [

      ...prev.filter(
        a => a.questionId !== qId
      ),

      {
        questionId: qId,
        selectedOption: option
      }

    ]);

  };

  // ✅ SUBMIT
  const handleSubmit = async () => {

    const studentData = JSON.parse(

      localStorage.getItem(
        "studentData"
      ) || "null"

    );

    if (!studentData) {

      alert("Session expired");

      navigate("/student");

      return;

    }

    if (
      answers.length !== questions.length
    ) {

      alert(
        "Please answer all questions"
      );

      return;

    }

    try {

      await axios.post(

        `${STUDENT_API}/student/submit`,

        {
          ...studentData,
          answers
        }

      );

      alert(
        "Survey Submitted Successfully"
      );

      localStorage.removeItem(
        "studentData"
      );

      localStorage.removeItem(
        "questions"
      );

      navigate("/");

    } catch (err) {

      alert(
        "Error submitting survey"
      );

    }

  };

  return (

    <div className="
      min-h-screen
      bg-[#f7f7f7]
    ">

      {/* TOP BAR */}

      <div className="
        sticky top-0 z-50
        bg-white
        border-b
        shadow-sm
      ">

        <div className="
          max-w-6xl mx-auto
          px-6 py-4
        ">

          <div className="
            flex
            justify-between
            items-center
          ">

            <div>

              <h1 className="
                text-3xl
                font-black
                text-slate-800
              ">
                Disaster Survey Form
              </h1>

              <p className="
                text-sm
                text-slate-500
                mt-1
              ">
                Please answer all survey questions
              </p>

            </div>

            {/* QUESTION COUNT */}

            <div className="
              flex gap-4
            ">

              <div className="
                bg-slate-100
                px-5 py-3
                rounded-xl
              ">

                <p className="
                  text-xs
                  text-slate-500
                ">
                  Total Questions
                </p>

                <h2 className="
                  text-2xl
                  font-black
                  text-blue-600
                ">
                  {questions.length}
                </h2>

              </div>

              <div className="
                bg-slate-100
                px-5 py-3
                rounded-xl
              ">

                <p className="
                  text-xs
                  text-slate-500
                ">
                  Answered
                </p>

                <h2 className="
                  text-2xl
                  font-black
                  text-green-600
                ">
                  {answers.length}
                </h2>

              </div>

            </div>

          </div>

          {/* PROGRESS */}

          <div className="
            mt-5
          ">

            <div className="
              h-2
              bg-slate-200
              rounded-full
              overflow-hidden
            ">

              <div

                style={{
                  width: `${progress}%`
                }}

                className="
                  h-full
                  bg-green-500
                  transition-all
                "

              ></div>

            </div>

          </div>

        </div>

      </div>

      {/* MAIN */}

      <div className="
        max-w-6xl mx-auto
        px-6 py-8
        grid
        lg:grid-cols-[1fr_280px]
        gap-8
      ">

        {/* QUESTIONS */}

        <div className="
          space-y-8
        ">

          {

            questions.map(
              (q, index) => {

              const selected =
                answers.find(
                  a =>
                    a.questionId === q.id
                );

              return (

                <div

                  key={q.id}

                  className="
                    bg-white
                    p-8
                    rounded-2xl
                    shadow-sm
                    border
                  "

                >

                  {/* QUESTION NUMBER */}

                  <div className="
                    flex
                    items-start
                    gap-4
                  ">

                    <div className="
                      min-w-[45px]
                      h-[45px]
                      rounded-full
                      bg-blue-600
                      text-white
                      flex
                      items-center
                      justify-center
                      font-bold
                    ">

                      {index + 1}

                    </div>

                    <div className="flex-1">

                      <h2 className="
                        text-2xl
                        font-bold
                        text-slate-800
                        leading-relaxed
                      ">

                        {q.question}

                      </h2>

                      {/* AI SCORE */}

                      <p className="
                        mt-5
                        text-lg
                        text-slate-600
                      ">

                        AI Score =
                        {" "}
                        <span className="
                          font-bold
                        ">

                          {
                            q.aiScore ||
                            "Medium Urgency"
                          }

                        </span>

                      </p>

                    </div>

                  </div>

                  {/* OPTIONS */}

                  <div className="
                    mt-10
                    overflow-x-auto
                  ">

                    <table className="
                      w-full
                      border
                    ">

                      <thead>

                        <tr className="
                          bg-slate-100
                        ">

                          <th className="
                            p-4
                            text-left
                          ">
                            User Score
                          </th>

                          <th className="
                            p-4
                          ">
                            Low Urgency
                          </th>

                          <th className="
                            p-4
                          ">
                            Medium Urgency
                          </th>

                          <th className="
                            p-4
                          ">
                            High Urgency
                          </th>

                        </tr>

                      </thead>

                      <tbody>

                        <tr>

                          <td className="
                            p-4
                            font-semibold
                          ">
                            Select
                          </td>

                          {

                            [
                              "Low",
                              "Medium",
                              "High"
                            ]
                            .map(option => (

                              <td
                                key={option}
                                className="
                                  text-center
                                  p-4
                                "
                              >

                                <input

                                  type="radio"

                                  name={
                                    q.id.toString()
                                  }

                                  checked={
                                    selected?.
                                    selectedOption
                                    === option
                                  }

                                  onChange={() =>
                                    handleSelect(
                                      q.id,
                                      option
                                    )
                                  }

                                  className="
                                    w-5
                                    h-5
                                    accent-blue-600
                                  "

                                />

                              </td>

                            ))

                          }

                        </tr>

                      </tbody>

                    </table>

                  </div>

                </div>

              );

            })

          }

          {/* SUBMIT */}

          <button

            onClick={handleSubmit}

            className="
              w-full
              bg-green-600
              hover:bg-green-700
              text-white
              py-5
              rounded-2xl
              text-xl
              font-bold
              transition-all
            "

          >
            Submit Survey
          </button>

        </div>

        {/* SIDE PANEL */}

        <div className="
          h-fit
          sticky top-[120px]
          bg-white
          p-6
          rounded-2xl
          border
          shadow-sm
        ">

          <h2 className="
            text-xl
            font-black
            text-slate-800
          ">
            Question Status
          </h2>

          <div className="
            grid grid-cols-5
            gap-3
            mt-6
          ">

            {

              questions.map(
                (q, i) => {

                const answered =
                  answers.find(
                    a =>
                      a.questionId === q.id
                  );

                return (

                  <div

                    key={q.id}

                    className={`
                      h-11
                      rounded-lg
                      flex
                      items-center
                      justify-center
                      font-bold

                      ${
                        answered
                        ?
                        "bg-green-500 text-white"
                        :
                        "bg-slate-200 text-slate-700"
                      }
                    `}

                  >

                    {i + 1}

                  </div>

                );

              })

            }

          </div>

        </div>

      </div>

    </div>

  );

}

export default Exam;