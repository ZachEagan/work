/*Find the name and grade of all students who are liked by more than one other student.*/
select h.name, h.grade from HighSchooler h
join Likes l on h.ID=l.ID2 
group by h.ID
having count(*) >= 2