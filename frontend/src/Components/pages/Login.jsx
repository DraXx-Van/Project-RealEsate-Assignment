import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, Lock, Mail } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple fixed credential validation as per requirement
    if (email === 'admin@gmail.com' && password === '1234') {
        localStorage.setItem('isAdminAuthenticated', 'true');
        navigate('/dashboard');
    } else {
        setError('Invalid admin credentials.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 selection:bg-[#3EB489]/20">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <div className="flex justify-center text-[#3EB489] mb-4">
                <Building2 size={48} />
            </div>
            <h2 className="mt-2 text-center text-3xl font-extrabold serif text-gray-900">
                Admin Portal
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
                Sign in to manage website content
            </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-2xl sm:px-10 border border-gray-100">
                <form className="space-y-6" onSubmit={handleLogin}>
                    
                    {error && (
                        <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm text-center border border-red-100 font-medium">
                            {error}
                        </div>
                    )}

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Email address
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Mail className="text-gray-400" size={18} />
                            </div>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="block w-full pl-10 px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#3EB489] focus:border-[#3EB489] sm:text-sm transition-colors"
                                placeholder="admin@gmail.com"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock className="text-gray-400" size={18} />
                            </div>
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="block w-full pl-10 px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#3EB489] focus:border-[#3EB489] sm:text-sm transition-colors"
                                placeholder="••••"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#3EB489] hover:bg-[#329873] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3EB489] transition-all"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
            <p className="mt-8 text-center text-[10px] text-gray-400 uppercase tracking-widest">
                &copy; 2026 Vighnaharta Realty | Designed by <span className="text-[#3EB489] font-bold text-[11px]">DraXx</span>
            </p>
        </div>
    </div>
  );
};

export default Login;
