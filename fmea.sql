-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.1.72-community - MySQL Community Server (GPL)
-- Server OS:                    Win32
-- HeidiSQL Version:             11.0.0.5919
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
  `modes_id` int(11) NOT NULL DEFAULT '0',
  `current_id` int(11) NOT NULL DEFAULT '0',
  `element` varchar(50) DEFAULT NULL,
  `cause` varchar(50) DEFAULT NULL,
  `prevention` varchar(191) DEFAULT NULL,
  `o` int(11) NOT NULL DEFAULT '0',
  `detection` varchar(191) DEFAULT NULL,
  `d` int(11) NOT NULL DEFAULT '0',
  `ap` varchar(50) DEFAULT NULL,
  `sc` varchar(50) DEFAULT NULL,
  `filter` varchar(50) DEFAULT NULL,
  `pic` varchar(50) DEFAULT NULL,
  `target_date` date DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  `prevention_act` varchar(50) DEFAULT NULL,
  `detection_act` varchar(50) DEFAULT NULL,
  `action` varchar(191) DEFAULT NULL,
  `finish_date` date DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- Dumping data for table fmea.actions: ~1 rows (approximately)
/*!40000 ALTER TABLE `actions` DISABLE KEYS */;
REPLACE INTO `actions` (`id`, `modes_id`, `current_id`, `element`, `cause`, `prevention`, `o`, `detection`, `d`, `ap`, `sc`, `filter`, `pic`, `target_date`, `status`, `prevention_act`, `detection_act`, `action`, `finish_date`, `created_at`, `updated_at`) VALUES
	(1, 1, 1, NULL, NULL, NULL, 0, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-12-03 13:40:49', NULL);
/*!40000 ALTER TABLE `actions` ENABLE KEYS */;

-- Dumping structure for table fmea.currents
CREATE TABLE IF NOT EXISTS `currents` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `modes_id` int(11) NOT NULL DEFAULT '0',
  `current_id` int(11) NOT NULL DEFAULT '0',
  `element` varchar(50) DEFAULT NULL,
  `cause` varchar(50) DEFAULT NULL,
  `prevention` varchar(191) DEFAULT NULL,
  `o` int(11) NOT NULL DEFAULT '0',
  `detection` varchar(191) DEFAULT NULL,
  `d` int(11) NOT NULL DEFAULT '0',
  `ap` varchar(50) DEFAULT NULL,
  `sc` varchar(50) DEFAULT NULL,
  `filter` varchar(50) DEFAULT NULL,
  `pic` varchar(50) DEFAULT NULL,
  `target_date` date DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  `prevention_act` varchar(50) DEFAULT NULL,
  `detection_act` varchar(50) DEFAULT NULL,
  `action` varchar(191) DEFAULT NULL,
  `finish_date` date DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- Dumping data for table fmea.currents: ~1 rows (approximately)
/*!40000 ALTER TABLE `currents` DISABLE KEYS */;
REPLACE INTO `currents` (`id`, `modes_id`, `current_id`, `element`, `cause`, `prevention`, `o`, `detection`, `d`, `ap`, `sc`, `filter`, `pic`, `target_date`, `status`, `prevention_act`, `detection_act`, `action`, `finish_date`, `created_at`, `updated_at`) VALUES
	(1, 1, 1, NULL, NULL, NULL, 0, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-12-03 13:41:01', NULL);
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
  `func_man` varchar(191) DEFAULT NULL,
  `func_machine` varchar(191) DEFAULT NULL,
  `func_material` varchar(191) DEFAULT NULL,
  `func_method` varchar(191) DEFAULT NULL,
  `func_measure` varchar(191) DEFAULT NULL,
  `func_enviro` varchar(191) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- Dumping data for table fmea.elements: ~2 rows (approximately)
/*!40000 ALTER TABLE `elements` DISABLE KEYS */;
REPLACE INTO `elements` (`id`, `step_id`, `man`, `machine`, `material`, `method`, `measure`, `enviro`, `func_man`, `func_machine`, `func_material`, `func_method`, `func_measure`, `func_enviro`, `created_at`, `updated_at`) VALUES
	(1, 1, 'Man', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-12-03 13:41:06', NULL),
	(2, 3, 'Operator', 'Fanuc', '', '', '', '', 'Bekerja', 'Drill', '', '', '', '', '2020-12-10 11:16:35', '2020-12-10 11:22:01');
/*!40000 ALTER TABLE `elements` ENABLE KEYS */;

-- Dumping structure for table fmea.modes
CREATE TABLE IF NOT EXISTS `modes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `step_id` int(11) NOT NULL DEFAULT '0',
  `name` varchar(50) DEFAULT NULL,
  `category` varchar(50) DEFAULT NULL,
  `effect_in` varchar(191) DEFAULT NULL,
  `effect_next` varchar(191) DEFAULT NULL,
  `effect_end` varchar(191) DEFAULT NULL,
  `s` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Dumping data for table fmea.modes: ~1 rows (approximately)
/*!40000 ALTER TABLE `modes` DISABLE KEYS */;
REPLACE INTO `modes` (`id`, `step_id`, `name`, `category`, `effect_in`, `effect_next`, `effect_end`, `s`, `created_at`, `updated_at`) VALUES
	(1, 1, NULL, NULL, NULL, NULL, NULL, NULL, '2020-12-03 13:41:11', NULL);
/*!40000 ALTER TABLE `modes` ENABLE KEYS */;

-- Dumping structure for table fmea.processes
CREATE TABLE IF NOT EXISTS `processes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL DEFAULT '0',
  `name` varchar(50) DEFAULT NULL,
  `function` varchar(50) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

-- Dumping data for table fmea.processes: ~4 rows (approximately)
/*!40000 ALTER TABLE `processes` DISABLE KEYS */;
REPLACE INTO `processes` (`id`, `product_id`, `name`, `function`, `created_at`, `updated_at`) VALUES
	(1, 1, 'Casting', 'Cetakan', '2020-12-03 13:41:14', NULL),
	(3, 1, 'Machining', 'Machining', '2020-12-07 14:48:03', '2020-12-07 15:39:04'),
	(8, 2, 'Paingn', 'test', '2020-12-07 15:38:57', '2020-12-08 07:49:25'),
	(10, 2, 'dfgdfs', 'dfgdfg', '2020-12-07 15:39:35', '2020-12-07 15:39:38');
/*!40000 ALTER TABLE `processes` ENABLE KEYS */;

-- Dumping structure for table fmea.products
CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `number` varchar(50) DEFAULT NULL,
  `code` varchar(50) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `issued` varchar(50) DEFAULT NULL,
  `company` varchar(50) DEFAULT NULL,
  `location` varchar(50) DEFAULT NULL,
  `customer` varchar(50) DEFAULT NULL,
  `model` varchar(50) DEFAULT NULL,
  `subject` varchar(50) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `revision_date` date DEFAULT NULL,
  `team` varchar(50) DEFAULT NULL,
  `respons` varchar(50) DEFAULT NULL,
  `level` varchar(50) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- Dumping data for table fmea.products: ~2 rows (approximately)
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
REPLACE INTO `products` (`id`, `number`, `code`, `name`, `issued`, `company`, `location`, `customer`, `model`, `subject`, `start_date`, `revision_date`, `team`, `respons`, `level`, `created_at`, `updated_at`) VALUES
	(1, 'FMEA-HC-001', 'E1111', 'Head Cylinder', 'Tanto !', 'YPMI', 'KIIC', 'YIMM', '2DP', 'Head Cylinder', '2020-12-04', NULL, 'QE, QA, QC , PE dll', 'alan', 'Medium', '2020-12-04 15:10:40', '2020-12-07 14:28:31'),
	(2, 'FMEA-CW-01', 'F5613', 'Cast Wheel', 'nano', 'q', 'q', 'q', 'q', 'q', '2020-12-07', NULL, 'q', 'q', 'High', '2020-12-04 15:13:09', '2020-12-07 13:36:54');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;

-- Dumping structure for table fmea.steps
CREATE TABLE IF NOT EXISTS `steps` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `process_id` int(11) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `function` varchar(50) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- Dumping data for table fmea.steps: ~4 rows (approximately)
/*!40000 ALTER TABLE `steps` DISABLE KEYS */;
REPLACE INTO `steps` (`id`, `process_id`, `name`, `function`, `created_at`, `updated_at`) VALUES
	(1, 1, 'Melting', '', '2020-12-03 13:41:42', '2020-12-10 07:45:09'),
	(2, 10, 'sdfs', '', '2020-12-08 08:39:17', '2020-12-08 08:40:38'),
	(3, 3, 'Op1', 'cutting', '2020-12-10 07:44:03', '2020-12-10 07:44:12'),
	(4, 1, 'Low Press', '', '2020-12-10 07:44:51', '2020-12-10 07:45:05');
/*!40000 ALTER TABLE `steps` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
