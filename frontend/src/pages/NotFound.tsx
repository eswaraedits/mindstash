export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-5xl font-bold text-purple-600">404 - Page Not Found</h1>
      <p className="mt-4 text-lg text-gray-600">Sorry, the page you're looking for doesn't exist.</p>
      <a href="/dashboard" className="mt-6 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-500 transition duration-300">
        Go back to Home
      </a>
    </div>
  );
};
