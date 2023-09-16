import React from 'react';

//props definition.
type Tesingprops={
 name:string
};

//now we can use the props over here....
const PropsTestComponent = (props:Tesingprops) => {

   // props.name="Props Testing in Jest(ReactJS Library)";
    return (
        <div>
          <h1>{props.name}</h1>
        </div>
      )
    }

export default PropsTestComponent;
