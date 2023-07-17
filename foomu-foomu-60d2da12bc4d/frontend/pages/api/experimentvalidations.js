export default async function handler(req, res) {
    if (req.method === 'POST') {
      // Get data from your request
      const data = req.body;
  
      try {
        const response = await fetch('http://127.0.0.1:8000/api/experiment-validations/', {
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
      const [experimentsResponse, validationsResponse, equipmentsResponse, qualitativeresultsResponse, quantitativeresultsResponse] = await Promise.all([
        fetch('http://127.0.0.1:8000/api/experiments/'),
        fetch('http://127.0.0.1:8000/api/validations/'),  
        fetch('http://127.0.0.1:8000/api/equipments/'),
        fetch('http://127.0.0.1:8000/api/qualitative-results/'),
        fetch('http://127.0.0.1:8000/api/quantitative-results/'),
      ]);
  
      const [experimentData, validationData, equipmentData, qualitativeresultData,quantitativeresultData ] = await Promise.all([
        experimentsResponse.json(),
        validationsResponse.json(),
        equipmentsResponse.json(),
        qualitativeresultsResponse.json(),
        quantitativeresultsResponse.json(),
        
      ]);
  
      if (!experimentsResponse.ok || !validationsResponse.ok || !equipmentsResponse.ok || !qualitativeresultsResponse || !quantitativeresultsResponse) {
        // Handle error response
        return res
          .status(experimentsResponse.status || validationsResponse.status || equipmentsResponse.status || qualitativeresultsResponse || quantitativeresultsResponse)
          .json({
            error: 'Failed to fetch data',
          });
      }
      
  
      // Send a response
      return res.status(200).json({
        experiments: experimentData,
        validations: validationData,
        equipments: equipmentData,
        qualitativeresults: qualitativeresultData,
        quantitativeresults: quantitativeresultData,
       
      });
    } else {
      // Handle any other HTTP method
      res.setHeader('Allow', ['POST', 'GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  