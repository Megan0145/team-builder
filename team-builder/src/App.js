import React, { useState } from "react";
import uuid from "uuid";
import './App.css';

const initialTeamMembersList = [
  {id: uuid(), name: 'Mark', age: '21', position: 'SL'},
  {id: uuid(), name: 'Tony', age: '29', position: 'TL'},
  {id: uuid(), name: 'Sarah', age: '25', position: 'Student'},
]

function App() {
  const [teamMembersList, setTeamMembersList] = useState(initialTeamMembersList);

  return (
    <div className="App">
      {
        teamMembersList.map(teamMember => (
          <h5 key={teamMember.id}>
          {teamMember.name}
          </h5>
        ))
      }
    </div>
  );
}

export default App;
