import {AuthService} from './auth.service';
import {CalendarService} from './calendar.service';

export const services = {
    auth: new AuthService(),
    calendar: new CalendarService(),
};
