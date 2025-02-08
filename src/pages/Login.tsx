import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  interface ApiResponse {
    redirect: string;
  }
  
  // A pak upravit handleSubmit funkci:
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post<ApiResponse>('http://localhost:3001/api/credentials', {
        username: email,
        password: password,
        campaignId: '65c4d8f2e987b459a731d8f2'
      });
      
      window.location.href = response.data.redirect;
    } catch (err) {
      setError('Neplatné přihlašovací údaje');
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-full max-w-md p-6">
      <div className="mx-auto h-12 w-auto flex justify-center items-center">
        <svg 
          width="64" 
          height="64" 
          viewBox="-1 0 65 47" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2.72308 23.659C1.83882 24.5727 1.14334 25.6515 0.676341 26.8339C0.209343 28.0162 -0.0200146 29.2789 0.0013687 30.5498C0.022752 31.8207 0.294458 33.075 0.800966 34.241C1.30747 35.407 2.03886 36.4618 2.95336 37.3453C4.80001 39.1291 7.28011 40.1068 9.84809 40.0633C12.4161 40.0199 14.8616 38.9588 16.6467 37.1134C16.7711 36.9728 16.8913 36.8285 17.0073 36.6809L17.0376 36.7121L29.4469 23.887C29.6196 28.1634 31.4301 32.2153 34.504 35.2047C36.0827 36.7304 37.9456 37.9313 39.9865 38.739C42.0273 39.5467 44.2062 39.9453 46.3985 39.9119C48.5909 39.8786 50.7538 39.4141 52.7638 38.5449C54.7739 37.6757 56.5916 36.4188 58.1132 34.846C61.1857 31.6698 62.8658 27.4 62.7839 22.976C62.702 18.552 60.8648 14.3361 57.6764 11.2557C54.4884 8.17566 50.2106 6.48313 45.7838 6.55039C41.3571 6.61766 37.1439 8.4392 34.071 11.6144C33.7389 11.9767 33.4231 12.3535 33.1244 12.7438L18.8876 27.4577C18.4088 25.9322 17.5593 24.549 16.415 23.4317C14.5689 21.6474 12.089 20.669 9.52101 20.7118C6.95301 20.7546 4.50719 21.8151 2.72157 23.66L2.72308 23.659ZM6.33879 27.1529C6.7638 26.7139 7.27118 26.3628 7.83195 26.1197C8.39273 25.8767 8.99591 25.7464 9.60707 25.7363C10.2182 25.7262 10.8254 25.8365 11.3939 26.0609C11.9624 26.2853 12.4811 26.6195 12.9204 27.0442C13.7081 27.8093 14.1997 28.8281 14.3082 29.9204C14.4166 31.0127 14.1351 32.1082 13.5132 33.0131L13.3675 33.1638L13.3826 33.1794C13.2743 33.3335 13.1567 33.4809 13.0306 33.6208C12.6058 34.06 12.0986 34.4114 11.538 34.6547C10.9773 34.8981 10.3742 35.0287 9.76308 35.0392C9.15193 35.0496 8.54471 34.9396 7.97609 34.7155C7.40746 34.4914 6.88856 34.1576 6.44903 33.7331C6.00932 33.3085 5.65765 32.8014 5.4141 32.2409C5.17055 31.6804 5.03992 31.0775 5.02964 30.4665C5.01937 29.8555 5.12966 29.2485 5.35422 28.6801C5.57879 28.1117 5.91321 27.5932 6.33839 27.154L6.33879 27.1529ZM37.7338 15.3233L37.9057 15.1455C40.0559 12.9703 42.9696 11.7223 46.0147 11.6721C49.0599 11.622 51.9911 12.7738 54.1726 14.8778C55.2603 15.9284 56.1283 17.1849 56.7272 18.5754C57.3261 19.9658 57.644 21.4631 57.6628 22.9818C57.6817 24.5004 57.401 26.0106 56.837 27.4262C56.2729 28.8417 55.4365 30.1349 54.3754 31.2319C53.3141 32.3289 52.0489 33.2081 50.652 33.8194C49.2552 34.4306 47.7541 34.7619 46.2345 34.7943C44.7148 34.8267 43.2065 34.5596 41.7955 34.0082C40.3845 33.4568 39.0985 32.6319 38.0111 31.5807C35.8333 29.4723 34.5827 26.5829 34.5308 23.5394C34.4789 20.4958 35.6298 17.5439 37.7338 15.3233Z" fill="#4154fa"/>
        </svg>
      </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-[#1c2125]">
          Přihlaste se
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Zadejte své přihlašovací údaje
        </p>
  
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#1c2125]">
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
                className="appearance-none block w-full px-3 py-2 border border-gray-300 text-[#1c2125] focus:outline-none focus:ring-[#4154fa] focus:border-[#4154fa] sm:text-sm"
              />
            </div>
          </div>
  
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-[#1c2125]">
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
                className="appearance-none block w-full px-3 py-2 border border-gray-300 text-[#1c2125] focus:outline-none focus:ring-[#4154fa] focus:border-[#4154fa] sm:text-sm"
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
              className="w-full flex justify-center py-2 px-4 border border-[#4154fa] text-sm font-bold text-white bg-[#4154fa] hover:bg-white hover:text-[#4154fa] transition-colors duration-200"
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
            <button
              type="button"
              className="text-sm text-center text-[#4154fa] hover:opacity-90"
              onClick={() => {/* přidat požadovanou akci */}}
            >
              Zapomněli jste heslo?
            </button>
            <button
              type="button"
              className="text-sm text-center text-[#4154fa] hover:opacity-90"
              onClick={() => {/* přidat požadovanou akci */}}
            >
              Vytvořit nový účet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;