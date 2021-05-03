/*Find those students for whom all of their friends are in different grades from themselves. Return the students' names and grades.*/
select h1.name, h1.grade from Highschooler h1
where h1.grade not in (
    select h2.grade from friend f
    join Highschooler h2 on h2.ID=f.ID2
    where f.ID1=h1.ID
)
;