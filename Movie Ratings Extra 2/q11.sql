/*Find the movie(s) with the lowest average rating. Return the movie title(s) and average rating. (Hint: This query may be more difficult to write in SQLite than other systems; you might think of it as finding the lowest average rating and then choosing the movie(s) with that average rating.)*/
select movie_title, average_rating
from (select m.title as movie_title, AVG(ra.stars) as average_rating from Movie m
join Rating ra on ra.mID=m.mID
group by m.mID) avg_tab
where average_rating = ( select MIN(ar) from
    (select AVG(ra.stars) as ar from Movie m
join Rating ra on ra.mID=m.mID
group by m.mID))
;