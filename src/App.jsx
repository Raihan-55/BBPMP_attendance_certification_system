import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import AttendanceForm from './components/AttendanceForm';

function App() {
  const [view, setView] = useState('admin'); // 'admin' | 'public'
  const [config, setConfig] = useState(null);

  const handleSaveConfig = (newConfig) => {
    setConfig(newConfig);
    // Automatically switch to public view to simulate "Publishing"
    setTimeout(() => setView('public'), 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800 font-sans">
      <Header />
      
      <main className="flex-grow p-4 md:p-8">
        
        {/* Navigation Mockup for Demo Purpose */}
        {!config && view === 'admin' && (
           <div className="max-w-4xl mx-auto mb-4 bg-blue-50 border border-blue-200 p-3 rounded text-sm text-blue-800 flex justify-between items-center">
             <span> Selamat Datang Admin! Silakan buat kegiatan baru.</span>
           </div>
        )}
         {config && (
           <div className="fixed bottom-4 right-4 z-50 flex gap-2"> 
              <button 
                onClick={() => setView('admin')}
                className={`px-4 py-2 rounded-full shadow-lg text-sm font-bold ${view === 'admin' ? 'bg-blue-800 text-white' : 'bg-white text-blue-800'}`}
              >
                Admin View
              </button>
              <button 
                onClick={() => setView('public')}
                className={`px-4 py-2 rounded-full shadow-lg text-sm font-bold ${view === 'public' ? 'bg-blue-800 text-white' : 'bg-white text-blue-800'}`}
              >
                Public View
              </button>
           </div>
        )}

        {view === 'admin' ? (
          <AdminPanel onSaveConfig={handleSaveConfig} />
        ) : (
          config ? (
            <AttendanceForm config={config} onReset={() => setView('admin')} />
          ) : (
            <div className="text-center py-20">
               <h2 className="text-xl text-gray-400">Belum ada kegiatan yang dipublikasikan.</h2>
               <button onClick={() => setView('admin')} className="mt-4 text-blue-600 hover:underline">Kembali ke Admin</button>
            </div>
          )
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
