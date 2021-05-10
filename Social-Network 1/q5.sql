/*For every situation where student A likes student B, but we have no information about whom B likes (that is, B does not appear as an ID1 in the Likes table), return A and B's names and grades.*/
select hLikes.name, hLikes.grade, hLiked.name, hLiked.grade from Likes l
join Highschooler hLikes on hLikes.ID=l.ID1
join Highschooler hLiked on hLiked.ID=l.ID2
where l.ID2 not in (
    select ID1 from Likes
)