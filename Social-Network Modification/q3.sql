/*For all cases where A is friends with B, and B is friends with C, add a new friendship for the pair A and C. Do not add duplicate friendships, friendships that already exist, or friendships with oneself. (This one is a bit challenging; congratulations if you get it right.)*/
Insert into Friend
select /*duplicate friendships*/ distinct fA.ID1, fB.ID2 from Friend fA
join Friend fB on fA.ID2=fB.ID1
where /*friendships with oneself*/ fA.ID1 != fB.ID2 and
/*friendships that already exist*/ (fA.ID1, fB.ID2) not in (select * from Friend)