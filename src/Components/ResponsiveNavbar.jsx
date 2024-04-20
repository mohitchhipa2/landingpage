import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import img1 from "../assets/images/logo/metablock-logos-main.png"

export default function TemporaryDrawer() {
    const navigate = useNavigate();

    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const logo = [
        <img
            src={img1}
            alt="logo"
            style={{ width: "80px" }}
        />,
    ];

    const BarItem = [
        {
            name: "Home",

        },

        {
            name: "Service",

        },
        {
            name: "Projects",

        },
        {
            name: "Clients",

        },
        {
            name: "Contact",

        },

    ];

    const handleListItemClick = (text) => {
        // Add your logic to navigate to the corresponding page
        switch (text) {
            case "Dashboard":
                navigate("/Dashboard"); // Replace '/home' with your actual home route
                break;
            case "UserSection":
                navigate("/UserSection"); // Replace '/about' with your actual about route
                break;
            case "Recharge":
                navigate("/Recharge"); // Replace '/about' with your actual about route
                break;

            case "Withdrawal":
                navigate("/Withdraw"); // Replace '/about' with your actual about route
                break;
            case "All Bet":
                navigate("/Allbet"); // Replace '/about' with your actual about route
                break;
            case "Crashplaned":
                navigate("/Crashplanned"); // Replace '/about' with your actual about route
                break;

            case "Bank":
                navigate("/Bank"); // Replace '/about' with your actual about route
                break;

            case "Settings":
                navigate("/Setting"); // Replace '/about' with your actual about route
                break;
            // Add more cases for other menu items
            default:
                break;
        }
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250, background: "black", height: "100vh", }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {logo.map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {/* {index % 2 === 0 ? <InboxIcon/> : <MailIcon />} */}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider sx={{ color: "white" }} />
            <List sx={{ borderTop: "1px solid white" }}>
                {BarItem.map((text, index) => (
                    <ListItem sx={{ borderBottom: "1px solid white" }} key={text} disablePadding>
                        <ListItemButton sx={{ paddingLeft: "100px" }} onClick={() => handleListItemClick(text.name)}>
                            <ListItemText primary={text.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            {["left"].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>
                        <IoMenu style={{ fontSize: '30px', color: "white" }} />
                    </Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}
