# Write your MySQL query statement below

SELECT
    w.id
FROM
    Weather w
JOIN
    Weather w2
ON
    DATE_ADD(w.recordDate, INTERVAL -1 DAY) = w2.recordDate
WHERE
    w.temperature > w2.temperature