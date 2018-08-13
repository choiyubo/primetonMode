
drop table O_OPERATOR cascade constraints;


create table O_OPERATOR  (
   OPERATOR_ID          NUMBER(18)                      not null,
   USER_ID              VARCHAR2(20),
   USER_NAME            VARCHAR2(20)                    not null,
   BIRTHDAY             DATE,
   GENDER               CHAR(1),
   POSTCODE             CHAR(6),
   ADDRESS              VARCHAR2(128),
   PHONE                VARCHAR2(20),
   EMAIL                VARCHAR2(128),
   MEMO                 VARCHAR2(512),
   ORG_ID				NUMBER(18),
   constraint PK_O_OPERATOR primary key (OPERATOR_ID)
);

insert into O_OPERATOR (OPERATOR_ID, USER_NAME, USER_ID, BIRTHDAY, GENDER, PHONE, ADDRESS, POSTCODE) values(1000021,'zhangsanfeng','230702195701250544',TO_DATE('19570125','yyyymmdd'),'M','88080001','no1,zhongguancun street,haidian of peking', '100000');
insert into O_OPERATOR (OPERATOR_ID, USER_NAME, USER_ID, BIRTHDAY, GENDER, PHONE, ADDRESS, POSTCODE) values(1000022,'zhangwuji','230702197211301213',TO_DATE('19721130','yyyymmdd'),'M','88080002','the fourth floor,no 456 bibo road at zhangjiang high technology of shanghai', '201203');
insert into O_OPERATOR (OPERATOR_ID, USER_NAME, USER_ID, BIRTHDAY, GENDER, PHONE, ADDRESS, POSTCODE) values(1000023,'zhangxiaobao','230406197405190012',TO_DATE('19740519','yyyymmdd'),'F','88080003','the 1301 room ,tianchuang technology building,no 8,caihefang road,haidian of peking', '100000');
insert into O_OPERATOR (OPERATOR_ID, USER_NAME, USER_ID, BIRTHDAY, GENDER, PHONE, ADDRESS, POSTCODE) values(1000024,'zhaodahai','230403197203310515',TO_DATE('19720331','yyyymmdd'),'M','88080004','the 2102-2104 room yangcheng national& center building,xiyudong road,tianhe of zhuangzhou', '210000');
insert into O_OPERATOR (OPERATOR_ID, USER_NAME, USER_ID, BIRTHDAY, GENDER, PHONE, ADDRESS, POSTCODE) values(1000025,'zhaoxiaoxin','230105770508001',TO_DATE('19770508','yyyymmdd'),'M','88080005','no 22,zhongguancun street,haidian of peking', '100000');
insert into O_OPERATOR (OPERATOR_ID, USER_NAME, USER_ID, BIRTHDAY, GENDER, PHONE, ADDRESS, POSTCODE) values(1000026,'lizhongzheng','230103560419093',TO_DATE('19560419','yyyymmdd'),'F','88080006','the 209-210 room,B/no12,fuhe foundation,chuangxinqibu center,gaoxin of chengdu', '610000');
insert into O_OPERATOR (OPERATOR_ID, USER_NAME, USER_ID, BIRTHDAY, GENDER, PHONE, ADDRESS, POSTCODE) values(1000027,'liyanan','230103196612241927',TO_DATE('19661224','yyyymmdd'),'M','88080007','7 building tuanjinrong hing tech park,huoju country,national high tech area of changsha', '410000');
insert into O_OPERATOR (OPERATOR_ID, USER_NAME, USER_ID, BIRTHDAY, GENDER, PHONE, ADDRESS, POSTCODE) values(1000028,'chengfengwu','230108197611220426',TO_DATE('19761122','yyyymmdd'),'M','88080008','the 601 room,south building of qiaoning,no 387,zhongshannan road of nanjing', '320000');
insert into O_OPERATOR (OPERATOR_ID, USER_NAME, USER_ID, BIRTHDAY, GENDER, PHONE, ADDRESS, POSTCODE) values(1000029,'chensanxiao','230702195411200012',TO_DATE('19541120','yyyymmdd'),'M','88080009','no26,zhongguancun street,haidian of peking', '100000');
insert into O_OPERATOR (OPERATOR_ID, USER_NAME, USER_ID, BIRTHDAY, GENDER, PHONE, ADDRESS, POSTCODE) values(1000030,'wuyatai','232700680122045',TO_DATE('19680122','yyyymmdd'),'M','88080010','no421,zhongguancun east street,haidian of peking', '100000');
insert into O_OPERATOR (OPERATOR_ID, USER_NAME, USER_ID, BIRTHDAY, GENDER, PHONE, ADDRESS, POSTCODE) values(1000031,'wuxiaosan','110107197004080050',TO_DATE('19700408','yyyymmdd'),'F','88080011','the fourth floor,no 456 bibo road at zhangjiang high technology of shanghai', '100000');
insert into O_OPERATOR (OPERATOR_ID, USER_NAME, USER_ID, BIRTHDAY, GENDER, PHONE, ADDRESS, POSTCODE) values(1000032,'leixiaoluo','232700194209050211',TO_DATE('19420905','yyyymmdd'),'M','88080012','no22,zhongguancun street,haidian of peking', '100000');
insert into O_OPERATOR (OPERATOR_ID, USER_NAME, USER_ID, BIRTHDAY, GENDER, PHONE, ADDRESS, POSTCODE) values(1000033,'leihaodong','230502197003030964',TO_DATE('19700303','yyyymmdd'),'F','88080013','zhongguancun street,haidian of peking', '100000');
insert into O_OPERATOR (OPERATOR_ID, USER_NAME, USER_ID, BIRTHDAY, GENDER, PHONE, ADDRESS, POSTCODE) values(1000034,'liuyixi','230702195804160023',TO_DATE('19580416','yyyymmdd'),'F','88080014','no100,zhongguancun street,haidian of peking', '100000');
insert into O_OPERATOR (OPERATOR_ID, USER_NAME, USER_ID, BIRTHDAY, GENDER, PHONE, ADDRESS, POSTCODE) values(1000035,'liuzhongzheng','23070219650525071X',TO_DATE('19650525','yyyymmdd'),'M','88080015','no200,zhongguancun street,haidian of peking', '100000');
insert into O_OPERATOR (OPERATOR_ID, USER_NAME, USER_ID, BIRTHDAY, GENDER, PHONE, ADDRESS, POSTCODE) values(1000036,'weixiaobao','152100198810229092',TO_DATE('19881022','yyyymmdd'),'M','88080016','no300,zhongguancun street,haidian of peking', '100000');
insert into O_OPERATOR (OPERATOR_ID, USER_NAME, USER_ID, BIRTHDAY, GENDER, PHONE, ADDRESS, POSTCODE) values(1000037,'zhangcuishan','232700661108004',TO_DATE('19661108','yyyymmdd'),'M','88080017','no400,zhongguancun street,haidian of peking', '100000');
insert into O_OPERATOR (OPERATOR_ID, USER_NAME, USER_ID, BIRTHDAY, GENDER, PHONE, ADDRESS, POSTCODE) values(1000038,'yangdahai','232601198011020479',TO_DATE('19801102','yyyymmdd'),'M','88080018','no500,zhongguancun street,haidian of peking', '100000');
insert into O_OPERATOR (OPERATOR_ID, USER_NAME, USER_ID, BIRTHDAY, GENDER, PHONE, ADDRESS, POSTCODE) values(1000039,'yangbaiyang','23060219780215123',TO_DATE('19780211','yyyymmdd'),'F','88080019','no700,zhongguancun street,haidian of peking', '100000');
insert into O_OPERATOR (OPERATOR_ID, USER_NAME, USER_ID, BIRTHDAY, GENDER, PHONE, ADDRESS, POSTCODE) values(1000040,'zhangdaxing','232700196603150017',TO_DATE('19660315','yyyymmdd'),'M','88080020','no900,zhongguancun street,haidian of peking', '100000');
commit;

