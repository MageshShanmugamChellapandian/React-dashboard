import React, { Dispatch, SetStateAction, useContext } from "react";
import "./Navbar.css";
// import {
//   BsFillArrowRightSquareFill,
//   BsFillArrowLeftSquareFill,
// } from "react-icons/bs";
import Avatar from "../assets/images/avatar.svg";
import Logo from "../Logo";
import ProfileCards from "../ProfileCards/index";
import { ReportModalContext, IReportModal } from "../App";
interface IProps {
  toggleState: boolean;
  toggleFunc?: Dispatch<SetStateAction<boolean>>;
}
const Navbar = (props: IProps) => {
  // const { toggleState, toggleFunc } = props;
  const reportModal = useContext(ReportModalContext) as IReportModal;

  return (
    <nav className={`${reportModal?.open ? "nav_z_index" : ""}`}>
      {/* <div
        onClick={() => (toggleFunc ? toggleFunc(!toggleState) : "")}
        className="nav_toggle_btn"
      >
        {toggleState ? (
          <BsFillArrowLeftSquareFill />
        ) : (
          <BsFillArrowRightSquareFill />
        )}
      </div> */}
      <div>
        <Logo size={"small"} />
        <span>Risk Strategy & Analytics </span>
      </div>

      <div className="nav_profilesection">
        <ProfileCards />
        <div className="nav_profile">JD</div>
      </div>
    </nav>
  );
};

export default Navbar;
