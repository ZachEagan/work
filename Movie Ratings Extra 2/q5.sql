/*For all pairs of reviewers such that both reviewers gave a rating to the same movie, return the names of both reviewers. Eliminate duplicates, don't pair reviewers with themselves, and include each pair only once. For each pair, return the names in the pair in alphabetical order.
https://dba.stackexchange.com/questions/119139/help-with-removing-duplicate-reversed-pairs-in-relational-algebra
*/
SELECT DISTINCT
   CASE WHEN name1 > name2 THEN name2 ELSE name1 END as name1,
   CASE WHEN name1 < name2 THEN name2 ELSE name1 END as name2
   from
(select distinct r1.name as name1, r2.name as name2 from (
    select * from Rating ra
    join Reviewer re on  re.rID=ra.rID
) r1
join (
    select * from Rating ra
    join Reviewer re on  re.rID=ra.rID
) r2 on r1.mID=r2.mID AND r1.name != r2.name
) tab;