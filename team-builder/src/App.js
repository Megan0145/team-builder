import  React, { useState } from "react";
import "./App.css";
import Form from "./Form.js";
import Memberlist from './MemberList';
import uuid from 'uuid';

const initialTeamMemberlist = [
  { id : uuid(), name: "Megan", email: "meganennis@hotmail.com", role: "UI Designer" },
  { id : uuid(), name: "Sarah", email: "sarahennis805@hotmail.com", role: "UX Designer" }
];

function App() {
  const [teamMemberList, setTeamMemberList] = useState(initialTeamMemberlist);

  return (
    <div className="App">
      <Form />
      <Memberlist teamMemberList={teamMemberList} />
    </div>
  );
}

export default App;
