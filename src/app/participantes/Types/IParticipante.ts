export interface IParticipante {
  ID: number;
  foto: string;
  Nombre: string;
  Apellido: string;
  Descripcion: string;
  Actividad: string;
  Hora_entrada: string;
  Hora_salida: string;
  Clasificacion: 'VIP' | 'Premium' | 'Básica';
  Estado: 'Activo' | 'Inactivo';
}
