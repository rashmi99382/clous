import {
  confirmResetPassword,
  confirmSignUp,
  getCurrentUser,
  hasAwsConfig,
  resetPassword,
  signIn,
  signUp
} from "./chunk-SSBODX2K.js";
import "./chunk-NYHZIGVN.js";

// assets/js/auth.js
var missingConfigMessage = "Add your Cognito and AWS IDs in assets/js/aws-config.js before using this form.";
function setMessage(id, message, type = "") {
  const element = document.getElementById(id);
  if (!element) {
    return;
  }
  element.textContent = message;
  element.className = `form-message ${type}`.trim();
}
function friendlyAuthError(error) {
  const message = error.message ?? "AWS authentication request failed.";
  if (message.includes("configured with secret") || message.includes("SECRET_HASH")) {
    return "Your Cognito app client has a client secret enabled. Create a new app client without a client secret, then update assets/js/aws-config.js.";
  }
  if (message.includes("already a signed in user")) {
    return "You are already logged in. Opening your dashboard...";
  }
  return message;
}
function requireConfig(messageId) {
  if (hasAwsConfig()) {
    return true;
  }
  setMessage(messageId, missingConfigMessage, "error");
  return false;
}
function value(id) {
  return document.getElementById(id)?.value.trim() ?? "";
}
document.getElementById("signup-form")?.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!requireConfig("signup-message")) {
    return;
  }
  setMessage("signup-message", "Creating account...");
  try {
    await signUp({
      username: value("signup-email"),
      password: value("signup-password"),
      options: {
        userAttributes: {
          email: value("signup-email"),
          name: value("signup-name")
        }
      }
    });
    document.getElementById("verify-email").value = value("signup-email");
    setMessage("signup-message", "Account created. Check your email for the verification code.", "success");
  } catch (error) {
    setMessage("signup-message", friendlyAuthError(error), "error");
  }
});
document.getElementById("verify-form")?.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!requireConfig("verify-message")) {
    return;
  }
  setMessage("verify-message", "Verifying account...");
  try {
    await confirmSignUp({
      username: value("verify-email"),
      confirmationCode: value("verify-code")
    });
    setMessage("verify-message", "Email verified. You can login now.", "success");
  } catch (error) {
    setMessage("verify-message", friendlyAuthError(error), "error");
  }
});
document.getElementById("login-form")?.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!requireConfig("login-message")) {
    return;
  }
  setMessage("login-message", "Logging in...");
  try {
    try {
      await getCurrentUser();
      window.location.href = "dashboard.html";
      return;
    } catch {
    }
    await signIn({
      username: value("login-email"),
      password: value("login-password")
    });
    window.location.href = "dashboard.html";
  } catch (error) {
    if ((error.message ?? "").includes("already a signed in user")) {
      setMessage("login-message", friendlyAuthError(error), "success");
      window.location.href = "dashboard.html";
      return;
    }
    setMessage("login-message", friendlyAuthError(error), "error");
  }
});
document.getElementById("forgot-form")?.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!requireConfig("forgot-message")) {
    return;
  }
  setMessage("forgot-message", "Sending reset code...");
  try {
    await resetPassword({ username: value("forgot-email") });
    document.getElementById("reset-email").value = value("forgot-email");
    setMessage("forgot-message", "Reset code sent. Check your email.", "success");
  } catch (error) {
    setMessage("forgot-message", friendlyAuthError(error), "error");
  }
});
document.getElementById("reset-form")?.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!requireConfig("reset-message")) {
    return;
  }
  setMessage("reset-message", "Resetting password...");
  try {
    await confirmResetPassword({
      username: value("reset-email"),
      confirmationCode: value("reset-code"),
      newPassword: value("reset-password")
    });
    setMessage("reset-message", "Password reset. You can login again.", "success");
  } catch (error) {
    setMessage("reset-message", friendlyAuthError(error), "error");
  }
});
