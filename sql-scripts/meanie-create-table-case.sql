--DROP TABLE meaniets.CASE;
CREATE TABLE meaniets.CASE(
	FLDR_NUM integer UNIQUE NOT NULL,
	CASE_NUM integer UNIQUE NOT NULL PRIMARY KEY,
	COSSN varchar (50) UNIQUE NOT NULL,
	FNM varchar (15) default NULL,
	MNM varchar (15) default NULL,
	LNM varchar (20) default NULL,
	SEX varchar (1) default NULL,
	LANG_SPKN varchar(30) default NULL,
	ADJULVL_CD varchar (1) default NULL,
	FROM_OCD varchar (50) default NULL,
	TO_OCD varchar (50) default NULL,
	CASE_ESTB_DT date default NULL,
	TRNSFR_DT date default NULL	
);