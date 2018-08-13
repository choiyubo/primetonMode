drop table O_CONTACTS;

create table O_CONTACTS
(
   CONTACT_ID           int8            not null,
   OPERATOR_ID          int8,
   CONTACT_NAME         VARCHAR(20)            not null,
   RELATION             VARCHAR(20),
   PHONE                VARCHAR(20),
   POSTCODE             CHAR(6),
   ADDRESS              VARCHAR(128),
   EMAIL                VARCHAR(128),
   primary key (CONTACT_ID)
);

alter table O_CONTACTS
   add constraint foreign key (OPERATOR_ID)
      references O_OPERATOR (OPERATOR_ID) constraint FK_O_CONTAC_REF
      ;
