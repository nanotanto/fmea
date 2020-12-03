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
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- Dumping data for table fmea.actions: ~0 rows (approximately)
/*!40000 ALTER TABLE `actions` DISABLE KEYS */;
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
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- Dumping data for table fmea.currents: ~0 rows (approximately)
/*!40000 ALTER TABLE `currents` DISABLE KEYS */;
/*!40000 ALTER TABLE `currents` ENABLE KEYS */;

-- Dumping structure for table fmea.elements
CREATE TABLE IF NOT EXISTS `elements` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sub_process_id` int(11) DEFAULT NULL,
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
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- Dumping data for table fmea.elements: ~0 rows (approximately)
/*!40000 ALTER TABLE `elements` DISABLE KEYS */;
/*!40000 ALTER TABLE `elements` ENABLE KEYS */;

-- Dumping structure for table fmea.modes
CREATE TABLE IF NOT EXISTS `modes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sub_process_id` int(11) NOT NULL DEFAULT '0',
  `name` varchar(50) DEFAULT NULL,
  `category` varchar(50) DEFAULT NULL,
  `effect_in` varchar(191) DEFAULT NULL,
  `effect_next` varchar(191) DEFAULT NULL,
  `effect_end` varchar(191) DEFAULT NULL,
  `s` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table fmea.modes: ~0 rows (approximately)
/*!40000 ALTER TABLE `modes` DISABLE KEYS */;
/*!40000 ALTER TABLE `modes` ENABLE KEYS */;

-- Dumping structure for table fmea.processes
CREATE TABLE IF NOT EXISTS `processes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `function` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table fmea.processes: ~0 rows (approximately)
/*!40000 ALTER TABLE `processes` DISABLE KEYS */;
/*!40000 ALTER TABLE `processes` ENABLE KEYS */;

-- Dumping structure for table fmea.products
CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
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
  `number` varchar(50) DEFAULT NULL,
  `responsibility` varchar(50) DEFAULT NULL,
  `level` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table fmea.products: ~0 rows (approximately)
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
/*!40000 ALTER TABLE `products` ENABLE KEYS */;

-- Dumping structure for table fmea.subprocesses
CREATE TABLE IF NOT EXISTS `subprocesses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `process_id` int(11) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `function` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table fmea.subprocesses: ~0 rows (approximately)
/*!40000 ALTER TABLE `subprocesses` DISABLE KEYS */;
/*!40000 ALTER TABLE `subprocesses` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
