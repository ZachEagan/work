/*For each student A who likes a student B where the two are not friends, find if they have a friend C in common (who can introduce them!). For all such trios, return the name and grade of A, B, and C.*/
select A.name, A.grade, B.name, B.grade, C.name, C.grade from Highschooler A
join Likes Al on Al.ID1 = A.ID
join Highschooler B on B.ID = Al.ID2
join Friend fA on fA.ID2 = A.ID
join HighSchooler C on C.ID = fA.ID1
join Friend fB on fB.ID2 = B.ID
where Al.ID2 not in (
    select distinct fInternal.ID2 from Highschooler hInternal
    join Friend fInternal on fInternal.ID1 = A.ID
) AND fA.ID1 = fB.ID1