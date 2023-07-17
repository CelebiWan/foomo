// api/recipe.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        // Get data from your request
        const { alias, name } = req.body;
  
        // Create a new Recipe object
        const newRecipe = await Recipe.create({
          alias,
          name,
        });
  
        // Send a response
        return res.status(201).json(newRecipe);
      } catch (error) {
        console.error('Error creating recipe:', error);
        return res.status(500).json({ error: 'Failed to create recipe' });
      }
    } else {
      // Handle any other HTTP method
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }