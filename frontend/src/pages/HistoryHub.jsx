import React from 'react';

function HistoryHub() {
    return (
        <div className="flex-1 flex flex-col h-full overflow-y-auto bg-slate-50 dark:bg-slate-900">
            <main className="max-w-7xl mx-auto w-full px-4 md:px-6 py-6 md:py-8">

                {/* ========================================================= */}
                {/* 페이지 타이틀 영역 */}
                {/* ========================================================= */}
                <div className="mb-8">
                    <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white mb-2">사용자 활동 내역 및 히스토리</h1>
                    <p className="text-slate-500 dark:text-slate-400">부동산 투자 내역을 추적하고 AI 분석 결과 및 작성 문서를 다시 확인하세요.</p>
                </div>

                {/* ========================================================= */}
                {/* 메인 레이아웃 그리드 */}
                {/* ========================================================= */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12">

                    {/* --------------------------------------------------------- */}
                    {/* 좌측 메인 섹션: 통계 및 문서 리스트 */}
                    {/* --------------------------------------------------------- */}
                    <div className="lg:col-span-8 space-y-8">

                        {/* 탭 네비게이션 */}
                        <div className="border-b border-slate-200 dark:border-slate-800 flex gap-8">
                            <button className="pb-4 text-sm font-bold text-yellow-600 border-b-2 border-yellow-500">전체 활동 내역</button>
                            <button className="pb-4 text-sm font-medium text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors">저장된 분석 리포트</button>
                        </div>

                        {/* 통계 요약 (Statistics Summary) */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">총 분석 건수</p>
                                <p className="text-2xl font-bold text-slate-900 dark:text-white">152 건</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">확인 필요 (위험)</p>
                                <p className="text-2xl font-bold text-red-500">3 건</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">저장된 특약 템플릿</p>
                                <p className="text-2xl font-bold text-yellow-600">24 개</p>
                            </div>
                        </div>

                        {/* 최근 작업 문서 리스트 */}
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-bold text-slate-900 dark:text-white">최근 작업한 문서 및 내역</h2>
                                <button className="text-yellow-600 text-sm font-bold hover:underline">모두 보기</button>
                            </div>
                            <div className="space-y-3">

                                {/* 리스트 아이템 1 */}
                                <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-yellow-500/40 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-slate-100 dark:bg-slate-700/50 rounded-lg text-slate-600 dark:text-slate-400">
                                            <span className="material-symbols-outlined">description</span>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 dark:text-white">서초구 반포자이 등기부등본 분석</h3>
                                            <p className="text-xs text-slate-500 mt-0.5">분석일: 2026-02-24 • PDF 문서</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400 rounded-full text-xs font-bold">안전함 (Safe)</span>
                                        <button className="material-symbols-outlined text-slate-400 hover:text-yellow-600 transition-colors">more_vert</button>
                                    </div>
                                </div>

                                {/* 리스트 아이템 2 */}
                                <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-yellow-500/40 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-slate-100 dark:bg-slate-700/50 rounded-lg text-slate-600 dark:text-slate-400">
                                            <span className="material-symbols-outlined">description</span>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 dark:text-white">강남대로 상가 임대차계약서 초안</h3>
                                            <p className="text-xs text-slate-500 mt-0.5">분석일: 2026-02-22 • DOCX 문서 (특약 자동완성 완료)</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="px-3 py-1 bg-orange-100 text-orange-700 dark:bg-orange-500/10 dark:text-orange-400 rounded-full text-xs font-bold">주의 필요</span>
                                        <button className="material-symbols-outlined text-slate-400 hover:text-yellow-600 transition-colors">more_vert</button>
                                    </div>
                                </div>

                                {/* 리스트 아이템 3 */}
                                <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-yellow-500/40 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-slate-100 dark:bg-slate-700/50 rounded-lg text-slate-600 dark:text-slate-400">
                                            <span className="material-symbols-outlined">description</span>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 dark:text-white">마포구 오피스텔 (신탁등기 확인 건)</h3>
                                            <p className="text-xs text-slate-500 mt-0.5">분석일: 2026-02-20 • PDF 문서 (권리분석 진행)</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400 rounded-full text-xs font-bold">위험 (Danger)</span>
                                        <button className="material-symbols-outlined text-slate-400 hover:text-yellow-600 transition-colors">more_vert</button>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* 활동 요약 차트 (퍼블리싱 디자인 유지) */}
                        <div>
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">주간 활동 요약</h2>
                            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
                                <div className="h-48 w-full bg-slate-50 dark:bg-slate-900/50 rounded flex items-end justify-between p-4 gap-2">
                                    <div className="w-full bg-yellow-400/20 h-[30%] rounded-t"></div>
                                    <div className="w-full bg-yellow-400/40 h-[45%] rounded-t"></div>
                                    <div className="w-full bg-yellow-500 h-[80%] rounded-t"></div>
                                    <div className="w-full bg-yellow-500/60 h-[55%] rounded-t"></div>
                                    <div className="w-full bg-yellow-500/30 h-[40%] rounded-t"></div>
                                    <div className="w-full bg-yellow-500 h-[90%] rounded-t"></div>
                                    <div className="w-full bg-yellow-500/50 h-[65%] rounded-t"></div>
                                </div>
                                <div className="flex justify-between mt-2 text-xs text-slate-500 font-medium px-4">
                                    <span>월</span><span>화</span><span>수</span><span>목</span><span>금</span><span>토</span><span>일</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* --------------------------------------------------------- */}
                    {/* 우측 사이드바: 템플릿, 팁 및 타임라인 */}
                    {/* --------------------------------------------------------- */}
                    <aside className="lg:col-span-4 space-y-6">

                        {/* 저장된 특약 템플릿 (즐겨찾기) */}
                        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
                            <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
                                <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                    <span className="material-symbols-outlined text-yellow-600">bookmark</span>
                                    저장된 특약 문구
                                </h3>
                                <button className="material-symbols-outlined text-slate-400 text-lg hover:text-yellow-600 transition-colors">edit</button>
                            </div>
                            <div className="divide-y divide-slate-100 dark:divide-slate-700">

                                <div className="p-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors cursor-pointer">
                                    <p className="text-sm font-bold text-slate-800 dark:text-slate-200">대출 불가 시 계약금 반환 특약</p>
                                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">임차인의 귀책사유 없이 전세자금대출이 불가할 경우, 계약은 무효로 하고 임대인은 계약금을 즉시 반환한다...</p>
                                    <div className="mt-3 flex gap-2">
                                        <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-900 text-[10px] font-bold rounded text-slate-600 dark:text-slate-400">주거용 (표준)</span>
                                    </div>
                                </div>

                                <div className="p-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors cursor-pointer">
                                    <p className="text-sm font-bold text-slate-800 dark:text-slate-200">상가 원상복구 범위 지정</p>
                                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">임차인은 퇴거 시 최초 입점 상태를 기준으로 천장 및 바닥 철거를 포함하여 원상복구 한다...</p>
                                    <div className="mt-3 flex gap-2">
                                        <span className="px-2 py-0.5 bg-yellow-500/10 text-yellow-600 text-[10px] font-bold rounded">상업용 (검토 필요)</span>
                                    </div>
                                </div>

                            </div>
                            <button className="w-full p-4 text-center text-sm font-bold text-yellow-600 hover:bg-yellow-500/5 transition-colors border-t border-slate-200 dark:border-slate-700">
                                특약 보관함 전체 보기
                            </button>
                        </div>

                        {/* AI 요약/인사이트 미니 카드 */}
                        <div className="bg-yellow-500/10 dark:bg-yellow-500/15 rounded-xl p-5 relative overflow-hidden border border-yellow-500/20">
                            <div className="relative z-10">
                                <h3 className="font-bold text-yellow-700 dark:text-yellow-500 mb-2 flex items-center gap-2">
                                    <span className="material-symbols-outlined">lightbulb</span>
                                    주요 AI 알림
                                </h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                                    "분석 완료된 <strong className="font-bold">강남대로 상가 계약서</strong>에서 '권리금 회수 기회 보호' 관련 조항이 누락되었습니다. 관련 특약을 추가하는 것을 권장합니다."
                                </p>
                                <button className="mt-4 text-sm font-bold text-yellow-700 dark:text-yellow-500 flex items-center gap-1 group">
                                    지금 검토하기
                                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </button>
                            </div>
                            <div className="absolute -right-4 -bottom-4 opacity-10">
                                <span className="material-symbols-outlined text-7xl text-yellow-600">analytics</span>
                            </div>
                        </div>

                        {/* 시스템 최근 활동 로그 (Action History) */}
                        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
                            <h3 className="font-bold text-slate-900 dark:text-white mb-4 text-sm">시스템 활동 로그</h3>
                            <div className="space-y-4">

                                <div className="flex gap-3">
                                    <div className="w-2 h-2 rounded-full bg-yellow-500 mt-1.5 shrink-0"></div>
                                    <div>
                                        <p className="text-xs text-slate-800 dark:text-slate-200 font-medium">새로운 등기부등본(반포자이) 업로드 및 분석 요청</p>
                                        <p className="text-[10px] text-slate-500">2시간 전</p>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600 mt-1.5 shrink-0"></div>
                                    <div>
                                        <p className="text-xs text-slate-800 dark:text-slate-200 font-medium">리스크 스코어 업데이트 (안전 등급 판정)</p>
                                        <p className="text-[10px] text-slate-500">어제 오후 11:30</p>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600 mt-1.5 shrink-0"></div>
                                    <div>
                                        <p className="text-xs text-slate-800 dark:text-slate-200 font-medium">뉴스 큐레이션 피드 관심지역 변경 (강남구)</p>
                                        <p className="text-[10px] text-slate-500">2026-02-23</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </aside>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-6 px-4 md:px-6 mt-auto pb-24 md:pb-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">© {new Date().getFullYear()} SmartHouse AI. 모든 법률 분석은 AI 보조 도구 역할을 하며, 최종 결정 전 전문가의 조언을 구하세요.</p>
                    <div className="flex gap-6 text-sm font-medium text-slate-500">
                        <a className="hover:text-yellow-600 transition-colors cursor-pointer">개인정보처리방침</a>
                        <a className="hover:text-yellow-600 transition-colors cursor-pointer">이용약관</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default HistoryHub;
