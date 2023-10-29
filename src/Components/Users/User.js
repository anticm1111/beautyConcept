import React from "react";
import styled from "styled-components";

const ListItem = styled.li`
  font-size: 2rem;
  color: #fff;
  border: 1px solid #fff;
  padding: 4rem;
  display: list-item;
  list-style-position: inside;
  /* display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem; */
  a {
    /* text-decoration: none; */
    font-size: 2rem;
    color: #fff;
  }
`;

const User = ({ user }) => {
  console.log(user, "users destructured");

  return (
    <ListItem>
      {user.first_name} {user.last_name}, <a href="/">View details</a>
    </ListItem>
  );
};

export default User;
