import {IResponse} from './../../types/IResponse';
import {API} from '../API';
import {fetchData} from '../http';
import {ICalendar} from '../models/ICalendar';

export class CalendarService {
    public async list() {
        return await fetchData<IResponse<ICalendar[]>>({
            url: API.calendar.list,
            method: 'GET',
        });
    }
}
