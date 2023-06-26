"use client";

import Drawer from "@mui/material/Drawer";

const AppLayout = ({ children }) => (
  <div>
    <Drawer anchor="left" open hideBackdrop>
      <h2>Servisso</h2>
      <p>Admin panel</p>
      <h4>Calendar</h4>
      <h4>Manage your garage</h4>
      <h4>Service requests</h4>
    </Drawer>
    {children}
  </div>
);

export default AppLayout;
