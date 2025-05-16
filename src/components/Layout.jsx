import { useLocation, useNavigate } from 'react-router-dom';
import { SlArrowLeft, SlSettings, SlMenu } from "react-icons/sl";
import WebApp from '@twa-dev/sdk';

export default function Layout() {
    const location = useLocation();
    const navigate = useNavigate();

    // Определяем заголовок в зависимости от пути
    const getTitle = () => {
        switch(location.pathname) {
            case '/': return 'Карта';
            case '/settingsmap': return 'Настройки';
            case '/menu': return 'Главное меню';
            default: return 'Telegram App';
        }
    };

    // Обработчик кнопки "Назад"
    const handleBack = () => {
        navigate(-1);
    };

    // Обработчик кнопки меню/настроек
    const handleAction = () => {
        if (location.pathname === '/') {
            navigate('/menu');
        } else if (location.pathname === '/menu') {
            navigate('/settingsmap');
        } else {
            WebApp.close();
        }
    };

    return (
        <div className="tg-header" style={{
            display: 'flex',
            alignItems: 'center',
            padding: '12px 16px',
            }}>
            {/* Левая иконка */}
            <div className=".tg-header-icon" style={{ flex: 0 }}>
                {location.pathname === '/' ? (
                    <SlMenu 
                        className="tg-header-icon" 
                        onClick={handleAction}
                        style={{ cursor: 'pointer' }}
                    />
                ) : (
                    <SlArrowLeft 
                        className="tg-header-icon" 
                        onClick={handleBack}
                        style={{ cursor: 'pointer' }}
                    />
                )}
            </div>
            
            {/* Центральный заголовок */}
            <h1 className="tg-header-title" style={{ 
                margin: 0,
                flex: 1,
                textAlign: 'center',
                padding: '0 8px' // Добавляем отступы от иконок
            }}>
                {getTitle()}
            </h1>
            
            {/* Правая иконка */}
            <div style={{ 
              flex: 0,
              marginLeft: 'auto'  // Добавляем это свойство для выравнивания вправо
          }}>
              {location.pathname !== '/' && (
                  location.pathname === '/menu' ? (
                      <SlSettings 
                          className="tg-header-icon" 
                          onClick={handleAction}
                          style={{ 
                              cursor: 'pointer',
                              marginLeft: 'auto'  // Или можно добавить здесь
                          }}
                      />
                  ) : (
                      <span 
                          className="tg-header-icon" 
                          onClick={handleAction}
                          style={{ 
                              cursor: 'pointer', 
                              fontSize: '20px',
                              marginLeft: 'auto'  // Или можно добавить здесь
                          }}
                      >
                          ✕
                      </span>
                  )
              )}
          </div>
        </div>
    );
}