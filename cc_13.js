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
