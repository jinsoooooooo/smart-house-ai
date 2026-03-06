from sqlalchemy import Column, Integer, String, Boolean
# core.database 파일이나 별도 모델 패키지에서 Base 클래스를 상속받아야 합니다.
# 보통 core/database.py에 `Base = declarative_base()` 를 선언하여 가져옵니다.
from app.core.database import Base 

import uuid

class Agent(Base):
    __tablename__ = "agents"
    __table_args__ = {'schema': 'smart_house_ai'}

    # UUID를 id로 사용하고 기본값으로 자동 생성되도록 설정
    id = Column(String(36), primary_key=True, default=lambda: str(uuid.uuid4()), index=True)
    
    # 라우트 경로로 사용할 path 컬럼 추가 (예: "naver-search", "weather")
    path = Column(String, unique=True, index=True, nullable=False)
    
    name = Column(String, index=True)
    description = Column(String, nullable=True)
    is_active = Column(Boolean, default=True)
