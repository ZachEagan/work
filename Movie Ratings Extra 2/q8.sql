/*Find the names of all reviewers who have contributed three or more ratings. (As an extra challenge, try writing the query without HAVING or without COUNT.)*/
select re.name from Rating ra
join Reviewer re on re.rID=ra.rID
group by re.rID
having count(ra.stars) > 2