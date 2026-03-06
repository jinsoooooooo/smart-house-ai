from app.agents.base import BaseAgent
from app.schemas.chat import ChatRequest, ChatResponse
from app.agents.legal_chat.prompts import LEGAL_CHAT_SYSTEM_PROMPT


class LegalChatAgent(BaseAgent):
    """법률 상담 특화 AI 에이전트"""

    def __init__(self):
        super().__init__("legalchat")
        self.system_prompt = LEGAL_CHAT_SYSTEM_PROMPT

        # ToDo: LLM 클라이언트 초기화  (예: OpenAI, Gemini 등)
        # self.llm_client = OpenAI(api_key=settings.OPENAI_API_KEY)

    def run(self, payload: ChatRequest) -> ChatResponse:
        """
        유저 쿼리를 받아 법률 AI 응답을 생성하고 ChatResponse로 반환합니다.
        """
        # 1. 대화 히스토리 조회
        # ToDo: DB에서 chat_id 기반으로 이전 대화 내역을 불러옵니다.
        # history: list = crud_message.get_messages_by_chat_id(chat_id=payload.chat_id)

        # 2. LLM 호출용 메시지 포맷 구성
        # ToDo: history + 현재 user_query를 OpenAI messages 포맷으로 변환합니다.
        # messages = [{"role": "system", "content": self.system_prompt}]
        # messages += [{"role": m.role, "content": m.content} for m in history]
        # messages += [{"role": "user", "content": payload.user_query}]

        # 3. LLM 호출
        # ToDo: LLM API를 호출하여 응답 텍스트를 받습니다.
        # response = self.llm_client.chat.completions.create(
        #     model=payload.model,
        #     messages=messages,
        # )
        # reply_text = response.choices[0].message.content

        # 4. 응답 반환 (ChatResponse 스키마 형태로)
        # ToDo: 실제 DB 저장 후 생성된 UUID를 넣어야 합니다. (현재는 플레이스홀더)
        # return ChatResponse(
        #     chat_id=payload.chat_id,
        #     user_message_id=saved_user_msg.id,
        #     assistant_message_id=saved_assistant_msg.id,
        #     reply=reply_text,
        # )

        # raise NotImplementedError("LegalChatAgent.run() 구현 필요")
        # MOCK DATA
        return ChatResponse(
            chat_id=payload.chat_id,
            user_message_id="mock_user_message_id",
            assistant_message_id="mock_assistant_message_id",
            reply="mock_reply",
        )