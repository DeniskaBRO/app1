import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WebApp from '@twa-dev/sdk';

import './App.css';
import { useEffect } from 'react';

import Layout from './components/Layout';
import MainMap from './pages/MainMap';
import SettingsMap from './pages/SettingsMap';
import Menu from './pages/Menu';

function App() {
  useEffect(() => {
    WebApp.ready(); // Инициализация Telegram Web App
    WebApp.expand(); // На весь экран
  }, []);

  return (
    <div className="tg-app">
      <Router>
        {/* Header с Layout */}
        <header className="tg-header">
          <Layout />
        </header>

        {/* Основное содержимое с маршрутами */}
        <div className="tg-main-content" style={{ display: 'flex', height: 'calc(100vh - 56px)' }}>
          <main className="tg-chat-area" style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<MainMap />} />
              <Route path="/settingsmap" element={<SettingsMap />} />
              <Route path="/menu" element={<Menu />} />
            </Routes>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default App;