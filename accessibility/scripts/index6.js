const button = document.getElementById("custom-btn-6");

button.addEventListener("click", () => {
  alert("تم النقر على الزر!");
});

button.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault(); 
    button.click();
  }
});


const button6 = document.getElementById("update-status-btn6");
const statusMessage6 = document.getElementById("status-msg6");

button6.addEventListener("click", () => {
 statusMessage6.textContent = "اكتمل الرفع بنجاح.";
});




const dialog62 = document.getElementById("custom-dialog6-2");
const openBtn62 = document.getElementById("open-dialog6-2");
const closeBtn62 = document.getElementById("close-dialog6-2");
const confirmBtn62 = document.getElementById("confirm-btn6-2");

openBtn62.addEventListener("click", () => {
 dialog62.style.display = "flex";
});

closeBtn62.addEventListener("click", () => {
 dialog62.style.display = "none";
});

confirmBtn62.addEventListener("click", () => {
 alert("تم حذف الملف.");
 dialog62.style.display = "none";
});




const passwordEl65 = document.getElementById("password-6-5");
const passwordHelpText65 = document.getElementById("password-help-6-5");

passwordEl65.addEventListener("input", (e) => {
 const userInput = e.target.value;
 passwordHelpText65.style.color = userInput.length >= 8 ? "green" : "red";
});