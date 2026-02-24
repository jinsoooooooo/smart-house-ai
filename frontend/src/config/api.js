// API 설정 가이드
// 이 파일은 API 호출 시 사용할 기본 URL을 환경 변수에서 가져오는 역할을 합니다.
// K8s(ArgoCD) 배포 환경에서는 /config.js의 window.ENV를 최우선으로 참조합니다.

// window.ENV는 public/config.js 또는 K8s ConfigMap 마운트를 통해 주입됩니다.
export const API_BASE_URL =
    window.ENV?.VITE_API_BASE_URL ||
    import.meta.env.VITE_API_BASE_URL ||
    'http://localhost:8080/api';

/**
 * 예시 API 호출 함수:
 * 
 * export const fetchNews = async () => {
 *   const response = await fetch(`${API_BASE_URL}/news`);
 *   return response.json();
 * };
 */
