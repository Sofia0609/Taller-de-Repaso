export interface Project {
  id: number;
  name: string;
  location: string;
  capacity: number;
  status: 'Activo' | 'Mantenimiento' | 'Pendiente';
  description: string;
}