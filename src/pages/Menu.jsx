import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <div>
      <nav>
        <Link to="/settingsmap">Настройки карты</Link> | 
        <Link to="/menu">Меню</Link>
      </nav>
    </div>
  );
}