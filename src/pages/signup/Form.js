import { useEffect, useRef, useState } from "react";

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
      <label htmlFor="username">
        username:
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
    </form>
  );
}

export default SignUpForm;
