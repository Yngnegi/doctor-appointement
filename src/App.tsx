import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Stethoscope, 
  Ambulance, 
  Calendar, 
  User, 
  Search, 
  MapPin, 
  Star, 
  Phone, 
  Clock, 
  ChevronRight, 
  Menu, 
  X,
  Shield,
  Heart,
  MessageSquare,
  Moon,
  Sun,
  Bell,
  Check,
  Send,
  Plus,
  Minus
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Components ---

const Navbar = ({ darkMode, toggleDarkMode }: { darkMode: boolean, toggleDarkMode: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Find Doctors', path: '/doctors' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={cn(
      "sticky top-0 z-50 w-full border-b backdrop-blur-md transition-colors duration-300",
      darkMode ? "bg-slate-900/80 border-slate-800 text-white" : "bg-white/80 border-slate-200 text-slate-900"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <Stethoscope className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">MedQuick</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-blue-600",
                  location.pathname === link.path ? "text-blue-600" : (darkMode ? "text-slate-300" : "text-slate-600")
                )}
              >
                {link.name}
              </Link>
            ))}
            <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <Link to="/dashboard" className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">
              Sign In
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button onClick={toggleDarkMode} className="p-2 rounded-full">
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/dashboard" 
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-blue-600 text-white px-5 py-3 rounded-xl text-base font-medium mt-4"
              >
                Sign In
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const EmergencyButton = () => {
  return (
    <Link 
      to="/emergency"
      className="fixed bottom-8 right-8 z-50 flex items-center space-x-2 bg-red-600 text-white px-6 py-4 rounded-full shadow-2xl hover:bg-red-700 transition-all hover:scale-105 active:scale-95 group"
    >
      <Ambulance className="w-6 h-6 animate-pulse" />
      <span className="font-bold tracking-wide">EMERGENCY</span>
    </Link>
  );
};

// --- Pages ---

const HomePage = () => {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-400 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 dark:bg-blue-900/30 rounded-full">
              Your Health, Our Priority
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">
              Instant Care for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">
                A Healthier You
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
              Book top-rated doctors in minutes or request an emergency ambulance with a single tap. Reliable healthcare at your fingertips.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/doctors" className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/25 flex items-center justify-center">
                Find a Doctor <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/emergency" className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-2xl font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center">
                Emergency Ambulance
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700">
          {[
            { label: 'Specialists', value: '500+', icon: Stethoscope },
            { label: 'Happy Patients', value: '10k+', icon: Heart },
            { label: 'Ambulances', value: '50+', icon: Ambulance },
            { label: 'Cities', value: '20+', icon: MapPin },
          ].map((stat, i) => (
            <div key={i} className="text-center space-y-2">
              <div className="mx-auto w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center text-blue-600">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Our Core Services</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">Comprehensive medical solutions designed for your convenience.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              title: 'Doctor Appointments', 
              desc: 'Book appointments with top specialists across various fields instantly.',
              icon: Calendar,
              color: 'bg-blue-500'
            },
            { 
              title: 'Emergency Ambulance', 
              desc: '24/7 rapid response ambulance service with live tracking.',
              icon: Ambulance,
              color: 'bg-red-500'
            },
            { 
              title: '24/7 Support', 
              desc: 'Our medical assistants are always available to help you with your queries.',
              icon: MessageSquare,
              color: 'bg-green-500'
            }
          ].map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all"
            >
              <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6", service.color)}>
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Testimonials />
      <FAQSection />
    </div>
  );
};

const FindDoctorsPage = () => {
  const [doctors, setDoctors] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');

  useEffect(() => {
    fetch('/api/doctors')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch doctors');
        return res.json();
      })
      .then(data => {
        setDoctors(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const specialties = ['All', 'Cardiologist', 'Dentist', 'Dermatologist', 'Neurologist', 'Pediatrician', 'Orthopedic', 'Gynecologist', 'Ophthalmologist'];

  const filteredDoctors = doctors.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         doc.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === 'All' || doc.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">Find a Doctor</h1>
          <p className="text-slate-600 dark:text-slate-400">Book appointments with top-rated specialists in your area.</p>
        </div>
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Search by name or specialty..."
            className="w-full pl-12 pr-4 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {specialties.map(s => (
          <button
            key={s}
            onClick={() => setSelectedSpecialty(s)}
            className={cn(
              "px-6 py-2.5 rounded-full text-sm font-medium transition-all",
              selectedSpecialty === s 
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" 
                : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-blue-500"
            )}
          >
            {s}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="grid md:grid-cols-3 gap-8">
          {[1,2,3].map(i => (
            <div key={i} className="h-80 bg-slate-100 dark:bg-slate-800 animate-pulse rounded-3xl" />
          ))}
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {filteredDoctors.map(doc => (
            <motion.div 
              key={doc.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={doc.image} alt={doc.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-3 py-1 rounded-full flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-bold dark:text-white">{doc.rating}</span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{doc.name}</h3>
                  <p className="text-blue-600 font-medium">{doc.specialty}</p>
                </div>
                <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                  <div className="flex items-center"><Clock className="w-4 h-4 mr-1" /> {doc.experience} yrs exp</div>
                  <div className="flex items-center"><MapPin className="w-4 h-4 mr-1" /> {doc.location}</div>
                </div>
                <div className="pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
                  <span className="text-lg font-bold text-slate-900 dark:text-white">₹{doc.fees}</span>
                  <Link to={`/book/${doc.id}`} className="bg-blue-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-700 transition-all">
                    Book Now
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

const BookingPage = () => {
  const { id } = useNavigate() as any; // Simplified for demo
  const [doctor, setDoctor] = useState<any>(null);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // In a real app, we'd use the ID from params
    fetch('/api/doctors/1')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch doctor');
        return res.json();
      })
      .then(setDoctor)
      .catch(err => console.error(err));
  }, []);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const booking = {
      doctorId: doctor.id,
      doctorName: doctor.name,
      patientName: "John Doe", // Mock user
      date,
      time
    };

    fetch('/api/appointments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(booking)
    })
    .then(res => {
      if (!res.ok) throw new Error('Failed to book appointment');
      return res.json();
    })
    .then(() => {
      setSuccess(true);
      setTimeout(() => navigate('/dashboard'), 2000);
    })
    .catch(err => {
      console.error(err);
      alert('Failed to book appointment. Please try again.');
    });
  };

  if (!doctor) return null;

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 overflow-hidden">
        <div className="bg-blue-600 p-8 text-white">
          <h1 className="text-3xl font-bold">Book Appointment</h1>
          <p className="mt-2 opacity-90">Confirm your slot with {doctor.name}</p>
        </div>
        
        {success ? (
          <div className="p-12 text-center space-y-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <Bell className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Booking Confirmed!</h2>
            <p className="text-slate-600 dark:text-slate-400">Redirecting to your dashboard...</p>
          </div>
        ) : (
          <form onSubmit={handleBooking} className="p-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Select Date</label>
                <input 
                  type="date" 
                  required
                  className="w-full p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Select Time</label>
                <select 
                  required
                  className="w-full p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                >
                  <option value="">Choose a slot</option>
                  <option value="09:00 AM">09:00 AM</option>
                  <option value="10:30 AM">10:30 AM</option>
                  <option value="02:00 PM">02:00 PM</option>
                  <option value="04:30 PM">04:30 PM</option>
                </select>
              </div>
            </div>
            <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">Consultation Fee</span>
                <span className="font-bold text-slate-900 dark:text-white">₹{doctor.fees}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">Booking Fee</span>
                <span className="font-bold text-slate-900 dark:text-white">₹50</span>
              </div>
              <div className="pt-3 border-t border-blue-200 dark:border-blue-800 flex justify-between font-bold text-lg">
                <span className="text-slate-900 dark:text-white">Total</span>
                <span className="text-blue-600">₹{doctor.fees + 50}</span>
              </div>
            </div>
            <button type="submit" className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">
              Confirm Booking
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

const TrackingMap = () => {
  const [position, setPosition] = useState({ x: 10, y: 10 });
  const [eta, setEta] = useState(7);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(prev => {
        const nextX = prev.x + (80 - prev.x) * 0.05;
        const nextY = prev.y + (80 - prev.y) * 0.05;
        return { x: nextX, y: nextY };
      });
      setEta(prev => (prev > 1 ? prev - 0.1 : 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-80 bg-slate-100 dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-inner">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[radial-gradient(circle,rgba(0,0,0,0.2)_1px,transparent_1px)] bg-[size:30px_30px]" />
      </div>
      
      {/* Simulated Roads */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-full h-4 bg-slate-200 dark:bg-slate-800 -translate-y-1/2" />
        <div className="absolute top-0 left-1/2 w-4 h-full bg-slate-200 dark:bg-slate-800 -translate-x-1/2" />
        <div className="absolute top-1/4 left-0 w-full h-2 bg-slate-200 dark:bg-slate-800 opacity-50" />
        <div className="absolute top-0 left-3/4 w-2 h-full bg-slate-200 dark:bg-slate-800 opacity-50" />
      </div>

      {/* Destination (User) */}
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="absolute top-[80%] left-[80%] -translate-x-1/2 -translate-y-1/2 z-10"
      >
        <div className="relative">
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] px-2 py-1 rounded-md whitespace-nowrap font-bold shadow-lg">
            YOU ARE HERE
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-600 rotate-45" />
          </div>
          <div className="w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg animate-pulse" />
        </div>
      </motion.div>

      {/* Ambulance Marker */}
      <motion.div 
        animate={{ left: `${position.x}%`, top: `${position.y}%` }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="relative">
          <div className="absolute -top-14 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-2 rounded-xl shadow-xl flex items-center space-x-2 whitespace-nowrap">
            <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
              <Ambulance className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <div className="text-[10px] text-slate-500 font-bold uppercase leading-none">Arriving in</div>
              <div className="text-sm font-black text-slate-900 dark:text-white leading-none mt-1">{Math.ceil(eta)} mins</div>
            </div>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white dark:bg-slate-800 border-r border-b border-slate-200 dark:border-slate-700 rotate-45" />
          </div>
          <div className="bg-red-600 p-2 rounded-xl shadow-2xl shadow-red-600/40 text-white">
            <Ambulance className="w-6 h-6" />
          </div>
        </div>
      </motion.div>

      {/* Map Controls (Visual Only) */}
      <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
        <button className="w-8 h-8 bg-white dark:bg-slate-800 rounded-lg shadow-md flex items-center justify-center text-slate-600 dark:text-slate-300 font-bold">+</button>
        <button className="w-8 h-8 bg-white dark:bg-slate-800 rounded-lg shadow-md flex items-center justify-center text-slate-600 dark:text-slate-300 font-bold">-</button>
      </div>
    </div>
  );
};

const EmergencyPage = () => {
  const [status, setStatus] = useState<'idle' | 'requesting' | 'dispatched' | 'on-way' | 'arrived'>('idle');
  const [progress, setProgress] = useState(0);

  const handleEmergency = () => {
    setStatus('requesting');
    setProgress(20);
    
    setTimeout(() => {
      setStatus('dispatched');
      setProgress(50);
    }, 2000);

    setTimeout(() => {
      setStatus('on-way');
      setProgress(80);
    }, 5000);
  };

  const steps = [
    { id: 'requesting', label: 'Request Received', icon: Bell },
    { id: 'dispatched', label: 'Ambulance Assigned', icon: Shield },
    { id: 'on-way', label: 'On the Way', icon: Ambulance },
    { id: 'arrived', label: 'Arrived', icon: MapPin },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white dark:bg-slate-800 rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-slate-700 overflow-hidden">
        {status === 'idle' ? (
          <>
            <div className="bg-red-600 p-12 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="w-full h-full bg-[radial-gradient(circle,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:20px_20px]" />
              </div>
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center mx-auto mb-6"
              >
                <Ambulance className="w-10 h-10 text-white" />
              </motion.div>
              <h1 className="text-4xl font-black tracking-tight">Emergency Help</h1>
              <p className="mt-2 text-lg opacity-90 font-medium">Instant medical response at your location</p>
            </div>

            <div className="p-12 text-center space-y-10">
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg mx-auto leading-relaxed">
                Need immediate medical assistance? Press the SOS button to dispatch the nearest ambulance.
              </p>
              
              <div className="relative flex justify-center">
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="absolute inset-0 bg-red-600 rounded-full blur-3xl opacity-20"
                />
                <button 
                  onClick={handleEmergency}
                  className="relative w-64 h-64 bg-red-600 text-white rounded-full text-3xl font-black shadow-[0_20px_50px_rgba(220,38,38,0.4)] hover:bg-red-700 transition-all hover:scale-105 active:scale-95 flex flex-col items-center justify-center space-y-2 border-[12px] border-red-50 dark:border-red-900/20 group"
                >
                  <span className="group-hover:tracking-widest transition-all">SOS</span>
                  <span className="text-xs font-bold opacity-70 tracking-widest uppercase">Tap to Call</span>
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: '24/7 Service', icon: Clock },
                  { label: 'Live Tracking', icon: MapPin },
                  { label: 'Expert Staff', icon: Shield },
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl space-y-2">
                    <item.icon className="w-5 h-5 text-red-600 mx-auto" />
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="p-8 space-y-8">
            {/* Header with Status */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-black text-slate-900 dark:text-white">Tracking Ambulance</h2>
                <p className="text-slate-500 font-medium">Request ID: #AMB-9021</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-black text-red-600">7 MINS</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Estimated Arrival</div>
              </div>
            </div>

            {/* Progress Tracker */}
            <div className="relative pt-4 pb-8">
              <div className="absolute top-8 left-0 w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  className="h-full bg-red-600 rounded-full shadow-[0_0_10px_rgba(220,38,38,0.5)]"
                />
              </div>
              <div className="relative flex justify-between">
                {steps.map((step, i) => {
                  const isActive = status === step.id || (i < steps.findIndex(s => s.id === status));
                  const isCurrent = status === step.id;
                  return (
                    <div key={step.id} className="flex flex-col items-center space-y-3">
                      <div className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 z-10",
                        isActive ? "bg-red-600 text-white shadow-lg" : "bg-slate-100 dark:bg-slate-800 text-slate-400",
                        isCurrent && "ring-4 ring-red-100 dark:ring-red-900/30 scale-110"
                      )}>
                        <step.icon className="w-5 h-5" />
                      </div>
                      <span className={cn(
                        "text-[10px] font-bold uppercase tracking-wider text-center max-w-[60px]",
                        isActive ? "text-red-600" : "text-slate-400"
                      )}>
                        {step.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Live Map */}
            <TrackingMap />

            {/* Driver Info Card */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img src="https://i.pravatar.cc/150?u=driver" alt="Driver" className="w-14 h-14 rounded-2xl object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Your Driver</div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-none">Suresh Raina</h4>
                  <div className="flex items-center mt-1 text-yellow-500">
                    <Star className="w-3 h-3 fill-current" />
                    <span className="text-xs font-bold ml-1">4.9 (2.4k trips)</span>
                  </div>
                </div>
              </div>
              <div className="flex space-x-3">
                <button className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-2xl flex items-center justify-center hover:bg-blue-100 transition-all">
                  <MessageSquare className="w-5 h-5" />
                </button>
                <button className="w-12 h-12 bg-green-500 text-white rounded-2xl flex items-center justify-center hover:bg-green-600 transition-all shadow-lg shadow-green-500/20">
                  <Phone className="w-5 h-5" />
                </button>
              </div>
            </div>

            <button 
              onClick={() => setStatus('idle')}
              className="w-full py-4 text-slate-400 dark:text-slate-500 font-bold text-sm hover:text-red-600 transition-colors"
            >
              Cancel Emergency Request
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const DashboardPage = () => {
  const [appointments, setAppointments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/appointments')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch appointments');
        return res.json();
      })
      .then(data => {
        setAppointments(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Patient Dashboard</h1>
        <div className="flex items-center space-x-4">
          <div className="text-right hidden sm:block">
            <div className="font-bold dark:text-white">John Doe</div>
            <div className="text-xs text-slate-500">Patient ID: P-10293</div>
          </div>
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">JD</div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Upcoming Appointments</h2>
          {loading ? (
            <div className="space-y-4">
              {[1,2].map(i => <div key={i} className="h-24 bg-slate-100 dark:bg-slate-800 animate-pulse rounded-2xl" />)}
            </div>
          ) : appointments.length === 0 ? (
            <div className="p-12 text-center bg-white dark:bg-slate-800 rounded-3xl border border-dashed border-slate-200 dark:border-slate-700">
              <Calendar className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-500 dark:text-slate-400">No upcoming appointments found.</p>
              <Link to="/doctors" className="mt-4 inline-block text-blue-600 font-bold">Book your first appointment</Link>
            </div>
          ) : (
            <div className="space-y-4">
              {appointments.map(app => (
                <div key={app.id} className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center text-blue-600">
                      <User className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white">{app.doctorName}</h3>
                      <p className="text-sm text-slate-500">{app.date} • {app.time}</p>
                    </div>
                  </div>
                  <div className="px-4 py-1.5 bg-green-50 dark:bg-green-900/20 text-green-600 rounded-full text-xs font-bold uppercase tracking-wider">
                    {app.status}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Health Summary</h2>
          <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Blood Pressure</span>
                <span className="font-bold text-green-600">Normal</span>
              </div>
              <div className="h-2 bg-slate-100 dark:bg-slate-900 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 w-[70%]" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Heart Rate</span>
                <span className="font-bold text-blue-600">72 bpm</span>
              </div>
              <div className="h-2 bg-slate-100 dark:bg-slate-900 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 w-[60%]" />
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-700">
              <button className="w-full py-3 bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 rounded-xl text-sm font-bold hover:bg-slate-100 transition-all">
                View Full Medical History
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => (
  <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <Stethoscope className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold dark:text-white">MedQuick</span>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            Revolutionizing healthcare access with instant appointments and emergency services.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white mb-4">Platform</h4>
          <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
            <li><Link to="/doctors" className="hover:text-blue-600">Find Doctors</Link></li>
            <li><Link to="/emergency" className="hover:text-blue-600">Emergency Service</Link></li>
            <li><Link to="/dashboard" className="hover:text-blue-600">Patient Portal</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white mb-4">Support</h4>
          <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
            <li><Link to="/contact" className="hover:text-blue-600">Help Center</Link></li>
            <li><Link to="/contact" className="hover:text-blue-600">Contact Us</Link></li>
            <li><Link to="/contact" className="hover:text-blue-600">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white mb-4">Emergency</h4>
          <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-2xl border border-red-100 dark:border-red-900/30">
            <div className="text-xs text-red-600 dark:text-red-400 font-bold uppercase mb-1">24/7 Helpline</div>
            <div className="text-xl font-black text-red-600 dark:text-red-500">1800-MED-HELP</div>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 text-center text-sm text-slate-400">
        © 2026 MedQuick Healthcare. All rights reserved.
      </div>
    </div>
  </footer>
);

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <Router>
      <div className={cn("min-h-screen transition-colors duration-300", darkMode ? "bg-slate-950 text-white" : "bg-slate-50 text-slate-900")}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        <main className="min-h-[calc(100vh-64px-300px)]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/doctors" element={<FindDoctorsPage />} />
            <Route path="/book/:id" element={<BookingPage />} />
            <Route path="/emergency" element={<EmergencyPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />
        <EmergencyButton />
        <Chatbot />
      </div>
    </Router>
  );
}

const FAQSection = () => (
  <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
    <div className="grid md:grid-cols-2 gap-8">
      {[
        { q: "How do I book an appointment?", a: "Simply go to 'Find Doctors', select a specialist, and click 'Book Now' to choose your preferred slot." },
        { q: "Is the ambulance service 24/7?", a: "Yes, our emergency ambulance service is available 24/7 with rapid response teams." },
        { q: "Can I cancel my booking?", a: "Yes, you can cancel your appointment from your dashboard up to 2 hours before the scheduled time." },
        { q: "What are the consultation fees?", a: "Fees vary by doctor and are clearly mentioned on their profiles before you book." }
      ].map((faq, i) => (
        <div key={i} className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700">
          <h4 className="font-bold text-slate-900 dark:text-white mb-2">{faq.q}</h4>
          <p className="text-slate-600 dark:text-slate-400 text-sm">{faq.a}</p>
        </div>
      ))}
    </div>
  </section>
);

const Testimonials = () => (
  <section className="bg-blue-600 py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-white mb-12">What Our Patients Say</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { name: "Rahul Mehta", text: "MedQuick saved my life during an emergency. The ambulance arrived in under 10 minutes!", role: "Patient" },
          { name: "Sneha Kapoor", text: "Finding a specialist was so easy. The booking process is seamless and very professional.", role: "Patient" },
          { name: "Amit Singh", text: "The dashboard helps me keep track of all my family's medical appointments in one place.", role: "Patient" }
        ].map((t, i) => (
          <div key={i} className="p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 text-white">
            <p className="italic mb-6">"{t.text}"</p>
            <div className="font-bold">{t.name}</div>
            <div className="text-sm opacity-70">{t.role}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ text: "Hello! How can I help you today?", isBot: true }]);
  const [input, setInput] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { text: input, isBot: false }]);
    setInput('');
    
    setTimeout(() => {
      setMessages(prev => [...prev, { text: "Our assistant will be with you shortly. For emergencies, please use the SOS button.", isBot: true }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-8 left-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-80 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden"
          >
            <div className="bg-blue-600 p-4 text-white flex justify-between items-center">
              <span className="font-bold">MedQuick Support</span>
              <button onClick={() => setIsOpen(false)}><X className="w-5 h-5" /></button>
            </div>
            <div className="h-64 overflow-y-auto p-4 space-y-4">
              {messages.map((m, i) => (
                <div key={i} className={cn("flex", m.isBot ? "justify-start" : "justify-end")}>
                  <div className={cn(
                    "max-w-[80%] p-3 rounded-2xl text-sm",
                    m.isBot ? "bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200" : "bg-blue-600 text-white"
                  )}>
                    {m.text}
                  </div>
                </div>
              ))}
            </div>
            <form onSubmit={handleSend} className="p-4 border-t border-slate-100 dark:border-slate-700 flex gap-2">
              <input 
                type="text" 
                placeholder="Type a message..."
                className="flex-1 bg-slate-50 dark:bg-slate-900 border-none rounded-xl px-4 py-2 text-sm outline-none dark:text-white"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button type="submit" className="bg-blue-600 text-white p-2 rounded-xl">
                <ChevronRight className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-blue-600 text-white rounded-full shadow-xl flex items-center justify-center hover:bg-blue-700 transition-all hover:scale-110"
      >
        <MessageSquare className="w-6 h-6" />
      </button>
    </div>
  );
};

const AdminPanel = () => {
  const [appointments, setAppointments] = useState<any[]>([]);
  const [ambulances, setAmbulances] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/appointments')
      .then(res => res.json())
      .then(setAppointments)
      .catch(err => console.error('Admin Appointments Error:', err));
      
    fetch('/api/ambulance')
      .then(res => res.json())
      .then(setAmbulances)
      .catch(err => console.error('Admin Ambulance Error:', err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      <h1 className="text-3xl font-bold">Admin Control Panel</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-600" /> Manage Appointments
          </h2>
          <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 dark:bg-slate-900">
                <tr>
                  <th className="p-4 font-bold">Patient</th>
                  <th className="p-4 font-bold">Doctor</th>
                  <th className="p-4 font-bold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                {appointments.map(app => (
                  <tr key={app.id}>
                    <td className="p-4">{app.patientName}</td>
                    <td className="p-4">{app.doctorName}</td>
                    <td className="p-4">
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">{app.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Ambulance className="w-5 h-5 text-red-600" /> Ambulance Requests
          </h2>
          <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 dark:bg-slate-900">
                <tr>
                  <th className="p-4 font-bold">Patient</th>
                  <th className="p-4 font-bold">ETA</th>
                  <th className="p-4 font-bold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                {ambulances.map(amb => (
                  <tr key={amb.id}>
                    <td className="p-4">{amb.patientName || 'Emergency'}</td>
                    <td className="p-4">{amb.eta}</td>
                    <td className="p-4">
                      <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs">{amb.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (!res.ok) throw new Error('Failed to send message');
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-20 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Get in Touch</h1>
        <p className="text-slate-600 dark:text-slate-400">We're here to help you 24/7 with any medical queries or platform support.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold">Call Us</h4>
              <p className="text-slate-600 dark:text-slate-400">+91 1800-MED-HELP</p>
              <p className="text-slate-600 dark:text-slate-400">+91 98765 43210</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 shrink-0">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold">Email Support</h4>
              <p className="text-slate-600 dark:text-slate-400">support@medquick.com</p>
              <p className="text-slate-600 dark:text-slate-400">help@medquick.com</p>
            </div>
          </div>
        </div>
        
        {status === 'sent' ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-green-50 dark:bg-green-900/20 p-10 rounded-3xl border border-green-100 dark:border-green-900/30 text-center space-y-4"
          >
            <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-green-800 dark:text-green-300">Message Sent!</h3>
            <p className="text-green-700 dark:text-green-400">We've received your query and will get back to you within 24 hours.</p>
            <button 
              onClick={() => setStatus('idle')}
              className="text-green-600 font-bold hover:underline"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-700">
            <input 
              type="text" 
              placeholder="Your Name" 
              required
              className="w-full p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              required
              className="w-full p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <textarea 
              placeholder="How can we help?" 
              rows={4} 
              required
              className="w-full p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
            <button 
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all disabled:opacity-50"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'error' && (
              <p className="text-red-500 text-sm text-center">Failed to send message. Please try again.</p>
            )}
          </form>
        )}
      </div>
    </div>
  );
};
