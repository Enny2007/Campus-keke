//import React, { useEffect } from "react";
import FooterComp from "./Footer";
import HeadernavComp from "./HeaderNav";
import { Outlet } from "react-router-dom";

interface MyComponentProps {
  children?: React.ReactNode;
}

const LayoutIndex = ({ }: MyComponentProps) => {
 

  return (
    <>
      <div className="layout-index-wrap">
        {/* header start here */}
        <div className="header-wrap">
          <HeadernavComp />
        </div>
        {/* header end here */}
        {/* outlet section wrap here start */}
        <div className="outlet-section-wrap">{<Outlet />}</div>
        {/* outlet section wrap here end */}
        {/* footer start here */}
        <div className="footer-wrap">
          <FooterComp />
        </div>
        {/* footer end here */}
      </div>
    </>
  );
};

export default LayoutIndex;
