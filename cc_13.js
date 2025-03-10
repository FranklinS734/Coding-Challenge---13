// Task 2: Function to add employee cards dynamically
function addEmployeeCard(name, position) {
    // Create the card container
    const card = document.createElement('div');
    card.classList.add('employee-card');

    // Add employee details
    const employeeName = document.createElement('h3');
    employeeName.textContent = name;
    
    const employeePosition = document.createElement('p');
    employeePosition.textContent = position;
    
    // Remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () =>{
        employeeContainer.removeChild(card);
    });


    // Append elements to the card
    card.appendChild(employeeName);
    card.appendChild(employeePosition);
    card.appendChild(removeButton);

    // Append card to container
    employeeContainer.appendChild(card); 
};

// example employees
addEmployeeCard('Daicco','Supply Chain Manager');
addEmployeeCard('Sunny', 'Business Analyst III');
addEmployeeCard('Neil', 'Lead Janitor');

// Task 3: Converting NodeLists to Arrays for Bulk Updates
function highlightEmployeeCards() {
    const employeeCards = Array.from(document.querySelectorAll('.employee-card'));
    employeeCards.forEach(card => card.style.border = '2px solid blue');
}

// Task 4: Implementing Removal of Employee Cards with Event Bubbling
employeeContainer.addEventListener("click", function () {
    console.log("An employee card was clicked.");
});

// Task 5: Additional Challenge – Inline Editing of Employee Details

employeeContainer.addEventListener("dblclick", function (event) {
    if (event.target.classList.contains("employee-card")) {
         // Checking if the clicked element has the class "employee-card"
        const card = event.target;
        const name = card.querySelector("h3").textContent;
        const position = card.querySelector("p").textContent;
        
        card.innerHTML = "";
        
        const nameInput = document.createElement("input");
        nameInput.value = name;
        
        const positionInput = document.createElement("input");
        positionInput.value = position;
        
        const saveButton = document.createElement("button");
        saveButton.textContent = "Save";
        // Adding an event listener to the save button to update the card when clicked
        saveButton.addEventListener("click", function () {
            card.innerHTML = "";
            // Creating an h3 element and set its text to the updated name
            const updatedName = document.createElement("h3");
            updatedName.textContent = nameInput.value;
            // Creating a p element and set its text to the updated position
            const updatedPosition = document.createElement("p");
            updatedPosition.textContent = positionInput.value;
            // Creating a new remove button to delete the employee card
            const newRemoveButton = document.createElement("button");
            newRemoveButton.textContent = "Remove";
            // Adding an event listener to the remove button to delete the card when clicked
            newRemoveButton.addEventListener("click", function (event) {
                event.stopPropagation();
                employeeContainer.removeChild(card);
            });
            // Append the updated name, position, and remove button back to the card
            card.appendChild(updatedName);
            card.appendChild(updatedPosition);
            card.appendChild(newRemoveButton);
        });
        // Append the input fields and save button to the card for editing
        card.appendChild(nameInput);
        card.appendChild(positionInput);
        card.appendChild(saveButton);
    }
});