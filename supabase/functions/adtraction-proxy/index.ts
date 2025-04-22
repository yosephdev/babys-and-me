// supabase/functions/adtraction-proxy/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { corsHeaders } from "../_shared/cors.ts"

const ADTRACTION_API_URL = "https://api.adtraction.com/v3"

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const url = new URL(req.url)
    const path = url.pathname.replace('/adtraction-proxy', '')
    const apiToken = Deno.env.get('ADTRACTION_API_TOKEN')

    if (!apiToken) {
      throw new Error('ADTRACTION_API_TOKEN is not set')
    }

    // Forward the request to Adtraction API
    const response = await fetch(`${ADTRACTION_API_URL}${path}${url.search}`, {
      method: req.method,
      headers: {
        'Authorization': `Bearer ${apiToken}`,
        'Content-Type': 'application/json',
        ...Object.fromEntries(req.headers)
      },
      body: req.method !== 'GET' ? await req.text() : undefined
    })

    const data = await response.json()

    return new Response(JSON.stringify(data), {
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json'
      },
      status: response.status
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json'
      },
      status: 500
    })
  }
})