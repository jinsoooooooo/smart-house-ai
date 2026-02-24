import React from 'react';

function RiskDiagnosis() {
    return (
        <div className="flex-1 flex flex-col h-full overflow-y-auto bg-slate-50 dark:bg-slate-900 p-6 lg:p-10">
            <div className="max-w-6xl mx-auto w-full flex flex-col gap-8">

                {/* ========================================================= */}
                {/* 헤더 타이틀 영역 */}
                {/* ========================================================= */}
                <div className="flex flex-col gap-2">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">등기부등본 위험성 진단</h2>
                    <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl">
                        등기부등본 문서를 업로드하여 잠재적인 위험 요소, 근저당권 설정, 소유권 불일치 등을 즉시 분석하세요.
                    </p>
                </div>

                {/* ========================================================= */}
                {/* 파일 업로드 (드래그 앤 드롭) 영역 */}
                {/* ========================================================= */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border-2 border-dashed border-slate-300 dark:border-slate-600 hover:border-yellow-500 dark:hover:border-yellow-500 transition-colors cursor-pointer group relative overflow-hidden">
                    <div className="absolute inset-0 bg-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                    <div className="flex flex-col items-center justify-center gap-4 py-8">
                        <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-yellow-600 text-3xl">cloud_upload</span>
                        </div>
                        <div className="text-center">
                            <p className="text-slate-900 dark:text-white text-lg font-bold">여기로 PDF 문서를 드래그 앤 드롭하세요</p>
                            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">지원 확장자: .pdf, .jpg (최대 25MB)</p>
                        </div>
                        <button className="mt-2 px-6 py-2.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                            파일 찾기
                        </button>
                    </div>
                </div>

                {/* ========================================================= */}
                {/* 분석 결과 섹션 (가상 데이터) */}
                {/* ========================================================= */}
                <div className="flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">분석 결과 대시보드</h3>
                        <div className="flex gap-2">
                            <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                <span className="material-symbols-outlined text-[18px]">share</span>
                                공유하기
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500 text-white text-sm font-bold hover:bg-yellow-600 transition-colors shadow-lg shadow-yellow-500/20">
                                <span className="material-symbols-outlined text-[18px]">download</span>
                                리포트 다운로드
                            </button>
                        </div>
                    </div>

                    {/* 메인 결과 요약 카드 */}
                    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
                        <div className="flex flex-col lg:flex-row gap-8 items-start">

                            {/* 좌측: 파일 정보 및 주요 지표 */}
                            <div className="flex-1 w-full">
                                {/* 상단 파일 배지 및 종합 상태 */}
                                <div className="flex items-start justify-between mb-6">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-900/20 flex items-center justify-center flex-shrink-0">
                                            <span className="material-symbols-outlined text-red-500">picture_as_pdf</span>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">서초구_반포동_자이아파트_등기부.pdf</h4>
                                            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">분석일: 2026-02-24 • 2.4 MB</p>
                                        </div>
                                    </div>
                                    {/* 위험 상태 뱃지 (신호등 색상 적용) */}
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-100 text-red-700 text-xs font-bold border border-red-200">
                                        <span className="material-symbols-outlined text-[16px]">warning</span>
                                        위험 요소 감지됨
                                    </span>
                                </div>

                                {/* 4분할 지표 그리드 */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {/* 지표 1: 근저당 설정 금액 */}
                                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700">
                                        <div className="flex justify-between items-start mb-2">
                                            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">채권최고액 합계</p>
                                            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
                                                <span className="material-symbols-outlined text-[16px]">trending_up</span>
                                            </span>
                                        </div>
                                        <p className="text-2xl font-extrabold text-slate-900 dark:text-white">12억 5천만 원</p>
                                        <p className="text-xs font-medium text-orange-600 mt-1">예상 시세 대비 약 75% 수준</p>
                                    </div>

                                    {/* 지표 2: 권리침해 여부 */}
                                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700">
                                        <div className="flex justify-between items-start mb-2">
                                            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">가압류/가처분</p>
                                            <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
                                                <span className="material-symbols-outlined text-[16px]">lock</span>
                                            </span>
                                        </div>
                                        <p className="text-2xl font-extrabold text-slate-900 dark:text-white">2건 존재</p>
                                        <p className="text-xs font-medium text-red-500 mt-1">즉각적인 주의가 필요합니다.</p>
                                    </div>

                                    {/* 지표 3: 소유권 일치 */}
                                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700">
                                        <div className="flex justify-between items-start mb-2">
                                            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">소유권 확인</p>
                                            <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                                                <span className="material-symbols-outlined text-[16px]">check</span>
                                            </span>
                                        </div>
                                        <p className="text-2xl font-extrabold text-slate-900 dark:text-white">일치함</p>
                                        <p className="text-xs font-medium text-emerald-600 mt-1">입력된 정보와 100% 일치합니다.</p>
                                    </div>

                                    {/* 지표 4: 조세 체납 여부 */}
                                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700">
                                        <div className="flex justify-between items-start mb-2">
                                            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">미납 세금 내역</p>
                                            <span className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-500 flex items-center justify-center">
                                                <span className="material-symbols-outlined text-[16px]">receipt_long</span>
                                            </span>
                                        </div>
                                        <p className="text-2xl font-extrabold text-slate-900 dark:text-white">없음 (Clear)</p>
                                        <p className="text-xs font-medium text-slate-500 mt-1">현재 확인된 체납 내역이 없습니다.</p>
                                    </div>
                                </div>
                            </div>

                            {/* 우측: 추가 인사이트 (디자인 유지를 위해 임의 요소 배치) */}
                            <div className="w-full lg:w-72 flex-shrink-0 h-full flex flex-col gap-3">
                                <div className="w-full aspect-square rounded-2xl bg-slate-100 dark:bg-slate-900 overflow-hidden relative shadow-inner p-4 flex flex-col items-center justify-center text-center">
                                    <span className="material-symbols-outlined text-4xl text-slate-400 mb-2">map</span>
                                    <p className="text-sm text-slate-500 font-bold">지도 화면 연동 (시각화 로딩 중...)</p>
                                </div>
                                <div className="bg-yellow-50 dark:bg-yellow-900/10 p-4 rounded-2xl border border-yellow-100 dark:border-yellow-900/30">
                                    <div className="flex items-center gap-2 mb-2 text-yellow-600">
                                        <span className="material-symbols-outlined text-[20px]">psychology</span>
                                        <p className="text-xs font-bold uppercase">AI 검토 의견</p>
                                    </div>
                                    <p className="text-sm text-slate-700 dark:text-slate-300">
                                        [주의] 을구 2번 항목의 채권최고액과 국세 체납 여부를 연계 확인하는 것이 안전합니다.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 하단 상세 이슈 리스트 (Collapsible 형태로 구현 시 더 좋음) */}
                        <div className="mt-6 border-t border-slate-100 dark:border-slate-700 pt-6">
                            <h4 className="font-bold text-slate-900 dark:text-white mb-4">발견된 주요 특이사항</h4>
                            <ul className="space-y-4">
                                <li className="flex gap-4 p-4 rounded-lg bg-red-50 dark:bg-red-900/10">
                                    <span className="material-symbols-outlined text-red-500 mt-0.5">error</span>
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white text-sm">과거 가압류 이력 존재</p>
                                        <p className="text-slate-500 text-sm mt-1">갑구 4번에 기재된 가압류가 말소되었으나, 추가 권리 변동 사항을 면밀히 살필 필요가 있습니다.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4 p-4 rounded-lg bg-orange-50 dark:bg-orange-900/10">
                                    <span className="material-symbols-outlined text-orange-500 mt-0.5">warning</span>
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white text-sm">신탁 등기 가능성</p>
                                        <p className="text-slate-500 text-sm mt-1">소유권 이전 과정에서 신탁원부 번호가 발견되었습니다. 원부 대조 필수.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RiskDiagnosis;
