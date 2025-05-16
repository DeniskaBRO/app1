import { Link } from 'react-router-dom';


export default function MaimMap() {
  return (
    <div>
      <nav>
        <Link to="/settingsmap">
            <img
                src="/icons&pictures/Settings.png"
                alt="Логотип"
                style={{ width: '30px', height: 'auto' }}
            />
        </Link>
        <Link to="/menu">Меню</Link>
      </nav>
    </div>
  );
}