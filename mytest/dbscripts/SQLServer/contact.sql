

create table O_CONTACTS
(
   CONTACT_ID           NUMERIC(18)            not null,
   OPERATOR_ID          NUMERIC(18),
   CONTACT_NAME         VARCHAR(20)            not null,
   RELATION             VARCHAR(20),
   PHONE                VARCHAR(20),
   POSTCODE             CHAR(6),
   ADDRESS              VARCHAR(128),
   EMAIL                VARCHAR(128),
   constraint PK_O_CONTACTS primary key (CONTACT_ID)
);

alter table O_CONTACTS
   add constraint FK_O_CONTAC_REF foreign key (OPERATOR_ID)
      references O_OPERATOR (OPERATOR_ID)
      ;
