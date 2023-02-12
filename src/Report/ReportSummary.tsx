import React, { useState } from "react";

const ReportSummary = () => {
  const [selectedFile, setSelectedFile] = useState<any>("No files selected");
  const handleselectedFile = (e: any) => {
    setSelectedFile(e.target.files[0].name);
  };
  return (
    <div className="reportsummary">
      <div className="rp_modal_heading">Summary</div>
      <div>
        <div className="rf_form_element">
          <label>
            Standard Summary File
            <input type="radio" value={""} />
          </label>

          <span id="file-chosen" className="form_selected_file_name">
            {" "}
            {selectedFile}
          </span>

          <div className="rf_form_btn_grid">
            <div className="rf_form_upload_btn">
              <input type="file" id="generate_btn" hidden />

              <label htmlFor="generate_btn">Generate</label>
            </div>

            <div className="rf_form_upload_btn">
              <input
                type="file"
                id="summary_upload_btn"
                hidden
                onChange={(e) => handleselectedFile(e)}
              />

              <label htmlFor="summary_upload_btn">Upload</label>
            </div>

            <div className="rf_form_upload_btn">
              <input type="radio  " id="marked_checked_btn" hidden />

              <label htmlFor="marked_checked_btn">Mark as Checked</label>
            </div>
          </div>
        </div>
        <div className="rf_form_element">
          <label>
            Enhanced Summary File
            <input type="checkbox" value={""} />
          </label>
          <span></span>

          <div className="rf_form_btn_grid rf_form_btn_grid_center ">
            <div className="rf_form_upload_btn">
              <input type="file" id="enhanced_summary_btn" hidden />

              <label htmlFor="enhanced_summary_btn">Upload</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportSummary;
