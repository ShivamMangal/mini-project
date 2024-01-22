document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let username = document.querySelector('input[type="text"]').value;
    let password = document.querySelector('input[type="password"]').value;

    if (username === 'admin' && password === 'admin') {
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('loggedIn') !== 'true') {
        window.location.href = 'index.html';
    }
});
document.getElementById('visitorForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let visitorName = document.getElementById('visitorName').value;
    let phoneNumber = document.getElementById('phoneNumber').value;
    let checkInTime = document.getElementById('checkInTime').value;
    let checkOutTime = document.getElementById('checkOutTime').value;

    let visitorLog = document.getElementById('visitorLog');
    let newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${visitorName}</td>
        <td>${phoneNumber}</td>
        <td>${checkInTime}</td>
        <td>${checkOutTime}</td>
        <td><a href="#">View Photo</a></td>
    `;

    visitorLog.appendChild(newRow);
    this.reset();
});
// Define sample staff data (you can replace this with your actual data)
const staffData = [
    { name: 'John Doe', department: 'Management', email: 'john.doe@example.com', phone: '123-456-7890' },
    { name: 'Jane Smith', department: 'Maintenance', email: 'jane.smith@example.com', phone: '234-567-8901' },
    { name: 'Bob Johnson', department: 'Security', email: 'bob.johnson@example.com', phone: '345-678-9012' },
    // Add more staff members as needed
];

// Function to populate the staff list
function populateStaffList(data) {
    const staffList = document.getElementById('staffList');
    staffList.innerHTML = '';

    data.forEach(staff => {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${staff.name}</td>
            <td>${staff.department}</td>
            <td>${staff.email}</td>
            <td>${staff.phone}</td>
            <td class="actions">
                <a href="#">Edit</a>
                <a href="#" class="delete">Delete</a>
            </td>
        `;
        staffList.appendChild(newRow);
    });
}

// Initial population of staff list
populateStaffList(staffData);

// Filter staff by department
document.getElementById('departmentFilter').addEventListener('change', function() {
    const selectedDepartment = this.value;
    if (selectedDepartment === 'all') {
        populateStaffList(staffData);
    } else {
        const filteredData = staffData.filter(staff => staff.department.toLowerCase() === selectedDepartment.toLowerCase());
        populateStaffList(filteredData);
    }
});

// Search staff by name
document.getElementById('staffSearch').addEventListener('input', function() {
    const searchText = this.value.toLowerCase();
    const filteredData = staffData.filter(staff => staff.name.toLowerCase().includes(searchText));
    populateStaffList(filteredData);
});

// Add functionality for delete action (you can implement this as needed)
document.getElementById('staffList').addEventListener('click', function(event) {
    if (event.target.classList.contains('delete')) {
        // Implement delete logic here
        event.preventDefault();
        const row = event.target.parentElement.parentElement;
        row.remove();
    }
});
// Define sample meeting data (you can replace this with your actual data)
let meetingsData = [
    { title: 'General Assembly', date: '2023-10-30', time: '14:00' },
    { title: 'Board Meeting', date: '2023-11-05', time: '10:00' },
    // Add more meetings as needed
];

// Function to populate the meeting list
function populateMeetingList(data) {
    const meetingList = document.getElementById('meetingList');
    meetingList.innerHTML = '';

    data.forEach((meeting, index) => {
        const newMeetingItem = document.createElement('li');
        newMeetingItem.innerHTML = `
            <span>${meeting.title} - ${meeting.date} at ${meeting.time}</span>
            <button class="viewDetails" data-index="${index}">View Details</button>
        `;
        meetingList.appendChild(newMeetingItem);
    });
}

// Function to display meeting details
function displayMeetingDetails(index) {
    const meeting = meetingsData[index];
    const meetingTitleDetails = document.getElementById('meetingTitleDetails');
    const meetingDateTimeDetails = document.getElementById('meetingDateTimeDetails');

    meetingTitleDetails.textContent = `Title: ${meeting.title}`;
    meetingDateTimeDetails.textContent = `Date and Time: ${meeting.date} at ${meeting.time}`;

    const meetingDetails = document.getElementById('meetingDetails');
    meetingDetails.classList.remove('hidden');
}

// Initial population of meeting list
populateMeetingList(meetingsData);

// Event listener for viewing meeting details
document.getElementById('meetingList').addEventListener('click', function(event) {
    if (event.target.classList.contains('viewDetails')) {
        const index = event.target.getAttribute('data-index');
        displayMeetingDetails(index);
    }
});

// Event listener for submitting new meeting form
document.getElementById('meetingForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const meetingTitle = document.getElementById('meetingTitle').value;
    const meetingDate = document.getElementById('meetingDate').value;
    const meetingTime = document.getElementById('meetingTime').value;

    meetingsData.push({ title: meetingTitle, date: meetingDate, time: meetingTime });
    populateMeetingList(meetingsData);

    this.reset();
});
// Define sample ticket data (you can replace this with your actual data)
let ticketData = [
    { category: 'Maintenance', description: 'Broken elevator in building A' },
    { category: 'Security', description: 'Access card not working' },
    // Add more tickets as needed
];

// Function to populate the ticket list
function populateTicketList(data) {
    const ticketList = document.getElementById('ticketList');
    ticketList.innerHTML = '';

    data.forEach((ticket, index) => {
        const newTicketItem = document.createElement('li');
        newTicketItem.innerHTML = `
            <span>${ticket.category}</span>
            <button class="viewDetails" data-index="${index}">View Details</button>
        `;
        ticketList.appendChild(newTicketItem);
    });
}

// Function to display ticket details
function displayTicketDetails(index) {
    const ticket = ticketData[index];
    const ticketCategoryDetails = document.getElementById('ticketCategoryDetails');
    const ticketDescriptionDetails = document.getElementById('ticketDescriptionDetails');

    ticketCategoryDetails.textContent = `Category: ${ticket.category}`;
    ticketDescriptionDetails.textContent = `Description: ${ticket.description}`;

    const ticketDetails = document.getElementById('ticketDetails');
    ticketDetails.classList.remove('hidden');
}

// Initial population of ticket list
populateTicketList(ticketData);

// Event listener for viewing ticket details
document.getElementById('ticketList').addEventListener('click', function(event) {
    if (event.target.classList.contains('viewDetails')) {
        const index = event.target.getAttribute('data-index');
        displayTicketDetails(index);
    }
});

// Event listener for submitting new ticket form
document.getElementById('ticketForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const ticketCategory = document.getElementById('ticketCategory').value;
    const ticketDescription = document.getElementById('ticketDescription').value;

    ticketData.push({ category: ticketCategory, description: ticketDescription });
    populateTicketList(ticketData);

    this.reset();
});

// Event listener for updating a ticket
document.getElementById('updateTicket').addEventListener('click', function() {
    // Implement update logic here
    alert('Ticket updated!');
});

// Event listener for closing a ticket
document.getElementById('closeTicket').addEventListener('click', function() {
    // Implement close logic here
    alert('Ticket closed!');
});
// Update the displayTicketDetails function
function displayTicketDetails(index) {
    const ticket = ticketData[index];
    const ticketCategoryDetails = document.getElementById('ticketCategoryDetails');
    const ticketDescriptionDetails = document.getElementById('ticketDescriptionDetails');
    const ticketFileDetails = document.getElementById('ticketFileDetails');

    ticketCategoryDetails.textContent = `Category: ${ticket.category}`;
    ticketDescriptionDetails.textContent = `Description: ${ticket.description}`;

    if (ticket.fileDataURL) {
        ticketFileDetails.innerHTML = `
            <label for="fileDetails">Attached File:</label>
            <img src="${ticket.fileDataURL}" alt="Attached File" id="fileDetails" style="max-width: 100%;"/>
        `;
    } else {
        ticketFileDetails.innerHTML = ''; // Clear if no file is attached
    }

    const ticketDetails = document.getElementById('ticketDetails');
    ticketDetails.classList.remove('hidden');
}
// Update the displayTicketDetails function
function displayTicketDetails(index) {
    const ticket = ticketData[index];
    const ticketCategoryDetails = document.getElementById('ticketCategoryDetails');
    const ticketDescriptionDetails = document.getElementById('ticketDescriptionDetails');
    const ticketFileDetails = document.getElementById('ticketFileDetails');

    ticketCategoryDetails.textContent = `Category: ${ticket.category}`;
    ticketDescriptionDetails.textContent = `Description: ${ticket.description}`;

    if (ticket.fileDataURL) {
        ticketFileDetails.innerHTML = `
            <label for="fileDetails">Attached File:</label>
            <img src="${ticket.fileDataURL}" alt="Attached File" id="fileDetails" style="max-width: 100%;"/>
        `;
    } else {
        ticketFileDetails.innerHTML = ''; // Clear if no file is attached
    }

    const ticketDetails = document.getElementById('ticketDetails');
    ticketDetails.classList.remove('hidden');
}
// Define sample amenity data (you can replace this with your actual data)
let amenityData = [
    { name: 'Swimming Pool', description: 'Outdoor pool for residents' },
    { name: 'Gym', description: 'Fully-equipped fitness center' },
    // Add more amenities as needed
];

// Function to populate the amenity list
function populateAmenityList(data) {
    const amenityList = document.getElementById('amenityList');
    amenityList.innerHTML = '';

    data.forEach((amenity, index) => {
        const newAmenityItem = document.createElement('li');
        newAmenityItem.innerHTML = `
            <span>${amenity.name}</span>
            <button class="viewDetails" data-index="${index}">View Details</button>
        `;
        amenityList.appendChild(newAmenityItem);
    });
}

// Function to display amenity details
function displayAmenityDetails(index) {
    const amenity = amenityData[index];
    const amenityNameDetails = document.getElementById('amenityNameDetails');
    const amenityDescriptionDetails = document.getElementById('amenityDescriptionDetails');

    amenityNameDetails.textContent = `Name: ${amenity.name}`;
    amenityDescriptionDetails.textContent = `Description: ${amenity.description}`;

    const amenityDetails = document.getElementById('amenityDetails');
    amenityDetails.classList.remove('hidden');
}

// Initial population of amenity list
populateAmenityList(amenityData);

// Event listener for viewing amenity details
document.getElementById('amenityList').addEventListener('click', function(event) {
    if (event.target.classList.contains('viewDetails')) {
        const index = event.target.getAttribute('data-index');
        displayAmenityDetails(index);
    }
});

// Event listener for submitting reservation form
document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const reservationName = document.getElementById('reservationName').value;
    const reservationDate = document.getElementById('reservationDate').value;
    const reservationTime = document.getElementById('reservationTime').value;

    // Implement reservation logic here (e.g., add to a reservations list)
    alert(`Reservation details:\nName: ${reservationName}\nDate: ${reservationDate}\nTime: ${reservationTime}`);

    this.reset();
});
