export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Get data from your request
    const data = req.body;

    // Perform your data operations here, for example, call Django backend
    const response = await fetch('http://127.0.0.1:8000/api/interactions/', {
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
  } else if (req.method === 'GET') {
    const [ingredientsResponse, interactionTypeResponse] = await Promise.all([
      fetch('http://127.0.0.1:8000/api/ingredients/'),
      fetch('http://127.0.0.1:8000/api/interaction-types/'),
    ]);

    const [ingredientsData, interactionTypeData] = await Promise.all([
      ingredientsResponse.json(),
      interactionTypeResponse.json(),
    ]);

    if (!ingredientsResponse.ok || !interactionTypeResponse.ok) {
      // Handle error response
      return res
        .status(ingredientsResponse.status || interactionTypeResponse.status)
        .json({
          error: 'Failed to fetch data',
        });
    }

    // Send a response
    return res.status(200).json({
      ingredients: ingredientsData,
      interactionTypes: interactionTypeData,
    });
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST', 'GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
