import React from "react";

const ReviewDetails = () => {
  return (
    <div className="reviewdetails">
      <div className="rp_modal_heading">Review Details</div>
      <div>
        <div className="rf_form_element">
          <label htmlFor="created_by">Created By:</label>
          <input type="text" value={""} id="created_by" />
        </div>
        <div className="rf_form_element">
          <label htmlFor="check_type">Check Type:</label>
          <input type="text" value={""} id="check_type" />
        </div>
        <div className="rf_form_element">
          <label htmlFor="checked_by">Checked By:</label>
          <input type="text" value={""} id="checked_by" />
        </div>
        <div className="rf_form_element">
          <label htmlFor="checked_on">Checked On:</label>
          <input type="text" value={""} id="checked_on" />
        </div>
        <div className="rf_form_element">
          <label htmlFor="comments">Comments:</label>
          <input type="text" value={""} id="comments" />
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
