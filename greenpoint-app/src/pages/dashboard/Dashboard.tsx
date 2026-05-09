import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import type { Project } from '../../types/Project';
import rawData from '../../data/data.json';
import './Dashboard.css';

const Dashboard = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filter, setFilter] = useState<string>('Todos');

  useEffect(() => {
    setProjects(rawData as Project[]);
  }, []);

  const filteredProjects = filter === 'Todos'
    ? projects
    : projects.filter(p => p.status === filter);

  const getBadgeClass = (status: string) => {
    if (status === 'Activo') return 'badge-active';
    if (status === 'Mantenimiento') return 'badge-maintenance';
    return 'badge-pending';
  };

  return (
    <div className="dashboard-container">
      
      <header className="dashboard-header">
        <div className="logo-container">
          <h1 className="logo-title">Cero Emisiones</h1>
          <span className="logo-dot"></span>
        </div>
        <span className="header-subtitle">Portal de Gestión Solar</span>
      </header>

      <div className="section-header">
        <h2 className="section-title">Proyectos Instalados</h2>
        
        <div className="filter-container">
          <label htmlFor="status-filter" className="filter-label">Filtrar por estado</label>
          <select
            id="status-filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="status-select"
          >
            <option value="Todos">Todos</option>
            <option value="Activo">Activo</option>
            <option value="Mantenimiento">Mantenimiento</option>
            <option value="Pendiente">Pendiente</option>
          </select>
        </div>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((proyecto) => (
          <div key={proyecto.id} className="project-card">
            <div>
              <span className={`status-badge ${getBadgeClass(proyecto.status)}`}>
                {proyecto.status}
              </span>

              <h3 className="project-card-name">
                {proyecto.name}
              </h3>
              <p className="project-card-loc">
                {proyecto.location}
              </p>
            </div>

            <Link
              to={`/proyecto/${proyecto.id}`}
              className="project-card-link"
            >
              Ver parámetros técnicos →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;