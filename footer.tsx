import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p>Email: innovativegermanacadmey@gmail.com</p>
            <p>Phone: +92-349-8660326</p>
            <p>Address: Karachi, Pakistan</p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/courses" className="hover:text-primary">Courses</a></li>
              <li><a href="/registration" className="hover:text-primary">Register</a></li>
            </ul>
          </div>

          <div className="flex items-center justify-center space-x-6">
            {/* German Flag */}
            <div className="w-12 h-8 flex flex-col border border-gray-600">
              <div className="flex-1 bg-black"></div>
              <div className="flex-1 bg-[#DD0000]"></div>
              <div className="flex-1 bg-[#FFCE00]"></div>
            </div>

            {/* Pakistani Flag */}
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg" 
              alt="Pakistan Flag" 
              className="w-12 h-8 object-cover border border-gray-600"
            />
          </div>
        </div>

        <div className="mt-8 text-center text-gray-400">
          <p>&copy; 2024 Innovative German Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}