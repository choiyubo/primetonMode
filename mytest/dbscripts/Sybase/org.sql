drop table O_ORG;


create table O_ORG
(
   ORG_ID               NUMERIC(18)            not null,
   PARENT_ORG_ID        NUMERIC(18)            null,
   ORG_NAME             VARCHAR(128)           not null,
   ORG_CODE             VARCHAR(20)            null,
   ORG_ADDRESS          VARCHAR(128)           null,
   ORG_SEQ              VARCHAR(512)           null,
   constraint PK_O_ORG primary key (ORG_ID)
);

alter table O_ORG
   add constraint FK_O_ORG_REFERE foreign key (PARENT_ORG_ID)
      references O_ORG (ORG_ID)
      ;

alter table O_OPERATOR   add constraint FK_O_USER_REFER foreign key (ORG_ID)      references O_ORG (ORG_ID)      ;


INSERT INTO O_ORG ( ORG_ID, PARENT_ORG_ID, ORG_NAME, ORG_CODE, ORG_ADDRESS, ORG_SEQ ) VALUES ( 1001, NULL, 'Head Office', 'head', 'shanghai', '.1001.'); 
INSERT INTO O_ORG ( ORG_ID, PARENT_ORG_ID, ORG_NAME, ORG_CODE, ORG_ADDRESS, ORG_SEQ ) VALUES ( 1002, 1001, 'the sub company of shanghai', 'shanghai', 'pudong', '.1001.1002.'); 
INSERT INTO O_ORG ( ORG_ID, PARENT_ORG_ID, ORG_NAME, ORG_CODE, ORG_ADDRESS, ORG_SEQ ) VALUES ( 1003, 1001, 'the sub company of beijing', 'beijing', 'beijing', '.1001.1003.'); 
INSERT INTO O_ORG ( ORG_ID, PARENT_ORG_ID, ORG_NAME, ORG_CODE, ORG_ADDRESS, ORG_SEQ ) VALUES ( 1004, 1002, 'the R&D center of shanghai', 'rd', 'pudong', '.1001.1004.'); 

