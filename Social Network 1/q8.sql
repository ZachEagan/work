/*Find the difference between the number of students in the school and the number of different first names.*/
select (select count(*) from HighSchooler)-(
    select count(*) from (
	    select distinct name from HighSchooler
    )
)