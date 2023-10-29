import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../actions";
import Users from "../../Components/Users/User";
import { styled } from "styled-components";
import ErrorPage from "../Error/ErrorPage";
import Loader from "../../Components/UI/Loader";
import Modal from "../../Components/UI/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const List = styled.ol`
  width: 50rem;
  margin: 0 auto;
  /* padding-top: 15rem; */
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 2rem;
  /* list-style: none; */
  overflow-y: scroll;
  height: calc(100vh - 155px);

  li {
  }
`;

const ErrorPg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const ModalIcon = styled.button`
  background-color: transparent;
  border: none;
  align-self: flex-end;
  font-size: 3rem;
`;

const UsersPage = () => {
  const dispatch = useDispatch();
  const { users, error } = useSelector((state) => state);
  const { isError, showModal } = error;
  const { isLoaded, data } = users;
  console.log(users);
  console.log(error);
  //errorPage initiating
  // const { error } = useSelector((state) => state.users);

  // console.log("errorReducer", error);

  console.log("users page", users);
  // console.log("users page error", error);
  console.log("users is Loaded", users.isLoaded);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <>
      {/* ErrorREDUCER */}

      <List>
        {users.data.map((user) => (
          <Users user={user} key={user._id}></Users>
        ))}
      </List>

      {!isLoaded && isError && showModal && (
        <ErrorPg>
          <ErrorPage manualError={error}></ErrorPage>
        </ErrorPg>
      )}

      {/* ERRORPAGE */}
      {/* {!users.isLoaded ? (
        <Loader />
      ) : error ? (
        <ErrorPg>
          <ErrorPage manualError={error}></ErrorPage>
        </ErrorPg>
      ) : (
        <List>
          {users.users.map((user) => (
            <Users user={user} key={user._id}></Users>
          ))}
        </List>
      )} */}
    </>
  );
};

export default UsersPage;
