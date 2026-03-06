from fastapi import FastAPI, APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List
from app.core.log import logger
from app.core.database import get_db

from app.schemas import agents as agent_schema
from app.crud import agent as crud_agent
from app.agents.registry import get_agent_handler
from app.schemas.chat import ChatRequest, ChatResponse
from app.services.chat_service import ChatService

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
def chat_completions(agents: str, payload: ChatRequest) -> ChatResponse:
    """
    선택된 agents와 채팅을 수행합니다.
    """
    selected_agents = agents
    logger.info(f"chat completions: {selected_agents} | {payload.model_dump_json()}") 

    agent_handler = get_agent_handler(selected_agents)
    result = agent_handler.run(payload)

    response = ChatResponse(
        
    return result

    # if selected_agents == "legalchat":
    #     # TODO: legalChat 로직 구현
    #     pass
    # else:
    #     return {"message": f"{selected_agents} is selected"}