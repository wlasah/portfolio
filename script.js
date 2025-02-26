document.addEventListener("DOMContentLoaded", function () {
    console.log("Script is running..."); // Debugging log

    const tableBody = document.querySelector("#subjects-table tbody");
    const jsonUrl = "https://wlasah.github.io/portfolio/courses.json"; // Correct JSON URL

    if (!tableBody) {
        console.error("Error: Table body not found! Make sure the table exists.");
        return;
    }

    fetch(jsonUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok " + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log("Data fetched successfully:", data); // Debugging log

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
