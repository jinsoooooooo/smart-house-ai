import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
    return (
        <div className="p-4 md:p-8 pb-24 md:pb-8">
            <div className="max-w-6xl mx-auto flex flex-col gap-8">

                {/* ========================================================= */}
                {/* 상단 환영 메시지 및 진행률 컴포넌트 */}
                {/* ========================================================= */}
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex flex-col gap-1">
                        <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-slate-100">환영합니다, Alex님</h2>
                        <p className="text-slate-500 dark:text-slate-400">
                            이번 분기 귀하의 부동산 분석이 <span className="text-yellow-600 font-bold">85% 완료</span>되었습니다.
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-bold shadow-sm hover:bg-slate-50 transition-colors">
                            <span className="material-symbols-outlined text-lg">calendar_today</span>
                            {/* 실제 배포 환경에서는 현재 날짜를 동적으로 렌더링할 수 있습니다 */}
                            2026-02-24
                        </button>
                        <button className="px-4 py-2 rounded-lg bg-yellow-500 text-white text-sm font-bold shadow-md hover:bg-yellow-600 transition-all">
                            전체 리포트 보기
                        </button>
                    </div>
                </header>

                {/* ========================================================= */}
                {/* 4가지 핵심 기능 이동을 위한 액션 카드 영역 (Link를 통한 라우팅) */}
                {/* ========================================================= */}
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                    {/* 1. 부동산 AI 법률 챗봇 카드 */}
                    <Link to="/chatbot" className="relative group h-48 rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all border border-transparent hover:border-blue-500/50 block">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700"></div>
                        <div className="relative h-full p-5 flex flex-col justify-between text-white">
                            <span className="material-symbols-outlined text-3xl opacity-80">smart_toy</span>
                            <div className="flex flex-col">
                                <h3 className="font-bold text-lg">법률 챗봇</h3>
                                <p className="text-xs text-white/80">부동산 AI 법률 상담</p>
                            </div>
                        </div>
                    </Link>

                    {/* 2. 등기부등본 진단 카드 */}
                    <Link to="/diagnosis" className="relative group h-48 rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all border border-transparent hover:border-emerald-500/50 block">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-700"></div>
                        <div className="relative h-full p-5 flex flex-col justify-between text-white">
                            <span className="material-symbols-outlined text-3xl opacity-80">verified_user</span>
                            <div className="flex flex-col">
                                <h3 className="font-bold text-lg">등기부등본 진단</h3>
                                <p className="text-xs text-white/80">안전성 및 권리 분석</p>
                            </div>
                        </div>
                    </Link>

                    {/* 3. 특약 자동완성 계약서 카드 */}
                    <Link to="/contract" className="relative group h-48 rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all border border-transparent hover:border-orange-500/50 block">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-orange-600 to-red-700"></div>
                        <div className="relative h-full p-5 flex flex-col justify-between text-white">
                            <span className="material-symbols-outlined text-3xl opacity-80">edit_document</span>
                            <div className="flex flex-col">
                                <h3 className="font-bold text-lg">계약서 자동완성</h3>
                                <p className="text-xs text-white/80">조건별 맞춤 문구 작성</p>
                            </div>
                        </div>
                    </Link>

                    {/* 4. 부동산 뉴스 큐레이션 카드 */}
                    <Link to="/news" className="relative group h-48 rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all border border-transparent hover:border-purple-500/50 block">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-600 to-fuchsia-700"></div>
                        <div className="relative h-full p-5 flex flex-col justify-between text-white">
                            <span className="material-symbols-outlined text-3xl opacity-80">public</span>
                            <div className="flex flex-col">
                                <h3 className="font-bold text-lg">뉴스 큐레이션</h3>
                                <p className="text-xs text-white/80">맞춤 부동산 소식 요약</p>
                            </div>
                        </div>
                    </Link>

                </section>

                {/* ========================================================= */}
                {/* 하단 위젯 레이아웃 (최근 활동 기록 & 소식) */}
                {/* ========================================================= */}
                <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* 최근 활동 내역 영역 */}
                    <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col">
                        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                            <h3 className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                                <span className="material-symbols-outlined text-yellow-500">history</span>
                                최근 분석 기록
                            </h3>
                            <Link to="/history" className="text-yellow-600 text-xs font-bold hover:underline">모두 보기</Link>
                        </div>

                        {/* 최근 분석한 등기부등본 및 계약서 리스트 */}
                        <div className="p-0 overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-slate-50 dark:bg-slate-800/50">
                                    <tr>
                                        <th className="px-5 py-3 text-[11px] font-bold text-slate-500 uppercase tracking-wider">문서명</th>
                                        <th className="px-5 py-3 text-[11px] font-bold text-slate-500 uppercase tracking-wider">상태</th>
                                        <th className="px-5 py-3 text-[11px] font-bold text-slate-500 uppercase tracking-wider">최종 수정일</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                        <td className="px-5 py-4 text-sm font-medium text-slate-700 dark:text-slate-300">강남구 압구정동 현대아파트 등기부</td>
                                        <td className="px-5 py-4">
                                            {/* 컴포넌트 재사용성을 고려해 배지가 스타일링되어 있습니다 */}
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                                                안전 (완료)
                                            </span>
                                        </td>
                                        <td className="px-5 py-4 text-sm text-slate-500">2026-02-23</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                        <td className="px-5 py-4 text-sm font-medium text-slate-700 dark:text-slate-300">종로구 평창동 단독주택 전세계약</td>
                                        <td className="px-5 py-4">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                                                주의 요망
                                            </span>
                                        </td>
                                        <td className="px-5 py-4 text-sm text-slate-500">2026-02-21</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                        <td className="px-5 py-4 text-sm font-medium text-slate-700 dark:text-slate-300">마포구 상암동 월세 특약 템플릿</td>
                                        <td className="px-5 py-4">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800">
                                                초안 저장
                                            </span>
                                        </td>
                                        <td className="px-5 py-4 text-sm text-slate-500">2026-02-20</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* 우측 주요 알림 위젯 영역 */}
                    <div className="flex flex-col gap-6">

                        {/* 오늘의 중요 통지/법령 뉴스 */}
                        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-5 flex flex-col gap-4">
                            <h3 className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                                <span className="material-symbols-outlined text-yellow-500">campaign</span>
                                오늘의 중요 통지
                            </h3>
                            <div className="bg-yellow-500/10 rounded-lg p-3 border-l-4 border-yellow-500">
                                <p className="text-xs font-bold text-yellow-600 mb-1">신규 조례 변경사항 안내</p>
                                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                                    서울시 상가임대차보호법 기준 보증금 범위 상향 조정 관련 공지...
                                </p>
                            </div>
                            <Link to="/news" className="w-full text-center py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                                상세 내용 읽기
                            </Link>
                        </div>

                    </div>
                </section>
            </div>
        </div>
    );
}

export default Dashboard;
