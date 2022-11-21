export interface UserNotificationCount {
TotalMessageCount: number;
UnreadMessageCount: number;
UserId: string;
}
export interface RecentMessage {
  MessageId: string;
  UserId: string;
  Subject: string;
  Body: string;
  CreatedOn?: Date;
  ReadOn?: Date;
  IsRead?: boolean;
  TenantCode?: string;
}


