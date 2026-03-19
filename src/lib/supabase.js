import { createClient } from '@supabase/supabase-js';

// Astro uses import.meta.env for environment variables.
// Variables MUST start with PUBLIC_ to be accessible in the browser.
const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Supabase 설정값이 없습니다! PUBLIC_SUPABASE_URL 또는 PUBLIC_SUPABASE_ANON_KEY 환경 변수를 확인하세요.');
  console.log('현재 인식된 PUBLIC_ 변수들:', Object.keys(import.meta.env).filter(k => k.startsWith('PUBLIC_')));
}

export const supabase = (supabaseUrl && supabaseAnonKey) 
  ? createClient(supabaseUrl, supabaseAnonKey) 
  : null;

if (supabase) {
  console.log('✅ Supabase 클라이언트 초기화 성공');
} else {
  console.warn('⚠️ Supabase 클라이언트 초기화 실패. 인증 및 동기화 기능이 비활성화됩니다.');
}
