import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then(resp => resp.json())
      .then(data =>{
        console.log(data)
        setQuestions(data)
  })}, []);

  function handleNewQuest(newQ){
    setQuestions([...questions, newQ])
  }

  return (
    <div>
      <AdminNavBar onChangePage={setPage} />
      {page ==="Form"?
      <QuestionForm onSubmitQuestion={handleNewQuest}/> : 
      <QuestionList questions={questions} onSetQuestions={setQuestions}/>
      }
    </div>
  );
}

export default App;