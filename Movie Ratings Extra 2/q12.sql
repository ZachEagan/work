/*For each director, return the director's name together with the title(s) of the movie(s) they directed that received the highest rating among all of their movies, and the value of that rating. Ignore movies whose director is NULL.*/
select m.director, m.title, MAX(r.stars) from Movie m
join Rating r on m.mID=r.mID
where m.director is not NULL
group by m.director
;