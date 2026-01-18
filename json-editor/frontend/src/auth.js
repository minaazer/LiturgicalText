import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserPool,
} from "amazon-cognito-identity-js";
import { COGNITO } from "./config.js";

let userPool = null;

const getUserPool = () => {
  if (userPool) return userPool;
  if (!COGNITO.userPoolId || !COGNITO.clientId) {
    return null;
  }
  userPool = new CognitoUserPool({
    UserPoolId: COGNITO.userPoolId,
    ClientId: COGNITO.clientId,
  });
  return userPool;
};

export const getCurrentUser = () => {
  const pool = getUserPool();
  if (!pool) return null;
  return pool.getCurrentUser();
};

export const signIn = (username, password, newPassword) =>
  new Promise((resolve, reject) => {
    const pool = getUserPool();
    if (!pool) {
      reject(new Error("Missing Cognito configuration."));
      return;
    }
    const user = new CognitoUser({ Username: username, Pool: pool });
    const authDetails = new AuthenticationDetails({ Username: username, Password: password });
    user.authenticateUser(authDetails, {
      onSuccess: (session) => resolve({ user, session }),
      onFailure: (err) => reject(err),
      newPasswordRequired: () => {
        if (!newPassword) {
          const err = new Error("New password required. Enter a new password to continue.");
          err.code = "NEW_PASSWORD_REQUIRED";
          reject(err);
          return;
        }
        user.completeNewPasswordChallenge(newPassword, {}, {
          onSuccess: (session) => resolve({ user, session }),
          onFailure: (err) => reject(err),
        });
      },
    });
  });

export const requestPasswordReset = (username) =>
  new Promise((resolve, reject) => {
    const pool = getUserPool();
    if (!pool) {
      reject(new Error("Missing Cognito configuration."));
      return;
    }
    const user = new CognitoUser({ Username: username, Pool: pool });
    user.forgotPassword({
      onSuccess: () => resolve(),
      onFailure: (err) => reject(err),
      inputVerificationCode: () => resolve(),
    });
  });

export const confirmPasswordReset = (username, code, newPassword) =>
  new Promise((resolve, reject) => {
    const pool = getUserPool();
    if (!pool) {
      reject(new Error("Missing Cognito configuration."));
      return;
    }
    const user = new CognitoUser({ Username: username, Pool: pool });
    user.confirmPassword(code, newPassword, {
      onSuccess: () => resolve(),
      onFailure: (err) => reject(err),
    });
  });

export const signOut = () => {
  const user = getCurrentUser();
  if (user) user.signOut();
};

export const getSession = () =>
  new Promise((resolve, reject) => {
    const user = getCurrentUser();
    if (!user) {
      resolve(null);
      return;
    }
    user.getSession((err, session) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({ user, session });
    });
  });
