import React, { useEffect, useState } from 'react'

export default function EventList() {
  const [eventData, setEventData] = useState();

console.log(eventData)

  const MakeAPICall = async () => {
    const res = await fetch('https://waste-no-time.herokuapp.com/events');
    const data = await res.json();
    setEventData(data)
  }

useEffect(() => {
    MakeAPICall();
  }, [])
  

const eventList = eventData?.map((item) => {
return (
<>
<div>
 { item.organizationName}
 {item.eventName}
 {item.dateCleanup.date}
</div>
</>

)})


  return (
    <div>{eventList}</div>
  )
}
