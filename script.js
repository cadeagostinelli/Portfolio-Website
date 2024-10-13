document.addEventListener("DOMContentLoaded", function() {
    console.log("Website loaded successfully!");
});


function showDescription(job) {
    const descriptionElement = document.getElementById('job-description');
    let descriptionHTML = '';

    // Set description based on selected job
    switch (job) {
        case 'job1':
            descriptionHTML = `
                <h2 class="job-title">Software Engineer Intern<span class="company">@ Fractal Networks</span></h2>
                <p class="dates">Jan 2024 - Apr 2024</p>
                <ul class="job-responsibilities">
                    <li>Collaborated with a team and led the development of over 50% of the backend production code for an event social media app utilizing 
                    React, Django, and Node.js, resulting in a user-friendly interface with efficient backend integration</li>
                    <li>Containerized applications with Docker to ensure consistent environments, and improved scalability through CI/CD processes, 
                    including pull requests and resolving merge conflicts</li>
                    <li>Implemented notification and phone verification functionality of the app using Twilio API and developed REST APIs 
                    for seamless communication between frontend and backend services</li>
                    <li>Developed unit tests for Fractal Network’s extensive systems and clients, achieving 90% average code coverage</li>
                    <li>Improved Fractal Network’s asynchronous client by developing over 60+ unit tests with Python while collaborating with 
                    senior software engineers to conduct code reviews and reimplement the client’s infrastructure</li>
                </ul>
            `;
            break;
        case 'job2':
            descriptionHTML = `
                <h2 class="job-title">STEM Teacher <span class="company">@ Computer Explorers</span></h2>
                <p class="dates">May 2022 - Aug 2022</p>
                <ul class="job-responsibilities">
                    <li>Mentored and trained young minds from the Jackson metropolitan area in essential technical skills</li>
                    <li>Helped equip over 100+ students with a solid foundation to excel in STEM fields in the future</li>
                    <li>Coordinated and executed effective lessons to teach concepts like coding and sciences</li>
                </ul>
            `;
            break;
        default:
            descriptionHTML = '<p>Select a job to see the description.</p>';
    }

    // Fade out the current description
    descriptionElement.classList.add('fade-in');

    setTimeout(() => {
        descriptionElement.innerHTML = descriptionHTML;
        descriptionElement.classList.remove('fade-in');
    }, 300); 
}
