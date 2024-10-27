var form = document.getElementById('resumeForm');
var resumeDisplayElement = document.getElementById('resumeOutput');
var shareableLinkContainer = document.getElementById('shareable-link-container');
var shareableLinkElement = document.getElementById('shareable-link');
var downloadPDFButton = document.getElementById('download-pdf');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var age = document.getElementById('age').value;
    var gender = document.getElementById('gender').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var city = document.getElementById('city').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumeData = { username: username, age: age, gender: gender, email: email, phone: phone, city: city, education: education, experience: experience, skills: skills };
    localStorage.setItem(username, JSON.stringify(resumeData));
    var resumeHTML = "\n        <h2>Personal Information </h2>\n        <p><strong>Name:</strong> ".concat(username, " </p>\n        <p><strong>Age:</strong> ").concat(age, " </p>\n        <p><strong>Gender:</strong> ").concat(gender, " </p>\n        <p><strong>Email:</strong> ").concat(email, " </p>\n        <p><strong>Phon:</strong> ").concat(phone, " </p>\n        <p><strong>City:</strong> ").concat(city, " </p>\n        <p><strong>Education:</strong> ").concat(education, " </p>\n        <p><strong>Experience:</strong> ").concat(experience, " </p>\n        <p><strong>Skills:</strong> ").concat(skills, " </p>\n        ");
    resumeDisplayElement.innerHTML = resumeHTML;
    var shareableURL = "".concat(window.location.origin).concat(window.location.pathname, "?username=").concat(encodeURIComponent(username));
    shareableLinkContainer.style.display = "block";
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
downloadPDFButton.addEventListener("click", function () {
    window.print();
});
window.addEventListener("DOMContentLoaded", function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get("username");
    if (username) {
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value = username;
            document.getElementById('age').value = resumeData.age;
            document.getElementById('gender').value = resumeData.gender;
            document.getElementById('email').value = resumeData.email;
            document.getElementById('phone').value = resumeData.phone;
            document.getElementById('city').value = resumeData.city;
            document.getElementById('education').value = resumeData.education;
            document.getElementById('experience').value = resumeData.experience;
            document.getElementById('skills').value = resumeData.skills;
        }
    }
});
