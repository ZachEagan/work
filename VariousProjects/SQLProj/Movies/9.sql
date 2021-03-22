select p.name from movies m
join stars s on s.movie_id=m.id 
join people p on s.person_id=p.id
where m.year=2004
order by p.birth desc
;