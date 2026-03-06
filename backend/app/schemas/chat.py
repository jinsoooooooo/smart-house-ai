from pydantic import BaseModel, Field
from typing import List, Optional
from uuid import UUID


# --- Request ---

class ChatMessage(BaseModel):
    """대화 히스토리 메시지 단위"""
    role: str = Field(..., description="'user' 또는 'assistant'")
    content: str = Field(..., description="메시지 내용")

class ChatRequest(BaseModel):
    """채팅 엔드포인트로 들어오는 요청 바디"""
    chat_id: UUID = Field(..., description="대화 세션 식별자")
    user_query: str = Field(..., description="유저의 현재 메시지")
    model: Optional[str] = Field(default="gpt-4o", description="사용할 LLM 모델")

    # ToDo: stream(bool) 필드 추가 — SSE 스트리밍 지원 시 필요
    # ToDo: history(List[ChatMessage]) 필드 추가 — 클라이언트가 history를 직접 넘기는 방식 선택 시


# --- Response ---

class ChatResponse(BaseModel):
    """채팅 엔드포인트 응답 바디"""
    chat_id: UUID = Field(..., description="대화 세션 식별자")
    user_message_id: UUID = Field(..., description="저장된 유저 메시지 PK")
    assistant_message_id: UUID = Field(..., description="저장된 어시스턴트 메시지 PK")
    reply: str = Field(..., description="에이전트 최종 응답 텍스트")

    # ToDo: usage(TokenUsage) 필드 추가 — 토큰 사용량 반환 시 필요
    # ToDo: model(str) 필드 추가 — 실제 사용된 모델명 반환 시 필요