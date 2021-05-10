/*Find the name and grade of the student(s) with the greatest number of friends.*/
select h.name, h.grade as friendCount from Friend f
join Highschooler h on f.ID1=h.ID
group by ID1
having COUNT(ID1) = (
    select MAX(t1.friendCount) from 
    (
        select h.ID as hID, COUNT(ID1) as friendCount from Friend f
        join Highschooler h on f.ID1=h.ID
        group by ID1) t1) 