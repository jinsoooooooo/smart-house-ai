# Stage 1: Build dependencies and the React application
FROM node:20-alpine AS builder

WORKDIR /app

# 패키지 매니저 파일 복사 및 의존성 설치 (도커 레이어 캐싱 활용)
COPY package*.json ./
RUN npm install

# 애플리케이션 소스 코드 전체 복사 및 빌드
COPY . .
# Vite에서는 기본적으로 /app/dist 폴더에 빌드 결과물이 생성됩니다.
RUN npm run build


# Stage 2: Serve the built application using Nginx
FROM nginx:alpine

# 앞선 builder 단계에서 빌드된 정적 파일들을 Nginx의 기본 호스팅 디렉토리로 복사
COPY --from=builder /app/dist /usr/share/nginx/html

# React Router (SPA) 지원을 위한 Nginx 설정
# 새로고침 시이나 라우팅 시 404 에러가 나지 않고 index.html을 바라보도록 설정합니다.
RUN echo "server { \
    listen 80; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html index.htm; \
        try_files \$uri \$uri/ /index.html; \
    } \
}" > /etc/nginx/conf.d/default.conf

# 컨테이너의 80번 포트를 외부에 노출
EXPOSE 80

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]
