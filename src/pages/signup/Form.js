import { useEffect, useRef, useState } from "react";

import Icon from "../../components/atoms/icon/Icon";

function SignUpForm() {
  const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%]).{8,24}$/;

  const usernameRef = useRef();
  const errorRef = useRef();

  const [username, setUsername] = useState("");
  const [usernameIsValid, setUsernameIsValid] = useState(false);
  const [usernameIsFocus, setUsernameIsFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [passwordIsFocus, setPasswordIsFocus] = useState(false);

  const [matchingPassword, setMatchingPassword] = useState("");
  const [bothPasswordsMatch, setBothPasswordsMatch] = useState(false);
  const [matchingPasswordIsFocus, setMatchingPasswordIsFocus] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const [isSuccessful, setIsSuccessful] = useState(false);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  useEffect(() => {
    const USERNAME_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
    const isValid = USERNAME_REGEX.test(username);
    console.log({ isValid });
    console.log({ username });
    setUsernameIsValid(isValid);
  }, [username]);

  return (
    <form>
      <p
        ref={errorRef}
        className={errorMessage ? "error-message" : "offscreen"}
        aria-live="assertive"
      >
        {errorMessage}
      </p>
      <label htmlFor="username">
        username:
        <span className={usernameIsValid ? "valid" : "hide"}>
          <Icon className="fa-solid fa-check" />
        </span>
        <span className={usernameIsValid || !username ? "hide" : "invalid"}>
          <Icon className="fa-solid fa-xmark" />
        </span>
        <input
          aria-describedby="username-note"
          aria-invalid={usernameIsValid ? "false" : "true"}
          autoComplete="off"
          id="username"
          onBlur={() => setUsernameIsFocus(false)}
          onChange={(event) => setUsername(event.target.value)}
          onFocus={() => setUsernameIsFocus(true)}
          ref={usernameRef}
          required
          type="text"
        />
      </label>
      <p
        id="username-note"
        className={
          usernameIsFocus && username && !usernameIsValid
            ? "instructions"
            : "offscreen"
        }
      >
        <Icon className="fa-solid fa-circle-info" />
        4 to 24 characters.
        <br />
        Must begin with letter.
        <br />
        Letters, numbers, underscores, hyphens allowed.
      </p>
    </form>
  );
}

export default SignUpForm;
