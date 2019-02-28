import React from "react";

// This is a normal function that returns a react component function
const withClass = (WrappedComponent, className) => {
  return props => (
    <div className={className}>
      <WrappedComponent {...props}/>
    </div>
  );
};
export default withClass;
