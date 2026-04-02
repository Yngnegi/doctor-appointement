import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Mock Data
  const doctors = [
    { id: "1", name: "Dr. Sarah Johnson", specialty: "Cardiologist", experience: 12, fees: 800, rating: 4.8, location: "New Delhi", image: "https://picsum.photos/seed/doc1/400/400" },
    { id: "2", name: "Dr. Rajesh Kumar", specialty: "Dentist", experience: 8, fees: 500, rating: 4.5, location: "Mumbai", image: "https://picsum.photos/seed/doc2/400/400" },
    { id: "3", name: "Dr. Anita Desai", specialty: "Dermatologist", experience: 10, fees: 600, rating: 4.7, location: "Bangalore", image: "https://picsum.photos/seed/doc3/400/400" },
    { id: "4", name: "Dr. Vikram Singh", specialty: "Neurologist", experience: 15, fees: 1200, rating: 4.9, location: "Chennai", image: "https://picsum.photos/seed/doc4/400/400" },
    { id: "5", name: "Dr. Priya Sharma", specialty: "Pediatrician", experience: 7, fees: 450, rating: 4.6, location: "Hyderabad", image: "https://picsum.photos/seed/doc5/400/400" },
  ];

  let appointments = [];
  let ambulanceRequests = [];

  // API Routes
  app.get("/api/doctors", (req, res) => {
    res.json(doctors);
  });

  app.get("/api/doctors/:id", (req, res) => {
    const doctor = doctors.find(d => d.id === req.params.id);
    if (doctor) res.json(doctor);
    else res.status(404).json({ message: "Doctor not found" });
  });

  app.post("/api/appointments", (req, res) => {
    const appointment = { id: Date.now().toString(), ...req.body, status: "Confirmed" };
    appointments.push(appointment);
    res.status(201).json(appointment);
  });

  app.get("/api/appointments", (req, res) => {
    res.json(appointments);
  });

  app.post("/api/ambulance", (req, res) => {
    const request = { id: Date.now().toString(), ...req.body, status: "Dispatched", eta: "5-10 mins" };
    ambulanceRequests.push(request);
    res.status(201).json(request);
  });

  app.get("/api/ambulance", (req, res) => {
    res.json(ambulanceRequests);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
