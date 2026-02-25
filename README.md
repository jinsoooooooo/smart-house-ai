# smart-house-ai

## 프로젝트 개요
본 프로젝트는 부동산 관련 법률 자문, 등기부등본 분석, 계약서 특약 자동 완성, 뉴스 큐레이션 기능을 제공하는 AI 기반 부동산 서비스입니다. 모노레포(Monorepo) 구조로 구성되어 있으며, 백엔드는 FastAPI, 프론트엔드는 React로 구현되었습니다.

## 프로젝트 화면 구성 설명
본 프로젝트의 화면 구성에 대한 설명은 [PROJECT.md](PROJECT.md) 파일에 정의되어 있습니다.

## 프로젝트 구조
```
smart-house-ai/
├── .github/
│   └── workflows/
│       ├── backend-ci.yml      # 백엔드 CI/CD 파이프라인
│       └── frontend-ci.yml     # 프론트엔드 CI/CD 파이프라인
├── backend/                    # FastAPI 백엔드 서비스
│   ├── app/
│   │   ├── api/
│   │   ├── core/
│   │   ├── main.py
│   │   └── ...
│   ├── Dockerfile              # 백엔드 도커 이미지 빌드
│   └── requirements.txt        # 백엔드 의존성
├── frontend/                   # React 프론트엔드 서비스
│   ├── src/
│   ├── public/
│   ├── Dockerfile              # 프론트엔드 도커 이미지 빌드
│   └── package.json            # 프론트엔드 의존성
└── charts/                     # Helm 차트
    ├── backend/
    └── frontend/
```

## 기술 스택
- **백엔드**: Python 3.12, FastAPI
- **프론트엔드**: React, TypeScript
- **CI/CD**: GitHub Actions
- **배포**: ArgoCD, Kubernetes

## 실행 방법
### 로컬 개발
```bash
# 백엔드 실행
cd backend
source .venv/bin/activate  # 가상환경 활성화
pip install -r requirements.txt
python app/main.py

# 프론트엔드 실행
cd frontend
npm install
npm run dev
```

### 도커 빌드 및 실행
```bash
# 백엔드 도커 이미지 빌드
docker build -t backend ./backend

# 프론트엔드 도커 이미지 빌드
docker build -t frontend ./frontend

# 도커 컴포즈로 실행
docker-compose up
```

## CI/CD 파이프라인
### GitHub Actions
- `backend-ci.yml`: 백엔드 코드 변경 시 자동 빌드 및 GHCR에 이미지 푸시
- `frontend-ci.yml`: 프론트엔드 코드 변경 시 자동 빌드 및 GHCR에 이미지 푸시

### ArgoCD
- `charts/backend/`: 백엔드 배포용 Helm 차트
- `charts/frontend/`: 프론트엔드 배포용 Helm 차트
- ArgoCD는 GHCR에 푸시된 이미지를 자동으로 감지하여 Kubernetes 클러스터에 배포합니다.

## API 엔드포인트
- `GET /healthz`: 헬스 체크
- `GET /api/hello`: 샘플 API
- `GET /api/test-custom-error`: 커스텀 에러 테스트
- `GET /api/test-fatal-error`: 치명적 에러 테스트

## 환경 변수
pass

## 기여 가이드
pass

## 라이선스
pass

## 연락처
- leo: admin@leodev901@onmicrosoft.com
