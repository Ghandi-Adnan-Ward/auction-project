import React, { Fragment } from "react";



const Layout = () => {
  return (
    <Fragment>
      <Route path="/login" element={<Login />} />
    </Fragment>
  );
};

export default Layout;
