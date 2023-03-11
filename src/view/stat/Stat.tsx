import React from 'react';
import {useNavigate} from 'react-router-dom';
import Button from '../../components/button/Button';
import {useTelegram} from '../../hooks/useTelegram';
import {CALENDAR_PATH} from '../../routes';
import './Stat.css';

const Stat: React.FC = () => {
    const navigate = useNavigate();
    const {user, onClose} = useTelegram();

    return (
        <div className="stat">
            <h1>Stat</h1>
            <h2>
                Username: {user?.username}, {user?.first_name}
            </h2>
            <Button onClick={() => navigate(CALENDAR_PATH)}>Calendar</Button>
            <Button onClick={onClose}>onClose</Button>
        </div>
    );
};

export default Stat;
