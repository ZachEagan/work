select m.title from movies m
join stars s on s.movie_id=m.id 
join people p on s.person_id=p.id
where p.name="Johnny Depp" OR p.name="Helena Bonham Carter"
group by m.title
having COUNT(m.title) > 1
;