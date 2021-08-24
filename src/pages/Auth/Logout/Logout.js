import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { destroyLoginSession } from "../../../helpers/authUtils";

const Logout = () => {
  const history = useHistory();
  useEffect(() => {
    destroyLoginSession();
    history.push("/");
  });
  return (
    <>
      <h4>Logging out</h4>
    </>
  );
};
export default Logout;
