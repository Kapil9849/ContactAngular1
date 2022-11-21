import { DropdownSubmenu } from "./DropdownSubmenu";

export interface HeaderOptions{
    optionName:string;
    optionType:string;
    path:string;
    iconLink:string;
    submenu:DropdownSubmenu[];
}

export interface MenuOptions{    
       RoleID :number;
       RoleName :string;
       RoleDesc :string;
       Menu :Menu[];  
}

export interface Menu{
    PermissionID :number;
    PermissionKey:string;
    PermissionTitle:string;
    ParentID :Number;
    PermissionType :string;
    Path :string;
    ImagePath :string;
    IsShowIcon :boolean;
    Sequence :number;
    IsActive :boolean;
    SubMenu :Menu[];
}