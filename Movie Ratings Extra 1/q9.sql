select (select AVG(less.avgStars) from(
    select m.title, m.year as year, AVG(r.stars) as avgStars from Movie m
    join Rating r on r.mID=m.mID
    group by m.title) less
where less.year < 1980) -
(select AVG(more.avgStars) from(
    select m.title, m.year as year, AVG(r.stars) as avgStars from Movie m
    join Rating r on r.mID=m.mID
    group by m.title) more
where more.year > 1980)