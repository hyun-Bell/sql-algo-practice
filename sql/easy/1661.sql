WITH ProcessTime AS (
    SELECT
        machine_id,
        process_id,
        MAX(COALESCE(CASE WHEN activity_type = 'end' THEN timestamp END, 0)) -
        MAX(COALESCE(CASE WHEN activity_type = 'start' THEN timestamp END, 0)) AS processing_time
    FROM Activity
    GROUP BY machine_id, process_id
)
SELECT
    machine_id,
    ROUND(AVG(processing_time), 3) AS processing_time
FROM
    ProcessTime
GROUP BY
    machine_id
