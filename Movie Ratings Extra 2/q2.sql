/*For any rating where the reviewer is the same as the director of the movie, return the reviewer name, movie title, and number of stars.*/

select distinct re.name, m.title, ra.stars from Rating ra
join Reviewer re on ra.rID=re.rID
join Movie m on m.mID=ra.mID
where m.director=re.name