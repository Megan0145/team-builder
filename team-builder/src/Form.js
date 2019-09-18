import React from "react";

export default function Form(props) {
  const { name, email, role } = props.teamMemberForm;
  const {
    onInputChange,
    onSubmit,
    memberToEdit
  } = props;

  return (
    <form>
      <label htmlFor="nameInput">Name</label>
      <input
        value={name}
        name='name'
        onChange={onInputChange}
        id="nameInput"
        type="text"
      />

      <label htmlFor="emailInput">Email</label>
      <input
        value={email}
        name='email'
        onChange={onInputChange}
        id="emailInput"
        type="text"
      />

      <label htmlFor="roleInput">Role</label>
      <input
        value={role}
        name='role'
        onChange={onInputChange}
        id="roleInput"
        type="text"
      />

      <button onClick={onSubmit}>Submit</button>
    </form>
  );
}
