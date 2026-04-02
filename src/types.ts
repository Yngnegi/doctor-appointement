export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  experience: number;
  fees: number;
  rating: number;
  location: string;
  image: string;
}

export interface Appointment {
  id: string;
  doctorId: string;
  doctorName: string;
  patientName: string;
  date: string;
  time: string;
  status: "Pending" | "Confirmed" | "Completed";
}

export interface AmbulanceRequest {
  id: string;
  location: string;
  patientName: string;
  phone: string;
  status: "Dispatched" | "Arrived" | "Completed";
  eta: string;
}
