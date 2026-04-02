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
    { id: "1", name: "Dr. Sarah Johnson", specialty: "Cardiologist", experience: 12, fees: 800, rating: 4.8, location: "New Delhi", image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop" },
    { id: "2", name: "Dr. Rajesh Kumar", specialty: "Dentist", experience: 8, fees: 500, rating: 4.5, location: "Mumbai", image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop" },
    { id: "3", name: "Dr. Anita Desai", specialty: "Dermatologist", experience: 10, fees: 600, rating: 4.7, location: "Bangalore", image: "https://images.unsplash.com/photo-1559839734-2b71f1536783?w=400&h=400&fit=crop" },
    { id: "4", name: "Dr. Vikram Singh", specialty: "Neurologist", experience: 15, fees: 1200, rating: 4.9, location: "Chennai", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop" },
    { id: "5", name: "Dr. Priya Sharma", specialty: "Pediatrician", experience: 7, fees: 450, rating: 4.6, location: "Hyderabad", image: "https://images.unsplash.com/photo-1591608971362-f08b2a75731a?w=400&h=400&fit=crop" },
    { id: "6", name: "Dr. Michael Chen", specialty: "Orthopedic", experience: 14, fees: 900, rating: 4.8, location: "Pune", image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop" },
    { id: "7", name: "Dr. Aisha Khan", specialty: "Gynecologist", experience: 11, fees: 700, rating: 4.7, location: "Kolkata", image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&h=400&fit=crop" },
    { id: "8", name: "Dr. David Miller", specialty: "Ophthalmologist", experience: 9, fees: 550, rating: 4.5, location: "Ahmedabad", image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=400&fit=crop" },
  ];

  let appointments = [];
  let ambulanceRequests = [];
  let contactMessages = [];

  // API Routes
  app.post("/api/contact", (req, res) => {
    const message = { id: Date.now().toString(), ...req.body, status: "Received" };
    contactMessages.push(message);
    res.status(201).json({ message: "Message received successfully" });
  });

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
