--
-- PostgreSQL database dump
--

-- Dumped from database version 13.21
-- Dumped by pg_dump version 13.21

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

--
-- Name: pgcrypto; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA public;


--
-- Name: EXTENSION pgcrypto; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pgcrypto IS 'cryptographic functions';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    name text NOT NULL,
    price numeric(10,2) NOT NULL,
    image text,
    description text,
    category text
);


ALTER TABLE public.products OWNER TO postgres;

--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    username text NOT NULL,
    password text NOT NULL,
    role text DEFAULT 'visitor'::text NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products (id, name, price, image, description, category) FROM stdin;
188ec1e8-ca72-47c7-a6fd-69c15390a9a1	FitWear Comfy Sweatpants	42.99	https://cdn.shopify.com/s/files/1/0156/6146/files/images-VarsityOversizedJoggerLightGreyCoreMarlA3B2X_GBCN_2045_640x.jpg?v=1752172099	Tapered joggers with zip pockets and adjustable waistband	Fitness
a3e210d1-2576-4dcb-9c09-177cb6f7ceb4	FitWear Strike Soccer Cleats	79.99	https://images.prodirectsport.com/ProductImages/Main/1018632_Main_1818080.jpg	Lightweight cleats with precision strike zone and firm ground studs	Soccer
129ccf76-7dcc-46f7-aa1f-4b4caf4d6c38	FitWear Team Jersey	35.99	https://soccerwearhouse.com/cdn/shop/files/InterMiamiAuthenticAwayJerseyMessiPlayerVersionadidas.jpg?v=1700420910	Classic fit soccer jersey with ventilation panels	Soccer
baba4a6f-2ab5-401f-9aa8-404fff0df817	FitWear Racing Swimsuit	49.99	https://antoninias.com/cdn/shop/products/womens-designer-swimwear-luxury-swimwear-antoninias-3-30720463896820.jpg?v=1701347931&width=2400	Competition swimsuit with hydrodynamic design and chlorine resistance	Swimming
5f030393-17bc-4c7d-b5ab-715a2995525d	FitWear Aqua Goggles	18.99	https://mandamalta.com/images/product/CL%20BLUE%201.jpg	Anti-fog swimming goggles with UV protection and adjustable strap	Swimming
21cf727c-03b4-4aa4-a891-b850bcde1f25	FitWear Goalkeeper Gloves	24.99	https://images-cdn.ubuy.co.in/65bc105656e69b238c01aac6-adidas-predator-gl-pro-goalkeeper-gloves.jpg	Latex palm gloves with finger protection and secure wrist closure	Soccer
9bc4c195-bd3b-4e47-99ae-8d6a02028ad2	FitWear Tennis Skort	32.99	https://m.media-amazon.com/images/I/61z1VqbPGJL._UY1000_.jpg	Pleated skort with built-in compression shorts and ball pocket	Tennis
b56e9318-0efb-4b57-9f81-14684961dee4	FitWear Match Polo	38.99	https://cdn.shopify.com/s/files/1/0115/3879/2544/files/CHG13043_copy_1539cb56-088d-4eda-88ed-bacbcb995c8b.jpg?v=1723232435	Classic tennis polo with UV protection and moisture management	Tennis
010deae4-a3ed-43a5-aafb-c6dc080d4b6d	FitWear Court Ace Shoes	74.99	https://images2.minutemediacdn.com/image/upload/c_crop,w_4000,h_2250,x_0,y_1120/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/kicks/01j7ybxh1nfxm51tzfqf.jpg	Tennis shoes with lateral support and durable outsole for all court surfaces	Tennis
533f2ed1-9671-4c73-99e9-49448c5cd88c	FitWear Swim Trunks	26.99	https://stagprovisions.com/cdn/shop/files/Cowboy_PDP.jpg?v=1748352725	Quick-dry swim trunks with mesh lining and drawstring waist	Swimming
8a3ac155-027a-4bd5-bcbd-36a2b399ff41	FitWear Track Jacket	52.99	https://cdn.shopify.com/s/files/1/0156/6146/files/RestDaySweats1-4ZipBlack-A3A3Z-BBBB-1007.141_e682710e-391e-4350-b249-462c35906ee6_640x.jpg?v=1722505067	Zip-up track jacket with side pockets and ribbed cuffs	Casual
3e77e092-299b-4097-ba73-b2add1e78ec9	FitWear Essential Hoodie	44.99	https://cdn.shopify.com/s/files/1/0156/6146/files/CrestOversizedHoodieGSLifestyleBrownA5A8O-NC0S-1569-Edit-2_a78beafa-3283-4529-bf76-c0b51061bf58_640x.jpg?v=1744898781	Cozy fleece hoodie with kangaroo pocket and adjustable hood	Casual
7c65f4bc-e421-4b05-96d0-afb1a4469a88	FitWear Lifestyle Sneakers	65.99	https://www.anta.ph/cdn/shop/files/122441805-1-2.jpg?v=1733214606	Versatile sneakers perfect for everyday wear with cushioned sole	Casual
11a41ccf-f9cd-498c-bdca-b7285bccec46	FitWear Pro Running Shirt	32.99	https://nfeapparel.com/cdn/shop/collections/S8A4598_1400x.jpg?v=1664237126	Ultra-lightweight moisture-wicking fabric with reflective details for night runs	Running
2b14aa3f-a11b-40e4-bc55-2b4a6f4df946	FitWear Elite Running Shoes	95.99	https://fullscopesports.com/wp-content/uploads/2022/07/Topo-Athletic-Women-Ultrafly-4-Comfortable-Lightweight-5MM-Drop-Road-Running-Shoes-Profile-700x467.jpg	Responsive cushioning with breathable mesh upper for long-distance comfort	Running
5dfe366e-434d-4d41-87af-5b757f8245a2	FitWear Marathon Shorts	28.99	https://startfitness.co.uk/cdn/shop/files/Puma-Run-Favourite-Velocity-2-In-1-Shorts-525763-01.jpg?v=1721035461&width=1946	Compression shorts with built-in liner and side pockets for essentials	Running
5dca0ec1-dd6d-4842-afe7-74eae4ab285e	FitWear Performance Leggings	45.99	https://m.media-amazon.com/images/I/61Mg-9R4IjL._UY1000_.jpg	High-waisted compression leggings with side phone pocket	Running
922ca6a2-fc23-4b39-aca0-a4ab5486f0de	FitWear Athletic Shorts	34.99	https://cdn.shopify.com/s/files/1/0156/6146/files/images-ANNOTATED_PDP_23626109_640x.jpg?v=1753718671	Lightweight shorts with elastic waistband and quick-dry fabric	Basketball
89076c4a-1321-4607-ba63-4af34ad577af	FitWear Flex Tank Top	24.99	https://cdn.shopify.com/s/files/1/0156/6146/files/images-ElementTankGSBlackA2C4U_BB2J_0176_640x.jpg?v=1747310548	Loose-fit tank with side slits for maximum range of motion	Fitness
380fd693-25b4-4c44-b006-a63a71c48f48	FitWear Power Sports Bra	29.99	https://cdn.shopify.com/s/files/1/0156/6146/files/RUCHEDSPORTSBRAGSWeightedPurpleB2A7A-PB7P-1330-0159_6e2c59b7-371f-42ef-ac02-245377b6baa1_640x.jpg?v=1738170558	High-support sports bra with removable padding and racerback design	Fitness
f5683bb3-7ec3-4584-97f4-79733711bf3d	FitWear Compression Shirt	19.99	https://cdn.shopify.com/s/files/1/0156/6146/files/images-ElementBaselayerLongSleeveT_ShirtGSBlackA2B5M_BB2J_0320_640x.jpg?v=1747314005	Padded palm gloves with wrist support for weightlifting	Fitness
a061190d-001f-4175-804a-54ff1735ba0c	FitWear Court Master Shoes	89.99	https://cdn.flightclub.com/TEMPLATE/150564/1.jpg	High-top basketball shoes with ankle support and grip technology	Basketball
39eb1cc0-612f-40cf-a0cf-404d715e5e8c	FitWear Game Time Jersey	39.99	https://feeds.frgimages.com/ss4/https://feeds.frgimages.com/ss4/altimages/ss4/p-13363704_u-rpoaedbz5jqi093g2s16_v-ee41b1a26d5c4b0db3220e71b9959964.jpg?_hv=3	Breathable mesh jersey with moisture-wicking technology	Basketball
a6a6c5f7-d8ad-4559-9950-68a519ded9ee	FitWear Comfort Sweatpants	36.99	https://cdn.shopify.com/s/files/1/0156/6146/files/images-EssentialOversizedPantGSPebbleGreyA2A7T_GB7P7999_A_640x.jpg?v=1752497153	Soft cotton blend sweatpants with elastic waistband and cuffed ankles	Casual
6ae8fa8c-d033-47f7-8a54-140d9a5f14e2	FitWear Performance Cycling Jersey	48.99	https://zootsports.com/cdn/shop/products/zoot-sports-cycle-apparel-womens-elite-cycle-bib-elite-15784418541647_1800x1800.jpg?v=1697432727	Aerodynamic jersey with rear pockets and full-length zipper	Cycling
2292980f-5815-4862-a1f3-5c8a1dded6c7	FitWear Cycle Shorts	41.99	https://www.ornotbike.com/cdn/shop/files/Ornot_Women_Droptail_CargoBib_Black_01.jpg?v=1718149517	Padded cycling shorts with compression fit and reflective accents	Cycling
795107d5-8676-4026-9f06-7e7b708db447	FitWear Cycling Gloves	22.99	https://cdn.mos.cms.futurecdn.net/9yJef8vVUeQp3ii6Rn2CHg.jpg	Fingerless gloves with gel padding and breathable mesh back	Cycling
0647c2a0-1647-479c-879b-b3459b6cad1e	FitWear Flow Yoga Pants	43.99	https://shop.crzyoga.com/cdn/shop/files/butterluxe_e5b07602-6053-4596-ab42-1c8bf8d96e8d_1024x1024.jpg	High-waisted yoga pants with four-way stretch and flat seams	Yoga
8eebfa0d-56d5-4abe-ae3e-3f3ffc26e6c6	FitWear Mindful Sports Bra	27.99	https://thesportsedit.com/cdn/shop/products/Alo-Yoga-WELLNESS-BRA-W9291R-WHITE-0004.jpg?v=1657171908	Light support bra with seamless construction and soft fabric	Yoga
04ce6849-9108-4216-89d1-36046d297c73	FitWear Zen Yoga Mat	29.99	https://www.popflexactive.com/cdn/shop/products/BF-PF-Pink-Prisma-Thick-YogaMat-Layered-Rolled.jpg?v=1663191898&width=667	Non-slip yoga mat with alignment lines and eco-friendly materials	Yoga
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, username, password, role) FROM stdin;
3296c5da-c7c1-4c19-a627-ee35d91a8c61	admin	admin	admin
446fcf80-2996-4c99-bd27-5f410bb19d3b	john	john	visitor
\.


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users users_username_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);


--
-- PostgreSQL database dump complete
--

