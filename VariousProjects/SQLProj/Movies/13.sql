select p.name
from (
    select * from movies m
    join stars s on s.movie_id=m.id 
    join people p on s.person_id=p.id
    where p.name="Kevin Bacon" AND p.birth=1958
 ) km /*Gets all movies Kevin Bacon has been in*/
join stars s on s.movie_id=km.id 
join people p on s.person_id=p.id
where p.name!="Kevin Bacon"
;