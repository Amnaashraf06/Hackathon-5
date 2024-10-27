const form = document.getElementById('resumeForm') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resumeOutput') as HTMLDivElement;
const shareableLinkContainer = document.getElementById('shareable-link-container')as HTMLDivElement;
const shareableLinkElement = document.getElementById('shareable-link')as HTMLAnchorElement;
const downloadPDFButton = document.getElementById('download-pdf')as HTMLButtonElement;

form.addEventListener('submit', (event:Event) => {
    event.preventDefault();

    const username=(document.getElementById('username')as HTMLInputElement).value;
    const age=(document.getElementById('age')as HTMLInputElement).value
    const gender=(document.getElementById('gender')as HTMLInputElement).value
    const email=(document.getElementById('email')as HTMLInputElement).value;
    const phone=(document.getElementById('phone')as HTMLInputElement).value
    const city=(document.getElementById('city')as HTMLInputElement).value
    const education=(document.getElementById('education')as HTMLInputElement).value;
    const experience=(document.getElementById('experience')as HTMLInputElement).value;
    const skills=(document.getElementById('skills')as HTMLInputElement).value;

    const resumeData={username,age,gender,email,phone,city,education,experience,skills};
    localStorage.setItem(username, JSON.stringify(resumeData));

    const resumeHTML=`
        <h2>Personal Information </h2>
        <p><strong>Name:</strong> ${username} </p>
        <p><strong>Age:</strong> ${age} </p>
        <p><strong>Gender:</strong> ${gender} </p>
        <p><strong>Email:</strong> ${email} </p>
        <p><strong>Phon:</strong> ${phone} </p>
        <p><strong>City:</strong> ${city} </p>
        <p><strong>Education:</strong> ${education} </p>
        <p><strong>Experience:</strong> ${experience} </p>
        <p><strong>Skills:</strong> ${skills} </p>
        `;

    resumeDisplayElement.innerHTML = resumeHTML;
    const shareableURL =`${window.location.origin}${window.location.pathname}?username=${encodeURIComponent(username)}`;
    shareableLinkContainer.style.display="block";
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});

downloadPDFButton.addEventListener("click",()=>{
window.print();
})

window.addEventListener("DOMContentLoaded", ()=>{
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get("username");
    if(username){
        const savedResumeData = localStorage.getItem(username);
        if(savedResumeData){
    const resumeData=JSON.parse(savedResumeData);
    (document.getElementById('username')as HTMLInputElement).value=username;
    (document.getElementById('age')as HTMLInputElement).value= resumeData.age;
    (document.getElementById('gender')as HTMLInputElement).value= resumeData.gender;
    (document.getElementById('email')as HTMLInputElement).value=resumeData.email;
    (document.getElementById('phone')as HTMLInputElement).value= resumeData.phone;
    (document.getElementById('city')as HTMLInputElement).value= resumeData.city;
    (document.getElementById('education')as HTMLInputElement).value=resumeData.education;
    (document.getElementById('experience')as HTMLInputElement).value=resumeData.experience;
    (document.getElementById('skills')as HTMLInputElement).value=resumeData.skills;

    }

    }
    

});
