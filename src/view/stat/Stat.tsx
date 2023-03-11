import React from 'react';
import {useNavigate} from 'react-router-dom';
import Button from '../../components/button/Button';
import {useTelegram} from '../../hooks/useTelegram';
import {CALENDAR_PATH} from '../../routes';
import './Stat.css';

const Stat: React.FC = () => {
    const navigate = useNavigate();
    const {user} = useTelegram();

    return (
        <div className="stat">
            <h1>Stat</h1>
            <h2>{user?.username}</h2>
            <Button onClick={() => navigate(CALENDAR_PATH)}>Calendar</Button>
        </div>
    );
};

export default Stat;
