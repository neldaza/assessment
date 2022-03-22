select "code", "year", "govt_debt" / "gdp_per_capita" as average_government_debts
from "countries"
where "gdp_per_capita" > 40000.00 and "year" > 2014
order by average_government_debts desc
limit 3
