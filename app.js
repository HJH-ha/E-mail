// alert("test");

const emailId = document.getElementById("email-id"); // 입력
const errorMsg = document.getElementById("error-msg");
const icon = document.getElementById("icon");
//이메일의 정규표현식(검색하여사용), 시작과 끝 표현 /^(첫문자), $/(끝문자)
const mailRegex =
  // /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;
  /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/; // 휴대폰번호 정규표현식

function checker() {
  icon.style.display = "inline-block"; // 아이콘을 인라인블록
  // alert("체커함수실행"); 한자한자 적을때마다 체커 함수 실행
  // 이메일 검사 자바스크립트 정규식
  // 제대로 입력한 경우
  if (emailId.value.match(mailRegex)) {
    // innerHTML index.html확인
    icon.innerHTML = '<i class ="fas fa-check-circle"></i>';
    icon.style.color = "#2ecc71";
    errorMsg.style.display = "none";
    emailId.style.border = "2px solid #2ecc71";
    // 아무것도 입력하지 않은 경우
  } else if (emailId.value == "") {
    icon.style.display = "none";
    errorMsg.style.display = "none";
    emailId.style.border = "2px solid #d1d3d4";
  }
  // 이메일 형식에 맞지 않는 경우
  else {
    icon.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
    icon.style.color = "#ff2851";
    errorMsg.style.display = "block"; //에러메세지 출력
    emailId.style.border = "2px solid #ff2851";
  }
}
