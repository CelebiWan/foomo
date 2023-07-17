// pages/api/formulatypes.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
      // Get data from your request
      const data = req.body;
  
      // Perform your data operations here, for example, call Django backend
      const response = await fetch('http://127.0.0.1:8000/api/formula-types/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      const responseData = await response.json();
  
      if (!response.ok) {
        // Handle error response
        return res.status(response.status).json(responseData);
      }
  
      // Send a response
      return res.status(200).json(responseData);
    } else {
      // Handle any other HTTP method
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  