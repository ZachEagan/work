/*For every pair of students who both like each other, return the name and grade of both students. Include each pair only once, with the two names in alphabetical order.*/
select hLikes.name, hLikes.grade, hLiked.name, hLiked.grade from Likes l
join Highschooler hLikes on l.ID1=hLikes.ID
join Highschooler hLiked on l.ID2=hLiked.ID
where l.ID1 in (
    select lInternal.ID2 from Likes lInternal
    where lInternal.ID1 = l.ID2
) AND l.ID1 > l.ID2
;