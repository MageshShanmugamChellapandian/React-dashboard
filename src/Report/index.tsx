import { ReportModalContext, IReportModal } from "../App";
import React, { useContext } from "react";
import ReportModal from "./ReportModal";
import "./Report.css";

const Report = () => {
  const reportModal = useContext(ReportModalContext) as IReportModal;
  const { open, setOpen } = reportModal!;
  return (
    <div className="report">
      <div onClick={() => reportModal?.setOpen(!reportModal?.open)}>Report</div>

      <div className={`report_modal ${open ? "report_modal_open" : ""}`}>
        <ReportModal />
      </div>
    </div>
  );
};

export default Report;
