import * as React from 'react'

const Header = () => {
  return (
    <div
      style={{
        background: 'black',
        width: '100%',
        height: '100px',
        color: 'white',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
        fontSize: '24px',
        paddingLeft: '15px'
      }}>
      Name
    </div>
  );
};

export default Header;