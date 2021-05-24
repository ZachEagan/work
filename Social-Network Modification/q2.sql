/*If two students A and B are friends, and A likes B but not vice-versa, remove the Likes tuple.*/
delete from Likes
where ID1 in (
    select l.ID1 from Likes l
    join Friend f on f.ID1=l.ID1 AND f.ID2=l.ID2
    where l.ID1 not in (
        select lInt.ID2 from Likes lInt
        where lInt.ID1 = l.ID2
    )
)