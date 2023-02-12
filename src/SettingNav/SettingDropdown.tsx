import React from "react";

const SettingDropdown = () => {
  return (
    <div className="setting_dropdown">
      <form action="">
        <select name="company_codes" id="company_codes">
          <option value="">3 Company Codes selected</option>
          <option value="Option_1">Option 1</option>
          <option value="Option_2">Option 2</option>
          <option value="Option_3">Option 3</option>
        </select>
      </form>
    </div>
  );
};

export default SettingDropdown;
