drop table O_CONTACTS cascade constraints;


create table O_CONTACTS  (
   CONTACT_ID           NUMBER(18)                      not null,
   OPERATOR_ID          NUMBER(18),
   CONTACT_NAME         VARCHAR2(20)                    not null,
   RELATION             VARCHAR2(20),
   PHONE                VARCHAR2(20),
   POSTCODE             CHAR(6),
   ADDRESS              VARCHAR2(128),
   EMAIL                VARCHAR2(128),
   constraint PK_O_CONTACTS primary key (CONTACT_ID)
);

alter table O_CONTACTS
   add constraint FK_O_CONTAC_REF foreign key (OPERATOR_ID)
      references O_OPERATOR (OPERATOR_ID)
      not deferrable;
