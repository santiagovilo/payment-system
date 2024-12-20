PGDMP      /                |            payment_system    17.2    17.2     !           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false            "           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            #           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            $           1262    16401    payment_system    DATABASE     �   CREATE DATABASE payment_system WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Spain.1252';
    DROP DATABASE payment_system;
                     postgres    false            %           0    0    DATABASE payment_system    COMMENT     +   COMMENT ON DATABASE payment_system IS 'a';
                        postgres    false    4900            &           0    0    DATABASE payment_system    ACL     �   REVOKE CONNECT,TEMPORARY ON DATABASE payment_system FROM PUBLIC;
REVOKE ALL ON DATABASE payment_system FROM postgres;
GRANT ALL ON DATABASE payment_system TO postgres WITH GRANT OPTION;
                        postgres    false    4900            �            1259    16414    Payments    TABLE     �  CREATE TABLE public."Payments" (
    id integer NOT NULL,
    amount double precision NOT NULL,
    reference character varying(255) NOT NULL,
    bank character varying(255) NOT NULL,
    "mobileNumber" character varying(255) NOT NULL,
    "paymentProof" character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Payments";
       public         heap r       postgres    false            �            1259    16413    Payments_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Payments_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."Payments_id_seq";
       public               postgres    false    220            '           0    0    Payments_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."Payments_id_seq" OWNED BY public."Payments".id;
          public               postgres    false    219            �           2604    16417    Payments id    DEFAULT     n   ALTER TABLE ONLY public."Payments" ALTER COLUMN id SET DEFAULT nextval('public."Payments_id_seq"'::regclass);
 <   ALTER TABLE public."Payments" ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    220    219    220                      0    16414    Payments 
   TABLE DATA           {   COPY public."Payments" (id, amount, reference, bank, "mobileNumber", "paymentProof", "createdAt", "updatedAt") FROM stdin;
    public               postgres    false    220   <       (           0    0    Payments_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."Payments_id_seq"', 22, true);
          public               postgres    false    219            �           2606    16421    Payments Payments_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Payments"
    ADD CONSTRAINT "Payments_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."Payments" DROP CONSTRAINT "Payments_pkey";
       public                 postgres    false    220               �  x���Mo1�3�{��<�=����"�Ҩ� �Am�����.��WPw�Hl�&��/��q��yh�y���w�}6�A�b���ϟ�.��刎Џ����
�`�?�fQ�>���Q��P���5|1�J�p�)��?���X{�N�{��P��L�L�$ �9�M�H�P#Q��L6ib�a�D�6�e�~&J�jF�a�D�42p�N.':��:�#���)��ׄ��Z��)l���6Y��[���8�D�ׯv�m�L�H�����P���]��df*Võ�S-Q CIA����L��%�R �0U"8��4�P��P�.T%R🝼e�ω'3s���x����#��Μ�
��q@�O����5Ϟ6�!��<�ؐ3�ߗ�vM�E�����H�`����p�K�5r�U"~O���I7-ttj��@`�p+8�dƕ�-�Ym7����g�w���u~|���z��jo�p���&h5�z�@>���沰��k�h�AN�q��z��i��D^6���5&oD
�6_n~�}��oN��ˊ_�kF>rV��2�|ͽֈ;hd�י���\C�{�!t.
f�a�|���[�B3�#�3S��'��"����>�Og���������\A��A�"u *�B�X�Z�ۻ������aq��e�����jc�ͨF
�m����d�O���|r/�l�pw;{\��6(�FW4��(�8&���Ʃ֊�R+��
��#     