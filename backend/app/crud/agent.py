from sqlalchemy.orm import Session
from app.models.agents import Agent

def get_agents(db: Session, skip: int = 0, limit: int = 100):
    """
    모든 Agent 목록을 DB에서 조회하는 함수.
    라우터와 독립적이라 재사용성이 매우 뛰어납니다.
    """
    return db.query(Agent).offset(skip).limit(limit).all()
