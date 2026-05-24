import { getCurrentUser } from "https://esm.sh/aws-amplify@6.15.6/auth";
import { hasAwsConfig } from "./aws.js";

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
    // Visitor is not logged in yet.
  }
}

updateHomeNav();
