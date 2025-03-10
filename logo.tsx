import { motion } from "framer-motion";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      {/* Brandenburg Gate Logo */}
      <motion.div 
        className="relative w-10 h-10"
        whileHover={{ scale: 1.05 }}
      >
        {/* Main Building */}
        <div className="absolute inset-x-0 bottom-0 h-8 bg-primary rounded-t-sm">
          {/* Columns */}
          <div className="absolute inset-x-0 bottom-0 flex justify-between px-1">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-1 h-6 bg-white rounded-t-sm" />
            ))}
          </div>
          {/* Roof */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-2 bg-primary">
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-6 h-1 bg-primary" />
          </div>
        </div>
        {/* German Flag Colors - Enlarged */}
        <div className="absolute -bottom-1 -right-1 w-5 h-5">
          <div className="w-full h-2 bg-black" />
          <div className="w-full h-2 bg-[#DD0000]" />
          <div className="w-full h-1 bg-[#FFCE00]" />
        </div>
      </motion.div>
      <span className="text-xl font-bold text-primary">
        Innovative German Academy
      </span>
    </div>
  );
}