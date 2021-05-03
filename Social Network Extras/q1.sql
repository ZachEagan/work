/*For every situation where student A likes student B, but student B likes a different student C, return the names and grades of A, B, and C.*/
select hA.name, hA.grade, hB.name, hB.grade, hC.name, hC.grade from Likes lAB
join Highschooler hA on hA.ID = lAB.ID1
join Highschooler hB on hB.ID = lAB.ID2
join (
    select * from Likes l
    join Highschooler c on c.ID = l.ID2
) hC on hC.ID1 = hB.ID and hC.ID2 != hA.ID
;