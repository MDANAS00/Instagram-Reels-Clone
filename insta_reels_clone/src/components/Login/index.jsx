import Grid from "@mui/material/Unstable_Grid2";
import Crousel from "./Crousel";
import LoginForm from "./LoginForm";

function index() {
  return (
    <>
      <Grid container>
            <Grid xs={12} sm = {8}>
                    <Crousel></Crousel>
            </Grid>
            <Grid xs={12} sm = {3}>
                    <LoginForm></LoginForm>
            </Grid>
      </Grid>
    </>
  )
}

export default index
