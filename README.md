# Employee Directory Project

The **Employee Directory Project** is a web application built using React. The application allows users to view and search a list of employees based on their name or department. The directory provides detailed information about each employee, including their role, department, email, and profile picture.

- **Name**
- **Role**
- **Department**
- **Email**
- **Profile Picture**


### Prerequisites

- Node.js
- npm


### Steps to Install

1. ```git clone https://github.com/RahelSasson/employee-directory-project.git```
2. ```cd employee-directory-project```
3. ```npm install```
4. ```npm run start```


### Project Structure 
```
src/
  assests/
    PhotoComingSoon.jpg
  components/
    App.js
    EmployeeList.js
    Home.js
    Navbar.js
  data/
    employees.json
  App.css
  index.js
  index.css
```


##JSON Data Format

The employee data is stored in the data/employees.json file in the following format:

~~~
{
  "employees": [
    {
      "name": "Alice Johnson",
      "role": "Software Engineer",
      "department": "Engineering",
      "email": "alice@example.com",
      "profilePicture": "https://example.com/alice.jpg",
      "yearsAtCompany": 3
    },
    {
      "name": "Bob Smith",
      "role": "Product Manager",
      "department": "Product",
      "email": "bob@example.com",
      "profilePicture": "https://example.com/bob.jpg",
      "yearsAtCompany": 5
    }
  ]
}
~~~


## Fields:

name: Employee's full name (first and last)

role: Employee's job title

department: Department the employee works in

email: Employee's email address

profilePicture: URL to the employee's profile picture

yearsAtCompany: The number of years the employee has worked at the company


## Features 

- Displays each employee as a card:
  
  Profile Picture
  
  Name
  
  Role
  
  Department
  
  Email (Clickable)
  
- Conditional Styling:
  
  Gold Border: For employees with 5 or more years at the company.
  
  Red Border: For employees with 1 year or less.
  
  Gray Border: For all other employees.
  
- Search Functionality -- Allows users to filter employees by:
  
  Name
  
  Department
  
 (The search is case-insensitive and dynamically updates the displayed employee cards as you type.)
 
- Home Link: A "Home" link located at the upper-right corner that directs to the root of the application for easy navigation.
