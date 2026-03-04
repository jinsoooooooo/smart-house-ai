# app/agents/base.py
class BaseAgent:
    """모든 에이전트는 이 클래스를 상속받아 run 메서드를 구현해야 합니다."""
    def run(self, user_input: str) -> str:
        raise NotImplementedError
