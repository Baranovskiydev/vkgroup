import { User } from "./User";

export interface Filters {
    closed: boolean;
    avatar_color?: string;
    members_count: number;
    friends?: User[];
}