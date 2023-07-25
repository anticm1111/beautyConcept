import { Form, useActionData, useNavigation } from "react-router-dom";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

import classes from "./Signup.module.scss";

const SignupForm = () => {
  // const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
  const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const LETTERS_REGEX = /^[0-9a-zA-Z]+$/;

  const [first_name, setFirst_name] = useState("");
  const [validFirst_name, setValidFirst_name] = useState(false);
  const [first_nameFocus, setFirst_nameFocus] = useState(false);

  const [last_name, setLast_name] = useState("");
  const [validLast_name, setValidLast_name] = useState(false);
  const [last_nameFocus, setLast_nameFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pass, setPass] = useState("");
  const [validPass, setValidPass] = useState(false);
  const [passFocus, setPassFocus] = useState(false);

  const [matchPass, setmatchPass] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState("");

  // const emailRef = useRef();
  const firstName_Ref = useRef();
  const errRef = useRef();

  useEffect(() => {
    firstName_Ref.current.focus();
  }, []);

  useEffect(() => {
    setValidFirst_name(LETTERS_REGEX.test(first_name));
  }, [first_name]);

  useEffect(() => {
    setValidLast_name(LETTERS_REGEX.test(last_name));
  }, [last_name]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    const result = PWD_REGEX.test(pass);
    console.log(result);
    console.log(pass);
    setValidPass(result);
    const match = pass === matchPass;
    setValidMatch(match);
  }, [pass, matchPass]);

  useEffect(() => {
    setErrMsg("");
  }, [first_name, last_name, pass, matchPass]);

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const data = useActionData();

  return (
    <section className={classes.section}>
      <p
        ref={errRef}
        className={errMsg ? classes.section__errmsg : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <h1>SignUp</h1>

      <Form method="post" className={classes.section__form}>
        {/* {data && data.error && (
            <ul>
              {Object.values(data.error).map((err) => (
                <li key={err}>{err}</li>
              ))}
            </ul>
          )} */}

        <label htmlFor="name">
          First Name:
          <span
            className={
              validFirst_name ? classes.section__valid : classes.section__hide
            }
          >
            <FontAwesomeIcon icon={faCheck} />
          </span>
          <span
            className={
              validFirst_name || !first_name
                ? classes.section__hide
                : classes.section__invalid
            }
          >
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </label>
        <input
          className={classes.section__input}
          id="name"
          type="text"
          name="first_name"
          ref={firstName_Ref}
          autoComplete="off"
          required
          onChange={(e) => setFirst_name(e.target.value)}
          aria-invalid={validFirst_name ? "false" : "true"}
          onFocus={() => setFirst_nameFocus(true)}
          onBlur={() => setFirst_nameFocus(false)}
        />
        <label htmlFor="lastName">
          Last Name:
          <span
            className={
              validLast_name ? classes.section__valid : classes.section__hide
            }
          >
            <FontAwesomeIcon icon={faCheck} />
          </span>
          <span
            className={
              validLast_name || !last_name
                ? classes.section__hide
                : classes.section__invalid
            }
          >
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </label>
        <input
          className={classes.section__input}
          id="lastName"
          type="text"
          name="last_name"
          // ref={Name_Ref}
          autoComplete="off"
          required
          onChange={(e) => setLast_name(e.target.value)}
          aria-invalid={validLast_name ? "false" : "true"}
          onFocus={() => setLast_nameFocus(true)}
          onBlur={() => setLast_nameFocus(false)}
        />
        <label htmlFor="email">
          Email:
          <span
            className={
              validEmail ? classes.section__valid : classes.section__hide
            }
          >
            <FontAwesomeIcon icon={faCheck} />
          </span>
          <span
            className={
              validEmail || !email
                ? classes.section__hide
                : classes.section__invalid
            }
          >
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </label>
        <input
          className={classes.section__input}
          id="email"
          type="email"
          name="email"
          // ref={emailRef}
          autoComplete="off"
          required
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={validEmail ? "false" : "true"}
          aria-describedby="emailNote"
          onFocus={() => setEmailFocus(true)}
          onBlur={() => setEmailFocus(false)}
        />
        <p
          id="emailNote"
          className={
            emailFocus && email && !validEmail
              ? classes.section__instructions
              : classes.section__offscreen
          }
        >
          <FontAwesomeIcon icon={faInfoCircle} />
          Example: <br />
          info@domain.com <br />
        </p>
        {/* //Password */}
        <label htmlFor="password">
          Password:
          <span
            className={
              validPass ? classes.section__valid : classes.section__hide
            }
          >
            <FontAwesomeIcon icon={faCheck} />
          </span>
          <span
            className={
              validPass || !pass
                ? classes.section__hide
                : classes.section__invalid
            }
          >
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </label>
        <input
          className={classes.section__input}
          id="password"
          type="password"
          name="password"
          required
          onChange={(e) => setPass(e.target.value)}
          aria-describedby="passnote"
          aria-invalid={validPass ? "false" : "true"}
          onFocus={() => setPassFocus(true)}
          onBlur={() => setPassFocus(false)}
        />
        <p
          id="passnote"
          className={
            passFocus && pass && !validPass
              ? classes.section__instructions
              : classes.section__offscreen
          }
        >
          <FontAwesomeIcon icon={faInfoCircle} />
          4 to 24 caracters <br />
          Must include uppercase and lowecase letters, a number and a special
          character <br />
        </p>
        {/* // MATCH Password */}
        <label htmlFor="match">
          Confirm password:
          <span
            className={
              validMatch && matchPass
                ? classes.section__valid
                : classes.section__hide
            }
          >
            <FontAwesomeIcon icon={faCheck} />
          </span>
          <span
            className={
              validMatch || !matchPass
                ? classes.section__hide
                : classes.section__invalid
            }
          >
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </label>
        <input
          id="match"
          type="password"
          required
          onChange={(e) => setmatchPass(e.target.value)}
          aria-describedby="confirmnote"
          aria-invalid={validPass ? "false" : "true"}
          onFocus={() => setMatchFocus(true)}
          onBlur={() => setMatchFocus(false)}
        />
        <p
          id="confirmnote"
          className={
            matchFocus && !validMatch
              ? classes.section__instructions
              : classes.section__offscreen
          }
        >
          <FontAwesomeIcon icon={faInfoCircle} />
          Must match the first password input field
          <br />
        </p>
        <button
          className={classes.section__register}
          disabled={isSubmitting}
          name="authAction"
          value="signin"
        >
          {isSubmitting ? "Registering..." : "Sign up"}
        </button>
      </Form>
    </section>
  );
};

export default SignupForm;
