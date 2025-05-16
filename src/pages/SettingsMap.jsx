import { Link } from 'react-router-dom';

export default function SettingsMap() {
  return (
    <div>
      <nav>
        <Link to="/">
            <img
                src="/icons&pictures/Chevron_Left.png"
                alt="Логотип"
                style={{ width: '30px', height: '30px' }}
            />
        </Link>
      </nav>
    </div>
  );
}