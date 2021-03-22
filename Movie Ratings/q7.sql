select m.title, MAX(r.stars) from Rating r
join Movie m on m.mID=r.mID
group by r.mID
order by m.title