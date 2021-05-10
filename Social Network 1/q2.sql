/*For every student who likes someone 2 or more grades younger than themselves, return that student's name and grade, and the name and grade of the student they like.*/
select hLikes.name, hLikes.grade, hLiked.name, hLiked.grade from Likes l
join Highschooler hLikes on hLikes.ID=l.ID1
join Highschooler hLiked on hLiked.ID=l.ID2
where ABS(hLikes.grade -hLiked.grade) > 1
;