import { supabase } from './supabase';

/**
 * Synchronizes host wrong answers from localStorage to Supabase.
 * This should be called immediately after a successful login.
 */
export async function syncGuestData(userId) {
  const guestData = JSON.parse(localStorage.getItem('guest_wrong_answers') || '{}');
  const quizIds = Object.keys(guestData);

  if (!supabase || quizIds.length === 0) return;

  console.log(`Syncing ${quizIds.length} guest records for user ${userId}...`);

  const records = quizIds.map(id => ({
    user_id: userId,
    question_id: String(id)
  }));

  try {
    const { error } = await supabase
      .from('wrong_answers')
      .upsert(records, { onConflict: ['user_id', 'question_id'] });

    if (error) {
      console.error('Error syncing guest data:', error);
    } else {
      console.log('Guest data synced successfully. Clearing localStorage...');
      localStorage.removeItem('guest_wrong_answers');
    }
  } catch (err) {
    console.error('Unexpected error during sync:', err);
  }
}

/**
 * Initiates Google Login flow (OAuth).
 */
export async function signInWithGoogle() {
  console.log('🔐 Attempting to login with Google...');

  if (!supabase) {
    console.error('❌ Login FAILED: Supabase client is not initialized. Check PUBLIC_SUPABASE_URL and PUBLIC_SUPABASE_ANON_KEY in your deployment environment variables.');
    alert('서버 설정 오류로 로그인을 진행할 수 없습니다. 관리자에게 문의하세요.');
    return;
  }

  const redirectTo = window.location.origin + '/auth/callback';
  console.log('🔁 Redirect URL:', redirectTo);

  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo,
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        },
      }
    });

    if (error) {
      console.error('❌ signInWithOAuth ERROR:');
      console.error('   - message:', error.message);
      console.error('   - status:', error.status);
      console.error('   - full error object:', JSON.stringify(error, null, 2));
      alert(`로그인 오류: ${error.message}`);
      return;
    }

    console.log('✅ signInWithOAuth successful. Redirecting to Google...', data);
  } catch (err) {
    console.error('❌ UNEXPECTED EXCEPTION in signInWithGoogle:');
    console.error('   - name:', err?.name);
    console.error('   - message:', err?.message);
    console.error('   - stack:', err?.stack);
    console.error('   - full error:', err);
    alert('예상치 못한 로그인 오류가 발생했습니다. 개발자 콘솔을 확인하세요.');
  }
}

/**
 * Checks the current session and signs out if necessary.
 */
export async function signOut() {
  if (!supabase) {
    window.location.reload();
    return;
  }

  const { error } = await supabase.auth.signOut();
  if (error) console.error('Sign out error:', error.message);
  window.location.reload();
}
