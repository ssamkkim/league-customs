import { createClient } from '@supabase/supabase-js';
import { Database } from './schema';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export async function getMatches() {
  return await supabase.from('matches').select('data');
}

type MatchesResponse = Awaited<ReturnType<typeof getMatches>>;
export type MatchesResponseSuccess = MatchesResponse['data'];
export type MatchesResponseError = MatchesResponse['error'];
