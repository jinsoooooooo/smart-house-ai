import React from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx'; // 클래스 조합 유틸리티

function Sidebar() {
    // 사이드바 메뉴 항목 데이터 배열
    const menuItems = [
        { path: '/', icon: 'dashboard', label: 'Dashboard' },
        { path: '/chatbot', icon: 'chat_bubble', label: 'Legal Chatbot' },
        { path: '/diagnosis', icon: 'shield_with_heart', label: 'Risk Check' },
        { path: '/contract', icon: 'description', label: 'Contract Help' },
        { path: '/news', icon: 'newspaper', label: 'Market News' },
    ];

    return (
        <aside className="flex-shrink-0 bg-white dark:bg-slate-900 flex w-full h-[68px] pb-safe md:h-full md:w-64 border-t md:border-t-0 md:border-r border-slate-200 dark:border-slate-800 flex-row md:flex-col justify-between p-1 md:p-4 z-50">
            <div className="flex flex-row md:flex-col md:gap-8 w-full md:w-auto">

                {/* 상단 로고 및 타이틀 영역 (모바일에서는 숨김) */}
                <div className="hidden md:flex items-center gap-3 px-2">
                    <div className="bg-blue-600 rounded-lg size-10 flex items-center justify-center text-white">
                        <span className="material-symbols-outlined">gavel</span>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-slate-900 dark:text-slate-100 text-base font-bold leading-none">Smart Home AI</h1>
                        <p className="text-slate-500 dark:text-slate-400 text-xs font-normal">Real Estate Assistant</p>
                    </div>
                </div>

                {/* 네비게이션 메뉴 영역 */}
                <nav className="flex flex-row md:flex-col gap-1 w-full md:w-auto justify-around md:justify-start items-center md:items-stretch">
                    {menuItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            // NavLink는 현재 경로와 일치하면 isActive를 true로 제공합니다.
                            className={({ isActive }) => clsx(
                                "flex flex-col md:flex-row items-center justify-center md:justify-start gap-1 md:gap-3 px-1 md:px-3 py-1.5 md:py-2.5 rounded-lg transition-colors cursor-pointer min-w-[56px] md:min-w-0",
                                isActive
                                    ? "md:bg-blue-600/10 text-blue-600 font-semibold" // 활성화 상태 스타일 (코발트 블루)
                                    : "text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium" // 비활성화 상태 스타일
                            )}
                        >
                            <span className={clsx("material-symbols-outlined", "text-[24px] md:text-[22px]")}>{item.icon}</span>
                            <p className="text-[10px] md:text-sm">{item.label}</p>
                        </NavLink>
                    ))}

                    {/* 모바일 전용 프로필 (히스토리) 아이콘 */}
                    <NavLink
                        to="/history"
                        className={({ isActive }) => clsx(
                            "md:hidden flex flex-col items-center justify-center gap-1 px-1 py-1.5 rounded-lg transition-colors cursor-pointer min-w-[56px]",
                            isActive ? "text-blue-600 font-semibold" : "text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
                        )}
                    >
                        {({ isActive }) => (
                            <>
                                <div className={clsx("size-[24px] rounded-full overflow-hidden border-2", isActive ? "border-blue-600" : "border-transparent")}>
                                    <img
                                        className="w-full h-full object-cover"
                                        alt="User"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdILWqsFj-9DpVpzd18vYMEwABPTcGB40yg0WYiJr8RKOWZsL_GB5GM0sszb8WEN07pZOLZaxyCN0zTu6JOMu6MxevU30QaOjjR9sjAhI5MXTjpvDTgS2zvPAil2zb7FZUNI29jIelnpSfTUum1j1_mWQoypgZ8kq0t_klEw4-ExjcGhmqJy37BYkuQEPb_a0QkyDbzY6D9NDPSU3HkLQUReJ-7f0kev7Pdr9zMt4MwvrU7jG8R19q8vrbcJHccdyL-wyR7Ia6CMDt"
                                    />
                                </div>
                                <p className="text-[10px]">History</p>
                            </>
                        )}
                    </NavLink>
                </nav>
            </div>

            {/* 데스크탑 전용 하단 프로필 영역 (클릭 시 히스토리 화면으로 이동) */}
            <div className="hidden md:flex flex-col gap-4 border-t border-slate-200 dark:border-slate-800 pt-4">
                <NavLink to="/history" className="flex items-center gap-3 px-2 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg p-2 transition-colors">
                    <div className="size-9 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                        <img
                            className="w-full h-full object-cover"
                            alt="User profile portrait"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdILWqsFj-9DpVpzd18vYMEwABPTcGB40yg0WYiJr8RKOWZsL_GB5GM0sszb8WEN07pZOLZaxyCN0zTu6JOMu6MxevU30QaOjjR9sjAhI5MXTjpvDTgS2zvPAil2zb7FZUNI29jIelnpSfTUum1j1_mWQoypgZ8kq0t_klEw4-ExjcGhmqJy37BYkuQEPb_a0QkyDbzY6D9NDPSU3HkLQUReJ-7f0kev7Pdr9zMt4MwvrU7jG8R19q8vrbcJHccdyL-wyR7Ia6CMDt"
                        />
                    </div>
                    <div className="flex flex-col">
                        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Alex Thompson</p>
                        <p className="text-xs text-slate-500">Premium Plan</p>
                    </div>
                </NavLink>
            </div>
        </aside>
    );
}

export default Sidebar;
