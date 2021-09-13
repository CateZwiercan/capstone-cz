import { Members } from "./Members";

export interface Club {
    name: string;
    genre: string;
    sponserName: string;
    sponserEmail: string;
    sponserPhone: string;
    groupSize: number;
    description: string;
    bookOfMonth: string;
    id: number;
    members: Members[];
}