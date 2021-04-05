/*Find the titles of all movies not reviewed by Chris Jackson.*/
select distinct title from Movie m
where m.title not in (select distinct title from Movie m
left join Rating ra on ra.mID=m.mId
join Reviewer re on re.rID=ra.rID AND re.name = "Chris Jackson")
;