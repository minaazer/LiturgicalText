import React, { useState } from "react";

const LoginForm = ({
  onLogin,
  loading,
  error,
  onRequestReset,
  onConfirmReset,
  resetLoading,
  resetError,
  resetMessage,
  onRequestVerifyEmail,
  onConfirmVerifyEmail,
  verifyLoading,
  verifyError,
  verifyMessage,
  needsEmailVerification,
  identifierPrefill,
  passwordPolicy,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newPasswordLogin, setNewPasswordLogin] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [screen, setScreen] = useState("login");
  const [resetStep, setResetStep] = useState("request");
  const [verificationCode, setVerificationCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [localResetError, setLocalResetError] = useState("");
  const [verifyStep, setVerifyStep] = useState("request");
  const [verifyCode, setVerifyCode] = useState("");
  const [localVerifyError, setLocalVerifyError] = useState("");

  const handleRequestReset = async () => {
    if (!username.trim()) {
      setLocalResetError("Enter your username or email to reset the password.");
      return;
    }
    setLocalResetError("");
    const ok = await onRequestReset?.(username.trim());
    if (ok) setResetStep("confirm");
  };

  const handleConfirmReset = async () => {
    if (!username.trim()) {
      setLocalResetError("Enter your username or email to reset the password.");
      return;
    }
    if (!verificationCode.trim() || !newPassword.trim()) {
      setLocalResetError("Enter the verification code and a new password.");
      return;
    }
    setLocalResetError("");
    const ok = await onConfirmReset?.(username.trim(), verificationCode.trim(), newPassword);
    if (ok) {
      setVerificationCode("");
      setNewPassword("");
    }
  };

  const combinedResetError = localResetError || resetError;
  const combinedVerifyError = localVerifyError || verifyError;

  const passwordPolicyText = React.useMemo(() => {
    if (!passwordPolicy) {
      return "Password must meet the Cognito policy (usually 8+ chars with upper, lower, number, and symbol).";
    }
    const parts = [];
    const minLen = passwordPolicy.MinimumLength;
    if (minLen) parts.push(`${minLen}+ characters`);
    if (passwordPolicy.RequireUppercase) parts.push("uppercase");
    if (passwordPolicy.RequireLowercase) parts.push("lowercase");
    if (passwordPolicy.RequireNumbers) parts.push("number");
    if (passwordPolicy.RequireSymbols) parts.push("symbol");
    return parts.length ? `Password must include ${parts.join(", ")}.` : "Password must meet the Cognito policy.";
  }, [passwordPolicy]);

  React.useEffect(() => {
    if (!needsEmailVerification) return;
    if (identifierPrefill) setUsername(identifierPrefill);
    setScreen("verify");
    setResetStep("request");
    setVerifyStep("request");
  }, [needsEmailVerification, identifierPrefill]);

  React.useEffect(() => {
    if (!error) {
      setShowNewPassword(false);
      return;
    }
    const lowered = error.toLowerCase();
    if (
      lowered.includes("new password required") ||
      lowered.includes("password does not conform") ||
      lowered.includes("invalid password")
    ) {
      setShowNewPassword(true);
    }
  }, [error]);

  const handleRequestVerifyEmail = async () => {
    if (!username.trim()) {
      setLocalVerifyError("Enter your username or email address.");
      return;
    }
    setLocalVerifyError("");
    const ok = await onRequestVerifyEmail?.(username.trim());
    if (ok) setVerifyStep("confirm");
  };

  const handleConfirmVerifyEmail = async () => {
    if (!verifyCode.trim()) {
      setLocalVerifyError("Enter the verification code sent to your email.");
      return;
    }
    setLocalVerifyError("");
    const ok = await onConfirmVerifyEmail?.(username.trim(), verifyCode.trim());
    if (ok) {
      setVerifyCode("");
      setVerifyStep("request");
      setScreen("login");
    }
  };

  return (
    <div className="login">
      <div className="login-card">
        <h1>LiturgicalBooks JSON Editor</h1>
        <p className="muted">Sign in to edit content.</p>
        {screen === "login" && <p className="muted">You can use either your username or email.</p>}
        {screen === "login" && (
          <>
            <label>
              Username or Email
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
            {showNewPassword && (
              <label>
                New password
                <input
                  type="password"
                  value={newPasswordLogin}
                  onChange={(event) => setNewPasswordLogin(event.target.value)}
                  placeholder="New password"
                />
                <span className="muted">{passwordPolicyText}</span>
              </label>
            )}
            {error && <p className="error">{error}</p>}
            <button onClick={() => onLogin(username, password, newPasswordLogin)} disabled={loading}>
              {loading ? "Signing in..." : showNewPassword ? "Set new password & sign in" : "Sign in"}
            </button>
            <div className="login-links">
              <button type="button" className="link-button" onClick={() => setScreen("reset")}>
                Forgot or change password
              </button>
              <br />
              <button type="button" className="link-button" onClick={() => setScreen("verify")}>
                Verify email
              </button>
            </div>
          </>
        )}
        {screen === "reset" && (
          <div className="login-reset">
            <h2>Reset password</h2>
            <p className="muted">
              Send a reset code to your email, then enter the code with a new password.
            </p>
            <p className="muted">Enter either your username or email.</p>
            <label>
              Email or username
              <input
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                placeholder="your@email.com"
              />
            </label>
            {resetStep === "request" ? (
              <button type="button" onClick={handleRequestReset} disabled={resetLoading}>
                {resetLoading ? "Sending code..." : "Send reset code"}
              </button>
            ) : (
              <>
                <label>
                  Verification code
                  <input
                    value={verificationCode}
                    onChange={(event) => setVerificationCode(event.target.value)}
                    placeholder="123456"
                  />
                </label>
                <label>
                  New password
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(event) => setNewPassword(event.target.value)}
                    placeholder="New password"
                  />
                  <span className="muted">{passwordPolicyText}</span>
                </label>
                <div className="reset-actions">
                  <button type="button" onClick={handleConfirmReset} disabled={resetLoading}>
                    {resetLoading ? "Updating..." : "Set new password"}
                  </button>
                  <button
                    type="button"
                    className="secondary"
                    onClick={() => setResetStep("request")}
                    disabled={resetLoading}
                  >
                    Send new code
                  </button>
                </div>
              </>
            )}
            {combinedResetError && <p className="error">{combinedResetError}</p>}
            {resetMessage && <p className="success">{resetMessage}</p>}
            {resetStep === "request" && (
              <button
                type="button"
                className="link-button"
                onClick={() => setResetStep("confirm")}
              >
                I already have a code
              </button>
            )}
            <button type="button" className="link-button" onClick={() => setScreen("login")}>
              Back to sign in
            </button>
          </div>
        )}
        {screen === "verify" && (
          <div className="login-reset">
            <h2>Verify email</h2>
            <p className="muted">Send a verification code to the email on file.</p>
            <p className="muted">Enter either your username or email.</p>
            <label>
              Email or username
              <input
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                placeholder="your@email.com"
              />
            </label>
            {verifyStep === "request" ? (
              <button type="button" onClick={handleRequestVerifyEmail} disabled={verifyLoading}>
                {verifyLoading ? "Sending code..." : "Send verification code"}
              </button>
            ) : (
              <>
                <label>
                  Verification code
                  <input
                    value={verifyCode}
                    onChange={(event) => setVerifyCode(event.target.value)}
                    placeholder="123456"
                  />
                </label>
                <button type="button" onClick={handleConfirmVerifyEmail} disabled={verifyLoading}>
                  {verifyLoading ? "Verifying..." : "Verify email"}
                </button>
              </>
            )}
            {combinedVerifyError && <p className="error">{combinedVerifyError}</p>}
            {verifyMessage && <p className="success">{verifyMessage}</p>}
            {verifyStep === "request" && (
              <button type="button" className="link-button" onClick={() => setVerifyStep("confirm")}>
                I already have a code
              </button>
            )}
            <button type="button" className="link-button" onClick={() => setScreen("login")}>
              Back to sign in
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
