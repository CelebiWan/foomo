export default async function handler(req, res) {
    if (req.method === 'POST') {
      // Get data from your request
      const data = req.body;
  
      // Perform your data operations here, for example, call Django backend
      const response = await fetch('http://127.0.0.1:8000/api/formulas/', {
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
    } else if (req.method === 'GET') {
      
      const formulaTypeResponse = await fetch('http://127.0.0.1:8000/api/formula-types/');

      const formulaTypeData = await formulaTypeResponse.json();
  
      if (!ingredientResponse.ok || !formulaTypeResponse.ok) {
        // Handle error response
        return res.status( formulaTypeResponse.status).json({
          formulaTypes: formulaTypeData,
        });
      }
  
      // Send a response
      return res.status(200).json({
        formulaTypes: formulaTypeData,
      });
    } else {
      // Handle any other HTTP method
      res.setHeader('Allow', ['POST', 'GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  