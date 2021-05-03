select r.rID from rating r
    join Movie m on m.mID=r.mID
    where r.stars < 4 AND (m.year < 1970 or m.year > 2000)
;