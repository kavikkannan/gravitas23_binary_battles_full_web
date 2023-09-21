// components/LoginDropdown.js
import { useState } from 'react';

const LoginDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogin = () => {
    // Implement your login logic using Firebase or your preferred authentication method
    // For this example, we'll just log the username and password to the console
    console.log('Username:', username);
    console.log('Password:', password);

    // Close the dropdown after handling login
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="bg-cyan-600 hover:bg-cyan-900 w-[5vw] text-sm px-4 py-2 rounded-full transition duration-300 ease-in-out text-white focus:outline-none focus:ring focus:ring-cyan-300"
      >
        Login
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-4 w-[20vw] rounded-md shadow-lg bg-slate-300 ring-1 ring-black ring-opacity-5">
          <div
            className="py-4 px-4"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="login-menu"
            flex-col
          >
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Team Email
              </label>
              <input
                type="text"
                placeholder="Enter your Team Email"
                className="w-full px-3 py-2 border rounded-md text-black opacity-70 focus:outline-none focus:ring focus:ring-cyan-300"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your Password"
                className="w-full px-3 py-2 border rounded-md text-black opacity-70 focus:outline-none focus:ring focus:ring-cyan-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              onClick={handleLogin}
              className="bg-cyan-600 hover:bg-cyan-900 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-cyan-300"
            >
              Log In
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginDropdown;
