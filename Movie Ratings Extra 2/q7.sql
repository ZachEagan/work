/*List movie titles and average ratings, from highest-rated to lowest-rated. If two or more movies have the same average rating, list them in alphabetical order.*/
select m.title as movie_title, AVG(ra.stars) as average_rating from Movie m
join Rating ra on ra.mID=m.mID
group by m.mID
order by average_rating desc
;