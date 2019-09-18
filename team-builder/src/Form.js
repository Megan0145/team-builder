import React from "react";

export default function Form(props) {
  const { name, email, role } = props.teamMemberForm;
  const {
    onNameInputChange,
    onEmailInputChange,
    onRoleInputChange,
    onSubmit,
    memberToEdit
  } = props;

  return (
    <form>
      <label htmlFor="nameInput">Name</label>
      <input
        value={name}
        onChange={onNameInputChange}
        id="nameInput"
        type="text"
      />

      <label htmlFor="emailInput">Email</label>
      <input
        value={email}
        onChange={onEmailInputChange}
        id="emailInput"
        type="text"
      />

      <label htmlFor="roleInput">Role</label>
      <input
        value={role}
        onChange={onRoleInputChange}
        id="roleInput"
        type="text"
      />

      <button onClick={onSubmit}>Submit</button>
    </form>
  );
}
