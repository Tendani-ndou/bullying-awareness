// Fetch all reports endpoint
app.get('/api/reports', (req, res) => {
    const sql = 'SELECT * FROM reports ORDER BY created_at DESC';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching reports.' });
        }
        res.json(results);
    });
});