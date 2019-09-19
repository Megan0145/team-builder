import React, { useState, useEffect } from "react";
import uuid from "uuid";
import "./App.css";
import Form from "./Form";

const initialTeamMembersList = [
  { id: uuid(), name: "Mark", email: "mark123@gmail.com", role: "SL" },
  { id: uuid(), name: "Tony", email: "tony.e@yahoo.com", role: "TL" },
  { id: uuid(), name: "Sarah", email: "sarah100@gmail.com", role: "Student" }
];

const initialTeamForm = {
  id: null,
  name: "",
  email: "",
  role: ""
};

function App() {
  const [teamMembersList, setTeamMembersList] = useState(initialTeamMembersList);
  const [teamMemberForm, setTeamMemberForm] = useState(initialTeamForm);
  const [memberToEdit, setMemberToEdit] = useState(initialTeamForm);

const onInputChange = e => {
  setTeamMemberForm({...teamMemberForm, [e.target.name]: e.target.value });
}

  // const onNameInputChange = e => {
  //   setTeamMemberForm({
  //     id: uuid(),
  //     name: e.target.value,
  //     email: teamMemberForm.email,
  //     role: teamMemberForm.role
  //   });
  // };
  // const onEmailInputChange = e => {
  //   setTeamMemberForm({
  //     id: uuid(),
  //     name: teamMemberForm.name,
  //     email: e.target.value,
  //     role: teamMemberForm.role
  //   });
  // };
  // const onRoleInputChange = e => {
  //   setTeamMemberForm({
  //     id: uuid(),
  //     name: teamMemberForm.name,
  //     email: teamMemberForm.email,
  //     role: e.target.value
  //   });
  // };

  const onSubmit = e => {
    e.preventDefault();
      setTeamMembersList(teamMembersList.concat(teamMemberForm));
      console.log(teamMembersList);
      setTeamMemberForm(initialTeamForm);
    };

const onEditMember = (teamMember) => {
    setMemberToEdit(teamMember)
    setTeamMemberForm(memberToEdit);
  }

  return (
    <div className="App">
      <Form
        teamMemberForm={teamMemberForm}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
        memberToEdit={memberToEdit}
      />
      {teamMembersList.map(teamMember => (
        <div className='teamMember'>
          <h5 key={teamMember.id}>
            {teamMember.name}'s email is: {teamMember.email}. They are a{" "}
            {teamMember.role}
          </h5>
          <button className='editButton' onClick={() => onEditMember(teamMember)}>Edit Team Member</button>
        </div>
      ))}
    </div>
  );
}

export default App;
