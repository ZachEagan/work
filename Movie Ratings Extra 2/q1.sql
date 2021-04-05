select distinct re.name from Rating r
join Reviewer re on re.rID=r.rID
where r.mID=101;