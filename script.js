/* =========================
   팝업 열기와 닫기 공통 기능
   ========================= */
const backdrop = document.getElementById("modalBackdrop");
const modalTitle = document.getElementById("modalTitle");
const modalContent = document.getElementById("modalContent");

function openModal(title, content) {
  modalTitle.textContent = title;
  modalContent.innerHTML = content;
  backdrop.classList.add("open");
}
function closeModal() {
  backdrop.classList.remove("open");
}
document.getElementById("closeModal").addEventListener("click", closeModal);
backdrop.addEventListener("click", (event) => {
  if (event.target === backdrop) closeModal();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
});

/* 전체 일정 보기 버튼: 날짜별 수업 시간을 팝업으로 표시 */
document.getElementById("scheduleBtn").addEventListener("click", () => {
  openModal("전체 클래스 일정", `
    <div class="schedule-row"><strong>11월 08일 (일)</strong><span>11:00 화이트 로즈 부케<br>14:00 기념일 믹스 부케</span></div>
    <div class="schedule-row"><strong>11월 14일 (토)</strong><span>11:00 시즌 감성 부케<br>15:00 화이트 로즈 부케</span></div>
    <div class="schedule-row"><strong>11월 21일 (토)</strong><span>11:00 기념일 믹스 부케<br>14:00 시즌 감성 부케</span></div>
    <p class="form-note">※ 일정은 예시이며, 실제 운영 일정에 따라 변경될 수 있습니다.</p>
  `);
});

/* 전체 프로그램 보기 버튼: 프로그램 설명을 팝업으로 표시 */
document.getElementById("programBtn").addEventListener("click", () => {
  openModal("전체 프로그램 안내", `
    <ol class="program-list">
      <li><b>화이트 로즈 부케</b> — 장미 중심의 클래식 꽃다발 / 90분 / 55,000원</li>
      <li><b>기념일 믹스 부케</b> — 기념일에 어울리는 컬러 믹스 / 100분 / 65,000원</li>
      <li><b>시즌 감성 부케</b> — 제철 꽃으로 만드는 계절 꽃다발 / 90분 / 60,000원</li>
    </ol>
    <p class="form-note">모든 프로그램은 꽃과 포장재를 포함하며 완성한 꽃다발은 가져가실 수 있습니다.</p>
  `);
});

/* 사전등록 버튼: 별도의 신청 페이지 화면으로 연결 */
document.getElementById("registerBtn").addEventListener("click", () => {
  openModal("MANGO CLASS 사전등록", `
    <form class="booking-form" id="bookingForm">
      <label>신청 프로그램
        <select name="program" required>
          <option value="">프로그램을 선택하세요</option>
          <option>화이트 로즈 부케 (55,000원)</option>
          <option>기념일 믹스 부케 (65,000원)</option>
          <option>시즌 감성 부케 (60,000원)</option>
        </select>
      </label>
      <label>희망 날짜
        <input type="date" name="date" min="2026-11-03" required>
      </label>
      <label>희망 시간
        <select name="time" required>
          <option value="">시간을 선택하세요</option>
          <option>11:00</option><option>14:00</option><option>15:00</option>
        </select>
      </label>
      <label>신청자 이름<input name="name" type="text" placeholder="이름을 입력하세요" required></label>
      <label>연락처<input name="phone" type="tel" placeholder="010-0000-0000" required></label>
      <label>이메일<input name="email" type="email" placeholder="example@email.com" required></label>
      <label>참가 인원
        <select name="people"><option>1명</option><option>2명</option><option>3명</option><option>4명</option></select>
      </label>
      <button class="form-submit" type="submit">예약 신청 완료하기</button>
      <p class="form-note">시연용 예약 페이지입니다. 제출 정보는 서버로 전송되거나 저장되지 않으며, 완료 화면만 표시됩니다.</p>
    </form>
    <div class="success" id="successMessage">신청이 접수되었습니다!<br>선택하신 클래스와 일정은 담당자가 확인하는 예시 화면입니다.</div>
  `);
  document.getElementById("bookingForm").addEventListener("submit", (event) => {
    event.preventDefault();
    document.getElementById("bookingForm").style.display = "none";
    document.getElementById("successMessage").style.display = "block";
  });
});
