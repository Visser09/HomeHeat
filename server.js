// server.js
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// -------- API endpoints your UI expects --------
app.get("/api/kpis", (req, res) => {
  res.json({
    revenue_month: 91000,
    expenses_month: 24000,
    net_margin_pct: 65,
    open_invoices: 5,
    jobs_scheduled: 12,
    jobs_completed: 8,
    maintenance_plans_active: 142,
    maintenance_plans_new: 6,
    inventory_low: 4
  });
});

app.get("/api/timeseries", (req, res) => {
  const days = Array.from({ length: 14 }, (_, i) => {
    const d = new Date(); d.setDate(d.getDate() - (13 - i));
    return d.toISOString().slice(0,10);
  });
  res.json({
    revenue_daily: days.map((date, i) => ({ date, amount: 2000 + i*150 })),
    jobs_daily:    days.map((date, i) => ({ date, count: 3 + (i % 4) }))
  });
});

app.get("/api/jobs", (req, res) => {
  res.json([
    { id: "J-1001", date: "2025-09-01", client: "Smith", type: "Furnace Repair", tech: "Carlos", status: "Completed", amount: 420 },
    { id: "J-1002", date: "2025-09-02", client: "Lee",   type: "AC Tune-up",     tech: "Maya",   status: "Scheduled", amount: 159 }
  ]);
});

app.get("/api/inventory", (req, res) => {
  res.json([
    { sku: "FAN-120", name: "Condenser Fan", on_hand: 3,  reorder_point: 5,  unit_cost: 89.99 },
    { sku: "FLT-16x25x1", name: "Filter 16x25x1", on_hand: 40, reorder_point: 20, unit_cost: 6.50 }
  ]);
});

// (optional but helpful for Sales page)
app.get("/api/sales/pipeline", (req, res) => {
  res.json([
    { id: "CUST-1", name: "Jane Miller", email: "jane@example.com", city: "Prescott",   plan_status: "Active", last_touch: "2025-08-28", next_action_date: "2025-09-05", phone: "613-555-0101" },
    { id: "CUST-2", name: "Rick Stone",  email: "rick@example.com",  city: "Kemptville", plan_status: "None",   last_touch: null,        next_action_date: null,        phone: "613-555-0142" }
  ]);
});
app.get("/api/sales/customers/:id", (req, res) => {
  res.json({ id: req.params.id, touchpoints: [{ id: "TP-1", type: "call", outcome: "LeftVoicemail", note: "LM about plan", created_at: new Date().toISOString() }]});
});
app.get("/api/sales/meta/email-templates", (req, res) => res.json([{ key: "plan-invite", subject: "Annual Maintenance Plan", body: "Hi {{name}}..." }]));
app.get("/api/sales/meta/call-outcomes", (req, res) => res.json(["SpokeBooked","SpokeConsidering","NotInterested","LeftVoicemail"]));
app.post("/api/sales/touchpoints", (req, res) => res.status(201).json({ id: "TP-"+Math.random().toString(36).slice(2,7), ...req.body }));

// -------- Serve built frontend (Vite) --------
const dist = path.join(__dirname, "dist");
app.use(express.static(dist));
app.get("*", (_, res) => res.sendFile(path.join(dist, "index.html")));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server listening on ${port}`));
