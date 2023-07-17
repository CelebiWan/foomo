export default async function handler(req, res) {
    if (req.method === 'POST') {
      // Get data from your request
      const data = req.body;
  
      // Perform your data operations here, for example, call Django backend
      const response = await fetch('http://127.0.0.1:8000/api/quantitative-results/', {
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
      const experimentsResponse = await fetch('http://127.0.0.1:8000/api/experiments/');
      const propertyTypesResponse = await fetch('http://127.0.0.1:8000/api/property-types/');
  
      const experimentData = await experimentsResponse.json();
      const propertyTypeData = await propertyTypesResponse.json();
  
      if (!experimentsResponse.ok || !propertyTypesResponse.ok) {
        // Handle error response
        return res.status(experimentsResponse.status || propertyTypesResponse.status).json({
          experiments: experimentData,
          propertyTypes: propertyTypeData,
        });
      }
  
      // Send a response
      return res.status(200).json({
        experiments: experimentData,
        propertyTypes: propertyTypeData,
      });
    } else {
      // Handle any other HTTP method
      res.setHeader('Allow', ['POST', 'GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  