/*
Root component which will be rendered to the DOM 
Contains a function called App that returns a reference to the Home component
The function is then exported and imported into index.js file where its rendered to the DOM
*/

/* 
Components are rerended in a nested fashion like a tree, starting at the root component
*/

import Home from './Home';

function App() {

  return (
    //outermost div element with the class "App", which is styled with a background color of 'mistyrose'
    //followed by innermost div element with a class of "content" where the content of the App is placed 
    //finally the "Home" component is inserted as a child elemeant to be rendered 
    <div className="App" style={{backgroundColor: 'mistyrose'}}>
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
