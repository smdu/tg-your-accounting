import {IRoute} from '../types/IRoute';
import Calendar from '../view/calendar/Calendar';
import Stat from '../view/stat/Stat';

export const CALENDAR_PATH = '/calendar';
export const STAT_PATH = '/stat';

export const routes: IRoute[] = [
    {
        path: `${CALENDAR_PATH}`,
        link: CALENDAR_PATH,
        title: 'Календарь',
        Component: Calendar,
    },
    {
        path: `${STAT_PATH}`,
        link: STAT_PATH,
        title: 'Статистика',
        Component: Stat,
    },
];
