export interface IInputDocument{
    _id: object,
    ServiceOrganization: ServiceOrganization,
    PeriodStartDate:string,
    PeriodEndDate:string,
    FileFormat:string,
    IsAIScanned:string|null,
    DocumentName:string,
    NumberOfPages:string,
    AuditFirm:string,
    AuditFirmLocation:string,
    BusinessUnit:string,
    SummaryOutputDocuments: SummaryOutputDocument[],
    BlobDataId:string
}

export interface ServiceOrganization{
    Id:string,
    Name:string
}

export interface SummaryOutputDocument{
    Id:string,
    Standard:string,
    ReportStatus:string,
    ReviewType:string|null,
    ReviewedBy:string|null,
    ReviewedDate: string|null,
    ReviewComments:string|null,
    OpinionType:string,
    CreatedBy:string,
    CreatedOn:string,
    OpinionDate:string,
    BlobDataId:string,
    ActualHours:string,
    BilledDate:string,
    Fee:string|null
}