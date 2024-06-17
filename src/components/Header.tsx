import { Box, Button, Toolbar } from "@mui/material";
import AppBar from "@mui/material/AppBar";

function Header() {
  return (
    <Box>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Box
            component="img"
            height="100px"
            width="100px"
            alt="Logo"
            src="/src/assets/logo.jpg" />
          <Box sx={{ flexGrow: 1 }}></Box>
          <Box sx={{ paddingX: '10px', display: 'flex' }}>
            <Button
              color="inherit"
              sx={{ color: 'black', textTransform: 'none', fontWeight: 'bold' }}
              variant="text"
            >
              Log in
            </Button>
            <Button
              color="inherit"
              sx={{ fontWeight: 'bold', borderRadius: "8px" }}
              variant="contained"
              disableElevation
            >
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;