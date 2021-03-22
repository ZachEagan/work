select p.name, m.title, r.rating from movies m
join ratings r on r.movie_id=m.id
join directors d on d.movie_id=m.id
join people p on d.person_id=p.id
where r.rating >= 9
;