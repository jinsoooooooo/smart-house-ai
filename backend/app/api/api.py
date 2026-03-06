from fastapi import APIRouter
from app.api.endpoints import chat

# v1 전체 라우터를 통합하는 파일.
# 새로운 엔드포인트 파일이 생길 때 여기에 include_router만 추가하면 됩니다.

api_router = APIRouter()

@api_router.get("/healthz")
def healthz():
    return {"status": "ok"}

@api_router.get("/hello")
def hello():
    return {"message": "hello from fastapi"}


api_router.include_router(
    chat.router,
    prefix="/chat",
    tags=["Chat"],
)

# ToDo: 에이전트 목록 조회 라우터 추가
# from app.api.v1.endpoints import agents
# api_v1_router.include_router(agents.router, prefix="/agents", tags=["Agents"])
