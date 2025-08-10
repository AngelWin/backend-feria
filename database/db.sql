CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (name, email) VALUES('Angel Abad','angel@gmail.com'), ('Mafer Marquez','mafer@gmail.com'), ('Jorgina Montes','jeorgina@gmail.com'), ('Junior Corcino','junior@gmail.com'), ('Leidy Vasquez','leidy@gmail.com'),('Alejandro Revoredo','alejo@gmail.com'), ('Alexandra Revoredo','alexa@gmail.com'), ('Lobito Vasquez','lobito@gmail.com');

SELECT * FROM users;
