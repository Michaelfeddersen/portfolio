// export default function Hero() {
//     return (
//       <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-100 via-white to-purple-100">
//         {/* Animierter Farbverlauf im Hintergrund */}
//         <div className="absolute w-[120%] h-[120%] bg-gradient-to-r from-blue-300 to-purple-300 opacity-30 blur-3xl animate-pulse" />
  
//         {/* Glassmorphism Card */}
//         {/* <div className="relative z-10 max-w-xl px-8 py-10 bg-white/40 backdrop-blur-md border border-white/30 rounded-3xl shadow-xl text-center transition duration-300 hover:shadow-2xl">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 drop-shadow-sm">
//             Willkommen auf meinem Portfolio
//           </h1>
//           <p className="mt-4 text-lg text-gray-700">
//             Ich bin Webentwickler mit Fokus auf Angular, HTML, CSS und JavaScript.
//           </p>
//           <div className="mt-6">
//             <a
//               href="#projekte"
//               className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
//             >
//               Projekte ansehen
//             </a>
//           </div>
//         </div> */}
//       </section>
//     );
//   }
  
export default function Hero() {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Light Mode Hintergrund */}
        <div
          className="absolute w-[120%] h-[120%] bg-gradient-to-r 
          from-blue-200 via-pink-200 to-purple-200 
          opacity-90 blur-3xl animate-[pulse_5s_ease-in-out_infinite] 
          transition-all duration-700 dark:hidden"
        />
  
        {/* Dark Mode mit Sternenhimmel + Nebel + Sternschnuppen */}
        <div className="hidden dark:block absolute w-full h-full bg-black">
          {/* Dunkler Hintergrund mit leichter Bewegung */}
          <div
            className="absolute w-[120%] h-[120%] 
            bg-gradient-to-br from-black via-gray-900 to-black 
            opacity-60 blur-xl animate-pulse"
          />
  
          {/* Nebel Overlay */}
          <div className="absolute inset-0 bg-[url('/fog.png')] bg-cover opacity-10 blur-sm pointer-events-none" />
  
          {/* Sterne */}
          <div className="absolute inset-0">
            {Array.from({ length: 100 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-[2px] h-[2px] bg-white rounded-full opacity-50 animate-twinkle"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>
  
          {/* Sternschnuppen (optional) */}
          <div className="absolute inset-0">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-14 h-px bg-white opacity-100 animate-shooting-star"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 10}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
  