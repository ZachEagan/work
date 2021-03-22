select * from Movie
where mID not in (
    select mID from Rating
)