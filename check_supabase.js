import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xdmsgozimmvplxtufqdl.supabase.co';
const supabaseAnonKey = 'sb_publishable_Ddufndlw7PSuMujfLglqbQ_YRG1ArgI';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function checkSchema() {
  console.log('Checking wrong_answers table...');
  const { data, error } = await supabase
    .from('wrong_answers')
    .select('*')
    .limit(1);

  if (error) {
    console.error('Error fetching data:', error);
  } else {
    console.log('Sample record keys:', data && data.length > 0 ? Object.keys(data[0]) : 'No data found');
  }
}

checkSchema();
