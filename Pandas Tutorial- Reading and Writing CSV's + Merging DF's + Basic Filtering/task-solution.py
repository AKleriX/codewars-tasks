import pandas as pd

def export_csv_with_name_and_grade(
    student_name: str, 
    grade: str
):
    students_df = pd.read_csv("files/students.csv", index_col = False)
    grades_df = pd.read_csv("files/grades.csv", index_col = False)
    grades_df = grades_df.rename(columns = {"ID": "Student_ID"})
    df_merged = students_df.merge(grades_df, on = "Student_ID", how = "left")
    df_queried = df_merged.query("Name == @student_name & Grade == @grade")
    df_result = df_queried[["Student_ID", "Class"]]
    df_result.to_csv("files/output.csv", index = False)
    return None