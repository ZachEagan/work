/*Remove all ratings where the movie's year is before 1970 or after 2000, and the rating is fewer than 4 stars.
where x in subquery doesn't work because no primary key in Rating table
*/
DELETE FROM Rating
join Movie on r.mID=m.mID AND r.stars < 4 AND (m.year < 1970 or m.year > 2000)
