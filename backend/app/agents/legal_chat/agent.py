from app.agents.base import BaseAgent

class LegalChatAgent(BaseAgent):
    def run(self, user_input: str) -> str:
        return "LegalChatAgent"