# LiveStudy 📚

**혼자서는 힘든 공부, 함께 집중하며 루틴을 만들어가는 실시간 온라인 스터디 플랫폼**

---

## 🔥 주요 기능

- 🧑‍💻 **실시간 스터디방**
    - 페이지당 최대 20명 영상 공유, SFU 기반 WebRTC 영상 공유
    - 집중 타이머 및 상태 표시
- 💬 **채팅 & 뱃지 시스템**
    - 전체 채팅
    - 특정 조건에 따른 칭호/뱃지 획득
- 👤 **회원 기능**
    - 회원가입, 자동 입장
    - 신고 가능
    - 마이페이지 정보 수정
    - 누적 기록 열람 가능
    - 칭호 변경 가능
- 📊 **통계 시각화**
    - 논의에 따른 필요 데이터들 시각화

---

## 🧱 BE 기술 스택

| Layer       | Tech Stack                                     |
|-------------|-------------------------------------------------|
| **Backend** | Java 21, Spring Boot 3.5.3, Spring Security, JPA, JWT |
| **Infra**   | Docker, Redis, MySQL, LiveKit, Caddy           |
| **Others**  | Swagger(OpenAPI), JUnit5, RestDocs, Gradle Multi-module |
| **Optionals** | Elasticsearch (검색), MongoDB (채팅), InfluxDB (통계) |

### Optionals 는 어디까지나 고려사항입니다. 확정된 것인 아니오니, 참고 부탁 드리겠습니다.

---

## 🗄 데이터베이스 구성

| DB 종류     | 주요 사용처 |
|------------|-------------|
| **MySQL**  | 사용자, 방 정보, 신고/제재 기록, 뱃지 등 정형 데이터 저장 |
| **Redis**  | 실시간 접속 상태, WebRTC 방 정보, 토큰 캐싱 등 |
| *(선택)* MongoDB | 채팅 기록 저장 |
| *(선택)* Elasticsearch | 검색 기능 |
| *(선택)* InfluxDB | 시간 기반 집중 기록 |

### 선택 부분은 어디까지나 고려사항입니다. 확정된 것이 아니오니, 참고 부탁 드립니다.

---

### LiveKit Information
- LiveKit Port : 7880, 7881
- Redis Port : 6379
- Caddy Port : 50000~60000
- domain : to be determined


## 🐳 프로젝트 실행 방법 (Docker)

```bash
# LiveKit 서버 실행
cd deploy
docker-compose up --build


