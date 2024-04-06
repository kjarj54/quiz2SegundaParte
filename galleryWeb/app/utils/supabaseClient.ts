import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://tmosiqsbczzhcojuzulr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRtb3NpcXNiY3p6aGNvanV6dWxyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIzMTA0OTgsImV4cCI6MjAyNzg4NjQ5OH0.e62IJXfxmG7Oac7z4IdqUYenVeIsz3bvRYrs3YxcJCA';

export const supabase = createClient(supabaseUrl, supabaseKey);
