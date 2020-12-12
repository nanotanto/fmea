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

-- Data exporting was unselected.
-- Dumping structure for table fmea.currents
CREATE TABLE IF NOT EXISTS `currents` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mode_id` int(11) NOT NULL DEFAULT '0',
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

-- Data exporting was unselected.
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
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- Data exporting was unselected.
-- Dumping structure for table fmea.modes
CREATE TABLE IF NOT EXISTS `modes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `step_id` int(11) NOT NULL DEFAULT '0',
  `name` varchar(50) DEFAULT NULL,
  `category` varchar(50) DEFAULT NULL,
  `effect_in` varchar(255) DEFAULT NULL,
  `effect_next` varchar(255) DEFAULT NULL,
  `effect_end` varchar(255) DEFAULT NULL,
  `s` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- Data exporting was unselected.
-- Dumping structure for table fmea.processes
CREATE TABLE IF NOT EXISTS `processes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL DEFAULT '0',
  `name` varchar(50) DEFAULT NULL,
  `function` varchar(50) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- Data exporting was unselected.
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

-- Data exporting was unselected.
-- Dumping structure for table fmea.steps
CREATE TABLE IF NOT EXISTS `steps` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `process_id` int(11) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `function` varchar(50) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- Data exporting was unselected.
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
