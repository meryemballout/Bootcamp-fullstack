-- Database initialization script for blog-api
-- Run this script to create the database and posts table

-- Create database (uncomment if needed)
-- CREATE DATABASE blog_db;

-- Connect to the database
-- \c blog_db;

-- Create posts table
CREATE TABLE IF NOT EXISTS posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create a trigger to automatically update the updated_at column
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_posts_updated_at 
    BEFORE UPDATE ON posts 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Insert sample data
INSERT INTO posts (title, content) VALUES 
    ('First Blog Post', 'This is the content of my first blog post. Welcome to our blog platform!'),
    ('Learning Node.js', 'Today I learned about building RESTful APIs with Express and PostgreSQL.'),
    ('Database Design', 'Proper database design is crucial for scalable applications.');

-- Display the created table structure
\d posts;

-- Show sample data
SELECT * FROM posts;