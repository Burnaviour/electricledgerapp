import React from "react";

import WalletUpload from "../verifyAdmin/index";

const AdminVerify = () => {
  let ip = process.env.REACT_APP_IP;
  return (
    <>
      <WalletUpload ip={ip} />
    </>
  );
};

export default AdminVerify;
