/*Find the movie(s) with the highest average rating. Return the movie title(s) and average rating. (Hint: This query is more difficult to write in SQLite than other systems; you might think of it as finding the highest average rating and then choosing the movie(s) with that average rating.)*/
select movie_title, MAX(average_rating)
from (select m.title as movie_title, AVG(ra.stars) as average_rating from Movie m
join Rating ra on ra.mID=m.mID
group by m.mID)
;