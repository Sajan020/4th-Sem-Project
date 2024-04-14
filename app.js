
window.onload = function() {
   
    const midSemesterMarks = "Mid Semester Marks: OOP-35 OS-30 DM-32 COA-55 PEM-50";
    const attendance = "Attendance: 90%";
    const timeTable = "Time Table: Monday to Friday, 8:30 AM - 3:00 PM";
    const examSchedule = "Exam Schedule: May 1st to May 15th";
    const academicCalendar = "Academic Calendar: February 2024 - June 2024";
    
    // Update section content
    document.getElementById("mid-semester-marks").innerHTML += `<div class="section-content">${midSemesterMarks}</div>`;
    document.getElementById("attendance").innerHTML += `<div class="section-content">${attendance}</div>`;
    document.getElementById("time-table").innerHTML += `<div class="section-content">${timeTable}</div>`;
    document.getElementById("exam-schedule").innerHTML += `<div class="section-content">${examSchedule}</div>`;
    document.getElementById("academic-calendar").innerHTML += `<div class="section-content">${academicCalendar}</div>`;
}

// Redirect after form submission
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
        
       
        window.location.href = "student_portal.html";
    });
});


