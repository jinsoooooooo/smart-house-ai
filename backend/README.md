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