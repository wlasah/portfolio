document.addEventListener("DOMContentLoaded", function () {
    console.log("Script is running...");

    const tableBody = document.querySelector("#subjects-table tbody");
    const searchInput = document.getElementById("searchInput");
    const jsonUrl = "https://wlasah.github.io/portfolio/courses.json";

    if (!tableBody) {
        console.error("Error: Table body not found!");
        return;
    }

    fetch(jsonUrl)
        .then(response => {
            if (!response.ok) throw new Error("Network response was not ok " + response.statusText);
            return response.json();
        })
        .then(data => {
            console.log("Data fetched successfully:", data);
            loadSubjects(data.courses);
        })
        .catch(error => console.error("Error fetching the JSON file:", error));

    function loadSubjects(courses) {
        tableBody.innerHTML = "";

        courses.forEach(course => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${course.year_level}</td>
                <td>${course.sem}</td>
                <td>${course.code}</td>
                <td>${course.description}</td>
                <td>${course.credit}</td>
            `;
            tableBody.appendChild(row);
        });

        searchInput.addEventListener("input", function () {
            const searchTerm = searchInput.value.toLowerCase();
            const rows = tableBody.getElementsByTagName("tr");

            for (let row of rows) {
                const description = row.cells[3].textContent.toLowerCase();
                row.style.display = description.includes(searchTerm) ? "" : "none";
            }
        });
    }
});
