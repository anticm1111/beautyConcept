import { useEffect, useRef } from "react";
import { Form } from "react-router-dom";
import classes from "./Signup.module.scss";

const LoginForm = () => {
  const emailRef = useRef();

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <section className={classes.section}>
      <Form className={classes.section__form} method="post">
        <h1 className={classes.h1}>Log In</h1>
        <div>
          <label htmlFor="email">Email</label>
          <input
            className={classes.section__input}
            type="text"
            id="email"
            name="email"
            required
            ref={emailRef}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            className={classes.section__input}
            type="password"
            id="password"
            name="password"
            required
          />
        </div>

        <button
          name="authAction"
          value="login"
          className={classes.section__register}
        >
          Login
        </button>
      </Form>
    </section>
  );
};

export default LoginForm;
