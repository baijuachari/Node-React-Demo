CREATE TABLE meaniets.CASECLM(
	FLDR_NUM integer UNIQUE NOT NULL,
	CASE_NUM integer UNIQUE NOT NULL,
	CASE_CLM_SEQ_NUM integer UNIQUE NOT NULL PRIMARY KEY,
	CLM_TYP varchar (4) default NULL,
	CLM_TITLE_DESC varchar (3) default NULL,
	CLM_STUS_DT date default NULL,
	CLM_EFF_FLG_DT date default NULL,
	FO_CNTCT_OCD varchar (3) default NULL	
);