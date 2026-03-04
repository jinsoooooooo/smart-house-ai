from fastapi import FastAPI, APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List
from core.log import logger
from core.database import get_db

from schemas import agents as agent_schema
from crud import agent as crud_agent

api_router = APIRouter()

@api_router.get("/healthz")
def healthz():
    return {"status": "ok"}

@api_router.get("/hello")
def hello():
    return {"message": "hello from fastapi"}

@api_router.get("/agents", response_model=List[agent_schema.AgentResponse], tags=["agents"])
def agents(db: Session = Depends(get_db)):
    """
    현재 서비스에서 활성화된 agents 목록을 반환 합니다. 
    """
    agents_data = crud_agent.get_agents(db=db)
    return agents_data



@api_router.post("/chat/{agents}/completions",tags=["agents"])
def chat_completions(agents: str, payload: dict):
    """
    선택된 agents와 채팅을 수행합니다.
    """
    selected_agents = agents
    logger.info(f"chat completions: {selected_agents} | {str(payload)}") 
    if selected_agents == "legalchat":
        # TODO: legalChat 로직 구현
        pass
    else:
        return {"message": f"{selected_agents} is selected"}