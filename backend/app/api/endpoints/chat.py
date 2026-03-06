from fastapi import APIRouter, Depends, HTTPException, status
from app.schemas.chat import ChatRequest, ChatResponse
from app.services.chat_service import ChatService

router = APIRouter()


@router.post(
    "/{agent}/completion",
    response_model=ChatResponse,
    summary="AI 에이전트 채팅 완성",
    description="지정된 에이전트(legalchat 등)에게 메시지를 보내고 응답을 받습니다.",
)
def create_chat_completion(
    agent: str,
    payload: ChatRequest,
    chat_service: ChatService = Depends(ChatService),  # 의존성 주입
):
    """
    라우터의 역할은 "요청을 받아서 서비스로 넘기고 응답을 반환"하는 것 뿐입니다.
    비즈니스 로직은 ChatService에서 처리합니다.
    """
    try:
        result = chat_service.run(agent_name=agent, payload=payload)
        return result
    except ValueError as e:
        # 레지스트리에 없는 에이전트 이름이 들어왔을 때
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=str(e))
