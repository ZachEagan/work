/*Find names and grades of students who only have friends in the same grade. Return the result sorted by grade, then by name within each grade.*/
select h.name, h.grade from Highschooler h

where (
    select count(*) from (select hInternal.grade, count(*) from Friend fInternal
    join Highschooler hInternal on fInternal.ID2=hInternal.ID /*Include info about friend*/
    where fInternal.ID1=h.ID
    group by hInternal.grade)) = 1
order by h.grade, h.name
;