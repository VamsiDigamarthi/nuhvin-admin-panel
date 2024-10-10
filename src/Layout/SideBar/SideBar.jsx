import React, { useState } from "react";
import "./SideBar.css";
// import Profile from "../../utilcompoents/Profile/Profile";
import { routes } from "../../data/routesdata";
import { NavLink, useLocation } from "react-router-dom";
import { SidebarMenu } from "./SidebarMenu";
import { motion } from "framer-motion";
import { showAnimation } from "../../data/animation";
// import { useSelector } from "react-redux";
import { RxHamburgerMenu } from "react-icons/rx";
const Sidebar = ({ children }) => {
  const location = useLocation();
  const pathValue = location.pathname;

  //   const themeMode = useSelector((state) => state.theme.theme);
  //   const themeClass = themeMode ? "lightMode" : "darkMode";
  //   const mainBodyTheme = themeMode ? "main-body-theme" : "darkMode";

  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="sider-bard-main-card">
      {pathValue !== "/login" && (
        <motion.div
          animate={{
            width: isOpen ? "270px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`side-bar `}
        >
          <div className="profile-ham-icons">
            <h3 style={{ display: !isOpen && "none" }}>Welcome</h3>
            <RxHamburgerMenu size={22} color="#fff" onClick={toggle} />
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    isOpen={isOpen}
                    key={index}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  {isOpen && (
                    <motion.div
                      variants={showAnimation}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="link_text"
                    >
                      {route.name}
                    </motion.div>
                  )}
                </NavLink>
              );
            })}
          </section>
        </motion.div>
      )}
      <main
        className={`side-bar-main-pages  ${
          pathValue === "/login" && "path-register-change-style"
        }`}
      >
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
