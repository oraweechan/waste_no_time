
import './EventList.css';
import React from 'react'


export default function EventList({ eventData }) {
  // console.log(eventData);

  const eventList = eventData?.map((item, index) => {
    // console.log(item._id)
    return (
      <React.Fragment key={item._id}>
        <button  className="button-37" >
          name: {item.organizationName}
          event name: {item.eventName}
          date clean up: {item.dateCleanup.date}
          </button>
          </React.Fragment>
    );
  });

  return (
    <>
      <div className="eventList">
        {eventList}
      </div>
    </>
  );
}
