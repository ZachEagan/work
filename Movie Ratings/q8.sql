select m.title, MAX(r.stars) - MIN(r.stars) as spread from Rating r
join Movie m on m.mID=r.mID
group by r.mID
order by spread desc, m.title