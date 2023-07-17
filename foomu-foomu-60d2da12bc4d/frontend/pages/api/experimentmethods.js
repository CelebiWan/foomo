export default async function handler(req, res) {
    if (req.method === 'POST') {
      // Get data from your request
      const data = req.body;
  
      try {
        const response = await fetch('http://127.0.0.1:8000/api/experiment-methods/', {
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
      const [experimentsResponse, processesResponse, equipmentsResponse] = await Promise.all([
        fetch('http://127.0.0.1:8000/api/experiments/'),
        fetch('http://127.0.0.1:8000/api/processes/'),     
        fetch('http://127.0.0.1:8000/api/equipments/'),
      ]);
  
      const [experimentData, processData, equipmentData] = await Promise.all([
        experimentsResponse.json(),
        processesResponse.json(),
        equipmentsResponse.json(),
        
      ]);
  
      if (!experimentsResponse.ok || !processesResponse.ok ||!equipmentsResponse.ok) {
        // Handle error response
        return res
          .status(experimentsResponse.status || processesResponse.status || equipmentsResponse.status)
          .json({
            error: 'Failed to fetch data',
          });
      }
      
  
      // Send a response
      return res.status(200).json({
        experiments: experimentData,
        processes: processData,
        equipments: equipmentData,
       
      });
    } else {
      // Handle any other HTTP method
      res.setHeader('Allow', ['POST', 'GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  