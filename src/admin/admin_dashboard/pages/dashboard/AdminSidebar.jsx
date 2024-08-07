import React, { useEffect, useState } from "react";
import {
  ArtTrackSharp,
  CategorySharp,
  CloseSharp,
  CommentSharp,
  ContactMail,
  DashboardSharp,
  Diversity1Rounded,
  Extension,
  Inventory2,
  LogoutSharp,
  Pages,
  Person,
  PostAdd,
  Settings,
  SpaceDashboard,
  ViewQuilt,
} from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Box,
  Collapse,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  ContactManagement,
  AdminDasboard,
  AdvertiserManagement,
  CategoryManagement,
  CommentManagement,
  SettingManagement,
  PostManagement,
  UserManagement,
  SRequestManagement,
  AdminTmpManagement,
  UiTmpManagement,
  WpThemeManagement,
  WpPluginManagement,
} from "../index";
import { useAuth } from "../../auth/AuthContext";
import { useNavigate } from "react-router-dom";
const AdminSidebar = () => {
  const { logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [OpenAdminSidebar, setOpenAdminSidebar] = useState(false);
  const [StatePage, setStatePage] = useState("admin_dashboard");
  const [OpenAdminDrawer, setOpenAdminDrawer] = useState(false);
  const [user, setUser] = useState({});
  useEffect(() => {
    if (localStorage.getItem("npl")) {
      setUser(JSON.parse(localStorage.getItem("npl")).user);
    }
  }, []);
  //SAVE PAGE STATE TO LOCAL STORAGE
  const SaveState = (pages) => {
    localStorage.setItem("news_admin_page", JSON.stringify(pages));
    HandleOpenDrawer();
  };
  useEffect(() => {
    setStatePage(JSON.parse(localStorage.getItem("news_admin_page")));
  }, [StatePage]);
  //HANDLE OPEN DRAWER FUNCTION
  const HandleOpenDrawer = () => {
    OpenAdminDrawer == false
      ? setOpenAdminDrawer(true)
      : setOpenAdminDrawer(false);
  };
  useEffect(() => {
    if (!localStorage.getItem("npl")) {
      return navigate("/admin");
    }
  }, [isAuthenticated]);
  return (
    <div className="admin_sidebar" sx={{ textAlign: "center" }}>
      {/* APPBAR HEADER */}
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={HandleOpenDrawer}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <DashboardSharp />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            NewsPortal
          </Typography>
          <Box>
            <IconButton>
              <Avatar sx={{ textTransform: "uppercase", background: "tomato" }}>
                {user.name ? user.name[0] : ""}
              </Avatar>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {/* SIDEBAR DRAWER */}
      <Drawer
        variant="temporary"
        open={OpenAdminDrawer}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 290,
            padding: 1,
          },
        }}
      >
        <div className="admin_sidebar_remove_btn justify-content-end d-flex">
          <IconButton onClick={HandleOpenDrawer} color="error">
            <CloseSharp />
          </IconButton>
        </div>
        <List>
          <ListItem disableGutters>
            <ListItemButton
              onClick={() => {
                setStatePage("admin_dashboard");
                SaveState("admin_dashboard");
              }}
            >
              <Typography mr={1}>
                <DashboardSharp />
              </Typography>
              <Typography>Dashboard</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disableGutters>
            <ListItemButton
              onClick={() => {
                setStatePage("user_management");
                SaveState("user_management");
              }}
            >
              <Typography mr={1}>
                <Person />
              </Typography>
              <Typography>Users Management</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disableGutters>
            <ListItemButton
              onClick={() => {
                setStatePage("post_management");
                SaveState("post_management");
              }}
            >
              <Typography mr={1}>
                <PostAdd />
              </Typography>
              <Typography>Post Management</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disableGutters>
            <ListItemButton
              onClick={() => {
                setStatePage("comment_management");
                SaveState("comment_management");
              }}
            >
              <Typography mr={1}>
                <CommentSharp />
              </Typography>
              <Typography>Comment Management</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disableGutters>
            <ListItemButton
              onClick={() => {
                setStatePage("category_management");
                SaveState("category_management");
              }}
            >
              <Typography mr={1}>
                <CategorySharp />
              </Typography>
              <Typography>Category Management</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disableGutters>
            <ListItemButton
              onClick={() => {
                setStatePage("advertiser_management");
                SaveState("advertiser_management");
              }}
            >
              <Typography mr={1}>
                <Diversity1Rounded />
              </Typography>
              <Typography>Advertisers Management</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disableGutters>
            <ListItemButton
              onClick={() => {
                setStatePage("srequest_management");
                SaveState("srequest_management");
              }}
            >
              <Typography mr={1}>
                <Pages />
              </Typography>
              <Typography>sRequest Management</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disableGutters>
            <ListItemButton
              onClick={() => {
                setStatePage("contact_management");
                SaveState("contact_management");
              }}
            >
              <Typography mr={1}>
                <ContactMail />
              </Typography>
              <Typography>Contacts Management</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disableGutters>
            <ListItemButton
              onClick={() => {
                OpenAdminSidebar === false
                  ? setOpenAdminSidebar(true)
                  : setOpenAdminSidebar(false);
              }}
            >
              <Typography mr={1}>
                <Inventory2 />
              </Typography>
              <Typography>Product Management</Typography>
            </ListItemButton>
          </ListItem>
          <Collapse in={OpenAdminSidebar}>
            <ListItem>
              <ListItemButton
                onClick={() => {
                  setStatePage("admin_tmp_management");
                  SaveState("admin_tmp_management");
                }}
              >
                <Typography mr={1}>
                  <SpaceDashboard />
                </Typography>
                <Typography>Admin Template</Typography>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                onClick={() => {
                  setStatePage("ui_tmp_management");
                  SaveState("ui_tmp_management");
                }}
              >
                <Typography mr={1}>
                  <ViewQuilt />
                </Typography>
                <Typography>UI Template</Typography>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                onClick={() => {
                  setStatePage("wordpress_theme_management");
                  SaveState("wordpress_theme_management");
                }}
              >
                <Typography mr={1}>
                  <ArtTrackSharp />
                </Typography>
                <Typography>WordPress Theme</Typography>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                onClick={() => {
                  setStatePage("wordpress_plugin_management");
                  SaveState("wordpress_plugin_management");
                }}
              >
                <Typography mr={1}>
                  <Extension />
                </Typography>
                <Typography>WordPress Plugin</Typography>
              </ListItemButton>
            </ListItem>
          </Collapse>
          <ListItem disableGutters>
            <ListItemButton
              onClick={() => {
                setStatePage("setting_management");
                SaveState("setting_management");
              }}
            >
              <Typography mr={1}>
                <Settings />
              </Typography>
              <Typography>Settings Management</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disableGutters>
            <ListItemButton
              onClick={() => {
                logout();
              }}
              sx={{
                color: "red",
                "&:hover": { background: "dodgerblue", color: "white" },
              }}
            >
              <Typography mr={1}>
                <LogoutSharp />
              </Typography>
              <Typography>LogOut</Typography>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      {/* RANDER ALL DASHBOARD PAGE HERE */}
      {StatePage === "contact_management" ? (
        <ContactManagement />
      ) : StatePage === "admin_dashboard" ? (
        <AdminDasboard />
      ) : StatePage === "user_management" ? (
        <UserManagement />
      ) : StatePage === "post_management" ? (
        <PostManagement />
      ) : StatePage === "comment_management" ? (
        <CommentManagement />
      ) : StatePage === "category_management" ? (
        <CategoryManagement />
      ) : StatePage === "advertiser_management" ? (
        <AdvertiserManagement />
      ) : StatePage === "setting_management" ? (
        <SettingManagement />
      ) : StatePage === "srequest_management" ? (
        <SRequestManagement />
      ) : StatePage === "admin_tmp_management" ? (
        <AdminTmpManagement />
      ) : StatePage === "ui_tmp_management" ? (
        <UiTmpManagement />
      ) : StatePage === "wordpress_theme_management" ? (
        <WpThemeManagement />
      ) : StatePage === "wordpress_plugin_management" ? (
        <WpPluginManagement />
      ) : (
        <AdminDasboard />
      )}
    </div>
  );
};

export default AdminSidebar;
