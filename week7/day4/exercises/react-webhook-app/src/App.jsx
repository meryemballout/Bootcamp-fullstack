import { useState } from 'react';

function App() {
  // State to store the response data
  const [responseData, setResponseData] = useState(null);

  // State to track loading state during the request
  const [loading, setLoading] = useState(false);

  // State to handle any errors
  const [error, setError] = useState(null);

  // Function to send a POST request with hardcoded data
  const handleSend = async () => {
    const url = "https://webhook.site/#!/edit/581f7967-5a8d-44fc-b8fd-9f2fdec3fccd";
    
    setLoading(true);    // Start loading
    setError(null);      // Reset any previous error
    
    try {
      const response = await fetch(url, {
        method: 'POST', // HTTP POST method
        headers: {
          'Content-Type': 'application/json', // Specify JSON content
        },
        body: JSON.stringify({
          key1: 'myusername',
          email: 'mymail@gmail.com',
          name: 'Isaac',
          lastname: 'Doe',
          age: 27
        }),
      });

      // Check if the response was successful (status code 200–299)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Try to parse the response as JSON, or fallback to plain text
      let data;
      const contentType = response.headers.get('content-type');
      
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        data = await response.text();
      }

      console.log("Received response:", data); // Log the response in the browser console
      setResponseData(data);                   // Save response to state

    } catch (error) {
      console.error("Error during request:", error); // Log error in console
      setError(error.message);                       // Save error message to state
    } finally {
      setLoading(false);  // Always stop loading state
    }
  };

  return (
    <div className="p-5 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Webhook Test</h1>
      
      {/* Button to trigger the request */}
      <button 
        onClick={handleSend}
        disabled={loading}
        className="bg-blue-500 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-2 px-4 rounded mb-4"
      >
        {loading ? 'Sending...' : 'Send Data'}
      </button>
      
      {/* Display error if any */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <strong>Error: </strong>{error}
        </div>
      )}
      
      {/* Display the response if available */}
      {responseData && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          <h3 className="font-bold">Received Response:</h3>
          <pre className="mt-2 text-sm overflow-x-auto">
            {typeof responseData === 'string' ? responseData : JSON.stringify(responseData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

export default App;
