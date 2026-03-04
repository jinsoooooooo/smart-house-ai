# app/agents/registry.py
from app.agents.legal_chat.agent import LegalChatAgent
# from app.agents.real_estate.agent import RealEstateAgent

# 에이전트를 등록해두는 딕셔너리
AGENT_REGISTRY = {
    "legal": LegalChatAgent(),
    # "real_estate": RealEstateAgent(),
    # "news": NewsCuratorAgent(),
}

def get_agent(menu_type: str):
    """
    요청된 메뉴 타입에 맞는 에이전트 인스턴스를 반환합니다.
    """
    agent = AGENT_REGISTRY.get(menu_type)
    if not agent:
        raise ValueError(f"알 수 없는 에이전트 타입입니다: {menu_type}")
    return agent
