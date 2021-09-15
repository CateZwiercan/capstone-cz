import { Members } from "./Members";

export interface Club {
    GroupId: string,
    GroupName: string ,
    OrganizationName: string,
    SponsorName: string,
    SponsorPhone: string,
    SponsorEmail: string,
    MaxGroupSize: number,
    BookOfMonth: string,
    Members: Members[];
}