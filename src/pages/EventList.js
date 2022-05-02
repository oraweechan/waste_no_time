import { Container } from "react-bootstrap";
import { Box } from "@mui/system";

export default function EventList({ eventData }) {
  console.log(eventData);

  const eventList = eventData?.map((item, index) => {
    return (
      <>
        <Container key={index}>
          <Box >
          name: {item.organizationName}
          event name: {item.eventName}
          date clean up: {item.dateCleanup.date}
          </Box>
         
        </Container>
      </>
    );
  });

  return (
    <>
      <div>
        {eventList}
      </div>
    </>
  );
}
