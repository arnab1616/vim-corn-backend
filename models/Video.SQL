CREATE TABLE videos (
    id SERIAL NOT NULL,
    userid VARCHAR(50) NOT NULL,
    title VARCHAR(1000) NOT NULL,
    description VARCHAR(6000) NOT NULL,
    thumbnail VARCHAR(1000) NOT NULL,
    trailer_url VARCHAR(1000) NOT NULL,
    timestamps VARCHAR(200)
);