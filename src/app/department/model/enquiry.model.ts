export class Enquiry
{
    public EnquiryID!: number;
    public FirstName!: string;
    public LastName!: string;
    public CompanyName!: string;
    public EmailAddress!: string;
    public ContactNo!: string;
    public Comments!: string;
    public IsPolicyRead!: boolean;
    public Captcha!: string;
    public EnquiryStatus!:string;
    public IndustryID!:any;
    public QuestionsFilledStatus!:string
    public id!: string;
    public Name!:string;
    public Email!:string;
    //public Phone!: long;
    public Address!: string;
}


export interface Industry
{
    IndustryID: number;
      Name: string;
      IsActive: boolean;
      CreatedBy: number;
      CreatedDate: Date;
      ModifiedBy: number;
      ModifiedDate: Date;
}
