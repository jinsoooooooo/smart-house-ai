import React from 'react';

function ContractTerms() {
    return (
        <div className="flex-1 flex overflow-hidden h-full">
            {/* ========================================================= */}
            {/* 좌측 패널: 특약 조건 입력 및 선택 영역 */}
            {/* ========================================================= */}
            <div className="w-1/2 max-w-[600px] flex flex-col border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-y-auto z-10">
                <div className="p-6 space-y-8">

                    {/* 헤더 타이틀 */}
                    <div>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white">특약 사항 자동완성</h2>
                        <p className="text-xs text-slate-500 hidden sm:block mt-1">부동산 계약 필수 특약을 조건에 맞게 즉시 생성합니다.</p>
                    </div>

                    {/* 전/월세 선택 토글 (라디오 버튼 활용) */}
                    <div className="bg-slate-50 dark:bg-slate-800 p-1.5 rounded-full flex relative">
                        <label className="flex-1 relative z-10 cursor-pointer">
                            <input defaultChecked className="sr-only peer" name="lease_type" type="radio" value="jeonse" />
                            <div className="w-full py-2 text-center text-sm font-medium rounded-full text-slate-500 peer-checked:bg-white dark:peer-checked:bg-slate-700 peer-checked:text-slate-900 dark:peer-checked:text-white peer-checked:shadow-sm transition-all duration-200">
                                전세 계약
                            </div>
                        </label>
                        <label className="flex-1 relative z-10 cursor-pointer">
                            <input className="sr-only peer" name="lease_type" type="radio" value="monthly" />
                            <div className="w-full py-2 text-center text-sm font-medium rounded-full text-slate-500 peer-checked:bg-white dark:peer-checked:bg-slate-700 peer-checked:text-slate-900 dark:peer-checked:text-white peer-checked:shadow-sm transition-all duration-200">
                                월세 계약
                            </div>
                        </label>
                    </div>

                    {/* 각종 조건 아코디언 그룹 */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">계약 부동산 조건</h3>

                        {/* 조건 1: 유지보수 및 수리 */}
                        <details className="group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden" open>
                            <summary className="flex cursor-pointer items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-yellow-600">water_drop</span>
                                    <span className="font-bold text-slate-900 dark:text-white text-sm">유지보수 및 누수 수리 책임</span>
                                </div>
                                <span className="material-symbols-outlined text-slate-500 group-open:rotate-180 transition-transform">expand_more</span>
                            </summary>
                            <div className="p-4 space-y-3 bg-white dark:bg-slate-800">
                                <label className="flex items-start gap-3 p-3 rounded-lg border border-transparent hover:border-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all cursor-pointer">
                                    <input defaultChecked className="mt-1 w-5 h-5 rounded border-slate-300 text-yellow-600 focus:ring-yellow-600" type="checkbox" />
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-slate-900 dark:text-white">누수 수리 책임 (6개월)</p>
                                        <p className="text-xs text-slate-500 mt-0.5">잔금일 또는 입주일로부터 6개월 내 발생한 중대 하자(누수 등)는 임대인이 수리한다.</p>
                                    </div>
                                </label>
                                <label className="flex items-start gap-3 p-3 rounded-lg border border-transparent hover:border-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all cursor-pointer">
                                    <input className="mt-1 w-5 h-5 rounded border-slate-300 text-yellow-600 focus:ring-yellow-600" type="checkbox" />
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-slate-900 dark:text-white">곰팡이 및 결로 사전 점검</p>
                                        <p className="text-xs text-slate-500 mt-0.5">입주 전 임대인과 임차인이 동행하여 곰팡이 발생 여부를 점검한다.</p>
                                    </div>
                                </label>
                            </div>
                        </details>

                        {/* 조건 2: 반려동물 및 생활 조건 */}
                        <details className="group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
                            <summary className="flex cursor-pointer items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-yellow-600">pets</span>
                                    <span className="font-bold text-slate-900 dark:text-white text-sm">반려동물 및 생활 환경</span>
                                </div>
                                <span className="material-symbols-outlined text-slate-500 group-open:rotate-180 transition-transform">expand_more</span>
                            </summary>
                            <div className="p-4 space-y-3 bg-white dark:bg-slate-800">
                                <div className="flex items-center justify-between p-2">
                                    <span className="text-sm font-medium text-slate-900 dark:text-white">반려동물 사육 허용 여부</span>
                                    <div className="flex gap-2">
                                        <label className="inline-flex items-center">
                                            <input className="form-radio text-yellow-600 focus:ring-yellow-600" name="pets" type="radio" value="yes" />
                                            <span className="ml-2 text-sm text-slate-500">허용</span>
                                        </label>
                                        <label className="inline-flex items-center">
                                            <input defaultChecked className="form-radio text-yellow-600 focus:ring-yellow-600" name="pets" type="radio" value="no" />
                                            <span className="ml-2 text-sm text-slate-500">불가</span>
                                        </label>
                                    </div>
                                </div>
                                <label className="flex items-start gap-3 p-3 rounded-lg border border-transparent hover:border-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all cursor-pointer">
                                    <input defaultChecked className="mt-1 w-5 h-5 rounded border-slate-300 text-yellow-600 focus:ring-yellow-600" type="checkbox" />
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-slate-900 dark:text-white">반려동물 훼손 복구 특약</p>
                                        <p className="text-xs text-slate-500 mt-0.5">사육 시 발생하는 바닥 스크래치, 벽지 훼손, 냄새 제거(특수청소) 비용은 임차인이 부담한다.</p>
                                    </div>
                                </label>
                            </div>
                        </details>

                        {/* 조건 3: 대출 및 보증보험 */}
                        <details className="group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
                            <summary className="flex cursor-pointer items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-yellow-600">account_balance</span>
                                    <span className="font-bold text-slate-900 dark:text-white text-sm">전세자금대출 및 보증보험</span>
                                </div>
                                <span className="material-symbols-outlined text-slate-500 group-open:rotate-180 transition-transform">expand_more</span>
                            </summary>
                            <div className="p-4 space-y-3 bg-white dark:bg-slate-800">
                                <label className="flex items-start gap-3 p-3 rounded-lg border border-transparent hover:border-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all cursor-pointer">
                                    <input defaultChecked className="mt-1 w-5 h-5 rounded border-slate-300 text-yellow-600 focus:ring-yellow-600" type="checkbox" />
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-slate-900 dark:text-white">대출 불가 시 계약금 반환</p>
                                        <p className="text-xs text-slate-500 mt-0.5">건물에 하자가 있어 목적물로 인해 전세자금대출이 불가할 경우, 임대인은 계약금을 즉시 반환한다.</p>
                                    </div>
                                </label>
                            </div>
                        </details>

                    </div>

                    {/* 업데이트 버튼 */}
                    <div className="pt-4 pb-20">
                        <button className="w-full flex items-center justify-center gap-2 py-3 rounded-full border border-slate-300 text-slate-600 hover:text-yellow-600 hover:border-yellow-600 hover:bg-yellow-500/5 transition-all text-sm font-bold shadow-sm">
                            <span className="material-symbols-outlined">refresh</span>
                            <span>특약 프리뷰 새로고침</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* ========================================================= */}
            {/* 우측 패널: 특약 문서 미리보기 (Preview) 영역 */}
            {/* ========================================================= */}
            <div className="flex-1 bg-slate-100 dark:bg-slate-950 p-8 flex flex-col items-center justify-center overflow-hidden h-full">
                <div className="w-full max-w-3xl h-full flex flex-col pt-10">

                    {/* 종이 문서 형태의 컨테이너 */}
                    <div className="flex-1 bg-white dark:bg-[#1f2937] rounded-t-xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col relative h-full">

                        {/* 문서 헤더 */}
                        <div className="h-14 border-b border-slate-200 dark:border-slate-700 px-6 flex items-center justify-between bg-slate-50 dark:bg-slate-800 shrink-0">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-yellow-600 text-lg">history_edu</span>
                                <span className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">부동산 임대차계약 특약사항</span>
                            </div>
                            <span className="text-xs font-mono text-slate-500 bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">Last updated: 방금 전</span>
                        </div>

                        {/* 문서 본문 내용 (스크롤 영역) */}
                        <div className="flex-1 p-8 md:p-12 overflow-y-auto font-serif text-slate-800 dark:text-slate-200 leading-relaxed text-base">
                            <h2 className="text-2xl font-bold mb-8 text-center text-slate-900 dark:text-white font-sans underline underline-offset-8 decoration-slate-300">특 약 사 항</h2>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-bold text-lg mb-2 text-slate-800 dark:text-slate-100">[제1조] 기본 상태 유지 및 수선</h4>
                                    <ol className="list-decimal pl-5 space-y-2 text-slate-700 dark:text-gray-300 break-keep">
                                        <li className="pl-2">
                                            <span className="bg-yellow-100 dark:bg-yellow-900/30 px-1 rounded text-yellow-700 font-bold">임대인은 잔금일(또는 입주일)로부터 6개월 이내에 발생하는 중대한 하자(누수 등)에 대해 수선 의무를 부담한다.</span> 단, 임차인의 과실로 인한 훼손은 예외로 한다.
                                        </li>
                                        <li className="pl-2">전구 등 단순 소모품의 교체 비용(건당 5만 원 이하)은 임차인이 부담한다.</li>
                                    </ol>
                                </div>

                                <div>
                                    <h4 className="font-bold text-lg mb-2 text-slate-800 dark:text-slate-100">[제2조] 금지 사항 및 손해배상</h4>
                                    <p className="text-justify text-slate-700 dark:text-gray-300 break-keep leading-7">
                                        임차인은 임대인의 사전 서면 동의 없이 본 부동산에서 <span className="bg-yellow-100 dark:bg-yellow-900/30 px-1 rounded text-yellow-700 font-bold">건물 내부에서 반려동물을 사육할 수 없다.</span> 만약 이를 위반하여 적발될 시 계약을 해지할 수 있으며, 이로 인해 발생한 바닥 찍힘, 벽지 오염 및 악취 발생 시 임차인이 퇴거 시 원상복구를 위한 전문 특수 청소 및 도배/장판 교체 비용 전액을 배상하여야 한다.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-bold text-lg mb-2 text-slate-800 dark:text-slate-100">[제3조] 근저당권 및 권리 변동</h4>
                                    <p className="text-justify text-slate-700 dark:text-gray-300 break-keep leading-7">
                                        임대인은 잔금 지급일 익일까지 본 부동산에 대하여 담보권 설정, 소유권 이전 등 새로운 권리 변동을 일으키지 않는다. 만약 이를 어길 경우 본 계약은 무효로 하며, 임대인은 계약금의 배액을 배상한다.
                                    </p>
                                </div>

                                {/* 비활성화된 조항 예시 */}
                                <div className="opacity-40 select-none pointer-events-none grayscale">
                                    <h4 className="font-bold text-lg mb-2 text-slate-800 dark:text-slate-100">[제4조] 대출 보증</h4>
                                    <p className="text-justify text-slate-700 dark:text-gray-300 break-keep leading-7">
                                        본 조항은 위 체크박스 선택 해제에 따라 문서에 포함되지 않았습니다.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 하단 문서 액션 툴바 (고정) */}
                        <div className="p-4 bg-white dark:bg-[#1f2937] border-t border-slate-200 dark:border-slate-700 flex justify-between items-center shrink-0">
                            <div className="flex gap-2">
                                <button className="p-2 text-slate-500 hover:text-yellow-600 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors" title="프린트">
                                    <span className="material-symbols-outlined text-xl">print</span>
                                </button>
                            </div>
                            <div className="flex gap-3">
                                <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-yellow-500 text-yellow-600 hover:bg-yellow-500/10 font-bold text-sm transition-all shadow-sm bg-white dark:bg-slate-800">
                                    <span className="material-symbols-outlined text-lg">content_copy</span>
                                    <span>문구 복사하기</span>
                                </button>
                                <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-yellow-500 text-white hover:bg-yellow-600 shadow-lg shadow-yellow-500/30 font-bold text-sm transition-all">
                                    <span className="material-symbols-outlined text-lg">save</span>
                                    <span>템플릿 저장</span>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ContractTerms;
