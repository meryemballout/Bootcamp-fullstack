const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

// 1. GET ALL POSTS
app.get('/api/posts', async (req, res) => {
  try {
    const response = await axios.get(BASE_URL);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching posts', error: error.message });
  }
});

// 2. GET SINGLE POST
app.get('/api/posts/:id', async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/${req.params.id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching post', error: error.message });
  }
});

// 3. CREATE A POST
app.post('/api/posts', async (req, res) => {
  try {
    const response = await axios.post(BASE_URL, req.body);
    res.status(201).json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error creating post', error: error.message });
  }
});

// 4. UPDATE A POST
app.put('/api/posts/:id', async (req, res) => {
  try {
    const response = await axios.put(`${BASE_URL}/${req.params.id}`, req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error updating post', error: error.message });
  }
});

// 5. DELETE A POST
app.delete('/api/posts/:id', async (req, res) => {
  try {
    await axios.delete(`${BASE_URL}/${req.params.id}`);
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting post', error: error.message });
  }
});
    