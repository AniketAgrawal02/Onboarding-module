const ROUTE_LIST_TO_SKIP_TIMEFRAME_VALIDATION = [
    "grades_info",
    "subjects",
    "test_report_score",
    "test_report_accuracy",
    "test_report_chapter_analysis",
    "test_report_difficulty_analysis",
    "test_report_skill_analysis",
    "test_report_rank",
    "test_list",
    "next_test_date",
    "previous_test_date",
];

const ROUTE_LIST_TO_SKIP_GRADE_VALIDATION = [
    "test_report_accuracy",
    "test_report_chapter_analysis",
    "test_report_difficulty_analysis",
    "test_report_skill_analysis",
    "test_report_rank",
];

module.exports = { ROUTE_LIST_TO_SKIP_TIMEFRAME_VALIDATION, ROUTE_LIST_TO_SKIP_GRADE_VALIDATION };
