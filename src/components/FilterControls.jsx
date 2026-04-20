export default function FilterControls({
  filterType, setFilterType,
  showLowAttendance, toggleLowAttendance,
  sortBy, toggleSort,
}) {
  return (
    <div
      className="
        relative p-5 mb-6 rounded-2xl
       bg-gradient-to-r from-[#0f172a] to-[#020617] border border-orange-500/40 shadow-2xl
        shadow-lg
      "
    >
      {/* Glow */}
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-300 pointer-events-none 
        bg-gradient-to-r from-transparent via-white/5 to-transparent blur-xl rounded-2xl"></div>

      <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        
        {/* 🔘 Segmented Tabs */}
        <div className="flex bg-white/5 border border-white/10 rounded-xl p-1 gap-1">
          {[['All', '📚'], ['Present', '✅'], ['Absent', '⚠️']].map(([tab, emoji]) => (
            <button
              key={tab}
              onClick={() => setFilterType(tab)}
              className={`
                px-5 py-2 rounded-lg text-sm font-semibold
                transition-all duration-300 flex items-center gap-1
                ${
                  filterType === tab
                    ? 'bg-gradient-to-r from-orange-500 to-orange-400 text-white shadow-lg scale-105'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }
              `}
            >
              <span className="text-base">{emoji}</span>
              {tab}
            </button>
          ))}
        </div>

        {/* ⚙️ Toggle Buttons */}
        <div className="flex items-center gap-3 flex-wrap">
          
          {/* Low Attendance */}
          <button
            onClick={toggleLowAttendance}
            className={`
              px-4 py-2 rounded-xl text-sm font-semibold border
              transition-all duration-300
              ${
                showLowAttendance
                  ? 'bg-rose-500/20 border-rose-500 text-rose-400 shadow-[0_0_10px_rgba(244,63,94,0.4)]'
                  : 'border-white/10 text-gray-400 hover:border-gray-500 hover:text-white hover:bg-white/10'
              }
            `}
          >
            {showLowAttendance ? '✓ Low Attendance' : '⚠ Low Attendance'}
          </button>

          {/* Sort */}
          <button
            onClick={toggleSort}
            className={`
              px-4 py-2 rounded-xl text-sm font-semibold border
              transition-all duration-300
              ${
                sortBy === 'attendance'
                  ? 'bg-orange-500/20 border-orange-500 text-orange-400 shadow-[0_0_10px_rgba(249,115,22,0.4)]'
                  : 'border-white/10 text-gray-400 hover:border-gray-500 hover:text-white hover:bg-white/10'
              }
            `}
          >
            {sortBy === 'attendance' ? '✓ Sorted by %' : '↕ Sort by %'}
          </button>

        </div>
      </div>
    </div>
  )
}