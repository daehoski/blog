import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xdmsgozimmvplxtufqdl.supabase.co';
const supabaseAnonKey = 'sb_publishable_Ddufndlw7PSuMujfLglqbQ_YRG1ArgI';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function probeSchema() {
  console.log('Probing schema by intentional error...');
  // Try to insert with a presumably non-existent column 'probe_column'
  // This might return a list of valid columns in some error messages or we can just try common ones.
  const { error } = await supabase
    .from('wrong_answers')
    .insert({ invalid_column_name_test: 'test' });

  if (error) {
    console.log('Error Message:', error.message);
    if (error.details) console.log('Error Details:', error.details);
    if (error.hint) console.log('Error Hint:', error.hint);
  }
}

probeSchema();
