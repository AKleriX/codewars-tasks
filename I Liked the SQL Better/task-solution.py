import sqlite3

conn = sqlite3.connect('/tmp/movies.db')
cur = conn.cursor()
cur.execute('CREATE TABLE IF NOT EXISTS MOVIES(Name TEXT, Year INTEGER, Rating INTEGER)')
data = [
    ('Rise of the Planet of the Apes', 2011, 77),
    ('Dawn of the Planet of the Apes', 2014, 91),
    ('Alien', 1979, 97),
    ('Aliens', 1986, 98),
    ('Mad Max', 1979, 95),
    ('Mad Max 2: The Road Warrior', 1981, 100)
]
cur.executemany('INSERT INTO MOVIES VALUES (?, ?, ?)', data)
conn.commit()
conn.close()