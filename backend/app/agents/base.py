from abc import ABC, abstractmethod
from app.schemas.chat import ChatRequest, ChatResponse


class BaseAgent(ABC):
    """
    모든 AI 에이전트가 반드시 상속받아야 하는 추상 기반 클래스.
    인터페이스를 통일하여 Registry와 Service 레이어가
    어떤 에이전트든지 동일한 방식으로 호출할 수 있게 보장합니다.
    """

    def __init__(self, agent_name: str):
        self.agent_name = agent_name

    @abstractmethod
    def run(self, payload: ChatRequest) -> ChatResponse:
        """
        에이전트의 핵심 실행 메서드.
        반드시 하위 클래스에서 구현해야 합니다.
        """
        raise NotImplementedError
