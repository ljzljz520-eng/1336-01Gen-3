import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.join(__dirname, '..', 'data', 'consult.db');
const db = new Database(dbPath);

db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

db.exec(`
  CREATE TABLE IF NOT EXISTS consultations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    company TEXT NOT NULL,
    contact TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT,
    industry TEXT NOT NULL,
    requirement TEXT NOT NULL,
    status TEXT DEFAULT 'pending',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE INDEX IF NOT EXISTS idx_consultations_status ON consultations(status);
  CREATE INDEX IF NOT EXISTS idx_consultations_created_at ON consultations(created_at);
`);

export const createConsultation = (data) => {
  const stmt = db.prepare(`
    INSERT INTO consultations (company, contact, phone, email, industry, requirement)
    VALUES (@company, @contact, @phone, @email, @industry, @requirement)
  `);
  
  const result = stmt.run(data);
  return getConsultationById(result.lastInsertRowid);
};

export const getConsultationById = (id) => {
  const stmt = db.prepare('SELECT * FROM consultations WHERE id = ?');
  return stmt.get(id);
};

export const getAllConsultations = (status = null) => {
  if (status) {
    const stmt = db.prepare('SELECT * FROM consultations WHERE status = ? ORDER BY created_at DESC');
    return stmt.all(status);
  }
  const stmt = db.prepare('SELECT * FROM consultations ORDER BY created_at DESC');
  return stmt.all();
};

export const updateConsultationStatus = (id, status) => {
  const stmt = db.prepare(`
    UPDATE consultations 
    SET status = ?, updated_at = CURRENT_TIMESTAMP 
    WHERE id = ?
  `);
  const result = stmt.run(status, id);
  return result.changes > 0 ? getConsultationById(id) : null;
};

export default db;
