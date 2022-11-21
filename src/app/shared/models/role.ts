export interface role {
  RoleID?: number;
  RoleName: string;
  RoleDesc: string;
  IsActive: boolean;
  CreatedBy?: number;
  CreatedDate: Date;
  ModifiedBy?: number;
  ModifiedDate: Date;
}
