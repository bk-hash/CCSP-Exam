# Manual Test Checklist — Final Exam Question Bank Switching

## Issue Being Verified
Selecting different Final Exam question banks (Final Exam 1, 2, 3) was showing the
same set of questions in the UI, even though the source files contain distinct questions.

## Root Causes Fixed
1. `<Quiz>` in `PracticeExamsSection.js` was rendered without a `key` prop, so React
   reused the same component instance when switching exams. Added `key={currentExam.id}`
   so switching exams forces a full remount.
2. `Quiz.js` initialization effect had an early-return guard that skipped
   re-initialization when `shuffledQuestions.length > 0` and `selectedDomain === "All"`.
   Added a dedicated `useEffect` on `[questions]` to reset all quiz state whenever the
   source question array changes.

## Steps to Reproduce & Verify

### Setup
1. Run the app locally: `npm start`
2. Log in with a **premium** account (Final Exams are behind a paywall for demo users).
3. Navigate to **Practice Exams** (or "Exam Library") in the app.

### Test 1 — Final Exam 1 shows its own questions
1. Click **Final Exam 1** card (or select it from the dropdown).
2. Note the **first question** displayed in the quiz.
3. **Expected:** Question should start with text from `final_exam1.js` (e.g., "Which of
   the following roles is responsible for creating cloud components…").

### Test 2 — Switching to Final Exam 2 shows different questions
1. While on Final Exam 1, click **Final Exam 2**.
2. **Expected:**
   - The quiz resets to question 1 of 0 progress.
   - The first question is **different** from Final Exam 1's first question.
   - First question should relate to Final Exam 2 content (e.g., "What does the
     "SOC" acronym refer to with audit reports?").

### Test 3 — Switching to Final Exam 3 shows different questions
1. Click **Final Exam 3**.
2. **Expected:**
   - The quiz resets fully (question index, selected answer, score all reset).
   - The first question is different from both Final Exam 1 and Final Exam 2.

### Test 4 — Mid-exam state resets when switching
1. Start Final Exam 1 and answer several questions.
2. Switch to Final Exam 2.
3. **Expected:**
   - Question counter resets to "Question 1 of N".
   - Score resets to 0.
   - No previously selected answer is shown.
   - No "Correct/Incorrect" result banner is shown.

### Test 5 — Switching back restores from session (if applicable)
1. Start Final Exam 1 and answer some questions.
2. Switch to Final Exam 2.
3. Switch back to Final Exam 1.
4. **Expected:** Session for Final Exam 1 may be restored (depends on session
   implementation), but at minimum the correct questions for Final Exam 1 are shown
   and not Final Exam 2 questions.

### Test 6 — Classic Practice Exams still work
1. Switch to **Practice Exam 1** and note the first question.
2. Switch to **Practice Exam 2** and note the first question.
3. **Expected:** Different questions shown for each classic exam, consistent with prior
   behavior.

## Pass Criteria
- [ ] Final Exam 1 questions are distinct from Final Exam 2 questions.
- [ ] Final Exam 2 questions are distinct from Final Exam 3 questions.
- [ ] Switching exams resets quiz progress (question index, selected answer, score).
- [ ] No stale exam questions bleed through when switching between exams.
- [ ] Classic Practice Exam 1 and 2 are unaffected.
