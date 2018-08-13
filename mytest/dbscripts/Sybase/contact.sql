drop table O_CONTACTS;

create table O_CONTACTS
(
   CONTACT_ID           NUMERIC(18)            not null,
   OPERATOR_ID          NUMERIC(18)			   null,
   CONTACT_NAME         VARCHAR(20)            not null,
   RELATION             VARCHAR(20)            null,
   PHONE                VARCHAR(20)            null,
   POSTCODE             CHAR(6)                null,
   ADDRESS              VARCHAR(128)           null,
   EMAIL                VARCHAR(128)           null,
   constraint PK_O_CONTACTS primary key (CONTACT_ID)
);


