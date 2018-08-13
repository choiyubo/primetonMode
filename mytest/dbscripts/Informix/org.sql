drop table O_ORG;


create table O_ORG
(
   ORG_ID               NUMERIC(18)            not null,
   PARENT_ORG_ID        NUMERIC(18),
   ORG_NAME             VARCHAR(128)           not null,
   ORG_CODE             VARCHAR(20),
   ORG_ADDRESS          VARCHAR(128),
   ORG_SEQ              VARCHAR(255),
   primary key (ORG_ID)
);



INSERT INTO O_ORG ( ORG_ID, PARENT_ORG_ID, ORG_NAME, ORG_CODE, ORG_ADDRESS, ORG_SEQ ) VALUES ( 1001, NULL, 'Head office', 'head', 'shanghai', '.1001.'); 
INSERT INTO O_ORG ( ORG_ID, PARENT_ORG_ID, ORG_NAME, ORG_CODE, ORG_ADDRESS, ORG_SEQ ) VALUES ( 1002, 1001, 'the sub company of shanghai', 'shanghai', 'pudong', '.1001.1002.'); 
INSERT INTO O_ORG ( ORG_ID, PARENT_ORG_ID, ORG_NAME, ORG_CODE, ORG_ADDRESS, ORG_SEQ ) VALUES ( 1003, 1001, 'the sub company of beijing', 'beijing', 'beijing', '.1001.1003.'); 
INSERT INTO O_ORG ( ORG_ID, PARENT_ORG_ID, ORG_NAME, ORG_CODE, ORG_ADDRESS, ORG_SEQ ) VALUES ( 1004, 1002, 'the R&D center of shanghai', 'rd', 'pudong', '.1001.1004.'); 

