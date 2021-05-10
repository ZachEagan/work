/*Find the names of all students who are friends with someone named Gabriel.*/
select h2.name from Highschooler h1
join Friend f on h1.ID = f.ID1
join Highschooler h2 on h2.ID=f.ID2
where h1.name="Gabriel"