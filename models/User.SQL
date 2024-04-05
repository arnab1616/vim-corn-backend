CREATE TABLE VIM_USERS (
    id SERIAL NOT NULL,
    name VARCHAR(50) NOT NULL UNIQUE,
    username VARCHAR(50)
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(1000) NOT NULL,
    img VARCHAR(500),
    subscriber INTEGER,
    subscribed_users VARCHAR(6000),
    timestamps VARCHAR(200),
);