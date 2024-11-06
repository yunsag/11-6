        document.getElementById("add-task-btn").addEventListener("click", function() {
            const taskInput = document.getElementById("task-input");
            const taskText = taskInput.value.trim();  // 입력값에서 공백 제거

            // 입력 값이 비어 있지 않으면 할 일 추가
            if (taskText !== "") {
                console.log("할 일 추가됨:", taskText); // 추가된 할 일 텍스트 로그로 확인
                addTaskToList(taskText);  // 할 일 목록에 추가
                taskInput.value = "";     // 입력 필드 비우기
            } else {
                alert("할 일을 입력해주세요!");  // 입력이 비었으면 경고 표시
            }
        });

        // 할 일 목록에 항목을 추가하는 함수
        function addTaskToList(taskText) {
            const taskList = document.getElementById("task-list");

            // 새로운 할 일 항목을 나타내는 li 요소 생성
            const taskItem = document.createElement("li");

            // 귀여운 이모티콘 추가
            const emoji = document.createElement("span");
            emoji.textContent = "😊";  // 이모티콘
            taskItem.appendChild(emoji);

            // 할 일 텍스트를 표시하는 span 요소 생성
            const taskContent = document.createElement("span");
            taskContent.textContent = taskText;
            taskItem.appendChild(taskContent);

            // 완료 버튼 생성
            const doneButton = document.createElement("button");
            doneButton.textContent = "완료 🎉";

            // 완료 버튼 클릭 이벤트 리스너 등록
            doneButton.addEventListener("click", function() {
                taskItem.classList.toggle("done");  // 완료 상태를 토글
                playSuccessSound();  // 완료 소리 재생
            });

            // 삭제 버튼 생성
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "삭제 ❌";
            deleteButton.classList.add("delete-btn");

            // 삭제 버튼 클릭 이벤트 리스너 등록
            deleteButton.addEventListener("click", function() {
                taskList.removeChild(taskItem);  // 할 일 항목 삭제
            });

            // 완료 버튼을 li 요소에 추가
            taskItem.appendChild(doneButton);

            // 삭제 버튼을 li 요소에 추가
            taskItem.appendChild(deleteButton);

            // 할 일 목록에 해당 항목을 추가
            taskList.appendChild(taskItem);
        }

        // 성공적인 완료 소리 재생
        function playSuccessSound() {
            const audio = new Audio('https://www.soundjay.com/button/beep-07.wav');
            audio.play();
        }
