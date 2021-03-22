select re.name from Rating ra
join Reviewer re on re.rID=ra.rID
where ra.ratingDate is NULL