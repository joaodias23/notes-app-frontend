import { useNavigate } from "react-router-dom";
import { LogIn, UserPlus, FileText } from "lucide-react";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-[#1f1f1f] text-white flex flex-col justify-center items-center px-4">
      
      {/* card */}
      <div className="bg-[#1f1f1f] border border-[#065a60] rounded-lg shadow-md p-10 flex flex-col items-center 
                      max-w-md w-full hover:shadow-[0_0_15px_#06B6D4] transition-all duration-500">
        
        <h1 className="text-4xl font-bold text-[#00bfa5] drop-shadow-[0_0_10px_#06B6D4] mb-4 text-center">
          My Notes App
        </h1>

        {/* icon */}
        <FileText className="w-20 h-20 text-[#00ffe0] drop-shadow-[0_0_15px_#00ffe0] mb-6 animate-pulse" />

        <p className="text-gray-300 text-center mb-8">
          Keep your thoughts organized and accessible anywhere.
        </p>

        <div className="flex gap-4 w-full">
          <button
            onClick={() => navigate("/login")}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-[#006466] text-[#00ffe0] 
                       font-medium hover:shadow-[0_0_10px_#00ffe0] transition"
          >
            <LogIn className="w-5 h-5"/>
            Login
          </button>

          <button
            onClick={() => navigate("/register")}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-[#3e1f47] text-[#ff00ff] 
                       font-medium hover:shadow-[0_0_10px_#ff00ff] transition"
          >
            <UserPlus className="w-5 h-5"/>
            Register
          </button>
        </div>
      </div>

      <p className="text-gray-500 mt-6 text-sm">
        &copy; 2025 My Notes App. All rights reserved.
      </p>
    </div>
  );
}
