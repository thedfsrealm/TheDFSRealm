// utils/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// These values will come from your Supabase project
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.warn("⚠️ Missing Supabase environment variables. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in your project settings.");
}

// Create a single supabase client for the whole project
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
