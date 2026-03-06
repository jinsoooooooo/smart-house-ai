from fastapi import FastAPI
from contextlib import asynccontextmanager
from app.common.middleware import LoggingMiddleware
from app.core.config import settings
from app.core.exceptions import (
    BaseAPIException, 
    custom_exception_handler, 
    global_exception_handler
)
from fastapi.middleware.cors import CORSMiddleware
from app.core.log import setup_logging,logger
from app.core.database import engine, Base
# from app.api.api import api_router
from app.api.api import api_router


@asynccontextmanager        
async def lifespan(app: FastAPI):
    # 1. 로깅 초기화
    setup_logging()

    # 2. DB 테이블 자동 생성 (앱 시작 시점)
    # create_all()을 실행하기 전에 사용할 모델들이 반드시 임포트되어 있어야 합니다.
    from app.models.agents import Agent  

    try:
        # 현재 생성하신 engine은 동기식(Sync) 엔진이므로 async with가 아닌 직접 실행해야 합니다.
        Base.metadata.create_all(bind=engine)
        logger.info("데이터베이스 테이블 자동 생성 완료")
    except Exception as e:
        logger.error(f"Database connection failed: {e}")
        raise
    
    # --- 이 yield를 기준으로 위쪽 코드가 '서버 켜질 때', 아래쪽 코드가 '서버 꺼질 때' 실행됩니다 ---
    yield

    # 3. DB 엔진 종료 (앱 종료 시점)
    # 서버가 종료될 때 연결된 세션 풀을 안전하게 닫고 자원을 반환합니다.
    engine.dispose()
    logger.info("데이터베이스 커넥션 종료")

app = FastAPI(
    title="Sample FastAPI",
    description="Sample FastAPI",
    version="0.1.0",
    lifespan=lifespan
)

# 미들웨어 등록
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.add_middleware(LoggingMiddleware)


# 에러 핸들러 등록
# 1. 커스텀 에러(우리가 던진 에러) 담당자 배정
app.exception_handler(BaseAPIException)(custom_exception_handler)
# 2. 그 외 파이썬 최상위 에러(예상치 못한 버그) 담당자 배정
app.exception_handler(Exception)(global_exception_handler)

# 에러 핸들러 확인을 위한 router 추가 
from app.core.exceptions import NotFoundException # [추가] 임포트 잊지마세요!

@app.get("/api/test-custom-error", tags=["handler_test"])
def test_custom_error():
    # 1. 우리가 의도하고 에러를 던질 때 (raise)
    # 이제부터 실무에서 데이터가 없으면 무조건 raise NotFoundException() 한 줄만 치면 끝납니다!
    raise NotFoundException(message="사용자님의 장바구니 데이터를 찾지 못했어요.")
@app.get("/api/test-fatal-error", tags=["handler_test"])
def test_fatal_error():
    # 2. 주니어 개발자의 실수로 터진 버그 (0으로 나누기)
    return 10 / 0


# 기존 라우터 (하위 호환 유지)
# app.include_router(api_router, prefix="/api")

# v1 라우터 추가 (/api/v1/chat/{agent}/completion 형태로 노출)
app.include_router(api_router, prefix="/api/v1")


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        app, 
        host=settings.APP_HOST, 
        port=settings.APP_PORT,
        log_level=settings.APP_LOG_LEVEL
    )