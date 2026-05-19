const searchBar = document.getElementById("searchbar");
const grid = document.getElementById("grid-arg-java");
const args = grid.querySelectorAll(".arg");

searchBar.addEventListener("input", () => {
    const query = searchBar.value.toLowerCase().trim();

    args.forEach(arg => {
        const title = arg.querySelector(".arg-title").textContent.toLowerCase();

        if (title.includes(query)) {
            arg.style.display = "block";
        } else {
            arg.style.display = "none";
        }
    });
});
