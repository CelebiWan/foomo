export default async function handler(req, res) {
    if (req.method === 'POST') {
      // Get data from your request
      const data = req.body;
  
      try {
        const response = await fetch('http://127.0.0.1:8000/api/recipe-metadata/', {
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
      const [recipesResponse, functionalityResponse, ingredientResponse, formulaResponse] = await Promise.all([
        fetch('http://127.0.0.1:8000/api/recipes/'),
        fetch('http://127.0.0.1:8000/api/functionalities/'),     
        fetch('http://127.0.0.1:8000/api/ingredients/'),
        fetch('http://127.0.0.1:8000/api/formulas/'),
      ]);
  
      const [recipesData, functionalityData, ingredientData, formulaData] = await Promise.all([
        recipesResponse.json(),
        functionalityResponse.json(),
        ingredientResponse.json(),
        formulaResponse.json(),
      ]);
  
      if (!recipesResponse.ok || !functionalityResponse.ok ||!ingredientResponse.ok || !formulaResponse.ok) {
        // Handle error response
        return res
          .status(recipesResponse.status || functionalityResponse.status || ingredientResponse.status || formulaResponse.status)
          .json({
            error: 'Failed to fetch data',
          });
      }
      
  
      // Send a response
      return res.status(200).json({
        recipes: recipesData,
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
  