import React, {useEffect} from 'react';
import {HashRouter} from 'react-router-dom';
import './App.css';
import AppRouter from './components/AppRouter';
import {useTelegram} from './hooks/useTelegram';

function App() {
    const {tg} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, []);

    return (
        <HashRouter>
            <AppRouter />
        </HashRouter>
    );
}

export default App;
