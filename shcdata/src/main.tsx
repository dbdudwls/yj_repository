import React from 'react';

interface MyComponentProps {
  name: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
}

export default MyComponent;
