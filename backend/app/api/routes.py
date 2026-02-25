from fastapi import FastAPI, APIRouter

api_router = APIRouter()

@api_router.get("/healthz")
def healthz():
    return {"ok": True}

@api_router.get("/hello")
def hello():
    return {"message": "hello from fastapi"}

@api_router.get("/agents", tags=["common"])
def agents():
    """
    현재 서비스에서 활성화된 agents 목록을 반환 합니다. 
    """

    return {"message": "agents"}

@api_router.post("/chat/{agents}/completions",tags=["agents"])
def chat_completions(agents: str):
    """
    선택된 agents와 채팅을 수행합니다.
    """
    logger.info(f"chat completions: {agents}")
    if {agents} == "legalChatbot":
        return {"message": "legal"}
    else return {"message": "legal"}