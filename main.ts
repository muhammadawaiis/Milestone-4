// main.ts
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeSection = document.getElementById('dynamic-resume') as HTMLElement;
const printButton = document.getElementById('print-button') as HTMLButtonElement;

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get form values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const school = (document.getElementById('school') as HTMLInputElement).value;
    const gradYear = (document.getElementById('gradYear') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');

    // Form Validation
    if (!name || !email || !phone || !degree || !school || !gradYear || !experience || !skills.length) {
        alert('Please fill out all fields!');
        return;
    }

    // Dynamically generate the resume below the form
    generateResume(name, email, phone, degree, school, gradYear, experience, skills);

    // Show the Print button after resume is generated
    printButton.style.display = 'block';
});

// Function to dynamically generate the resume
function generateResume(
    name: string, email: string, phone: string, degree: string, 
    school: string, gradYear: string, experience: string, skills: string[]
) {
    // Clear current resume content
    resumeSection.innerHTML = '';

    // Build the resume content
    const personalInfo = `
        <h3 contenteditable="true">Personal Information</h3>
        <p contenteditable="true"><strong>Name:</strong> ${name}</p>
        <p contenteditable="true"><strong>Email:</strong> ${email}</p>
        <p contenteditable="true"><strong>Phone:</strong> ${phone}</p>
    `;

    const educationInfo = `
        <h3 contenteditable="true">Education</h3>
        <p contenteditable="true"><strong>Degree:</strong> ${degree}</p>
        <p contenteditable="true"><strong>School:</strong> ${school}</p>
        <p contenteditable="true"><strong>Graduation Year:</strong> ${gradYear}</p>
    `;

    const workExperience = `
        <h3 contenteditable="true">Work Experience</h3>
        <p contenteditable="true">${experience}</p>
    `;

    const skillsList = skills.map(skill => `<li contenteditable="true">${skill.trim()}</li>`).join('');
    const skillsInfo = `
        <h3 contenteditable="true">Skills</h3>
        <ul>${skillsList}</ul>
    `;

    // Append generated content to the resume section
    resumeSection.innerHTML = personalInfo + educationInfo + workExperience + skillsInfo;
}

// Add print functionality to the Print button
printButton.addEventListener('click', () => {
    window.print();
});
