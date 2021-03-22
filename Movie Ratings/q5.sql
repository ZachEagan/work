/*reviewer name, movie title, stars, and ratingDate*/
select re.name, m.title, ra.stars, ra.ratingDate from Rating ra
join Reviewer re on ra.rID=re.rID
join Movie m on m.mID=ra.mID
order by re.name, m.title, ra.stars