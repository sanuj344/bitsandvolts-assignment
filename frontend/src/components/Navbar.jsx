import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";
import PeopleIcon from "@mui/icons-material/People";
import "./Navbar.css";

function Navbar() {
  return (
    <AppBar position="sticky" className="navbar">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <PeopleIcon sx={{ mr: 2, fontSize: 28 }} />
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: "none",
              color: "inherit",
              fontWeight: 600,
              fontSize: "1.25rem",
            }}
          >
            User Management System
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button
              color="inherit"
              component={Link}
              to="/"
              sx={{
                textTransform: "none",
                fontSize: "1rem",
                "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
              }}
            >
              Home
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/add"
              variant="outlined"
              sx={{
                textTransform: "none",
                fontSize: "1rem",
                borderColor: "white",
                color: "white",
                "&:hover": {
                  borderColor: "white",
                  backgroundColor: "rgba(255,255,255,0.1)",
                },
              }}
            >
              + Add User
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
