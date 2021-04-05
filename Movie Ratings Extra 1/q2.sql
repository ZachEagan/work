select distinct m.year from rating r
join movie m on r.mID=m.mID
where r.stars=4 or r.stars=5
order by m.year asc
;