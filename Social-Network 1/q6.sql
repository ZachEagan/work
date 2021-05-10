/*Find names and grades of students who only have friends in the same grade. Return the result sorted by grade, then by name within each grade.*/
select hf1.name, hf1.grade, hf2.name, hf2.grade from Friend f
join Highschooler hf1 on hf1.ID=f.ID1
join Highschooler hf2 on hf2.ID=f.ID2
where 1 = (
    select count(*) from Friend fInternal
    join Highschooler h on fInternal.ID2=h.ID /*Include info about friend*/
    where fInternal.ID1=f.ID1
    group by h.grade
)