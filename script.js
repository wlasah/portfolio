document.addEventListener("DOMContentLoaded", function () {
    const tableBody = document.querySelector("#subjects-table tbody");
    const jsonUrl = "https://wlasah.github.io/portfolio/courses.json";

    fetch(jsonUrl)
        .then(response => response.json())
        .then(data => {
            data.courses.forEach(course => {
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
        })
        .catch(error => console.error("Error fetching the JSON file:", error));
});
