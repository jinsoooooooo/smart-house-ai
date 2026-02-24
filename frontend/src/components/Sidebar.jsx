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
        <aside className="w-64 flex-shrink-0 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col justify-between p-4">
            <div className="flex flex-col gap-8">

                {/* 상단 로고 및 타이틀 영역 */}
                <div className="flex items-center gap-3 px-2">
                    <div className="bg-yellow-500 rounded-lg size-10 flex items-center justify-center text-white">
                        <span className="material-symbols-outlined">gavel</span>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-slate-900 dark:text-slate-100 text-base font-bold leading-none">Smart Home AI</h1>
                        <p className="text-slate-500 dark:text-slate-400 text-xs font-normal">Real Estate Assistant</p>
                    </div>
                </div>

                {/* 네비게이션 메뉴 영역 */}
                <nav className="flex flex-col gap-1">
                    {menuItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            // NavLink는 현재 경로와 일치하면 isActive를 true로 제공합니다.
                            className={({ isActive }) => clsx(
                                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors cursor-pointer",
                                isActive
                                    ? "bg-yellow-500/10 text-yellow-600 font-semibold" // 활성화 상태 스타일
                                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium" // 비활성화 상태 스타일
                            )}
                        >
                            <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
                            <p className="text-sm">{item.label}</p>
                        </NavLink>
                    ))}
                </nav>
            </div>

            {/* 하단 프로필 영역 (클릭 시 히스토리 화면으로 이동) */}
            <div className="flex flex-col gap-4 border-t border-slate-200 dark:border-slate-800 pt-4">
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
