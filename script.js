document.addEventListener("DOMContentLoaded", function() {
    console.log("Website loaded successfully!");
});


function showDescription(job) {
    const descriptionElement = document.getElementById('job-description');

    switch (job) {
        case 'job1':
            descriptionElement.innerHTML = `<p><strong>Job 1</strong>: Description for Job 1. This job involved responsibilities such as... </p>`;
            break;
        case 'job2':
            descriptionElement.innerHTML = `<p><strong>Job 2</strong>: Description for Job 2. This role focused on... </p>`;
            break;
        case 'job3':
            descriptionElement.innerHTML = `<p><strong>Job 3</strong>: Description for Job 3. The key tasks were... </p>`;
            break;
        default:
            descriptionElement.innerHTML = `<p>Select a job to see the description.</p>`;
            break;
    }
}
