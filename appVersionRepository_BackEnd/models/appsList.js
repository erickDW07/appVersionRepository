import { DataTypes } from "sequelize";
import { db } from "../db/config.js";



export const AppsList = db.define('AppsList', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  publicada: {
    type: DataTypes.DATE,
    defaultValue: new Date()
  },
  url: {
    type: DataTypes.STRING
  },
  descargas: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  estatus: {
    type: DataTypes.STRING,
    defaultValue: true
  },
  version: {
    type: DataTypes.STRING
  }
}, {
  // Opciones adicionales del modelo, como nombre de la tabla, timestamps, etc.
  tableName: 'appsLista',
  timestamps: false // Esto desactiva los campos created_at y updated_at
});

