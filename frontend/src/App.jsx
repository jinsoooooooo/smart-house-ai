import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 컴포넌트 임포트 (레이아웃 및 각 페이지)
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import LegalChatbot from './pages/LegalChatbot';
import RiskDiagnosis from './pages/RiskDiagnosis';
import ContractTerms from './pages/ContractTerms';
import NewsCuration from './pages/NewsCuration';
import HistoryHub from './pages/HistoryHub';

function App() {
  return (
    <BrowserRouter>
      {/* 레이아웃 컴포넌트가 최상위 라우트로 감싸져 사이드바가 유지됨 */}
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Outlet 위치에 렌더링될 자식 라우트들 */}
          <Route index element={<Dashboard />} />
          <Route path="chatbot" element={<LegalChatbot />} />
          <Route path="diagnosis" element={<RiskDiagnosis />} />
          <Route path="contract" element={<ContractTerms />} />
          <Route path="news" element={<NewsCuration />} />
          <Route path="history" element={<HistoryHub />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
