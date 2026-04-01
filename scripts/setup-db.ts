import { createClient } from '@libsql/client';

const db = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
});

async function setup() {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS leads (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      zip_code TEXT,
      city TEXT,
      state TEXT,
      service_type TEXT,
      property_type TEXT,
      message TEXT,
      source TEXT,
      referrer TEXT,
      utm_source TEXT,
      utm_medium TEXT,
      utm_campaign TEXT,
      spam INTEGER DEFAULT 0,
      spam_reason TEXT,
      created_at TEXT DEFAULT (datetime('now'))
    )
  `);
  console.log('✅ leads table created');
  const result = await db.execute("SELECT name FROM sqlite_master WHERE type='table'");
  console.log('Tables:', result.rows.map(r => r.name));
}

setup().catch(console.error);
