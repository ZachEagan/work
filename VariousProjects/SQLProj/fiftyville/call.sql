select * from flights f
join airports a on a.id=f.destination_airport_id
where f.id=36
;