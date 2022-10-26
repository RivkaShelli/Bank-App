-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 29, 2022 at 11:16 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test-4`
--

-- --------------------------------------------------------

--
-- Table structure for table `accountoperations`
--

CREATE TABLE `accountoperations` (
  `id` int(11) NOT NULL,
  `accountNumber` int(25) NOT NULL,
  `type` enum('pull','deposit','loan') COLLATE utf8_bin NOT NULL,
  `sum` int(255) NOT NULL,
  `op_date` datetime NOT NULL,
  `interest` int(255) DEFAULT NULL,
  `payments` int(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `accountoperations`
--

INSERT INTO `accountoperations` (`id`, `accountNumber`, `type`, `sum`, `op_date`, `interest`, `payments`) VALUES
(1, 555584, 'pull', 3000, '2022-07-13 00:00:00', NULL, NULL),
(2, 356783, 'deposit', 7000, '2022-07-18 00:00:00', NULL, NULL),
(3, 893244, 'deposit', 10000, '2022-08-17 00:00:00', NULL, NULL),
(4, 555584, 'loan', 20000, '2022-07-13 00:00:00', 20, 6),
(5, 893244, 'pull', 2000, '2022-07-25 09:39:05', NULL, NULL),
(8, 356783, 'pull', 900, '2022-07-22 21:00:00', NULL, NULL),
(13, 555584, 'deposit', 560, '2022-07-29 08:53:02', NULL, NULL),
(14, 893244, 'loan', 7000, '2022-07-29 08:55:16', 3, 10),
(16, 555584, 'deposit', 300, '2022-07-29 09:07:31', NULL, NULL),
(17, 555584, 'pull', 111, '2022-07-29 09:13:06', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `bankaccounts`
--

CREATE TABLE `bankaccounts` (
  `accountNumber` int(25) NOT NULL,
  `accountOwner` varchar(25) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `bankaccounts`
--

INSERT INTO `bankaccounts` (`accountNumber`, `accountOwner`) VALUES
(356783, 'David'),
(555584, 'Michael '),
(893244, 'Ruth');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accountoperations`
--
ALTER TABLE `accountoperations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `from bankAcc to accOpp` (`accountNumber`);

--
-- Indexes for table `bankaccounts`
--
ALTER TABLE `bankaccounts`
  ADD PRIMARY KEY (`accountNumber`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accountoperations`
--
ALTER TABLE `accountoperations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `accountoperations`
--
ALTER TABLE `accountoperations`
  ADD CONSTRAINT `from bankAcc to accOpp` FOREIGN KEY (`accountNumber`) REFERENCES `bankaccounts` (`accountNumber`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
