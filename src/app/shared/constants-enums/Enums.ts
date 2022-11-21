
export enum PermissionKey {
  AddUser = "AddUser",
  UpdateRole = "UpdateRole",
  ResetPassword = "ResetPassword",
  ViewUserList = "ViewUserList",
  ActivateCompany = "ActivateCompany",
  ViewQuestionnaire = "ViewQuestionnaire",
  UpdateQuestionnaire = "UpdateQuestionnaire",
  DeactivateCompany = "DeactivateCompany",
  UpdateUser = "UpdateUser",
  ViewFileDrop = "ViewFileDrop",
  ViewData = "ViewData",
  ExportDashboard = "ExportDashboard",
  AddData = "AddData",
  ActivateDashboard = "ActivateDashboard",
  ViewDashboard = "ViewDashboard",
  DeactivateUser = "DeactivateUser",
  UpdateData = "UpdateData",
  DeleteData = "DeleteData", 
  ViewScorecards = "ViewScorecards",
  ExportScorecards = "ExportScorecards",
  ActivateScorecards = "ActivateScorecards",
  ShowAccounts = "Showaccounts",
  ApproveAccounts="ApproveAccounts",
  NotInterestedAccounts="NotInterestedAccounts",
  DeleteAccounts="DeleteAccounts",
  AssignSubscribers="AssignSubscribers",
  //GroupReports
  AssignReports ="AssignReports",

  CreateGroup ="CreateGroup",
  UpdateGroup ="UpdateGroup",
  DeleteGroup ="DeleteGroup",
  ViewGroup ="ViewGroup",
  
  CreateReport ="CreateReport",
  UpdateReport ="UpdateReport",
  DeleteReport ="DeleteReport",
  ViewReport ="ViewReport",
  //GroupReports

  //Create Company 
  CreateCompany ="CreateCompany"
}
export enum FileStatus{
  Validated="Validated",
  YetToValidate="Yet to Validate",
  // Imported="Imported",
  Error="Error",
  Processing="Processing",
  Validating="Validating",
  Inprogress="Inprogress",
  Completed="Completed",
  Uploaded="Uploaded",
  ReUploaded="ReUploaded",
  Failed="Failed",
  Initiated="Initiated",

  ValidationInprogress ="ValidationInprogress",
  Deleted ="Deleted",
  ToBeDeleted ="To Be Deleted",
  // FailedDLS="Failed - DLS",
  // InProgressDLS="In Progress - DLS",
  // InprogressSnowflake_Temp="In Progress - Snowflake_Temp",
  // InProgressSnowflake_Main="In Progress - Snowflake_Main",
  // InProgressInputDataset="In Progress - InputDataset"
}

export enum QuestionaryStatus{
  Pending="Pending",
  PartiallyCompleted="PartiallyCompleted",
  Completed="Completed"
}

export enum SortTypes{
  ascending="ascending",
  descending="descending"
}

