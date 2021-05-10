/*What is the average number of friends per student? (Your result should be just one number.)*/
select AVG(t1.friendCount) from
(
    select COUNT(ID1) as friendCount from Friend
    group by ID1) t1
;