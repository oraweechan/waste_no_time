import "./FinalPage.css";
import { Paper, Grid, Typography, Container, Box } from "@mui/material";

export default function FinalPage() {
  return (
    <div className="finalPageMessage">
      <Container>
      <Box justifyContent={'center'}>
      <Typography fontWeight={'bold'} fontSize={42}>Thank you for volunteering!</Typography>
      {/* <br></br>
      <p>You should receive a confirmation email very soon.</p>
      <br></br>
      <p>
        When you finish your clean up event, check back to that email for a link to submit your
        collection data to DSNY. You can upload photos of your team, before and after pictures of
        areas you've cleaned, and any other fun pictures from your event.
      </p> */}
      <br></br>
      <p>It's people like you that make this city a GREAT place to live.</p>
      <br></br>
      Thank you!
      </Box>
      </Container>
      
      
    </div>
  );
}
