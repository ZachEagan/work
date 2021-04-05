/*Some directors directed more than one movie. For all such directors, return the titles of all movies directed by them, along with the director name. Sort by director name, then movie title. (As an extra challenge, try writing the query both with and without COUNT.)*/
select title, director from Movie
where director in (select director from Movie
group by director
having count(mID) > 1)
order by director, title
;