import { mockDataPath } from "../constants/mockDataPath";
import { rejectPercent } from "../constants/rejectPercentage";
import { Filters } from "../interfaces/Filters";
import { Group } from "../interfaces/Group";
import { isError } from "../utils/isError";


// Это должно быть на серваке и через параметры
// мы бы доставали нужные данные, но как есть :(
function filteredDataGroup(data: Group[], filters: Filters): Group[]{
    const {closed, avatar_color, members_count, friends} = filters;
    return data.filter((elem: Group) => {

    })
}

export default async function getFilteredGroup(filters: Filters) : Promise<Group[]>{
    try {
        const response = await fetch(mockDataPath);
        const random: number = Math.random();
        if (!response.ok || random < rejectPercent) {
            throw new Error(`Failed to load mock data :)`);
        }
        const data: Group[] = await response.json();

        return filteredDataGroup(data,filters);
    } catch (error) {
        if (isError(error)){
            return Promise.reject(error)
        }else{
            console.log('Это не должно никогда сработать');
            const otherError = new Error('(づ ◕‿◕ )づ')
            return Promise.reject(otherError)
        }
    }
}