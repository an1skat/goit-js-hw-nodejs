const data = [];
const form = document.querySelector("[data-form]");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = e.target.querySelector("#email").value;
  const pass = e.target.querySelector("#password").value;

  if (data.find((user) => user.email === email)) {
    return alert("This email is already taken");
  }

  data.push({
    email: email,
    password: pass,
  });
  alert("You are register!");
  return window.reload
});
