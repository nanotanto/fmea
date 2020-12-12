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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- Dumping data for table fmea.actions: ~2 rows (approximately)
/*!40000 ALTER TABLE `actions` DISABLE KEYS */;
INSERT INTO `actions` (`id`, `mode_id`, `current_id`, `element`, `cause`, `prevention`, `o`, `detection`, `d`, `ap`, `sc`, `filter`, `pic`, `target_date`, `status`, `prevention_act`, `detection_act`, `action`, `finish_date`, `created_at`, `updated_at`) VALUES
	(1, 0, 0, NULL, NULL, NULL, 0, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-12-12 13:24:27', NULL),
	(2, 6, 4, 'Machine', 'Abnormal mesin', 'Perbaikan head spray, adjust berat material, cek life time dies, monitoring quality', 5, '', 6, '', '', '', 'PE, Prod', '2017-12-29', 'Closed', '', '', '', NULL, '2020-12-12 13:41:50', '2020-12-12 13:44:12');
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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- Dumping data for table fmea.currents: ~4 rows (approximately)
/*!40000 ALTER TABLE `currents` DISABLE KEYS */;
INSERT INTO `currents` (`id`, `mode_id`, `current_id`, `element`, `cause`, `prevention`, `o`, `detection`, `d`, `ap`, `sc`, `filter`, `pic`, `target_date`, `status`, `prevention_act`, `detection_act`, `action`, `finish_date`, `created_at`, `updated_at`) VALUES
	(1, 0, 0, NULL, NULL, NULL, 0, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-12-12 13:24:23', NULL),
	(2, 2, 0, 'Machine', 'Cutter aus', 'Kontrol tool life', 2, 'Timbangan 100%', 3, 'Low', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-12-12 13:35:39', '2020-12-12 13:36:56'),
	(3, 3, 0, 'Material', 'Abnormal di vendor', 'check mill sheet', 1, 'Alarm mesin', 3, 'Low', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-12-12 13:38:21', '2020-12-12 13:39:07'),
	(4, 6, 0, 'Machine', 'abnormal mesin dan sistem lubrikasi', 'lubrikasi dan energy sesuai range IK proses', 6, 'Visual cek 100%', 6, 'Medium', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-12-12 13:40:18', '2020-12-12 13:41:20');
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- Dumping data for table fmea.elements: ~1 rows (approximately)
/*!40000 ALTER TABLE `elements` DISABLE KEYS */;
INSERT INTO `elements` (`id`, `step_id`, `man`, `machine`, `material`, `method`, `measure`, `enviro`, `func_man`, `func_machine`, `func_material`, `func_method`, `func_measure`, `func_enviro`, `created_at`, `updated_at`) VALUES
	(1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-12-12 13:24:20', NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- Dumping data for table fmea.modes: ~6 rows (approximately)
/*!40000 ALTER TABLE `modes` DISABLE KEYS */;
INSERT INTO `modes` (`id`, `step_id`, `name`, `category`, `effect_in`, `effect_next`, `effect_end`, `s`, `created_at`, `updated_at`) VALUES
	(1, 0, NULL, NULL, NULL, NULL, NULL, NULL, '2020-12-12 13:24:16', NULL),
	(2, 2, 'Berat & Tebal out std', 'Product', '', 'Skier NG', '', 5, '2020-12-12 13:29:48', '2020-12-12 13:30:23'),
	(3, 2, 'Diameter out std', 'Product', '', 'tidak bisa proses forging', '', 7, '2020-12-12 13:30:29', '2020-12-12 13:30:59'),
	(4, 3, 'Tebal tenjo out standar', 'Product', '', 'dimensi out stnd', '', 7, '2020-12-12 13:31:19', '2020-12-12 13:32:23'),
	(5, 3, 'Marking model tidak ada', 'Product', '', 'sulit membedakan model part', '', 3, '2020-12-12 13:32:52', '2020-12-12 13:33:19'),
	(6, 3, 'Missrun skirt', 'Product', '', '', '', 5, '2020-12-12 13:39:49', '2020-12-12 13:40:06');
/*!40000 ALTER TABLE `modes` ENABLE KEYS */;

-- Dumping structure for table fmea.processes
CREATE TABLE IF NOT EXISTS `processes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL DEFAULT '0',
  `name` varchar(255) DEFAULT NULL,
  `function` text,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- Dumping data for table fmea.processes: ~2 rows (approximately)
/*!40000 ALTER TABLE `processes` DISABLE KEYS */;
INSERT INTO `processes` (`id`, `product_id`, `name`, `function`, `created_at`, `updated_at`) VALUES
	(1, 0, NULL, NULL, '2020-12-12 13:24:12', NULL),
	(2, 1, 'Forging', 'Forging', '2020-12-12 13:27:25', '2020-12-12 13:27:37');
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
	(1, 'FMEA-P-FOR-01', 'E1631', 'Piston', 'Fajar', 'YPMI', 'KIIC', 'YIMM', 'All Model', 'All Process', '2020-11-30', NULL, 'PE, QE, QC, Prod', 'Manager', 'High', '2020-12-12 13:27:17', '2020-12-12 13:27:17');
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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- Dumping data for table fmea.steps: ~4 rows (approximately)
/*!40000 ALTER TABLE `steps` DISABLE KEYS */;
INSERT INTO `steps` (`id`, `process_id`, `name`, `function`, `created_at`, `updated_at`) VALUES
	(1, NULL, NULL, NULL, '2020-12-12 13:24:07', NULL),
	(2, 2, 'Sawing', 'Pemotongan alubar', '2020-12-12 13:27:41', '2020-12-12 13:27:53'),
	(3, 2, 'Forging', 'Membentuk billet alluminium menjadi piston', '2020-12-12 13:27:55', '2020-12-12 13:28:10'),
	(4, 2, 'Heat Treatment', 'Meningkatkan kekerasan', '2020-12-12 13:28:15', '2020-12-12 13:28:29');
/*!40000 ALTER TABLE `steps` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
