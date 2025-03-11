import React from 'react';

const ClickHandler = () => {
  const handleClick = (event) => {
    // event is a Synthetic Event
   console.log(event.currentTarget);
    // console.log('Button clicked!', event);
    // console.log('Event type:', event.type);
    // console.log('Is default prevented:', event.isDefaultPrevented());

    // You can access the native event if needed
    console.log('Native event:', event.nativeEvent);
  };

  return <button onClick={handleClick}>Click Me!</button>;
};

export default ClickHandler;
