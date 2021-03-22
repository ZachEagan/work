SELECT s.name FROM songs s
JOIN artists a ON s.artist_id=a.id
WHERE a.name LIKE "%post%" OR a.name LIKE "%Post%";