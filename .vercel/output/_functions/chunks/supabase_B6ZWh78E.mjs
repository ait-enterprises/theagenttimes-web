import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || "https://smwaxpfgiwqcsfgjqqks.supabase.co";
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtd2F4cGZnaXdxY3NmZ2pxcWtzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDc3Njk0OCwiZXhwIjoyMDg2MzUyOTQ4fQ.CKnRrXS22QaZ2W50NizJ_jLnobOmv47znqvpKL1Lpu8";
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };
