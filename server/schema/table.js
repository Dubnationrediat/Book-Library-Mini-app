export let registration = `CREATE TABLE IF NOT EXISTS registrations(
    user_id INT AUTO_INCREMENT,
    user_first_name text NOT NULL, 
    user_last_name text NOT NULL,
    user_email  VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL,
    PRIMARY KEY(user_id)
)`

export let bookTable = `CREATE TABLE IF NOT EXISTS bookTable (
    book_id INT AUTO_INCREMENT,
    user_id INT NOT NULL,
    book_link TEXT NOT NULL, 
    book_description TEXT NOT NULL,
    book_author TEXT NOT NULL,
    book_title TEXT NOT NULL, 
    time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (book_id)
)
`