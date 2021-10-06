import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import pharm from "../../assets/img/pharma-logo.svg";
import profile from '../../assets/img/profile.png'
import { BoxDiv, Icon } from "./styles";
import {Link } from 'react-router-dom'
export default function Header() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
        <BoxDiv width='100%'>
          <BoxDiv> 
            <Link className="link" to='/'>
            
          <Icon rotate src={pharm} alt="Pharm Inc logo" title="Pharm Inc" />
          <Typography variant='h4' sx='sm'>Pharma Inc</Typography>
            </Link>
          </BoxDiv>
          <BoxDiv>
              <Icon src={profile} alt="profile icon" />
          </BoxDiv>
        </BoxDiv>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
