import { useEffect, useRef, useState } from "react";

import Button from "../../components/atoms/button/Button";
import Icon from "../../components/atoms/icon/Icon";

function SignUpForm() {
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

  useEffect(() => {
    const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%]).{8,24}$/;
    const isValid = PASSWORD_REGEX.test(password);
    console.log({ isValid });
    console.log({ password });
    setPasswordIsValid(isValid);
    const passwordsMatch = password === matchingPassword;
    setBothPasswordsMatch(passwordsMatch);
  }, [matchingPassword, password]);

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
        <div>
          username:
          <span className={usernameIsValid ? "valid" : "hide"}>
            <Icon className="fa-solid fa-check" />
          </span>
          <span className={usernameIsValid || !username ? "hide" : "invalid"}>
            <Icon className="fa-solid fa-xmark" />
          </span>
        </div>
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
      <label htmlFor="password">
        <div>
          password:
          <span className={passwordIsValid ? "valid" : "hide"}>
            <Icon className="fa-solid fa-check" />
          </span>
          <span className={passwordIsValid || !password ? "hide" : "invalid"}>
            <Icon className="fa-solid fa-xmark" />
          </span>
        </div>
        <input
          aria-describedby="pwdnote"
          aria-invalid={passwordIsValid ? "false" : "true"}
          id="password"
          onBlur={() => setPasswordIsFocus(false)}
          onChange={(event) => setPassword(event.target.value)}
          onFocus={() => setPasswordIsFocus(true)}
          required
          type="password"
        />
      </label>
      <p
        id="pwdnote"
        className={
          passwordIsFocus && !passwordIsValid ? "instructions" : "offscreen"
        }
      >
        <Icon className="fa-solid fa-circle-info" />
        8 to 24 characters.
        <br />
        Must include uppercase and lowercase letters,
        <br />
        a number and a special character.
        <br />
        Allowed special characters: <span aria-label="exclamation mark">!</span>
        <span aria-label="at symbol">@</span>
        <span aria-label="hashtag">#</span>
        <span aria-label="dollar sign">$</span>
        <span aria-label="percent">%</span>
      </p>
      <label htmlFor="matchingPassword">
        <div>
          confirm password:
          <span
            className={
              matchingPassword && bothPasswordsMatch ? "valid" : "hide"
            }
          >
            <Icon className="fa-solid fa-check" />
          </span>
          <span
            className={
              !matchingPassword || bothPasswordsMatch ? "hide" : "invalid"
            }
          >
            <Icon className="fa-solid fa-xmark" />
          </span>
        </div>
        <input
          aria-describedby="confirmpwdnote"
          aria-invalid={bothPasswordsMatch ? "false" : "true"}
          id="matchingPassword"
          onBlur={() => setPasswordIsFocus(false)}
          onChange={(event) => setMatchingPassword(event.target.value)}
          onFocus={() => setMatchingPasswordIsFocus(true)}
          required
          type="password"
        />
      </label>
      <p
        id="confirmpwdnote"
        className={
          matchingPasswordIsFocus && !bothPasswordsMatch
            ? "instructions"
            : "offscreen"
        }
      >
        <Icon className="fa-solid fa-circle-info" />
        Must match the first password input field.
      </p>
      <Button
        className={
          !usernameIsValid || !passwordIsValid || !bothPasswordsMatch
            ? null
            : "active"
        }
        disabled={!usernameIsValid || !passwordIsValid || !bothPasswordsMatch}
      >
        Sign Up
      </Button>
    </form>
  );
}

export default SignUpForm;
