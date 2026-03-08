# Helm 로컬 점검 가이드 (Docker/K9s 없이)

이 문서는 `smart-house-ai` 프로젝트에서 Helm 차트를 로컬에서 검증하는 방법을 정리한 가이드입니다.  
대상 환경: macOS (zsh), Docker 없음, K9s 없음.

## 1. Helm 설치

### 1-1. Homebrew가 이미 설치된 경우 (권장)
```bash
brew install helm
```

### 1-2. 설치 확인
```bash
helm version
```

정상이라면 `version.BuildInfo`가 출력됩니다.

## 2. 프로젝트 이동

```bash
cd /Users/jinsoo/Desktop/workspace/smart-house-ai
```

## 3. 로컬에서 가능한 Helm 점검

Docker/Kubernetes 클러스터 없이도 아래 검증은 가능합니다.

- 차트 문법/구조 검사: `helm lint`
- 렌더 결과(YAML) 검사: `helm template`

## 4. frontend 차트 점검

### 4-1. Lint 검사
```bash
helm lint helm/frontend
```

### 4-2. 렌더링 검사
```bash
helm template frontend helm/frontend
```

### 4-3. 렌더링 결과 파일로 저장 (선택)
```bash
helm template frontend helm/frontend > /tmp/frontend-rendered.yaml
```

## 5. backend 차트도 같이 점검

```bash
helm lint helm/backend
helm template backend helm/backend > /tmp/backend-rendered.yaml
```

## 6. values 오버라이드 테스트

배포 전 이미지 태그/URL을 바꿔 시뮬레이션할 수 있습니다.

```bash
helm template frontend helm/frontend \
  --set image.tag=test-123 \
  --set apiBaseUrl=https://example.com/api
```

## 7. 자주 발생하는 문제

### `zsh: command not found: helm`
- Helm 미설치 상태입니다.
- `brew install helm` 후 다시 실행하세요.

### `Error: found in Chart.yaml, but missing in charts/ directory`
- 의존 차트가 있는 경우 발생합니다.
- 현재 `helm/frontend`, `helm/backend`는 의존 차트가 없어 보통 발생하지 않습니다.

### 렌더 결과 확인은 되는데 실제 배포 검증이 안 됨
- 정상입니다. 실제 배포/Pod 상태 확인은 Kubernetes 클러스터와 `kubectl`이 필요합니다.

## 8. 권장 점검 순서 (실무용)

```bash
helm lint helm/frontend
helm template frontend helm/frontend > /tmp/frontend-rendered.yaml
helm lint helm/backend
helm template backend helm/backend > /tmp/backend-rendered.yaml
```

위 4개가 통과하면, 최소한 차트 문법/템플릿 관점의 사전 점검은 완료입니다.
