import { useParams, Link } from 'react-router-dom';
import type { Project } from '../../types/Project';
import rawData from '../../data/data.json';
import './ProjectDetail.css'; 

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  const proyecto = (rawData as Project[]).find((p) => p.id === Number(id));

  if (!proyecto) {
    return (
      <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
        <h2>Proyecto no encontrado</h2>
        <Link to="/" style={{ color: '#388e3c', fontWeight: 'bold' }}>Volver al listado</Link>
      </div>
    );
  }

  const getStatusClass = (status: string) => {
    if (status === 'Activo') return 'status-active';
    if (status === 'Mantenimiento') return 'status-maintenance';
    return 'status-pending';
  };

  return (
    <div className="project-detail-container">
      
      <header className="detail-header">
        <div className="logo-container">
          <h1 className="logo-title">Cero Emisiones</h1>
          <span className="logo-dot"></span>
        </div>
        <span className="header-subtitle">Portal de Gestión Solar</span>
      </header>

      <Link to="/" className="back-link">
        ← Volver al listado
      </Link>

      <div className="detail-body">
        <h2 className="project-name">{proyecto.name}</h2>
        <p className="project-loc">{proyecto.location}</p>

        <div className="metrics-group">
          <div>
            <span className="metric-label">CAPACIDAD</span>
            <p className="metric-value">{proyecto.capacity} kWh</p>
          </div>
          <div>
            <span className="metric-label">ESTADO ACTUAL</span>
   
            <p className={`metric-value ${getStatusClass(proyecto.status)}`}>
              {proyecto.status}
            </p>
          </div>
        </div>

        <div className="description-box">
          <h3 className="description-title">Descripción del Sistema</h3>
          <p className="description-text">{proyecto.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;