import RegistrationForm from './components/GitaOlympiad2026/IntGitaOlymp2026RegistrationForm';
import InfoSection from './components/GitaOlympiad2026/InfoSection';

function App() {
  return (
    // This gives the whole page a beautiful dark blue gradient matching the poster
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-[#0a1947] to-blue-950 py-10 px-4">
      
      {/* Container that maxes out width and centers everything */}
      <div className="max-w-6xl mx-auto">
        
        {/* The Grid: 1 column on mobile, 2 columns on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          
          {/* Left Side: Information */}
          <InfoSection />

          {/* Right Side: The Form */}
          <div className="w-full relative">
            {/* A subtle glow effect behind the form to make it pop! */}
            <div className="absolute inset-0 bg-yellow-400 blur-3xl opacity-10 rounded-full -z-10"></div>
            
            <RegistrationForm />
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;