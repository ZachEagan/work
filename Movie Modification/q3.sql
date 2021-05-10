/*Remove all ratings where the movie's year is before 1970 or after 2000, and the rating is fewer than 4 stars.
where x in subquery doesn't work because no primary key in Rating table
*/
DELETE FROM Rating
where ROWID in (
    select r.ROWID from Rating r
    join Movie m on m.mID=r.mID
    where r.stars < 4 AND (m.year < 1970 or m.year > 2000)
) 
