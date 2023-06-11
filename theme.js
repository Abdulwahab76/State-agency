
const modeToggle = document.getElementById("modeToggle");
const html = document.documentElement;

modeToggle.addEventListener("click", () => {
    html.classList.toggle("dark");

    // Store the user's preference in local storage
    if (html.classList.contains("dark")) {
        localStorage.setItem("mode", "dark");
    } else {
        localStorage.setItem("mode", "light");
    }
});

// Check if the user has a preferred mode stored in local storage
const savedMode = localStorage.getItem("mode");
if (savedMode === "dark") {
    html.classList.add("dark");
}
