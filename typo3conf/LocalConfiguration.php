<?php
return array(
	'BE' => array(
		'debug' => FALSE,
		'explicitADmode' => 'explicitAllow',
		'installToolPassword' => '$P$CZazq1i8TjCKjSXf6slhBA5ZuF5Fz0/',
		'loginSecurityLevel' => 'normal',
		'versionNumberInFilename' => '0',
	),
	'DB' => array(
		'database' => 'xxx',
		'extTablesDefinitionScript' => 'extTables.php',
		'host' => '127.0.0.1',
		'password' => 'xxx',
		'port' => 3306,
		'username' => 'xxx',
	),
	'EXT' => array(
		'extConf' => array(
			'about' => 'a:0:{}',
			'aboutmodules' => 'a:0:{}',
			'adodb' => 'a:0:{}',
			'belog' => 'a:0:{}',
			'beuser' => 'a:0:{}',
			'css_styled_content' => 'a:2:{s:15:"setPageTSconfig";s:1:"1";s:19:"removePositionTypes";s:1:"1";}',
			'dbal' => 'a:2:{s:10:"sql_query.";a:1:{s:11:"passthrough";s:1:"1";}s:13:"Compatibility";s:0:"";}',
			'extension_builder' => 'a:3:{s:15:"enableRoundtrip";s:0:"";s:15:"backupExtension";s:1:"1";s:9:"backupDir";s:35:"uploads/tx_extensionbuilder/backups";}',
			'extra_page_cm_options' => 'a:0:{}',
			'felogin' => 'a:0:{}',
			'filelist' => 'a:0:{}',
			'func' => 'a:0:{}',
			'func_wizards' => 'a:0:{}',
			'info' => 'a:0:{}',
			'info_pagetsconfig' => 'a:0:{}',
			'perm' => 'a:0:{}',
			'qxgo' => 'a:0:{}',
			'reports' => 'a:0:{}',
			'rsaauth' => 'a:1:{s:18:"temporaryDirectory";s:0:"";}',
			'rtehtmlarea' => 'a:8:{s:21:"noSpellCheckLanguages";s:23:"ja,km,ko,lo,th,zh,b5,gb";s:15:"AspellDirectory";s:15:"/usr/bin/aspell";s:20:"defaultConfiguration";s:105:"Typical (Most commonly used features are enabled. Select this option if you are unsure which one to use.)";s:12:"enableImages";s:1:"0";s:20:"enableInlineElements";s:1:"0";s:19:"allowStyleAttribute";s:1:"1";s:24:"enableAccessibilityIcons";s:1:"0";s:16:"forceCommandMode";s:1:"0";}',
			'saltedpasswords' => 'a:2:{s:3:"BE.";a:4:{s:21:"saltedPWHashingMethod";s:41:"TYPO3\\CMS\\Saltedpasswords\\Salt\\PhpassSalt";s:11:"forceSalted";i:0;s:15:"onlyAuthService";i:0;s:12:"updatePasswd";i:1;}s:3:"FE.";a:5:{s:7:"enabled";i:1;s:21:"saltedPWHashingMethod";s:41:"TYPO3\\CMS\\Saltedpasswords\\Salt\\PhpassSalt";s:11:"forceSalted";i:0;s:15:"onlyAuthService";i:0;s:12:"updatePasswd";i:1;}}',
			'tstemplate' => 'a:0:{}',
		),
	),
	'FE' => array(
		'activateContentAdapter' => FALSE,
		'debug' => FALSE,
		'loginSecurityLevel' => 'rsa',
	),
	'GFX' => array(
		'jpg_quality' => '80',
	),
	'SYS' => array(
		'caching' => array(
			'cacheConfigurations' => array(
				'extbase_object' => array(
					'backend' => 'TYPO3\\CMS\\Core\\Cache\\Backend\\Typo3DatabaseBackend',
					'frontend' => 'TYPO3\\CMS\\Core\\Cache\\Frontend\\VariableFrontend',
					'groups' => array(
						'system',
					),
					'options' => array(
						'defaultLifetime' => 0,
					),
				),
			),
		),
		'clearCacheSystem' => FALSE,
		'compat_version' => '6.2',
		'devIPmask' => '',
		'displayErrors' => 0,
		'enableDeprecationLog' => FALSE,
		'encryptionKey' => 'eff35eac083ef3e94dbab51ab5282b25eee879c5ac26a1b2233ccfd836f4bbc5c7e569ab1f0dd759f4da95f59f0190e3',
		'isInitialInstallationInProgress' => FALSE,
		'sitename' => 'TYPO3',
		'sqlDebug' => 0,
		'systemLogLevel' => 2,
		't3lib_cs_convMethod' => 'mbstring',
		't3lib_cs_utils' => 'mbstring',
		'textfile_ext' => 'txt,ts,html,htm,css,tmpl,js,sql,xml,csv,xlf,t3s,t3c',
	),
);
?>