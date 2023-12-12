import React, { useEffect, useRef } from "react";
import { mount } from "dashboard/DashboardApp";

function AuthApp() {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref}></div>;
}

export default AuthApp;
