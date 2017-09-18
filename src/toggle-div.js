import React from 'react';

const ToggleDiv = ({on}) => {

  const divStyle = {
    backgroundColor: on ? 'green' : 'red',
    width: '125px',
    height: '125px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '150px',
    marginBottom: '10px'
  };

  return (
    <div style={divStyle}/>
  );
}

export default ToggleDiv;
