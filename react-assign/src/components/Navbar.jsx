import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { label: "About", path: "/about" },
    { label: "Pricing", path: "/pricing" },
    { label: "Customers", path: "/customers" },
    { label: "Solutions", path: "/solutions" },
  ];

  return (
    <>
      {/* AppBar for the Navbar */}
      <AppBar position="static">
        <Toolbar className="flex justify-between bg-[#002228]">
          {/* Logo */}
          <div className="text-teal-400 font-bold text-xl">Wizia</div>

          {/* Large Screen Menu */}
          <div className="hidden md:flex space-x-4">
            {menuItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
                to={item.path}
                className="text-white"
              >
                {item.label}
              </Button>
            ))}
            <button className="bg-teal-400 px-4 py-2 rounded-xl hover:bg-blue-950 hover:text-white text-[#081221]">
              Contact Us
            </button>
            <button className="border border-white px-4 py-2 rounded-xl hover:bg-red-950 hover:border-none text-white">
              Contact Us
            </button>
          </div>

          {/* Hamburger Menu for Small Screens */}
          <IconButton
            className="md:hidden"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for the Hamburger Menu */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        className="md:hidden"
      >
        <div
          className="w-64 bg-[#081221] h-full text-white"
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          {/* Menu Items in Drawer */}
          <List>
            {menuItems.map((item) => (
              <ListItem
                button
                key={item.label}
                component={Link}
                to={item.path}
              >
                <ListItemText primary={item.label} className="text-white" />
              </ListItem>
            ))}
            <ListItem>
              <Button
                variant="contained"
                className="bg-teal-400 text-[#081221] w-full"
              >
                Contact Us
              </Button>
            </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
