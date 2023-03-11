import React from 'react';
import {useNavigate} from 'react-router-dom';
import Button from '../../components/button/Button';
import {CALENDAR_PATH} from '../../routes';
import './Stat.css';

const Stat: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="stat">
            <h1>Stat</h1>
            <Button onClick={() => navigate(CALENDAR_PATH)}>Calendar</Button>
        </div>
    );
};

export default Stat;
