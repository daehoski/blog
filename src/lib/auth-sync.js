import { supabase } from './supabase.js';

/**
 * Synchronizes host wrong answers from localStorage to Supabase.
 * This should be called immediately after a successful login.
 */
export async function syncGuestData(userId) {
  const guestData = JSON.parse(localStorage.getItem('guest_wrong_answers') || '{}');
  const quizIds = Object.keys(guestData);

  if (quizIds.length === 0) return;

  console.log(`Syncing ${quizIds.length} guest records for user ${userId}...`);

  const records = quizIds.map(id => ({
    user_id: userId,
    quiz_id: parseInt(id),
    selected_options: guestData[id].selected,
    created_at: guestData[id].date || new Date().toISOString()
  }));

  try {
    const { error } = await supabase
      .from('wrong_answers')
      .upsert(records, { onConflict: ['user_id', 'quiz_id'] });

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
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: window.location.origin + '/auth/callback'
    }
  });

  if (error) {
    console.error('Login error:', error.message);
    alert('로그인 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.');
  }
}

/**
 * Checks the current session and signs out if necessary.
 */
export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) console.error('Sign out error:', error.message);
  window.location.reload();
}
