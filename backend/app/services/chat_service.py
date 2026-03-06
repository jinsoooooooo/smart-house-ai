from app.schemas.chat import ChatRequest, ChatResponse
from app.agents.registry import get_agent_handler
from app.core.log import logger


class ChatService:
    """
    채팅의 전체 흐름(오케스트레이션)을 담당하는 서비스 레이어.
    Router는 이 클래스의 메서드만 호출하면 됩니다.
    에이전트 실행, 메시지 저장, 히스토리 관리 등 공통 흐름을 여기서 처리합니다.
    """

    def run(self, agent_name: str, payload: ChatRequest) -> ChatResponse:
        """
        /chat/{agent}/completion 호출의 핵심 처리 흐름.

        Args:
            agent_name: URL 경로의 {agent} 파라미터 값 (예: 'legalchat')
            payload:    ChatRequest 스키마 (chat_id, user_query, model 포함)

        Returns:
            ChatResponse 스키마
        """
        logger.info(f"[ChatService] agent={agent_name} | chat_id={payload.chat_id}")

        # 1. 레지스트리에서 에이전트 인스턴스 조회
        selected_agent = get_agent_handler(agent_name)

        # 2. 유저 메시지 DB 저장 (에이전트 실행 전)
        # ToDo: user_message_id = crud_message.create(chat_id=payload.chat_id, role='user', content=payload.user_query)

        # 3. 에이전트 실행 (LLM 호출은 agent.run() 내부에서 처리)
        response: ChatResponse = selected_agent.run(payload)

        # 4. 어시스턴트 응답 DB 저장 (에이전트 실행 후)
        # ToDo: agent_message_id = crud_message.create(chat_id=payload.chat_id, role='assistant', content=response.reply)

        return response
