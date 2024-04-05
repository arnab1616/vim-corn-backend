CREATE TABLE comments (
    id SERIAL NOT NULL,
    userid VARCHAR(50) NOT NULL,
    video_id VARCHAR(50) NOT NULL,
    title VARCHAR(1000) NOT NULL,
    comment VARCHAR(6000) NOT NULL,
    timestamps VARCHAR(200),
);

CREATE TABLE movies (
    id SERIAL NOT NULL,
    userid VARCHAR(50) NOT NULL,
    title VARCHAR(1000) NOT NULL,
    descriptions VARCHAR(6000) NOT NULL,
    Genre VARCHAR(100),
    Director VARCHAR(255),
    Actors VARCHAR(100),
    Country VARCHAR(255),
    Post_Updated DEFAULT Date.now(),
    Duration INTEGER,
    Quality VARCHAR(200),
    Release YEAR,
    timestamps VARCHAR(200),
)