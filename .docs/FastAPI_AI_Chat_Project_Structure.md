# FastAPI AI Chat Project Structure Proposal

## Goal Description
`/api/chat/{agent}/completion` 엔드포인트를 효율적으로 처리하고, 향후 다양한 AI 에이전트(LegalChat, RealEstateChat 등)를 쉽게 추가하고 유지보수할 수 있는 **레이어드(Layered) + 도메인 기반(Domain-specific)** 구조를 제안합니다.

## Proposed Structure

```text
backend/app/
├── main.py                  # FastAPI 앱 초기화 및 미들웨어 설정
├── api/                     # API 라우팅 레이어
│   └── v1/
│       ├── api.py           # v1 라우터 통합 (모든 엔드포인트 등록)
│       └── endpoints/
│           ├── chat.py      # [MODIFY] 채팅 관련 라우트 (/chat/{agent}/completion)
│           └── agents.py    # 에이전트 정보 관련 라우트
├── services/               # [NEW] 비즈니스 로직 및 오케스트레이션 레이어
│   └── chat_service.py      # LLM 호출, 이력 저장 등 공통 채팅 흐름 제어
├── agents/                  # AI 에이전트 로직 (에이전트별 도메인 분리)
│   ├── base.py              # 모든 에이전트가 상속받을 추상 클래스
│   ├── registry.py          # 에이전트 동적 로딩을 위한 레지스트리
│   └── legal_chat/          # [LEGAL DOMAIN]
│       ├── agent.py         # LegalChat 전용 로직
│       ├── prompts.py       # 법률 특화 프롬프트 관리
│       └── tools.py         # 법률 검색(RAG) 등 전용 툴
├── schemas/                 # Pydantic 모델 (Request/Response DTO)
│   ├── chat.py              # 채팅 관련 스키마
│   └── agents.py            # 에이전트 관련 스키마
├── core/                    # 환경 설정, 로그, 보안 등 핵심 컴포넌트
└── db/                      # 데이터베이스 모델 및 세션 관리
```

## Component Roles & Rationale

### 1. `api/v1/endpoints/chat.py`
- **역할**: HTTP 요청을 받고 응답을 반환하는 입구입니다.
- **이유**: 엔드포인트를 별도 파일로 분리함으로써 [main.py](file:///Users/jinsoo/Desktop/workspace/smart-house-ai/backend/app/main.py)나 [routes.py](file:///Users/jinsoo/Desktop/workspace/smart-house-ai/backend/app/api/routes.py)가 비대해지는 것을 방지합니다. 향후 버전 관리(v2)가 용이합니다.

### 2. `services/chat_service.py`
- **역할**: API 레이어와 에이전트 레이어 사이의 중간 다리입니다.
- **이유**: 라우터는 요청 전달만 담당하고, 실제 "채팅의 흐름"(DB에 메시지 저장 -> 에이전트 실행 -> 결과 반환)은 서비스 레이어에서 처리합니다. 이렇게 하면 코드가 깔끔해지고 테스트가 쉬워집니다.

### 3. [agents/](file:///Users/jinsoo/Desktop/workspace/smart-house-ai/backend/app/api/routes.py#22-29) 트리
- **역할**: 각 에이전트의 "지능"을 담당합니다.
- **이유**: `BaseAgent`를 통해 인터페이스를 통일합니다. `legal_chat`처럼 폴더로 분리하면 해당 에이전트가 사용하는 프롬프트, 툴 등을 한 곳에 모을 수 있어 응집도가 높아집니다.

### 4. [agents/registry.py](file:///Users/jinsoo/Desktop/workspace/smart-house-ai/backend/app/agents/registry.py)
- **역할**: 엔드포인트의 `{agent}` 파라미터 값에 따라 적절한 에이전트 클래스를 찾아줍니다.
- **이유**: 새로운 에이전트를 추가할 때 라우터 코드를 수정할 필요 없이 레지스트리에 등록만 하면 되므로 확장성이 뛰어납니다.

### 5. `schemas/` vs Endpoint 내 구현 (선택 사항)
- **제안하신 방식 (Locality)**: `api/v1/endpoints/chat.py` 안에 Pydantic 모델을 직접 정의.
    - **장점**: 코드가 한눈에 보이고 파일 개수가 줄어들어 관리가 직관적입니다.
    - **단점 (주의!)**: 만약 `services/`나 `agents/` 레이어에서 해당 Pydantic 모델을 타입 힌팅(Type Hinting)으로 사용해야 할 경우, **순환 참조(Circular Import)** 문제가 발생할 수 있습니다. (Router -> Service -> Router 구조가 됨)
- **권장 전략**: 
    - 만약 해당 모델이 오직 Router에서만 쓰이고 다른 레이어에서 호출할 일이 없다면 에이전트 파일이나 엔드포인트 파일 내에 두셔도 무방합니다.
    - 하지만 여러 파일에서 공유하거나, 프로젝트 규모가 커질 것이 예상된다면 전용 `schemas/` 폴더로 빼는 것이 가장 안전한 정석입니다.

## Comparative Alternatives

### Alternative A: Flat Structure (소규모 프로젝트용)
- 모든 라우트를 [routes.py](file:///Users/jinsoo/Desktop/workspace/smart-house-ai/backend/app/api/routes.py)에 넣고 모든 에이전트 클래스를 `agents.py` 하나에 관리.
- **장점**: 파일 이동이 적고 단순함.
- **단점**: 에이전트가 3개 이상 늘어나면 파일이 수천 줄이 되어 유지보수가 불가능해짐.

### Alternative B: 완전 도메인 중심 (Domain-Driven Design)
- `legal/`, `real_estate/` 폴더 내부에 각각 `api`, `service`, `model`을 모두 배치.
- **장점**: 특정 주제에 대한 독립성이 극대화됨 (마이크로서비스에 유리).
- **단점**: FastAPI의 `APIRouter` 구조에서는 라우트 설정이 파편화되어 전체 API 구조 파악이 어려울 수 있음.

> [!TIP]
> 현재 제안드린 구조는 **FastAPI 공식 문서의 추천 방식**과 **엔터프라이즈급 AI 서비스**의 설계를 절충한 형태입니다. 에이전트가 늘어날수록 [agents/](file:///Users/jinsoo/Desktop/workspace/smart-house-ai/backend/app/api/routes.py#22-29) 폴더 하위만 확장하면 되므로 매우 효율적입니다.

---

## Architecture Decision: ChatService 레이어가 필요한가?

### 핵심 질문
`agent.run()` 하나가 모든 로직을 처리할 수 있다면, `ChatService`라는 중간 레이어가 굳이 필요한가?

### Without ChatService (단순 구조)
```
Router → get_agent_handler("legalchat") → agent.run(payload) → return
```
- `agent.run()` 내부에서 히스토리 조회, LLM 호출, DB 저장, 응답 반환을 모두 처리.
- **장점**: 파일이 적고, 흐름이 단선적으로 명확함.
- **단점**: 에이전트가 늘어날수록 DB 저장 같은 공통 로직을 에이전트별로 중복 구현해야 함.

### With ChatService (레이어드 구조)
```
Router → ChatService → get_agent_handler("legalchat") → agent.run() → return
```
- `agent.run()`은 **LLM 호출 + 프롬프트 구성만** 담당.
- DB 저장 등 공통 전처리/후처리는 `ChatService`에서 중앙 처리.
- **장점**: DRY 원칙 준수. 에이전트 추가 시 공통 로직 수정 불필요.
- **단점**: 레이어가 하나 더 생겨 파일이 늘어남.

### 결론: 언제 선택하나?

| 상황 | 권장 |
|---|---|
| 에이전트 1~2개, 초기 개발 단계 | ChatService 없이 `agent.run()`에서 전부 처리 |
| 에이전트 3개 이상, DB 저장 공유 필요 | ChatService 분리 |

> **현재 프로젝트 단계**에서는 `ChatService` 없이 각 에이전트의 `run()`이 모든 흐름을 담당하는 방식이 더 실용적입니다.
> 나중에 에이전트가 늘어나고 코드 중복이 눈에 띄기 시작할 때 Service 레이어를 추출하는 것이 오히려 더 올바른 타이밍입니다.
