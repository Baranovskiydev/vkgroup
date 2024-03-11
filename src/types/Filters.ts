import { Group } from "./Group";

export type Filters = Partial<Omit<Group, 'id' | 'name'>>