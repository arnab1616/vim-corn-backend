CREATE TABLE subscribe_handle(
    id INTEGER NOT NULL,
    videoid INTEGER,
    video_userid VARCHAR(255),
    user_id INTEGER,
    subscribed_user_id VARCHAR(255),
    issubscribed BOOLEAN
);