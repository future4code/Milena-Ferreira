CREATE TABLE List_Users (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    nickname VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL
);

SELECT * FROM List_Users;

CREATE TABLE List_Tasks (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    limitDate DATE,
    creatorUserId VARCHAR(255),
    FOREIGN KEY (creatorUserId) REFERENCES List_Users(id)
);

SELECT * FROM List_Tasks;