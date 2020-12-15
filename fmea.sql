-- --------------------------------------------------------
-- Host:                         localhost
-- Server version:               5.1.72-community - MySQL Community Server (GPL)
-- Server OS:                    Win32
-- HeidiSQL Version:             9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for fmea
CREATE DATABASE IF NOT EXISTS `fmea` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `fmea`;

-- Dumping structure for table fmea.actions
CREATE TABLE IF NOT EXISTS `actions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mode_id` int(11) NOT NULL DEFAULT '0',
  `current_id` int(11) NOT NULL DEFAULT '0',
  `element` varchar(50) DEFAULT NULL,
  `cause` text,
  `prevention` text,
  `o` int(11) NOT NULL DEFAULT '0',
  `detection` text,
  `d` int(11) NOT NULL DEFAULT '0',
  `ap` varchar(50) DEFAULT NULL,
  `sc` varchar(50) DEFAULT NULL,
  `filter` varchar(50) DEFAULT NULL,
  `pic` varchar(191) DEFAULT NULL,
  `target_date` date DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  `prevention_act` text,
  `detection_act` text,
  `action` text,
  `finish_date` date DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- Dumping data for table fmea.actions: ~2 rows (approximately)
/*!40000 ALTER TABLE `actions` DISABLE KEYS */;
INSERT INTO `actions` (`id`, `mode_id`, `current_id`, `element`, `cause`, `prevention`, `o`, `detection`, `d`, `ap`, `sc`, `filter`, `pic`, `target_date`, `status`, `prevention_act`, `detection_act`, `action`, `finish_date`, `created_at`, `updated_at`) VALUES
	(1, 0, 0, NULL, NULL, NULL, 0, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-12-12 13:24:27', NULL),
	(9, 11, 9, 'Machine', 'Machine stops before reaching final position', 'Selected press with position control sensor', 3, 'Selected press with force monitoring', 2, 'Low', '', '', 'Process Engineering Mr. Paul Duncan', '2018-09-25', 'Open', '', '', '', NULL, '2020-12-15 11:40:37', '2020-12-15 11:44:29');
/*!40000 ALTER TABLE `actions` ENABLE KEYS */;

-- Dumping structure for table fmea.currents
CREATE TABLE IF NOT EXISTS `currents` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mode_id` int(11) NOT NULL DEFAULT '0',
  `current_id` int(11) NOT NULL DEFAULT '0',
  `element` varchar(50) DEFAULT NULL,
  `cause` text,
  `prevention` text,
  `o` int(11) NOT NULL DEFAULT '0',
  `detection` text,
  `d` int(11) NOT NULL DEFAULT '0',
  `ap` varchar(50) DEFAULT NULL,
  `sc` varchar(50) DEFAULT NULL,
  `filter` varchar(50) DEFAULT NULL,
  `pic` varchar(191) DEFAULT NULL,
  `target_date` date DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  `prevention_act` text,
  `detection_act` text,
  `action` text,
  `finish_date` date DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- Dumping data for table fmea.currents: ~4 rows (approximately)
/*!40000 ALTER TABLE `currents` DISABLE KEYS */;
INSERT INTO `currents` (`id`, `mode_id`, `current_id`, `element`, `cause`, `prevention`, `o`, `detection`, `d`, `ap`, `sc`, `filter`, `pic`, `target_date`, `status`, `prevention_act`, `detection_act`, `action`, `finish_date`, `created_at`, `updated_at`) VALUES
	(1, 0, 0, NULL, NULL, NULL, 0, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-12-12 13:24:23', NULL),
	(5, 10, 0, NULL, NULL, NULL, 1, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-12-14 16:20:52', '2020-12-14 16:20:52'),
	(6, 10, 0, '', '', '', 1, '', 1, '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-12-15 07:22:25', '2020-12-15 07:22:29'),
	(9, 11, 0, 'Machine', 'Machine stops before reaching final position', 'Force adjusted acc. data sheet', 5, '100% check of motor performance curve acc. spec. MRKJ5038', 2, 'Medium', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-12-15 10:25:56', '2020-12-15 10:25:56');
/*!40000 ALTER TABLE `currents` ENABLE KEYS */;

-- Dumping structure for table fmea.elements
CREATE TABLE IF NOT EXISTS `elements` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `step_id` int(11) DEFAULT NULL,
  `man` varchar(50) DEFAULT NULL,
  `machine` varchar(50) DEFAULT NULL,
  `material` varchar(50) DEFAULT NULL,
  `method` varchar(50) DEFAULT NULL,
  `measure` varchar(50) DEFAULT NULL,
  `enviro` varchar(50) DEFAULT NULL,
  `func_man` text,
  `func_machine` text,
  `func_material` text,
  `func_method` text,
  `func_measure` text,
  `func_enviro` text,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- Dumping data for table fmea.elements: ~3 rows (approximately)
/*!40000 ALTER TABLE `elements` DISABLE KEYS */;
INSERT INTO `elements` (`id`, `step_id`, `man`, `machine`, `material`, `method`, `measure`, `enviro`, `func_man`, `func_machine`, `func_material`, `func_method`, `func_measure`, `func_enviro`, `created_at`, `updated_at`) VALUES
	(1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-12-12 13:24:20', NULL),
	(2, 5, 'Operator', '', '', '', '', '', 'Operator press the button of machine for releasing the press-in process when loading is completed', '', '', '', '', '', '2020-12-14 11:40:16', '2020-12-14 11:40:16'),
	(3, 14, 'Oprator', 'Press Machine', '', '', '', '', '', 'Machine presses sintered bearing into the pole housing seat until the defined axial position', '', '', '', '', '2020-12-15 08:08:55', '2020-12-15 08:12:30');
/*!40000 ALTER TABLE `elements` ENABLE KEYS */;

-- Dumping structure for table fmea.modes
CREATE TABLE IF NOT EXISTS `modes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `step_id` int(11) NOT NULL DEFAULT '0',
  `name` varchar(255) DEFAULT NULL,
  `category` varchar(50) DEFAULT NULL,
  `effect_in` text,
  `effect_next` text,
  `effect_end` text,
  `s` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

-- Dumping data for table fmea.modes: ~1 rows (approximately)
/*!40000 ALTER TABLE `modes` DISABLE KEYS */;
INSERT INTO `modes` (`id`, `step_id`, `name`, `category`, `effect_in`, `effect_next`, `effect_end`, `s`, `created_at`, `updated_at`) VALUES
	(11, 14, 'Axial position of sintered bearing is not reached', 'Product', 'Clearance too small to assemble shaft without potential damage', 'Assembly of motor to vehicle door requires additional insertion force with potential damage', 'Comfort closing time too long', 8, '2020-12-15 08:19:16', '2020-12-15 10:28:12');
/*!40000 ALTER TABLE `modes` ENABLE KEYS */;

-- Dumping structure for table fmea.processes
CREATE TABLE IF NOT EXISTS `processes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL DEFAULT '0',
  `name` varchar(255) DEFAULT NULL,
  `function` text,
  `function2` text,
  `function3` text,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;

-- Dumping data for table fmea.processes: ~1 rows (approximately)
/*!40000 ALTER TABLE `processes` DISABLE KEYS */;
INSERT INTO `processes` (`id`, `product_id`, `name`, `function`, `function2`, `function3`, `created_at`, `updated_at`) VALUES
	(3, 1, 'Electrical Motor Assy Line', 'Assembly of shaft into pole housing assembly', 'Assembly of motor vehicle door', 'Window raises and lowers', '2020-12-14 11:20:40', '2020-12-14 11:34:20');
/*!40000 ALTER TABLE `processes` ENABLE KEYS */;

-- Dumping structure for table fmea.products
CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `number` varchar(50) DEFAULT NULL,
  `code` varchar(50) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `issued` varchar(191) DEFAULT NULL,
  `company` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `customer` varchar(255) DEFAULT NULL,
  `model` varchar(255) DEFAULT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `revision_date` date DEFAULT NULL,
  `team` varchar(255) DEFAULT NULL,
  `respons` varchar(255) DEFAULT NULL,
  `level` varchar(50) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- Dumping data for table fmea.products: ~1 rows (approximately)
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` (`id`, `number`, `code`, `name`, `issued`, `company`, `location`, `customer`, `model`, `subject`, `start_date`, `revision_date`, `team`, `respons`, `level`, `created_at`, `updated_at`) VALUES
	(1, '654321', 'PX123', 'Column Assembly', 'Smith', 'Acme Automotive', 'Plant 6, Saginaw, Michigan', 'Jackson Industry', '2020PX123', 'PX123 Manual Column Assembly', '2018-03-19', '2018-09-25', 'See Team List', 'B. Black', 'Confidential', '2020-12-12 13:27:17', '2020-12-14 11:19:57');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;

-- Dumping structure for table fmea.steps
CREATE TABLE IF NOT EXISTS `steps` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `process_id` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `function` text,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;

-- Dumping data for table fmea.steps: ~5 rows (approximately)
/*!40000 ALTER TABLE `steps` DISABLE KEYS */;
INSERT INTO `steps` (`id`, `process_id`, `name`, `function`, `created_at`, `updated_at`) VALUES
	(1, NULL, NULL, NULL, '2020-12-12 13:24:07', NULL),
	(12, 3, '[OP 10] Greasing Process (bearing shaft)', '', '2020-12-15 08:06:28', '2020-12-15 08:06:28'),
	(13, 3, '[OP 20] Greasing Process (gear wheel)', '', '2020-12-15 08:06:56', '2020-12-15 08:06:56'),
	(14, 3, '[OP 30] Sintered Bearing Proess-in Process', 'Press in sintered bearing to achieve axial position in pole housing to max gap per print', '2020-12-15 08:07:29', '2020-12-15 08:10:58'),
	(15, 3, '[OP 40] Gear Cover assembly Process', '', '2020-12-15 08:07:54', '2020-12-15 08:07:54');
/*!40000 ALTER TABLE `steps` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
