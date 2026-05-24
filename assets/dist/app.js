import {
  getCurrentUser,
  hasAwsConfig
} from "./chunk-SSBODX2K.js";
import "./chunk-NYHZIGVN.js";

// assets/js/app.js
async function updateHomeNav() {
  if (!hasAwsConfig()) {
    return;
  }
  try {
    await getCurrentUser();
    const nav = document.querySelector(".nav-links");
    if (nav) {
      nav.innerHTML = '<a class="button small" href="dashboard.html">Open dashboard</a>';
    }
  } catch {
  }
}
updateHomeNav();
