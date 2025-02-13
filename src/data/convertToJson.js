//installing Node.js file system module so we can read and write files to the computer 
const fs = require('fs');

//copy paste JavaScript object from document 
const employees = [
    { name: "Alice Johnson"
    , role: "Software Engineer"
    , department:
    "Engineering"
    , email: "alice@example.com"
    , profilePicture:
    "https://example.com/alice.jpg"
    , yearsAtCompany: 3 },
    { name: "Bob Smith"
    , role: "Product Manager"
    , department:
    "Product"
    , email: "bob@example.com"
    , profilePicture:
    "https://example.com/bob.jpg"
    , yearsAtCompany: 5 },
    { name: "Charlie Lee"
    , role: "Designer"
    , department: "Design"
    ,
    email: "charlie@example.com"
    , profilePicture:
    "https://example.com/charlie.jpg"
    , yearsAtCompany: 1 },
    { name: "David Wilson"
    , role: "Data Scientist"
    , department:
    "Analytics"
    , email: "david@example.com"
    , profilePicture:
    "https://example.com/david.jpg"
    , yearsAtCompany: 4 },
    { name: "Eva Carter"
    , role: "HR Specialist"
    , department: "Human Resources"
    , email: "eva@example.com"
    , profilePicture:
    "https://example.com/eva.jpg"
    , yearsAtCompany: 2 },
    { name: "Frank Thompson"
    , role: "Marketing Coordinator"
    ,
    department: "Marketing"
    , email: "frank@example.com"
    , profilePicture:
    "https://example.com/frank.jpg"
    , yearsAtCompany: 3 },
    { name: "Grace Davis"
    , role: "UX Researcher"
    , department:
    "Design"
    , email: "grace@example.com"
    , profilePicture:
    "https://example.com/grace.jpg"
    , yearsAtCompany: 2 },
    { name: "Henry Martinez"
    , role: "System Administrator"
    ,
    department: "IT"
    , email: "henry@example.com"
    , profilePicture:
    "https://example.com/henry.jpg"
    , yearsAtCompany: 6 },
    { name: "Irene Taylor"
    , role: "Business Analyst"
    , department:
    "Product"
    , email: "irene@example.com"
    , profilePicture:
    "https://example.com/irene.jpg"
    , yearsAtCompany: 3 },
    { name: "Jack Wilson"
    , role: "Front-end Developer"
    , department:
    "Engineering"
    , email: "jack@example.com"
    , profilePicture:
    "https://example.com/jack.jpg"
    , yearsAtCompany: 1 }
    ];

    //converting the JavaScript object to a JSON string which will be recorded in the employees.json file
    //indenting the print by 2 spaces for readability 
    const jsonData = JSON.stringify(employees, null, 2);

    //writing the JSON string to the employees.json file
    fs.writeFileSync('employees.json', jsonData, 'utf-8');
    