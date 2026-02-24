import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

function Layout() {
    return (
        // 전체 화면 높이를 채우고, 자식 요소들을 가로로 배치 (사이드바 + 콘텐츠 영역)
        <div className="relative flex h-screen w-full overflow-hidden bg-gray-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100">

            {/* 
        좌측에 고정되는 네비게이션 컴포넌트입니다.
        화면 이동 시에도 사이드바는 다시 렌더링되지 않고 공통으로 유지됩니다.
      */}
            <Sidebar />

            {/* 
        우측 메인 콘텐츠 영역입니다.
        flex-1을 주어 남은 공간을 모두 차지하도록 합니다.
        오버플로우 시 내부에서 스크롤 되도록 설정합니다.
      */}
            <main className="flex-1 overflow-y-auto">
                {/* React Router의 Outlet 태그는 자식 라우트의 컴포넌트가 그려질 위치를 나타냅니다. */}
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;
