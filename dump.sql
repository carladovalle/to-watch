--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: series; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.series (
    id integer NOT NULL,
    name text,
    platform text,
    genre text,
    status text,
    note text
);


--
-- Data for Name: series; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.series VALUES (1, 'game of thrones', 'hbo max', 'drama', 'in progress', 'good');
INSERT INTO public.series VALUES (2, 'the big bang theory', 'hbo max', 'comedy', 'in progress', 'good');
INSERT INTO public.series VALUES (3, 'manifest', 'netflix', 'drama', 'in progress', 'good');


--
-- Name: series series_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.series
    ADD CONSTRAINT series_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

