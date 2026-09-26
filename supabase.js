import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://wcmiyrroskstgzwbvsor.supabase.co';
const SUPABASE_KEY = 'Sb_publishable_Hia5ResownbSTejq-DcWkA_HbZTcsZl';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
