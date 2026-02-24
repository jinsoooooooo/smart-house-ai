import React from 'react';

function LegalChatbot() {
    return (
        <div className="flex-1 flex flex-col h-full relative w-full bg-slate-50 dark:bg-slate-900">

            {/* ========================================================= */}
            {/* 상단 헤더 영역 */}
            {/* ========================================================= */}
            <header className="bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-6 py-4 flex justify-between items-center z-10 sticky top-0">
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">법률 챗봇</h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400">부동산 법령, 계약, 조례에 대해 질문하세요.</p>
                </div>
                <div className="flex gap-2">
                    <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors" title="Settings">
                        <span className="material-symbols-outlined">settings</span>
                    </button>
                </div>
            </header>

            {/* ========================================================= */}
            {/* 채팅 메시지 출력 영역 (스크롤 가능) */}
            {/* ========================================================= */}
            <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-8 scroll-smooth" id="chat-container">

                {/* 날짜 구분선 */}
                <div className="flex justify-center">
                    <span className="text-xs font-semibold text-slate-500 bg-slate-200 dark:bg-slate-800 px-3 py-1 rounded-full">오늘, 2월 24일</span>
                </div>

                {/* AI 첫 번째 메시지 */}
                <div className="flex gap-4 max-w-3xl">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-blue-600">smart_toy</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-baseline gap-2">
                            <span className="text-sm font-bold text-slate-900 dark:text-slate-200">AI 어시스턴트</span>
                            <span className="text-xs text-slate-500">오전 10:02</span>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-5 rounded-r-2xl rounded-bl-2xl shadow-sm border border-slate-100 dark:border-slate-700 text-slate-800 dark:text-slate-300 text-base leading-relaxed">
                            안녕하세요! 부동산 법률 AI 어시스턴트입니다. 계약서 분석, 위험 확인, 관련 법령 검색을 도와드릴 수 있습니다. 어떤 도움이 필요하신가요?
                        </div>
                    </div>
                </div>

                {/* 사용자 첫 번째 질문 */}
                <div className="flex gap-4 max-w-3xl ml-auto justify-end">
                    <div className="flex flex-col gap-2 items-end">
                        <div className="flex items-baseline gap-2">
                            <span className="text-xs text-slate-500">오전 10:05</span>
                            <span className="text-sm font-bold text-slate-900 dark:text-slate-200">나</span>
                        </div>
                        <div className="bg-yellow-500 p-5 rounded-l-2xl rounded-br-2xl shadow-md text-white text-base leading-relaxed">
                            지금 보고 있는 오피스텔 계약의 최우선변제권을 확인해줘.
                        </div>
                    </div>
                    {/* 사용자 프로필 이미지 */}
                    <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 bg-cover bg-center shrink-0" alt="User profile picture" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB4c6GsI9iLrHRowAcnu6QQNpamMdVXsMXdnxHFYJszjJqGRv9eV_eiAyKtankevpIqUK2DUOKz1U_WN3_th07m7DXepn-ZcaX1fQ7K9VIxX6cWzeIRHfQl-dw10J-NsO9Dd1Lm_Uw3EWkiEMsa-hqiFUitnM0aLxtl2zKJ1QqarYUAMRn8K4S3GapRxf_Lowbk0L3c_Qt72V2YyO_g3LGqqjLyANhaKl-18s4GHaYuagHkmrquSc8tc2S95vrNdbyLOiXqm2vbxUP-")' }}>
                    </div>
                </div>

                {/* AI 상세 답변 및 링크 버튼 */}
                <div className="flex gap-4 max-w-3xl">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-blue-600">smart_toy</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-baseline gap-2">
                            <span className="text-sm font-bold text-slate-900 dark:text-slate-200">AI 어시스턴트</span>
                            <span className="text-xs text-slate-500">오전 10:06</span>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-5 rounded-r-2xl rounded-bl-2xl shadow-sm border border-slate-100 dark:border-slate-700 text-slate-800 dark:text-slate-300 text-base leading-relaxed space-y-3">
                            <p>주택임대차보호법에 따르면, 다음 조건을 갖추었을 때 최우선변제권이 보장됩니다:</p>
                            <ol className="list-decimal list-inside space-y-1 ml-1 marker:text-yellow-600 marker:font-bold">
                                <li>전입신고 (주민등록) 완료</li>
                                <li>해당 부동산의 실제 점유</li>
                                <li>임대차 계약서상 확정일자 부여</li>
                            </ol>
                            <p>오피스텔이 이 법의 보호를 받으려면 주거용으로 사용되어야 합니다.</p>
                        </div>
                        {/* 관련 법령 링크 버튼 */}
                        <button className="flex items-center self-start gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-full text-xs font-bold text-slate-800 dark:text-slate-200 transition-colors mt-1 group">
                            <span className="material-symbols-outlined text-yellow-600 text-[18px]">gavel</span>
                            <span>관련 법령 보기: 주택임대차보호법</span>
                            <span className="material-symbols-outlined text-slate-400 group-hover:translate-x-1 transition-transform text-[16px]">arrow_forward</span>
                        </button>
                    </div>
                </div>

                {/* 하단 스크롤 여백 */}
                <div className="h-12"></div>
            </div>

            {/* ========================================================= */}
            {/* 사용자 입력 하단 바 */}
            {/* ========================================================= */}
            <div className="p-4 md:p-6 pb-24 md:pb-6 bg-slate-50 dark:bg-slate-900/95 backdrop-blur-sm relative z-20 border-t border-slate-200 dark:border-slate-800">
                <div className="max-w-4xl mx-auto flex flex-col gap-4">

                    {/* 빠른 질문 (Quick Reply) 칩 목록 (가로 스크롤) */}
                    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide -mx-2 px-2 mask-linear-fade">
                        <button className="shrink-0 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-sm font-medium text-slate-600 hover:text-yellow-600 hover:border-yellow-500/30 hover:bg-yellow-500/5 transition-all whitespace-nowrap shadow-sm">
                            최우선 변제권 확인
                        </button>
                        <button className="shrink-0 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-sm font-medium text-slate-600 hover:text-yellow-600 hover:border-yellow-500/30 hover:bg-yellow-500/5 transition-all whitespace-nowrap shadow-sm">
                            확정일자 받는 법
                        </button>
                        <button className="shrink-0 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-sm font-medium text-slate-600 hover:text-yellow-600 hover:border-yellow-500/30 hover:bg-yellow-500/5 transition-all whitespace-nowrap shadow-sm">
                            임대차 계약서 검토
                        </button>
                    </div>

                    {/* 텍스트 입력창 영역 */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-yellow-500/20 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        <div className="relative flex items-center bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-2xl shadow-sm group-focus-within:border-yellow-500 group-focus-within:ring-1 group-focus-within:ring-yellow-500/20 transition-all overflow-hidden">
                            {/* 클립 (파일 첨부) 버튼 */}
                            <button className="pl-4 pr-3 py-4 text-slate-400 hover:text-yellow-600 transition-colors" title="문서 업로드">
                                <span className="material-symbols-outlined -rotate-45">attach_file</span>
                            </button>

                            {/* 실제 텍스트 입력 필드 */}
                            <input
                                className="flex-1 bg-transparent border-none outline-none text-slate-900 dark:text-slate-100 placeholder:text-slate-400 py-4 h-full focus:ring-0 text-base"
                                placeholder="부동산 법률 관련 질문을 입력하거나 계약서를 업로드하세요..."
                                type="text"
                            />

                            {/* 전송 버튼 */}
                            <button className="mr-2 p-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-xl shadow-md transition-all flex items-center justify-center w-10 h-10 self-center">
                                <span className="material-symbols-outlined text-[20px]">send</span>
                            </button>
                        </div>
                    </div>

                    <p className="text-center text-xs text-slate-400 dark:text-slate-500 mt-1">
                        AI는 실수를 할 수 있습니다. 중요한 법적 결정 전에는 반드시 정보의 정확성을 확인하세요.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default LegalChatbot;
