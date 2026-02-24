import React from 'react';

function NewsCuration() {
    return (
        <div className="flex-1 flex flex-col h-full overflow-hidden relative bg-slate-50 dark:bg-slate-900">

            {/* ========================================================= */}
            {/* 상단 헤더 및 필터 영역 */}
            {/* ========================================================= */}
            <header className="sticky top-0 z-10 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-6 py-4">
                <div className="max-w-4xl mx-auto w-full">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">맞춤형 부동산 뉴스 큐레이션</h2>
                            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">관심 지역의 최신 소식을 AI가 요약하여 제공합니다.</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <button className="w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-yellow-500/50 text-slate-500 hover:text-yellow-600 transition-all shadow-sm">
                                <span className="material-symbols-outlined">notifications</span>
                            </button>
                            <button className="w-10 h-10 rounded-full flex items-center justify-center bg-yellow-500 text-white shadow-lg shadow-yellow-500/30 hover:bg-yellow-600 transition-all">
                                <span className="material-symbols-outlined">refresh</span>
                            </button>
                        </div>
                    </div>

                    {/* 필터 설정 영역 */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">

                        {/* 관심 지역 드롭다운 (UI 시뮬레이션) */}
                        <div className="relative group">
                            <button className="flex items-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-2.5 rounded-full text-sm font-medium text-slate-700 dark:text-slate-200 hover:border-yellow-500/50 transition-colors shadow-sm">
                                <span className="material-symbols-outlined text-yellow-600 text-[20px]">location_on</span>
                                <span>관심 지역: <span className="text-slate-900 dark:text-white font-bold ml-1">강남구</span></span>
                                <span className="material-symbols-outlined text-slate-400 text-[20px]">expand_more</span>
                            </button>
                        </div>

                        {/* 알림 시간 설정 드롭다운 */}
                        <div className="relative group">
                            <button className="flex items-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-2.5 rounded-full text-sm font-medium text-slate-700 dark:text-slate-200 hover:border-yellow-500/50 transition-colors shadow-sm">
                                <span className="material-symbols-outlined text-yellow-600 text-[20px]">schedule</span>
                                <span>알림: <span className="text-slate-900 dark:text-white font-bold ml-1">매일 오전 9:00</span></span>
                                <span className="material-symbols-outlined text-slate-400 text-[20px]">expand_more</span>
                            </button>
                        </div>

                        <div className="hidden md:block w-px h-8 bg-slate-200 dark:bg-slate-700 mx-2"></div>

                        {/* 검색 입력창 */}
                        <div className="flex-1 min-w-[200px] relative">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">search</span>
                            <input
                                className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 pl-10 pr-4 py-2.5 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500 transition-all shadow-sm dark:text-white dark:placeholder-slate-500"
                                placeholder="키워드 검색..."
                                type="text"
                            />
                        </div>
                    </div>
                </div>
            </header>

            {/* ========================================================= */}
            {/* 뉴스 피드 스크롤 영역 */}
            {/* ========================================================= */}
            <div className="flex-1 overflow-y-auto p-6 scroll-smooth">
                <div className="max-w-4xl mx-auto flex flex-col gap-6 pb-12">

                    {/* 하이라이트/주요 뉴스 카드 (Hero) */}
                    <article className="relative group overflow-hidden rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-yellow-500/30 transition-all duration-300">
                        {/* 뉴스 이미지 (가상) */}
                        <div className="h-56 w-full bg-slate-200 dark:bg-slate-700 relative overflow-hidden">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCOIDNmts5MmbOIi0eQ5M5eNn7UUY79K7ZcHX1YaQzdwHPuR_necy6sJykR1atD_0NfjqJqtlle3ZZ1cLFoR30SsIvjAgTEGMso8fRnsZZG10U1n1nXCeKiZ2zHMblCE7kDJE9L78I7VjUHoIHs6ezAng6z2lF8rPu_CECqYyzhZOj6KS403rbBK8ypDCIg6Wx76261ChTeP8Q1RizWsQixAF-HCbsZ1ex6O42x5rN0QMxvgsQxq4HJ2qHHvXUqoUOuu0dSDu_LZ5PZ")' }}
                            ></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
                            <div className="absolute bottom-5 left-5 right-5 text-white">
                                <div className="inline-flex items-center gap-1 bg-yellow-500/90 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded-full mb-3 uppercase tracking-wider">
                                    <span className="material-symbols-outlined text-[14px]">trending_up</span>
                                    실시간 급상승
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold leading-tight mb-2 drop-shadow-md">강남구 주요 상권 건물 임대료 하반기 안정세 진입</h3>
                                <div className="flex items-center gap-2 text-slate-300 text-xs font-medium">
                                    <span>부동산테크뉴스</span>
                                    <span>•</span>
                                    <span>2시간 전</span>
                                </div>
                            </div>
                        </div>

                        {/* AI 요약 섹션 */}
                        <div className="p-6">
                            <div className="flex gap-3 mb-4">
                                <div className="shrink-0 pt-1">
                                    <div className="w-8 h-8 rounded-full bg-yellow-50 dark:bg-yellow-900/20 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-yellow-600 text-[18px]">auto_awesome</span>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-yellow-600 uppercase tracking-wide mb-1">AI 3줄 요약</h4>
                                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                        최근 분석에 따르면 3분기 상업용 임대료가 <span className="font-bold text-slate-900 dark:text-white">평균 2% 수준에서 안정화</span>되었습니다. 작년 이후 첫 긍정적 지표로, 공유 오피스 및 중견 IT 기업의 수요 증가가 원인으로 파악됩니다. 시장 분위기 반전에 대한 기대감이 형성되고 있습니다.
                                    </p>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-slate-100 dark:border-slate-700/50 flex items-center justify-between">
                                <div className="flex gap-2">
                                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400">#상가임대차</span>
                                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400">#시장동향</span>
                                </div>
                                <a className="text-yellow-600 text-sm font-bold hover:underline flex items-center gap-1 group/link cursor-pointer">
                                    원문 뉴스 보기 <span className="material-symbols-outlined text-[16px] transition-transform group-hover/link:translate-x-0.5">arrow_forward</span>
                                </a>
                            </div>
                        </div>
                    </article>

                    {/* 일반 뉴스 리스트 카드 1 */}
                    <article className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-yellow-500/30 transition-all duration-300">
                        <div className="flex flex-col md:flex-row gap-5">
                            {/* 우측 또는 썸네일 이미지 */}
                            <div className="md:w-[140px] shrink-0">
                                <div
                                    className="aspect-[4/3] rounded-lg bg-slate-100 dark:bg-slate-700 bg-cover bg-center"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuColpH7QPi7hzLllTCy1KCcWZUGNLM1CV7inSxAAz7bAgdoeNmJvnA-hD25KZVWOSPslgdhKeR4289T6nY4YwC5FGMoUCbnMEXoU7QigqedzovD0GDLniNqa6jniGjJkdBTNeaxRagTTkIZPDJRHzdrW4yCL3XtnT9_-9WyY65HAvN9CEQfZO_jDLfj4AN79vJfheZ6XsH6DpDRmQo3IchLx4pXKudqkwYwNEH27NcWnNZh-TMwJ-RnW09ZY38TqpiOoNaatKohMN_i")' }}
                                ></div>
                            </div>
                            <div className="flex-1 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-start justify-between gap-2 mb-1">
                                        <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug hover:text-yellow-600 transition-colors cursor-pointer">
                                            주거 및 상업 복합개발 관련 신규 조례 통과
                                        </h3>
                                        <span className="shrink-0 text-[10px] font-bold text-slate-500 bg-slate-100 dark:bg-slate-900 px-2 py-0.5 rounded-full uppercase">정책</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-3">
                                        <span className="font-medium text-slate-700 dark:text-slate-200">도시재생신문</span>
                                        <span>•</span>
                                        <span>5시간 전</span>
                                    </div>

                                    {/* AI 코멘트 */}
                                    <div className="bg-yellow-50 dark:bg-yellow-900/10 rounded-xl p-3 border border-yellow-100 dark:border-yellow-900/20 mb-1">
                                        <div className="flex gap-2 items-start">
                                            <span className="material-symbols-outlined text-yellow-600 text-[18px] shrink-0">auto_awesome</span>
                                            <p className="text-sm text-slate-600 dark:text-slate-300 leading-snug">
                                                시의회에서 <span className="font-semibold text-yellow-600">제402호 조례안</span>을 승인하여, 다음 달부터 기존 상업 전용 구역에 더 높은 밀도의 주거지 개발이 허용됩니다. B지구의 자산 가치에 영향을 줄 수 있습니다.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* 일반 뉴스 리스트 카드 2 */}
                    <article className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-yellow-500/30 transition-all duration-300">
                        <div className="flex flex-col md:flex-row gap-5">
                            <div className="md:w-[140px] shrink-0">
                                <div
                                    className="aspect-[4/3] rounded-lg bg-slate-100 dark:bg-slate-700 bg-cover bg-center"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDJkugbVx5EInjh9jRdyC4nmBV-BSaqevgo5LAjg1hP6yKTwa-z3Qx3619wGK0MZhSvx1xSpnSWbKuXt1ee5NsVKW7HR7XwA58ZkV3luqKyt0M1uz-7KmGo8bx90rpL-Q6m9cjAODf3-BvuCmQqlu68TM-MyDV_wxK9RompIJs8PzrbfvBjzVt4E-dc9L4bk2W329M2PuxF0ylpJPOYSw0GxJ7gynOZGh2lYU56tgHynwvkWBo_MBetKsAHc0KIeKRgqztSLtSnXDRk")' }}
                                ></div>
                            </div>
                            <div className="flex-1 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-start justify-between gap-2 mb-1">
                                        <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug hover:text-yellow-600 transition-colors cursor-pointer">
                                            금리 인상 기조 우려감에 주택 매매 거래량 '주춤'
                                        </h3>
                                        <span className="shrink-0 text-[10px] font-bold text-slate-500 bg-slate-100 dark:bg-slate-900 px-2 py-0.5 rounded-full uppercase">금융</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-3">
                                        <span className="font-medium text-slate-700 dark:text-slate-200">경제타임즈</span>
                                        <span>•</span>
                                        <span>8시간 전</span>
                                    </div>

                                    {/* AI 코멘트 */}
                                    <div className="bg-yellow-50 dark:bg-yellow-900/10 rounded-xl p-3 border border-yellow-100 dark:border-yellow-900/20 mb-1">
                                        <div className="flex gap-2 items-start">
                                            <span className="material-symbols-outlined text-yellow-600 text-[18px] shrink-0">auto_awesome</span>
                                            <p className="text-sm text-slate-600 dark:text-slate-300 leading-snug">
                                                중앙은행의 스탠스 발표 이후 매매 규모가 일시적으로 15% 하락했습니다. 매수자들이 "관망세"로 돌아서면서 시장 매물 체류 기간이 길어지고 있는 양상입니다.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>

                </div>
            </div>
        </div>
    );
}

export default NewsCuration;
