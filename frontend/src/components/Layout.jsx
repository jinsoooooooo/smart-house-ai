import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

function Layout() {
    return (
        // 전체 화면 높이를 채우고, 자식 요소들을 반응형으로 배치 
        // 모바일: flex-col-reverse (사이드바가 아래로), 데스크탑: flex-row (사이드바가 왼쪽으로)
        <div className="relative flex flex-col-reverse md:flex-row h-[100dvh] w-full overflow-hidden bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100">

            {/* 
        반응형 네비게이션 컴포넌트입니다.
        화면 이동 시에도 사이드바는 다시 렌더링되지 않고 공통으로 유지됩니다.
      */}
            <Sidebar />

            {/* 
        우측(데스크탑) 혹은 상단(모바일) 메인 콘텐츠 영역입니다.
        flex-1을 주어 남은 공간을 모두 차지하도록 합니다.
        오버플로우 시 내부에서 스크롤 되도록 설정합니다.
      */}
            <main className="flex-1 min-h-0 overflow-y-auto">
                {/* React Router의 Outlet 태그는 자식 라우트의 컴포넌트가 그려질 위치를 나타냅니다. */}
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;
