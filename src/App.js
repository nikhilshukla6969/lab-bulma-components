import React from 'react';
import 'bulma/css/bulma.css';
import Nav from './navbar/Navbar.js';
import FormField from './formfield/FormField.js';

const App = (props) => {

  return (
    <div>
      <Nav></Nav>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
    </div>

  );


};

export default App;
