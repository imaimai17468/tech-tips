GRANT ALL ON TABLE public.users TO postgres;
GRANT ALL ON TABLE public.users TO anon;
GRANT ALL ON TABLE public.users TO authenticated;
GRANT ALL ON TABLE public.users TO service_role;

GRANT ALL ON TABLE public.stocks TO postgres;
GRANT ALL ON TABLE public.stocks TO anon;
GRANT ALL ON TABLE public.stocks TO authenticated;
GRANT ALL ON TABLE public.stocks TO service_role;

GRANT ALL ON TABLE public.tips TO postgres;
GRANT ALL ON TABLE public.tips TO anon;
GRANT ALL ON TABLE public.tips TO authenticated;
GRANT ALL ON TABLE public.tips TO service_role;
