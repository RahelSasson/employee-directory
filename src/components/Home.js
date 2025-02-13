/* 
Home component returns function which contains a template of :
{ a div with a class of "home" }
{ the "Navbar" component }
{ followed by another div with the class "content" to be displayed }

the Home component is then exported to then be imported into the App component
*/

import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import employeeData from '../data/employees.json'; // import the JSON employee data
import EmployeeList from './EmployeeList';


const Home = () => { 

    /* 
    We begin by declaring some reactive variables. 
    Reactive elements are watched for changes in their value by React. 
    So when a new value is passed to the variable, 
    a trigger is called to re-render the template with the new value inside of it

    One way we can do this is by using hooks, such as the hook useState 
    React offers certain predfined hook functions for us to import and utlizie.
    The useState hook allows us to create a reactive element and be able to change it whenever we want. 
    */

    /* 
    using useState, giving it an intial value of null and storing it in an array to grab the 2 values that the hook returns to us:
    value of employees, and the second value is a function called "setEmployees" used to set the employee values
    */
    const [employees, setEmployees] = useState(null);
    /*
    using useState again, passing an empty string as an initial value and storing it in an array to grab the 2 values that the hook returns: 
    the seartch value, annd a function called "setSearch" used to set the search value once a change is recorded in the search bar
    */
    const [search , setSearch] = useState('');


    //useEffect hook to load employee data when the component mounts
    useEffect(() => {
        //setting intial employees state with data from EmployeeData retrieved from the Json file
        try {
        setEmployees(employeeData.employees || []); //if employeeData is undefined or null, employees  will be set to an empty array
        } catch (e) {
            setEmployees([]) //if employeeData is missing all together, pass it an empty array anyways 
        }

        /*
        Alternate way to fetch employee data from an API,
        fetch('http://localhost:8000/employees') //GET request to localhost 
        .then(res => { //we get a response object
            return res.json(); 
        })
        .then(data => {
            //console.log(data);
            setEmployees(data);
        })*/

        //we want this to run only once when the component mounts, so we pass an empty dependancy array 
        //if it we dont do this, it will cause an infinite loop. 
        //the useEffect() hook is called every single render otherwise, and with a call back to setEmployees() each time,
        //it will continue to render forever.
    }, []); 


    //function that handles search change. Updates the 'search' state when an input value changes. 
    const handleSearchChange = (e) => { 
        setSearch(e.target.value); //update 'search'with new value 
    }
    

    /* 
        function ensures that filtering only occurs when employees is defined. 
        function filters through a list of employees based on the search string. 
        if employees is true (not null), filter() recieves a callback function as an argument,
        it runs each element of the employees array and determines if it should be included in the new filtered array. 
        it converts the search string to lowercase to avoid case-sensitivity issues. 
        checks that its either an employees name or department contains the string
        if it matches, its added to the filtered array. 
        if employees is undefined or set to null, or no employees match the search string:
        an empty array is returned. 
    */
    const filteredEmployees = employees ? employees.filter((employee) => {
        const lowercaseQ = search.toLowerCase();
        return (
            employee.name.toLowerCase().includes(lowercaseQ) ||
            employee.department.toLowerCase().includes(lowercaseQ)
        );
    }) : [];


    /* 
        In the inner div, We create a property name called "employees" which will be set to a dynamic value --
        in order to pass the employee data into the EmployeeList component.
        The value will be set either to 'employees' or to 'filteredEmployees' depending on what happening in the app. 

        prior to the inner 'content' div, We create 2 other properties called 'search' and 'handleSearchChange',
        which will be set to their respective variables ---
        in order to pass information into the Navbar component. 
    */
    return (
        <div className="home">
            <Navbar search={search} handleSearchChange={handleSearchChange} />
            <div className="content">

                {/* while employees is set to null, display a mesg that says "Loading" */
                employees === null && 
                (<p>Loading...</p> )
                }

                {/* if the search string is empty and employees has values to display, display them */
                search.trim().length === 0 && employees &&
                (<EmployeeList employees={employees} /> )
                }

                {/* if the search string is not empty, and filteredEmployees array is empty, display mesg */
                search.trim().length > 0 && filteredEmployees.length === 0  &&
                (<p>No such employees found</p> )
                }

                {/* if the search string is not empty, is the filteredEmployees array is *not* empty, 
                display filtered employees */
                search.trim().length > 0 && filteredEmployees.length > 0 &&
                (<EmployeeList employees={filteredEmployees}/> )
                }

                {/* edge case- if there is something wrong in fetching the data from the json, display mesg */
                employees && employees.length === 0 &&
                (<p>Could not fetch employee data.</p>)
                }

           </div>
        </div>
    );
}

 
export default Home;