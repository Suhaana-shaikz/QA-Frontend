import { useEffect, useState } from "react";
import axios, { type AxiosResponse } from "axios";

import {
  LayoutDashboard,
  PlusCircle,
  Eye,
  LogOut,
  Download,
  Pencil,
  Trash2,
  Menu
} from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

const STUDENT_API = "https://examsystem-3.onrender.com";
const QUESTION_API = "https://examsystem-4.onrender.com";

// type Question = {
//   id: number;
//   question: string;
//   option1: string;
//   option2: string;
//   option3: string;
//   option4: string;
// };

type Question = {
  id: number;
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  aiScore: string;
};

type StudentData = {
  name: string;
  email: string;
  questionId: number;
  selectedOption: string;
};

type Mode = "add" | "view" | "dash";

function AdminDashboard() {

  const [mode, setMode] = useState<Mode>("add");

  const [questions, setQuestions] = useState<Question[]>([]);
  const [students, setStudents] = useState<StudentData[]>([]);

  const [editId, setEditId] = useState<number | null>(null);

  const [mobileMenu, setMobileMenu] = useState(false);

  const [selectedQuestion, setSelectedQuestion] = useState<number>(1);

  const [questionLimit, setQuestionLimit] =
  useState<number>(
    Number(localStorage.getItem("questionLimit")) || 20
  );

  const saveQuestionLimit = () => {

  localStorage.setItem(
    "questionLimit",
    String(questionLimit)
  );

  alert("Question limit updated");

};




  // const [form, setForm] = useState<Omit<Question, "id">>({
  //   question: "",
  //   option1: "",
  //   option2: "",
  //   option3: "",
  //   option4: ""
  // });


  const [form, setForm] = useState<Omit<Question, "id">>({
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    aiScore: ""
});

  const token = localStorage.getItem("auth");

  const getHeaders = () => {
    return token
      ? { Authorization: `Basic ${token}` }
      : {};
  };

  const loadQuestions = async () => {

    try {

      const res: AxiosResponse<Question[]> = await axios.get(
        `${QUESTION_API}/questions/all`,
        {
          headers: getHeaders()
        }
      );

      setQuestions(
        res.data.sort((a, b) => a.id - b.id)
      );

    } catch (error) {
      console.error(error);
    }
  };

  const loadStudents = async () => {

    try {

      const res: AxiosResponse<StudentData[]> = await axios.get(
        `${STUDENT_API}/student/dashboard`,
        {
          headers: getHeaders()
        }
      );

      setStudents(res.data);

    } catch (error) {
      console.error(error);
    }
  };

  const getQuestionAnalytics = (questionId: number) => {

  const filtered = students.filter(
    (s) => s.questionId === questionId
  );

  const counts = {
    A: 0,
    B: 0,
    C: 0,
    D: 0
  };

  filtered.forEach((s) => {

    if (
      s.selectedOption === "A" ||
      s.selectedOption === "B" ||
      s.selectedOption === "C" ||
      s.selectedOption === "D"
    ) {

      counts[s.selectedOption as keyof typeof counts]++;
    }

  });

  return [
    { name: "A", value: counts.A },
    { name: "B", value: counts.B },
    { name: "C", value: counts.C },
    { name: "D", value: counts.D }
  ].filter((item) => item.value > 0);
};

  useEffect(() => {

    if (mode === "view") {
      loadQuestions();
    }

    if (mode === "dash") {
      loadStudents();
      loadQuestions();
    }

  }, [mode]);

  // const getQuestionNumber = (id: number) => {

  //   const sortedQuestions = [...questions]
  //     .sort((a, b) => a.id - b.id);

  //   const index = sortedQuestions.findIndex(
  //     (q) => q.id === id
  //   );

  //   return index !== -1 ? index + 1 : null;
  // };

  const handleSubmit = async () => {

    if (!form.question.trim()) {
      alert("Enter Question");
      return;
    }

    try {

      if (editId !== null) {

        await axios.put(
          `${QUESTION_API}/questions/${editId}`,
          form,
          {
            headers: getHeaders()
          }
        );

        alert("Updated Successfully");

      } else {

        await axios.post(
          `${QUESTION_API}/questions`,
          form,
          {
            headers: getHeaders()
          }
        );

        alert("Question Added");
      }

      setForm({
        question: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        aiScore:""

      });

      setEditId(null);

      loadQuestions();

    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (q: Question) => {

    const { id, ...rest } = q;

    setForm(rest);

    setEditId(id);

    setMode("add");
  };

  const handleDelete = async (id: number) => {

    try {

      await axios.delete(
        `${QUESTION_API}/questions/${id}`,
        {
          headers: getHeaders()
        }
      );

      loadQuestions();

    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {

    localStorage.removeItem("auth");

    window.location.href = "/admin-login";
  };

  return (

    <div className="min-h-screen bg-[#0b1120] flex relative overflow-hidden">

      {/* BG */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-500/20 blur-[140px] rounded-full"></div>

      {/* MOBILE */}
      <div className="
        lg:hidden fixed top-0 left-0 right-0
        bg-[#0f172a]/90
        backdrop-blur-xl
        border-b border-white/10
        z-50 p-4
        flex items-center justify-between
      ">

        <h1 className="
          text-2xl font-black
          bg-gradient-to-r from-cyan-400 to-blue-500
          bg-clip-text text-transparent
        ">
          Admin Panel
        </h1>

        <button onClick={() => setMobileMenu(!mobileMenu)}>
          <Menu className="text-white" />
        </button>

      </div>

      {/* SIDEBAR */}
      <aside className={`
        fixed top-0 left-0 z-50
        h-screen w-[290px]
        bg-white/10
        backdrop-blur-2xl
        border-r border-white/10
        p-6 transition-all duration-300
        flex flex-col
        ${mobileMenu
          ? "translate-x-0"
          : "-translate-x-full lg:translate-x-0"}
      `}>

        <div>

          <h1 className="
            text-4xl font-black
            bg-gradient-to-r from-cyan-400 to-blue-500
            bg-clip-text text-transparent
          ">
            Admin
          </h1>

     

        </div>

        {/* MENU */}
        <div className="mt-10 space-y-4">

          <button
            onClick={() => {
              setMode("add");
              setMobileMenu(false);
            }}
            className="
              w-full flex items-center gap-3
              bg-gradient-to-r from-cyan-500 to-blue-600
              px-5 py-4 rounded-2xl
              text-white font-semibold
            "
          >
            <PlusCircle size={20} />
            Add Question
          </button>

          <button
            onClick={() => {
              setMode("view");
              setMobileMenu(false);
            }}
            className="
              w-full flex items-center gap-3
              bg-gradient-to-r from-emerald-500 to-green-600
              px-5 py-4 rounded-2xl
              text-white font-semibold
            "
          >
            <Eye size={20} />
            View Questions
          </button>

          <button
            onClick={() => {
              setMode("dash");
              setMobileMenu(false);
            }}
            className="
              w-full flex items-center gap-3
              bg-gradient-to-r from-violet-500 to-purple-600
              px-5 py-4 rounded-2xl
              text-white font-semibold
            "
          >
            <LayoutDashboard size={20} />
            Dashboard
          </button>

        </div>

        {/* LOGOUT */}
        <div className="mt-auto">

          <button
            onClick={logout}
            className="
              w-full flex items-center justify-center gap-3
              bg-gradient-to-r from-red-500 to-rose-600
              px-5 py-4 rounded-2xl
              text-white font-semibold
            "
          >
            <LogOut size={20} />
            Logout
          </button>

        </div>

      </aside>

      {/* MAIN */}
      <main className="
        flex-1 lg:ml-[290px]
        p-4 md:p-8 lg:p-10
        mt-20 lg:mt-0
        relative z-10
      ">

        {/* ADD */}
        {mode === "add" && (

          <div className="
            max-w-4xl mx-auto
            bg-white/10
            backdrop-blur-2xl
            border border-white/10
            rounded-[32px]
            p-8 md:p-10
          ">

            <div className="mb-8">

              <p className="
                text-cyan-400 uppercase
                tracking-[4px]
                text-sm font-semibold
              ">
                Question Management
              </p>

              <h2 className="
                text-3xl md:text-4xl
                font-black text-white mt-2
              ">
                {editId ? "Update Question" : "Add Question"}
              </h2>

            </div>

            <div className="grid gap-5">

              {Object.keys(form).map((key) => (

                <input
                  key={key}
                  type="text"   maxLength={1000}
                  placeholder={`Enter ${key}`}
                  value={form[key as keyof typeof form]} 
                  onChange={(e) =>
                    setForm({
                      ...form,
                      [key]: e.target.value
                    })
                  }
                  className="
                    w-full
                    bg-white/5
                    border border-white/10
                    text-white
                    p-4 rounded-2xl
                    outline-none
                  "
                />

              ))}

              <button
                onClick={handleSubmit}
                className="
                  mt-2
                  bg-gradient-to-r
                  from-cyan-500 to-blue-600
                  text-white py-4
                  rounded-2xl
                  text-lg font-bold
                "
              >
                {editId ? "Update Question" : "Add Question"}
              </button>

            </div>

          </div>

        )}

        {/* VIEW QUESTIONS */}
        {mode === "view" && (

          <div className="grid gap-6">

            {questions.map((q, index) => (

              <div
                key={q.id}
                className="
                  relative
                  bg-white/10
                  backdrop-blur-2xl
                  border border-white/10
                  rounded-[28px]
                  p-6
                  overflow-hidden
                "
              >

                <div className="
                  absolute top-0 left-0
                  w-full h-[3px]
                  bg-gradient-to-r
                  from-cyan-400 via-blue-500 to-violet-500
                "></div>

                <div className="flex items-start gap-4">

                  <div className="
                    min-w-[55px]
                    h-[55px]
                    rounded-2xl
                    bg-gradient-to-br
                    from-cyan-500 to-blue-600
                    flex items-center justify-center
                  ">

                    <span className="
                      text-xl font-black text-white
                    ">
                      {index + 1}
                    </span>

                  </div>

                  <div className="flex-1">

                    <p className="
                      text-cyan-400 uppercase
                      tracking-[3px]
                      text-xs font-semibold
                      mb-1
                    ">
                      Question {index + 1}
                    </p>

                    <h2 className="
                      text-xl md:text-2xl
                      font-bold text-white
                    ">
                      {q.question}
                    </h2>

                  </div>

                </div>

                <div className="
                  grid md:grid-cols-2
                  gap-4 mt-7
                ">

             {[
                q.option1,
                q.option2,
                q.option3,
                q.option4
              ]
              .filter((opt) => opt.trim() !== "")
              .map((opt, i) => (

                    <div
                      key={i}
                      className="
                        bg-white/5
                        border border-white/10
                        rounded-2xl
                        p-4
                      "
                    >

                      <div className="flex items-center gap-3">

                        <div className="
                          w-10 h-10
                          rounded-xl
                          bg-slate-700
                          flex items-center justify-center
                          text-white font-bold
                        ">
                          {String.fromCharCode(65 + i)}
                        </div>

                        <p className="text-slate-200">
                          {opt || "No Option"}
                        </p>

                      </div>

                    </div>

                  ))}

                </div>

                <div className="
                  flex flex-wrap gap-4
                  mt-7
                ">

                  <button
                    onClick={() => handleEdit(q)}
                    className="
                      flex items-center gap-2
                      bg-gradient-to-r
                      from-emerald-500 to-green-600
                      px-5 py-3 rounded-2xl
                      text-white font-semibold
                    "
                  >
                    <Pencil size={18} />
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(q.id)}
                    className="
                      flex items-center gap-2
                      bg-gradient-to-r
                      from-red-500 to-rose-600
                      px-5 py-3 rounded-2xl
                      text-white font-semibold
                    "
                  >
                    <Trash2 size={18} />
                    Delete
                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

        {/* DASHBOARD */}
        {mode === "dash" && (

          <div>

            <div className="
              flex flex-col md:flex-row
              md:items-center md:justify-between
              gap-5 mb-10
            ">

              <div>

                <p className="
                  text-cyan-400 uppercase
                  tracking-[4px]
                  text-sm font-semibold
                ">
                  Analytics Overview
                </p>

                <h2 className="
                  text-4xl font-black
                  text-white mt-2
                ">
                 Admin Dashboard
                </h2>

              </div>

              <button
                onClick={() =>
                  window.open(
                    `${STUDENT_API}/student/download`
                  )
                }
                className="
                  flex items-center gap-3
                  bg-gradient-to-r
                  from-amber-500 to-orange-600
                  text-white px-6 py-4
                  rounded-2xl
                  font-semibold
                "
              >
                <Download size={20} />
                Download CSV
              </button>


              <div className="
  flex items-center gap-4
  mt-5
">

  <input
    type="number"
    min={1}
    max={questions.length}
    value={questionLimit}
    onChange={(e) =>
      setQuestionLimit(Number(e.target.value))
    }
    className="
      bg-[#1e293b]
      border border-white/10
      text-white
      px-5 py-3
      rounded-2xl
      w-[140px]
      outline-none
    "
  />

  <button
    onClick={saveQuestionLimit}
    className="
      bg-gradient-to-r
      from-cyan-500 to-blue-600
      px-5 py-3
      rounded-2xl
      text-white font-semibold
    "
  >
    Save Limit
  </button>

</div>

            </div>

            {/* STUDENTS */}
           {/* GROUPED STUDENTS */}



           {/* QUESTION ANALYTICS */}
<div className="
  mt-16 mb-16
  bg-white/10
  border border-white/10
  rounded-[32px]
  p-8
  backdrop-blur-2xl
">

  {/* HEADER */}
  <div className="
    flex flex-col md:flex-row
    md:items-center md:justify-between
    gap-5 mb-10
  ">

    <div>

      <p className="
        text-cyan-400 uppercase
        tracking-[4px]
        text-sm font-semibold
      ">
        Analytics
      </p>

      <h2 className="
        text-3xl font-black
        text-white mt-2
      ">
        Question Analytics
      </h2>

    </div>

    {/* SELECT QUESTION */}
    <select
      value={selectedQuestion}
      onChange={(e) =>
        setSelectedQuestion(Number(e.target.value))
      }
      className="
        bg-[#1e293b]
        border border-white/10
        text-white
        px-5 py-3
        rounded-2xl
        outline-none
      "
    >

      {questions.map((q, index) => (

        <option
          key={q.id}
          value={q.id}
        >
          Question {index + 1}
        </option>

      ))}

    </select>

  </div>

  {/* CHART */}
  <div className="
    h-[450px]
    flex items-center justify-center
  ">

    <ResponsiveContainer
      width="100%"
      height="100%"
    >

      <PieChart>

        <Pie
          data={getQuestionAnalytics(selectedQuestion)}
          dataKey="value"
          nameKey="name"
          outerRadius={150}
          label
        >

          {getQuestionAnalytics(selectedQuestion)
            .map((_, i) => (

            <Cell
              key={i}
              fill={
                [
                  "#06b6d4",
                  "#10b981",
                  "#f59e0b",
                  "#ef4444"
                ][i % 4]
              }
            />

          ))}

        </Pie>

        <Tooltip />

        <Legend />

      </PieChart>

    </ResponsiveContainer>

  </div>

</div>
           
<div className="grid gap-8">

  {Object.values(

    students.reduce((acc: any, item: any) => {

      // CREATE STUDENT
      if (!acc[item.email]) {

        acc[item.email] = {
          name: item.name,
          email: item.email,
          answers: []
        };

      }

      // QUESTION EXISTS OR NOT
      const questionExists = questions.some(
        (q) => q.id === item.questionId
      );

      if (questionExists) {

        // REMOVE DUPLICATES
        const alreadyAnswered =
          acc[item.email].answers.some(
            (a: any) => a.questionId === item.questionId
          );

        if (!alreadyAnswered) {

          acc[item.email].answers.push({
            questionId: item.questionId,
            selectedOption: item.selectedOption
          });

        }

      }

      return acc;

    }, {})

  ).map((student: any, index) => (

    <div
      key={index}
      className="
        bg-white/10
        backdrop-blur-2xl
        border border-white/10
        rounded-[32px]
        overflow-hidden
        shadow-[0_8px_32px_rgba(0,0,0,0.37)]
      "
    >

      {/* TOP */}
      <div className="
        p-8 border-b border-white/10
        bg-gradient-to-r
        from-cyan-500/10
        to-blue-500/10
      ">

        <div className="
          flex flex-col lg:flex-row
          lg:items-center lg:justify-between
          gap-6
        ">

          {/* LEFT */}
          <div className="flex items-center gap-5">

            <div className="
              w-16 h-16 rounded-2xl
              bg-gradient-to-br
              from-cyan-500 to-blue-600
              flex items-center justify-center
              text-white text-2xl font-black
            ">
              {student.name.charAt(0)}
            </div>

            <div>

              <h3 className="
                text-2xl font-black text-white
              ">
                {student.name}
              </h3>

              <p className="text-slate-300 mt-1">
                {student.email}
              </p>

            </div>

          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">

            {/* TOTAL ANSWERS */}
            <div className="
              bg-white/10
              border border-white/10
              px-6 py-5 rounded-2xl
            ">

              <p className="
                text-slate-400 text-sm
              ">
                Total Answers
              </p>

              <h2 className="
                text-4xl font-black
                text-cyan-400 mt-1
              ">
                {Math.min(
                  student.answers.length,
                  questions.length
                )}
              </h2>

            </div>

            {/* DELETE BUTTON */}
            <button
              onClick={async () => {

                const confirmDelete = window.confirm(
                  "Delete this student's answers?"
                );

                if (!confirmDelete) return;

                try {

                  await axios.delete(
                    `${STUDENT_API}/student/deleteByid/${index + 1}`,
                    {
                      headers: getHeaders()
                    }
                  );

                  loadStudents();

                  alert("Student Answers Deleted");

                } catch (error) {

                  console.error(error);

                  alert("Delete Failed");

                }

              }}
              className="
                bg-gradient-to-r
                from-red-500 to-rose-600
                hover:from-red-600 hover:to-rose-700
                px-5 py-5 rounded-2xl
                text-white
                shadow-xl shadow-red-500/20
                transition-all hover:scale-[1.03]
              "
            >
              <Trash2 size={22} />
            </button>

          </div>

        </div>

      </div>

      {/* ANSWERS */}
      <div className="p-8">

        <h4 className="
          text-xl font-bold
          text-white mb-6
        ">
          Submitted Answers
        </h4>

        <div className="
          grid grid-cols-2
          md:grid-cols-3
          lg:grid-cols-5
          gap-5
        ">

          {student.answers
            .slice(0, questions.length)
            .map((ans: any, i: number) => (

            <div
              key={i}
              className="
                bg-white/5
                border border-white/10
                rounded-2xl
                p-5 text-center
              "
            >

              <p className="
                text-slate-400 text-sm
              ">
                Question
              </p>

              <h2 className="
                text-4xl font-black
                text-cyan-400 mt-2
              ">
                {questions.findIndex(
                  (q) => q.id === ans.questionId
                ) + 1}
              </h2>

              <div className="
                mt-5
                bg-gradient-to-r
                from-emerald-500 to-green-600
                py-3 rounded-xl
                text-white font-black
                text-xl
              ">
                {ans.selectedOption}
              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  ))}

</div>




          </div>

        )}

      </main>

    </div>
  );
}

export default AdminDashboard;