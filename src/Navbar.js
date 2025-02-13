/* 
Navrbar component returns function with takes 2 parameters used to filter through the employees.
1. a "search" string containing the current search query entered by the user 
2. "handleSearchChange" which is a function the updates the state when the user types into the search bar. 

the function also contains a template of :
a nav with a "navbar" class, which contains --
{ an h1 header with the text "Employee Directory" }
{ a div with a "search-container" class }
{ and a second div with a "links" class to handle out makeshift home button for navigation - 
contains an anchor for the Home page that points to the root of the application }

the navrbar is then exported to then be imported into the home component
*/

/*
    in the EmployeeList component we passed the 'props' object as an argument. 
    in this function, we are desconstructing the proprs and passing the variables we want directly;
    in this case, it is the search string and the handleSearchChange function.
*/
const Navbar = ({search, handleSearchChange}) => {
    return (  
        <nav className="navbar">
            <h1>Employee Directory</h1>
            <div className="search-container">
                {/* The input field allows the user to type into the search bar
                    it takes a tyoe of text input. 
                    a placeHolder which is what will be displayed before the user begins to/chooses to search for an employee
                    a value which takes in the value input from search and sets it to the variable "search" which was passed from the Home component
                    in order to update the state. 
                    handleSeatchChange function is called when the user types into the search bar */}
                <input
                    type="text"
                    placeHolder="Search by Name or Department"
                    className="search-bar"
                    value={search}
                    onChange={handleSearchChange}
                />
            </div>
            <div className="links">
                <a href="/">Home</a>
            </div>
        </nav>
    );
}
 
export default Navbar;