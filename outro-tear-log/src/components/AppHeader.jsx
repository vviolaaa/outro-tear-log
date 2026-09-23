import './AppHeader.css';
import logo from '../assets/images/kpop.png';

export default function AppHeader({ page, onNavigate }) {
  return (
    <header className="app-header">
      <button
        type="button"
        className="app-header-logo"
        onClick={() => onNavigate('home')}
      >
        <img
          src={logo}
          alt="outro tear log"
          className="app-header-logo-image"
        />
        <span>outro : tear log</span>
      </button>

      <nav className="app-header-nav">
        <button
          type="button"
          className={`app-header-btn${page === 'home' ? ' app-header-btn--active' : ''}`}
          onClick={() => onNavigate('home')}
        >
          <span aria-hidden="true"></span> home
        </button>

        <button
          type="button"
          className={`app-header-btn${page === 'calendar' ? ' app-header-btn--active' : ''}`}
          onClick={() => onNavigate('calendar')}
        >
          <span aria-hidden="true"></span> calendar
        </button>
      </nav>
    </header>
  );
}