import { IInputDocument } from "@/Interfaces/interface";
import React, { useState } from "react";

const ReportForm = () => {
  const [selectedFile, setSelectedFile] = useState<any>("No files selected");
  const handleselectedFile = (e: any) => {
    setSelectedFile(e.target.files[0].name);
  };

  const[inputFileDocument,setInputFileDocument] = useState<IInputDocument>(
    {
      _id : {},
      ServiceOrganization:{
        Id:"11",
        Name:"Automating Bottling Company"
      },
      PeriodStartDate:"01/01/2022",
      PeriodEndDate : "01/01/2022",
      FileFormat:"PDF",
      IsAIScanned:null,
      DocumentName:"soc1StateStreet.pdf",
      NumberOfPages:"22",
      AuditFirm:"Ernst & Young",
      AuditFirmLocation:"Chicago, Illinois",
      BusinessUnit:"Description of Blue Cross Blue Shield of Illinois",
      SummaryOutputDocuments:[{
        Id:"",
        Standard:"SSAE18",
        ReportStatus:"In Progress",
        ReviewType:null,
        ReviewedBy:null,
        ReviewedDate:null,
        ReviewComments:null,
        OpinionType:"UnQualified",
        CreatedBy:"Vishakha Sharma - vsharma242",
        CreatedOn:"",
        OpinionDate:"12/9/2022",
        BlobDataId:"1234",
        ActualHours:"",
        BilledDate:"",
        Fee:null
      }],
      BlobDataId:"1234"
    }
  )

  return (
    <div className="reportform">
      <div className="rp_modal_heading">Report</div>
      <div>
        <div className="rf_form_element">
          <label>Report File in Repository:</label>

          <span className="form_selected_file_name">{selectedFile}</span>

          <div className="rf_form_btn_grid">
            <div className="rf_form_upload_btn">
              <input
                type="file"
                id="report_file_upload"
                hidden
                onChange={(e) => handleselectedFile(e)}
              />

              <label htmlFor="report_file_upload">Upload</label>
            </div>
          </div>
        </div>
        <div className="rf_form_element">
          <label htmlFor="service_org">Service Organization:</label>
          <input
            type="text"
            value={inputFileDocument.ServiceOrganization.Name}
            id="service_org"
          />
        </div>
        <div className="rf_form_element">
          <label htmlFor="business_unit">Business Unit:</label>
          <input
            type="text"
            value={inputFileDocument.BusinessUnit}
            id="business_unit"
          />
        </div>
        <div className="rf_form_element">
          <label htmlFor="date_range">Date Range:</label>
          <input type="date" value={""} id="date_range" />
        </div>
        <div className="rf_form_element">
          <label htmlFor="num_pages">Number of Pages:</label>
          <input type="number" value={inputFileDocument.NumberOfPages} id="num_pages" />
        </div>
        <div className="rf_form_element">
          <label htmlFor="standard">Standard:</label>
          <input type="text" value={inputFileDocument.SummaryOutputDocuments[0].Standard} id="standard" />
        </div>
        <div className="rf_form_element">
          <label htmlFor="opinion_type">Opinion Type:</label>
          <input type="text" value={inputFileDocument.SummaryOutputDocuments[0].OpinionType} id="opinion_type" />
        </div>
        <div className="rf_form_element">
          <label htmlFor="opinion_date">Opinion Date:</label>
          <input type="date" value={inputFileDocument.SummaryOutputDocuments[0].OpinionDate} id="opinion_date" />
        </div>
        <div className="rf_form_element">
          <label htmlFor="audit_firm">Audit Firm:</label>
          <input type="text" value={inputFileDocument.AuditFirm} id="audit_firm" />
        </div>
        <div className="rf_form_element">
          <label htmlFor="audit_form_location">Audit Form Location:</label>
          <input type="text" value={inputFileDocument.AuditFirmLocation} id="audit_form_location" />
        </div>
      </div>
    </div>
  );
};

export default ReportForm;
