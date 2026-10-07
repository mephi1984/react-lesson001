// src/layouts/RootLayout.tsx
import { Outlet, NavLink } from 'react-router-dom';

export function RootLayout() {
  return (
    <div className="container py-3">
      <nav className="navbar navbar-expand navbar-light bg-light rounded px-3 mb-4">
        <span className="navbar-brand">Мой Сайт</span>
        <div className="navbar-nav gap-2">
          {/* NavLink автоматически умеет добавлять класс 'active' текущей ссылке */}
          <NavLink 
            to="/" 
            className={({ isActive }) => `nav-link ${isActive ? 'fw-bold active' : ''}`}
          >
            Главная
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => `nav-link ${isActive ? 'fw-bold active' : ''}`}
          >
            О проекте
          </NavLink>
        </div>
      </nav>

      {/* Сюда монтируется контент текущего дочернего роута */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}