# smart-house-ai-backend

### repo 프로젝트 구조
monorepo 구조로 감사진 backend 서비스 입니다. 
api는 python을 사용한 fastapi로 구현되어 있습니다. 
전체 repo 프로젝트 구조는 다음과 같습니다. 

```ascii
smart-house-ai/
├── .github/
│   └── workflows/
│       ├── backend-ci.yml      # backend/ 폴더 변경 시 트리거
│       └── frontend-ci.yml     # frontend/ 폴더 변경 시 트리거
├── backend/                    # FastAPI 프로젝트 루트
│   ├── app/
│   ├── Dockerfile
│   └── requirements.txt        # 백엔드 독립 의존성
├── frontend/                   # React 프로젝트 루트
│   ├── src/
│   ├── public/
│   ├── Dockerfile
│   └── package.json            # 프론트엔드 독립 의존성
└── charts/                     # 개별 Helm Chart 폴더
    ├── backend/                # 백엔드 전용 Helm Chart
    │   ├── Chart.yaml
    │   ├── values.yaml
    │   └── templates/
    │       ├── deployment.yaml
    │       └── service.yaml
    └── frontend/               # 프론트엔드 전용 Helm Chart
        ├── Chart.yaml
        ├── values.yaml
        └── templates/
            ├── deployment.yaml
            └── service.yaml
```

---

### AI Chat API 호출 플로우

**엔드포인트**: `POST /api/v1/chat/{agent}/completion`

```
HTTP Request
     │
     ▼
[api/v1/endpoints/chat.py]   — 라우터: 요청 파싱 및 서비스 전달
     │
     ▼
[services/chat_service.py]   — 오케스트레이터: 에이전트 선택 + 공통 흐름 (DB 저장 등)
     │  get_agent_handler("legalchat")
     ▼
[agents/legal_chat/agent.py] — LLM 호출 + 프롬프트 구성 (에이전트별 핵심 로직)
     │
     ▼
ChatResponse (chat_id, reply, message_ids)
```

**주요 레이어 역할 요약**

| 레이어 | 파일 | 책임 |
|---|---|---|
| Router | `api/v1/endpoints/chat.py` | HTTP 요청/응답만 담당, 비즈니스 로직 없음 |
| Service | `services/chat_service.py` | 에이전트 조회, 메시지 DB 저장 등 공통 흐름 |
| Agent | `agents/{name}/agent.py` | LLM 호출, 프롬프트 구성, 도메인 특화 로직 |
| Schema | `schemas/chat.py` | Request/Response Pydantic 모델 |
| Registry | `agents/registry.py` | `{agent}` 문자열 → 에이전트 인스턴스 매핑 |

> 새로운 에이전트를 추가할 때는 `agents/` 하위에 폴더를 생성하고 `registry.py`에 한 줄 등록하면 됩니다.

### CI/CD 파이프라인
CI는 github actions를 사용하고 있으며 build된 이미지는 GHCR에 push 합니다.  
이는 `.github/workflows/backend-ci.yml`에 정의되어 있습니다.

CD는 ArgoCD를 사용하고 있으며 k8s 클러스터에 배포합니다.
ArgoCD는 앞서 CI에서 정의된 GHCR의 이미지를 가져와서 k8s 클러스터에 배포합니다.
배포에 사용되는 helmchart는 `charts/backend/`에 정의되어 있습니다.


### 서비스 실행 
```bash
# backend
cd backend
python3 app/main.py

# frontend
cd frontend
npm run dev
```