import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import pharm from "../../assets/img/pharma-logo.svg";
import profile from '../../assets/img/profile.png'
import { BoxDiv, Icon } from "./styles";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
        <BoxDiv width='100%'>
          <BoxDiv> 
          <Icon src={pharm} />
          <Typography>Pharma Inc</Typography>
          </BoxDiv>
          <BoxDiv>
              <Icon src={profile} />
          </BoxDiv>
        </BoxDiv>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
