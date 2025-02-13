/* 
Card component returns function that maps through all of the the employees within our json object.

the function also contains a template of :
{ a div with the class "card-container" to cycle through the array of employeesn 
 and creates an individual card for each employee }
 using the map() method on the employee variable passed as a prop from Home to cycle through the employees. 
 the map() method fires a callback function where each time we want to return some tempplate; 
 we recieve an object called "employee" for each individual employee 
 which we can use to call other variables, such as: their name or profile picture 
 we then map over each employee using their name as the key. 
 we create a card for each individual employee with all of their corresponding information in the template.

the Card component is then exported to then be imported into and used within the home component
*/

import Card from 'react-bootstrap/Card'; //importing Card component from 'react-bootstrap' to display individual employees
import stockPhoto from './PhotoComingSoon.jpg' //place holder photo in case the photo links lead to nowhere.. 

/* we pass an argument called 'props' which is an object that we can use to access the information passed from Home */
const EmployeeList = (props) => {
    /* we used props to pass data from the parent component "Home" to the child component "Card", 
    setting them to a variables so that they can be used */
    const employees = props.employees;

    return (
      
            <div className="card-container">
            { employees.map((employee) => (
                <div className="employee-preview" key={employee.name}>
                    {/* card component imported from react-bootstrap library */}
                    <Card 
                        style={{
                            /* 
                                since we were tasked explicity with assigning a border to each card,
                                depending on how long the employee has been with the company:
                                I decided to put the styling in the Component directly. 
                                This ensures that the style cant be manipulated easily and is not simply for aesthetics.
                                For larger projects, i would create a seperate css file 
                                however for small project, this is more convenient 
                            */
                            border: employee.yearsAtCompany >= 5 ? '3px solid goldenrod' 
                            : employee.yearsAtCompany <= 1 ? '3px solid firebrick'
                            : '3px solid slategray',
                            borderRadius: '15px',
                            boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.6)'
                        }}>
                         <Card.Img variant="top" 
                            src={employee.profilePicture}
                            alt={employee.name} 
                            //since the links given to us are missing images, we needed a fallback photo
                            onError={(e) => e.target.src = stockPhoto}
                            style={{ width: '100%', height: '300px', objectFit: 'cover' }}  //making sure the photo fits its card
                            />
                        <Card.Body>
                            <Card.Title>{employee.name}</Card.Title>
                            <Card.Text>
                                <div className="employee-info">
                                    <div employeeRole="employee-role">
                                        <strong>Role: </strong>{employee.role}
                                    </div>
                                    <div className="employee-department">
                                        <strong>Department: </strong>{employee.department}
                                    </div>
                                    <div className="employee-email">
                                        <strong>Email: </strong>
                                        <a href={`mailto:${employee.email}`}>{employee.email}</a>
                                    </div>
                                </div>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            ))}
            </div>
        
  );
}

export default EmployeeList;

