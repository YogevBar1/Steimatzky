-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 20, 2023 at 04:26 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `steimatzky`
--
CREATE DATABASE IF NOT EXISTS `steimatzky` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `steimatzky`;

-- --------------------------------------------------------

--
-- Table structure for table `boooks`
--

CREATE TABLE `boooks` (
  `bookId` int(11) NOT NULL,
  `bookName` varchar(50) NOT NULL,
  `summary` varchar(350) NOT NULL,
  `bookPrice` decimal(6,2) NOT NULL,
  `bookStock` int(11) NOT NULL,
  `genrerId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `boooks`
--

INSERT INTO `boooks` (`bookId`, `bookName`, `summary`, `bookPrice`, `bookStock`, `genrerId`) VALUES
(1, 'Harry Potter', 'Harry Potter movie', 150.00, 15, 1),
(2, 'Seinfaled', 'Seinfaled movie', 25.00, 2, 3),
(3, 'Lion King', 'Lion King movie', 25.00, 5, 2);

-- --------------------------------------------------------

--
-- Table structure for table `geners`
--

CREATE TABLE `geners` (
  `generId` int(11) NOT NULL,
  `genreName` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `geners`
--

INSERT INTO `geners` (`generId`, `genreName`) VALUES
(1, 'Action'),
(2, 'Drama'),
(3, 'Homur'),
(4, 'Terror');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `boooks`
--
ALTER TABLE `boooks`
  ADD PRIMARY KEY (`bookId`),
  ADD KEY `genre` (`genrerId`);

--
-- Indexes for table `geners`
--
ALTER TABLE `geners`
  ADD PRIMARY KEY (`generId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `boooks`
--
ALTER TABLE `boooks`
  MODIFY `bookId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `geners`
--
ALTER TABLE `geners`
  MODIFY `generId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `boooks`
--
ALTER TABLE `boooks`
  ADD CONSTRAINT `boooks_ibfk_1` FOREIGN KEY (`genrerId`) REFERENCES `geners` (`generId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
