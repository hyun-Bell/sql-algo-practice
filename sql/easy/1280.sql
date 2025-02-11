WITH AllCom AS (
    SELECT
        s.student_id,
        s.student_name,
        sub.subject_name
    FROM
        Students s
    CROSS JOIN
        Subjects sub
)

SELECT
    a.student_id,
    a.student_name,
    a.subject_name,
    COALESCE(COUNT(e.subject_name), 0) AS attended_exams
FROM
    AllCom a
LEFT JOIN
    Examinations e
ON
    a.student_id = e.student_id AND a.subject_name = e.subject_name
GROUP BY
    a.student_id, a.subject_name, a.subject_name
ORDER BY
    a.student_id, a.subject_name