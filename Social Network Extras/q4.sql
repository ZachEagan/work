/*Find the number of students who are either friends with Cassandra or are friends of friends of Cassandra. Do not count Cassandra, even though technically she is a friend of a friend.

Cassandra = 1709*/
select Count(*) from 
(
    select * from Friend f1
    where f1.ID1 = 1709
    UNION
    select fOfF.ID1, fOfF.ID2 from Friend f2
    join Friend fOfF on f2.ID2 = fOfF.ID1 AND fOfF.ID2 != 1709
    where f2.ID1 = 1709)