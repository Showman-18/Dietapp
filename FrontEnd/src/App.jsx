
import React, { Suspense, lazy } from "react";
import Logo from "./components/Logo";
// Route-level code splitting
const SignUp = lazy(() => import("./components/SignUp"));
const Login = lazy(() => import("./components/Login"));
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
const DashboardShell = lazy(() => import("./components/DashboardShell"));
const PatientDietPlan = lazy(() => import("./pages/patient/DietPlan"));
const PatientProgress = lazy(() => import("./pages/patient/Progress"));
const PatientProfile = lazy(() => import("./pages/patient/Profile"));
const DoctorPatientList = lazy(() => import("./pages/doctor/PatientList"));
const DoctorGenerateDiet = lazy(() => import("./pages/doctor/GenerateDiet"));
const DoctorPatientRecords = lazy(() => import("./pages/doctor/PatientRecords"));


function Landing() {
  return (
    <>
      {/* Hero Section */}
      <header className="hero" style={{ textAlign: "center" }}>
        <div className="hero-inner">
        <Logo size={72} style={{ marginBottom: 16 }} />
        <h1 style={{ fontSize: "2.5rem", marginBottom: 12 }}>
          Comprehensive Cloud-Based Practice Management & Nutrient Analysis
        </h1>
        <h2 style={{ color: "var(--muted-gray)", fontWeight: 400, fontSize: "1.3rem", marginBottom: 32 }}>
          Ayurveda Dietitians | Modern, Secure, Automated
        </h2>
        <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
          <Link to="/doctor"><button className="btn-primary">Get Started Doctor</button></Link>
          <Link to="/patient"><button className="btn-primary" style={{ background: "var(--primary-green-hover)" }}>
            Get Started Patient
          </button></Link>
        </div>
        {/* Ayurveda-tech original illustration */}
        <div style={{ marginTop: 40 }}>
          <svg width="240" height="120" viewBox="0 0 240 120" fill="none" role="img" aria-label="Ayurveda tech illustration">
            <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#A5D6A7" />
                <stop offset="100%" stopColor="#F5F5F5" />
              </linearGradient>
            </defs>
            <ellipse cx="120" cy="100" rx="100" ry="12" fill="#A5D6A7" opacity="0.6" />
            <rect x="60" y="28" width="120" height="52" rx="18" fill="url(#g1)" stroke="#2E7D32" strokeWidth="2" />
            <circle cx="120" cy="54" r="18" fill="#2E7D32" />
            <circle cx="120" cy="54" r="7" fill="#A5D6A7" />
            <rect x="168" y="40" width="14" height="14" rx="3" fill="#FFB300" />
            <rect x="58" y="40" width="14" height="14" rx="3" fill="#29B6F6" />
            <circle cx="190" cy="56" r="3" fill="#AB47BC" />
            {/* subtle tech lines */}
            <path d="M30 72 C 60 68, 180 68, 210 72" stroke="#8D6E63" strokeOpacity="0.2" strokeWidth="2" fill="none" />
            <path d="M30 78 C 60 74, 180 74, 210 78" stroke="#8D6E63" strokeOpacity="0.15" strokeWidth="2" fill="none" />
          </svg>
        </div>
        {/* end hero-inner */}
        </div>
      </header>

      {/* Features Section */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "2rem 1rem" }}>
        <h2 style={{ textAlign: "center", marginBottom: 32 }}>Features</h2>
        <div className="features-grid" style={{ display: "flex", flexWrap: "wrap", gap: 24, justifyContent: "center" }}>
          <div className="card" style={{ minWidth: 240, flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><circle cx="9" cy="9" r="9" fill="#FF7043"/></svg>
              <h3 style={{ margin: 0 }}>Automated Ayurveda Diet Plans</h3>
            </div>
            <p>Personalized, evidence-based, prakriti-aware meal plans for every patient.</p>
          </div>
          <div className="card" style={{ minWidth: 240, flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><circle cx="9" cy="9" r="9" fill="#29B6F6"/></svg>
              <h3 style={{ margin: 0 }}>Patient Management</h3>
            </div>
            <p>Track progress, manage records, and communicate securely with patients.</p>
          </div>
          <div className="card" style={{ minWidth: 240, flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><circle cx="9" cy="9" r="9" fill="#AB47BC"/></svg>
              <h3 style={{ margin: 0 }}>8000+ Food Database</h3>
            </div>
            <p>Comprehensive, searchable, Ayurveda-compliant food and nutrient data.</p>
          </div>
          <div className="card" style={{ minWidth: 240, flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><circle cx="9" cy="9" r="9" fill="#FFB300"/></svg>
              <h3 style={{ margin: 0 }}>Secure & Compliant</h3>
            </div>
            <p>HIPAA/GDPR-ready, encrypted, and privacy-first for peace of mind.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-bg" style={{ maxWidth: 1100, margin: "2rem auto", borderRadius: 24, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 32, padding: 32 }}>
        <div style={{ flex: 2, minWidth: 260 }}>
          <h2>About</h2>
          <p style={{ color: "var(--muted-gray)", fontSize: "1.1rem" }}>
            Our platform empowers Ayurvedic dietitians and patients with modern, cloud-based tools for holistic nutrition, practice management, and secure communication. We blend ancient wisdom with digital innovation for better health outcomes.
          </p>
        </div>
        <div style={{ flex: 1, minWidth: 180, textAlign: "center" }}>
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="48" fill="#A5D6A7" stroke="#2E7D32" strokeWidth="2" />
            <path d="M50 80C65 65 65 35 50 20C35 35 35 65 50 80Z" fill="#2E7D32" stroke="#4CAF50" strokeWidth="2" />
            <rect x="68" y="32" width="10" height="10" rx="2" fill="#FFB300" />
            <circle cx="80" cy="50" r="3" fill="#AB47BC" />
          </svg>
        </div>
      </section>
    </>
  );
}

export default function App() {
  return (
    <Router>
      {/* Simple NavBar */}
      <nav style={{ display: "flex", gap: 24, justifyContent: "center", alignItems: "center", padding: 16, background: "var(--white)", borderBottom: "1.5px solid var(--mint-bg)", marginBottom: 8 }}>
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 700, color: "var(--primary-green)", fontSize: 20, textDecoration: "none" }}>
          <Logo size={28} /> Ayurveda Dietitian
        </Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Login</Link>
      </nav>
      <Suspense fallback={<div style={{textAlign:'center', padding: '2rem', color:'var(--muted-gray)'}}>Loading…</div>}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          {/* Patient Dashboard */}
          <Route path="/patient" element={<DashboardShell role="patient" />}> 
            <Route index element={<PatientDietPlan />} />
            <Route path="diet" element={<PatientDietPlan />} />
            <Route path="progress" element={<PatientProgress />} />
            <Route path="profile" element={<PatientProfile />} />
          </Route>
          {/* Doctor Dashboard */}
          <Route path="/doctor" element={<DashboardShell role="doctor" />}> 
            <Route index element={<DoctorPatientList />} />
            <Route path="patients" element={<DoctorPatientList />} />
            <Route path="generate" element={<DoctorGenerateDiet />} />
            <Route path="records" element={<DoctorPatientRecords />} />
          </Route>
        </Routes>
      </Suspense>
      {/* Footer */}
      <footer style={{ background: "var(--mint-bg)", color: "var(--primary-green)", textAlign: "center", padding: 24, borderRadius: "0 0 24px 24px", marginTop: 32 }}>
        <Logo size={32} style={{ verticalAlign: "middle", marginRight: 8 }} />
        <span style={{ fontWeight: 600 }}>Ayurveda Dietitian Cloud</span> &copy; {new Date().getFullYear()} &middot; <a href="#">Privacy</a> &middot; <a href="#">Contact</a>
      </footer>
    </Router>
  );
}
