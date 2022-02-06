import React from 'react';

const ChatItem = ({text}) => {
  return( 
  <div style={{
      background: '#e9ecef', 
      color: '#000', 
      padding: '10px', 
      display: 'inline-block',
      boxSizing: 'border-box',
      borderRadius: '18px',
      marginBottom: '10px'
      }}>
        {text}
  </div>);
};

export default ChatItem;
