import { mockDataPath } from "../constants/mockDataPath";
import { rejectPercent } from "../constants/rejectPercentage";
import { Group } from "../interfaces/Group";

export default async function getAllGroup(): Promise<Group[]> {
    try {
        const response = await fetch(mockDataPath);
        const random = Math.random();
        if (!response.ok || random < rejectPercent) {
            throw new Error(`Failed to load mock data :)`);
        }
        const data: Group[] = await response.json();
        return data
    } catch (error) {
        return Promise.reject(error)
    }
}