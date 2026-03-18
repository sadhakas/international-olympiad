export default function InfoSection() {
  return (
    <div className="text-white space-y-6 md:pr-8">
      {/* Header Area */}
      <div className="text-center md:text-left border-b border-blue-700 pb-6">
        <h3 className="text-yellow-400 font-bold tracking-widest uppercase text-sm mb-2">Sādhakas Presents</h3>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-md">
          International <br className="hidden md:block"/>
          <span className="text-yellow-400">Gita Olympiad</span>
        </h1>
        <div className="inline-block bg-yellow-400 text-blue-900 font-bold px-4 py-1 rounded-full text-sm">
          OPEN FOR ALL • NO PRE-REQUISITES
        </div>
      </div>

      {/* Welcome Text */}
      <p className="text-blue-100 text-sm md:text-base leading-relaxed">
        Welcome to the International Gita Olympiad (IGO) 2026 Registration! The IGO is a value-based initiative designed to help students, youth, and families apply the timeless wisdom of the Bhagavad Gita to daily life.
      </p>

      {/* Details Grid */}
      <div className="bg-blue-800/50 rounded-xl p-6 border border-blue-700 shadow-inner">
        <h4 className="text-yellow-400 font-bold text-lg mb-2">📚 Syllabus</h4>
        <p className="text-blue-50 mb-4">Bhagavad-Gītā As It Is (Chapters 13–18)</p>

        <h4 className="text-yellow-400 font-bold text-lg mb-2">🗓️ Important Dates</h4>
        <ul className="text-blue-50 space-y-1 mb-4 text-sm">
          <li><strong className="text-white">Last Date to Register:</strong> 27th March 2026</li>
          <li><strong className="text-white">Exam Date:</strong> 19th April 2026, 1 PM</li>
          <li><strong className="text-white">Result Announcement:</strong> 3rd May 2026</li>
          <li><strong className="text-white">Prize Distribution:</strong> 24th May 2026</li>
        </ul>

        {/* UPDATED STUDY MATERIALS SECTION */}
        <h4 className="text-yellow-400 font-bold text-lg mb-2">📖 Study Materials</h4>
        <div className="text-blue-50 text-sm mb-2">
          <p className="mb-1">Live sessions starting <strong>28th March</strong> to help you ace the olympiad!</p>
          <p className="italic text-yellow-200 text-xs mt-2 block"></p>
        </div>
        
        {/* WhatsApp Button */}
        <a 
          href="https://chat.whatsapp.com/YOUR_PLACEHOLDER_LINK" 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-2.5 px-6 rounded-full shadow-md transition duration-200 mt-2"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
          Join WhatsApp Community
        </a>
      </div>

      {/* Note */}
      <div className="text-xs text-blue-200 bg-blue-900/40 p-3 rounded border-l-4 border-yellow-400">
        <strong>Note:</strong> Past winners may participate but are not eligible for 2026 prizes. Finalists may be called for an interview round.
      </div>
    </div>
  );
}