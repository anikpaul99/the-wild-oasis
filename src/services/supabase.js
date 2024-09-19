import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://hheglfitfeadspiktlsc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhoZWdsZml0ZmVhZHNwaWt0bHNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA2OTUyMzgsImV4cCI6MjAwNjI3MTIzOH0.GnarD53APloUWBTGG0BqEeLHCmAlrwvsuyrzi6X4C3g";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
