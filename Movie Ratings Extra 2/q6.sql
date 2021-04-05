/*For each rating that is the lowest (fewest stars) currently in the database, return the reviewer name, movie title, and number of stars*/
select re.name, m.title, ra.stars from Rating ra
join Reviewer re on re.rID=ra.rID
join Movie m on m.mID=ra.mID 
where stars = (
    select min (stars)
    from Rating
)
;