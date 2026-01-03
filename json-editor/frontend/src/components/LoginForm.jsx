import React, { useState } from "react";

const LoginForm = ({ onLogin, loading, error }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <div className="login-card">
        <h1>LiturgicalBooks JSON Editor</h1>
        <p className="muted">Sign in to edit content.</p>
        <label>
          Username
          <input
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="your@email.com"
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="********"
          />
        </label>
        {error && <p className="error">{error}</p>}
        <button onClick={() => onLogin(username, password)} disabled={loading}>
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
