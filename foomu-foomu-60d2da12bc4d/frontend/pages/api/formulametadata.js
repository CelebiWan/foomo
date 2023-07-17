export default async function handler(req, res) {
    if (req.method === 'POST') {
      // Get data from your request
      const data = req.body;
  
      try {
        const response = await fetch('http://127.0.0.1:8000/api/formulametadata/', {
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
        return res.status(201).json(responseData);
      } catch (error) {
        // Handle error during the request
        return res.status(500).json({ error: 'An unexpected error occurred' });
      }
    } else if (req.method === 'GET') {
      const [ingredientResponse, formulaResponse] = await Promise.all([
        fetch('http://127.0.0.1:8000/api/formulas/'),
        fetch('http://127.0.0.1:8000/api/functionalities/'),     
        fetch('http://127.0.0.1:8000/api/ingredients/'),
        fetch('http://127.0.0.1:8000/api/formulas/'),
      ]);
  
      const [formulaData, functionalityData, ingredientData, formulaData] = await Promise.all([
        formulaResponse.json(),
        functionalityResponse.json(),
        ingredientResponse.json(),
        formulaResponse.json(),
      ]);
  
      if (!formulaResponse.ok || !functionalityResponse.ok ||!ingredientResponse.ok || !formulaResponse.ok) {
        // Handle error response
        return res
          .status(formulaResponse.ok || functionalityResponse.ok ||ingredientResponse.status || formulaResponse.status)
          .json({
            error: 'Failed to fetch data',
          });
      }
  
      // Send a response
      return res.status(200).json({
        formula: formulaData,
        functionalities: functionalityData,
        ingredientComponents: ingredientData,
        formulaComponents: formulaData,
      });
    } else {
      // Handle any other HTTP method
      res.setHeader('Allow', ['POST', 'GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  