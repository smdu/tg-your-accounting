import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Button from '../../components/button/Button';
import {STAT_PATH} from '../../routes';
import './Calendar.css';

const Calendar: React.FC = () => {
    const [year, serYear] = useState<number>(new Date().getFullYear());
    const [monthMap, setMonthMap] = useState<any>({});
    const navigate = useNavigate();

    const onYearChange = (e: React.FormEvent<HTMLSelectElement>) => {
        serYear(Number(e.currentTarget.value));
    };

    const onMonthChange = (e: React.FormEvent<HTMLInputElement>) => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;

        setMonthMap((prev: any) => {
            return {
                ...prev,
                [name]: Number(value),
            };
        });
    };

    const onSave = () => {
        const saveData = Object.keys(monthMap).map((k) => ({
            month: Number(k),
            year,
            cost: parseInt(Number(monthMap[k] * 100).toFixed(0)),
        }));

        console.log('saveData', saveData);
        navigate(STAT_PATH);
    };

    return (
        <div className="calendar">
            <h1>Calendar</h1>
            <div className="form-item">
                <select name="year" value={year} onChange={onYearChange}>
                    {Array.from('34567').map((n) => (
                        <option key={`202${n}`} value={`202${n}`}>{`202${n}`}</option>
                    ))}
                </select>
            </div>
            {Array.from({length: 12}).map((_, i) => (
                <div key={`month_${i}`} className="form-item">
                    <label htmlFor={`month_${i}`}>{`Month ${i}`}</label>
                    <input
                        type="number"
                        id={`month_${i}`}
                        name={`${i}`}
                        value={monthMap[i] || ''}
                        onChange={onMonthChange}
                    />
                </div>
            ))}
            <Button onClick={onSave}>Save</Button>
        </div>
    );
};

export default Calendar;
