select r.name, m.title from 

(select distinct * from Rating R1
where 2 = (select count(*) from Rating R2 where R1.rID=R2.rID AND R1.mID=R2.mID)) two

join Rating sj on two.rID=sj.rID AND two.mID=sj.mID /*Self join table to compare rows*/

join Movie m on two.mID=m.mID
join Reviewer r on two.rID=r.rID

where two.stars>sj.stars AND two.ratingDate>sj.ratingDate