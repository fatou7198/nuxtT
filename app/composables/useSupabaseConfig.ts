export function isSupabaseConfigured() {
  const config = useRuntimeConfig().public;
  return (
    !!config.supabaseUrl &&
    !!config.supabaseKey &&
    config.supabaseUrl !== 'your-supabase-url' &&
    config.supabaseKey !== 'your-supabase-anon-key'
  );
}
