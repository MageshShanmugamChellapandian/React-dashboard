import React, { useContext } from "react";
import { RxCross1 } from "react-icons/rx";
import { ReportModalContext, IReportModal } from "../App";
import Logo from "../Logo";
import { AiFillSetting, AiFillQuestionCircle } from "react-icons/ai";
import ReportForm from "./ReportForm";
import ReportSummary from "./ReportSummary";
import ReviewDetails from "./ReviewDetails";

const ReportModal = () => {
  const modalProps = useContext(ReportModalContext) as IReportModal;
  const { open, setOpen } = modalProps!;

  return (
    <div className="rpmodal">
      <div className="rpmodal_header">
        <div className="rpmodal_header_left">
          <Logo size={"medium"} />
          <span>AC Delivery Operations </span>
        </div>
        <div className="rpmodal_header_right">
          <AiFillQuestionCircle />
          <AiFillSetting />
          <div className="rpmodal_header_avatar">J</div>
        </div>
      </div>

      <div>
        <div className="rpmodal_element rpmodal_title">
          <div>Report</div>
          <div onClick={() => setOpen(false)}>
            <RxCross1 />
          </div>
        </div>
        <form>
          <div className="rpmodal_element rpmodal_report">
            <ReportForm />
          </div>
          <div className="rpmodal_element rpmodal_summary">
            <ReportSummary />
          </div>
          <div className="rpmodal_element rpmodal_review">
            <ReviewDetails />
          </div>

          <div className="rpmodal_form_submit">
            <button>Save</button>
            <button>Cancel</button>
          </div>
        </form>
      </div>

      <div className="rpmodal_footer">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi enim
        delectus repellendus maxime obcaecati tenetur! Facere ea quisquam fuga
        eum.
      </div>
    </div>
  );
};

export default ReportModal;
