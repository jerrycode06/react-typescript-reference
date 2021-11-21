import { useState } from "react";

export default function LoggedIn() {
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogin = () => {
    setLoggedIn(true);
  };
  const handleLogOut = () => {
    setLoggedIn(false);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogOut}>Logout</button>
      <div>User is {loggedIn ? "Logged In" : "Logged Out"}</div>
    </div>
  );
}
