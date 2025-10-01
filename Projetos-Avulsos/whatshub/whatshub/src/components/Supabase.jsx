import { createClient } from "@supabase/supabase-js"

const url = 'https://ndonzwcgxqdicpdfgnpc.supabase.co'
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kb256d2NneHFkaWNwZGZnbnBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg1Mzk4MjgsImV4cCI6MjA3NDExNTgyOH0.k9QpKYbKQ46bVRJuZzreOgp5V79Kw56jEnqHgGwseR0'

export const supabase = createClient(url, key)