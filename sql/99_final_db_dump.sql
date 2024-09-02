CREATE DATABASE  IF NOT EXISTS `home_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE home_db;
-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: home_db
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `home`
--
SET PERSIST local_infile = 1;
DROP TABLE IF EXISTS `home`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `home` (
  `id` int NOT NULL AUTO_INCREMENT,
  `street_address` varchar(255) NOT NULL,
  `state` varchar(255) DEFAULT NULL,
  `zip` varchar(10) DEFAULT NULL,
  `sqft` decimal(10,2) NOT NULL,
  `beds` int NOT NULL,
  `baths` int NOT NULL,
  `list_price` decimal(15,2) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `street_address` (`street_address`)
) ENGINE=InnoDB AUTO_INCREMENT=111 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `home`
--

LOCK TABLES `home` WRITE;
/*!40000 ALTER TABLE `home` DISABLE KEYS */;
INSERT INTO `home` VALUES (1,'72242 Jacobson Square','Arizona','05378',2945.89,1,3,791204.00),(2,'75246 Cumberland Street','Arizona','08229',2278.71,2,1,182092.00),(3,'811 Walker-Bogan Terrace','Rhode Island','19219',3648.42,1,2,964995.00),(4,'947 Allen Motorway','Massachusetts','65353',1375.37,3,3,578532.00),(5,'7976 W Division Street','New Mexico','99460',2510.57,1,3,842529.00),(6,'4679 Horacio Plains','Texas','62631',1679.69,6,3,303195.00),(7,'78089 Prospect Avenue','Nebraska','95406',4718.90,1,2,358752.00),(8,'5788 Mallie Gateway','Nebraska','37697',2236.85,3,2,632165.00),(9,'975 Marty Ridges','New Jersey','28721',1310.08,6,3,467656.00),(10,'101 Main Street','California','90210',1500.00,2,2,500000.00),(11,'202 Oak Lane','California','90211',2500.00,3,3,750000.00),(12,'303 Pine Avenue','Texas','73301',1800.00,4,2,600000.00),(13,'404 Maple Drive','Florida','33101',1200.00,2,1,300000.00),(14,'505 Cedar Road','New York','10001',2200.00,3,3,850000.00),(15,'606 Birch Street','Illinois','60601',1300.00,2,2,450000.00),(16,'707 Elm Street','Georgia','30301',1600.00,3,2,550000.00),(17,'808 Spruce Circle','Nevada','89101',2100.00,4,3,700000.00),(18,'909 Fir Lane','Colorado','80201',1700.00,3,2,650000.00),(19,'1001 Ash Boulevard','Arizona','85001',1900.00,4,3,720000.00),(20,'2020 Poplar Street','Virginia','23223',1400.00,2,2,400000.00),(21,'2030 Red Maple Drive','North Carolina','27601',2300.00,4,3,800000.00),(22,'2040 Yellowwood Avenue','Oregon','97201',2500.00,3,2,850000.00),(23,'2050 Black Pine Way','Ohio','44101',1900.00,3,2,675000.00),(24,'2060 White Oak Trail','Michigan','48201',1500.00,2,1,380000.00),(25,'2070 Blue Spruce Path','Washington','98101',1700.00,3,2,490000.00),(26,'2080 Green Fir Terrace','Nevada','89501',2000.00,4,3,710000.00),(27,'2090 Silver Cedar Drive','Arizona','85201',2200.00,4,3,780000.00),(28,'2100 Golden Elm Lane','Texas','75201',1400.00,2,1,360000.00),(29,'2110 Ironwood Court','Florida','32801',1900.00,3,2,620000.00),(30,'2120 Copper Beech Place','Colorado','80901',1600.00,2,2,450000.00),(31,'2130 Bronze Maple Circle','California','94101',1800.00,3,2,600000.00),(32,'2140 Granite Stone Road','New York','14201',1700.00,3,2,530000.00),(33,'2150 Marble Hill Lane','Georgia','30305',2400.00,4,3,800000.00),(34,'2160 Slate Rock Avenue','Illinois','60603',2600.00,3,3,900000.00),(35,'2170 Sandstone Drive','Virginia','22101',1300.00,2,1,350000.00),(36,'2180 Limestone Path','North Carolina','27501',1900.00,3,2,580000.00),(37,'2190 Quartz Circle','Oregon','97001',1700.00,2,2,480000.00),(38,'2200 Ruby Street','Ohio','43201',2200.00,4,3,780000.00),(39,'2210 Sapphire Road','Michigan','48101',2000.00,3,2,650000.00),(40,'2220 Emerald Lane','Washington','98001',2400.00,4,3,800000.00),(41,'2230 Diamond Avenue','Nevada','89001',1500.00,2,1,390000.00),(42,'2240 Topaz Court','Arizona','85101',1400.00,2,2,360000.00),(43,'2250 Opal Drive','Texas','75001',2300.00,4,3,850000.00),(44,'2260 Jasper Road','Florida','33102',1700.00,3,2,550000.00),(45,'2270 Turquoise Way','Colorado','80202',1800.00,3,2,600000.00),(46,'2280 Amethyst Boulevard','California','94102',1600.00,2,2,450000.00),(47,'2290 Onyx Circle','New York','10002',2000.00,4,3,720000.00),(48,'2300 Peridot Lane','Georgia','30306',2200.00,4,3,780000.00),(49,'2310 Tourmaline Street','Illinois','60604',2500.00,3,2,860000.00),(50,'2320 Garnet Path','Virginia','23225',1500.00,2,1,390000.00),(51,'2330 Spinel Drive','North Carolina','27603',1800.00,3,2,580000.00),(52,'2340 Aquamarine Road','Oregon','97203',1900.00,3,2,620000.00),(53,'2350 Tanzanite Avenue','Ohio','44103',1600.00,2,2,490000.00),(54,'2360 Lapis Court','Michigan','48203',2300.00,4,3,840000.00),(55,'2370 Turquoise Lane','Washington','98103',1700.00,2,1,470000.00),(56,'2380 Zircon Drive','Nevada','89102',1900.00,3,2,600000.00),(57,'2390 Jade Street','Arizona','85002',2100.00,4,3,780000.00),(58,'2400 Quartz Boulevard','Texas','75202',1200.00,2,1,300000.00),(59,'2410 Ruby Lane','Florida','32802',1400.00,2,2,360000.00),(60,'2420 Sapphire Court','Colorado','80902',1600.00,3,2,480000.00),(61,'123 Maple St','CA','90001',1200.00,3,2,450000.00),(62,'456 Oak St','CA','90002',1300.00,4,3,550000.00),(63,'789 Pine St','CA','90003',1400.00,3,2,500000.00),(64,'101 Birch St','CA','90004',1100.00,2,1,400000.00),(65,'202 Cedar St','CA','90005',1500.00,4,3,600000.00),(66,'303 Spruce St','CA','90006',1350.00,3,2,480000.00),(67,'404 Fir St','CA','90007',1450.00,4,3,520000.00),(68,'505 Walnut St','CA','90008',1600.00,3,2,470000.00),(69,'606 Chestnut St','CA','90009',1250.00,3,2,450000.00),(70,'707 Willow St','CA','90010',1550.00,4,3,530000.00),(71,'808 Redwood St','CA','90011',1650.00,3,2,600000.00),(72,'909 Poplar St','CA','90012',1300.00,3,2,460000.00),(73,'1010 Cypress St','CA','90013',1400.00,4,3,550000.00),(74,'1111 Dogwood St','CA','90014',1700.00,3,2,610000.00),(75,'1212 Hawthorn St','CA','90015',1500.00,4,3,580000.00),(76,'1313 Juniper St','CA','90016',1800.00,5,4,750000.00),(77,'1414 Magnolia St','CA','90017',1450.00,4,3,520000.00),(78,'1515 Myrtle St','CA','90018',1250.00,3,2,450000.00),(79,'1616 Palm St','CA','90019',1650.00,4,3,610000.00),(80,'1717 Laurel St','CA','90020',1400.00,3,2,500000.00),(81,'1818 Oak St','CA','90021',1500.00,4,3,540000.00),(82,'1919 Pine St','CA','90022',1600.00,3,2,600000.00),(83,'2020 Maple St','CA','90023',1700.00,5,4,650000.00),(84,'2121 Cedar St','CA','90024',1450.00,4,3,510000.00),(85,'2222 Birch St','CA','90025',1300.00,3,2,460000.00),(86,'2323 Fir St','CA','90026',1350.00,3,2,480000.00),(87,'2424 Spruce St','CA','90027',1400.00,4,3,500000.00),(88,'2525 Willow St','CA','90028',1500.00,4,3,540000.00),(89,'2626 Redwood St','CA','90029',1600.00,3,2,580000.00),(90,'2727 Poplar St','CA','90030',1250.00,3,2,460000.00),(91,'2828 Cypress St','CA','90031',1350.00,4,3,480000.00),(92,'2929 Dogwood St','CA','90032',1450.00,3,2,500000.00),(93,'3030 Hawthorn St','CA','90033',1550.00,4,3,520000.00),(94,'3131 Juniper St','CA','90034',1650.00,3,2,570000.00),(95,'3232 Magnolia St','CA','90035',1750.00,4,3,630000.00),(96,'3333 Myrtle St','CA','90036',1250.00,3,2,450000.00),(97,'3434 Palm St','CA','90037',1350.00,4,3,470000.00),(98,'3535 Laurel St','CA','90038',1450.00,3,2,510000.00),(99,'3636 Oak St','CA','90039',1550.00,4,3,530000.00),(100,'3737 Pine St','CA','90040',1650.00,3,2,590000.00),(101,'3838 Maple St','CA','90041',1750.00,4,3,650000.00),(102,'3939 Cedar St','CA','90042',1250.00,3,2,450000.00),(103,'4040 Birch St','CA','90043',1350.00,4,3,470000.00),(104,'4141 Fir St','CA','90044',1450.00,3,2,490000.00),(105,'4242 Spruce St','CA','90045',1550.00,4,3,540000.00),(106,'4343 Willow St','CA','90046',1650.00,3,2,610000.00),(107,'4444 Redwood St','CA','90047',1750.00,4,3,670000.00),(108,'4545 Poplar St','CA','90048',1250.00,3,2,450000.00),(109,'4646 Cypress St','CA','90049',1350.00,4,3,480000.00),(110,'4747 Dogwood St','CA','90050',1450.00,3,2,500000.00);
/*!40000 ALTER TABLE `home` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'user7','user7@example.org'),(2,'user10','user10@example.org'),(3,'user3','user3@example.org'),(4,'user6','user6@example.org'),(5,'user2','user2@example.org'),(6,'user11','user11@example.org'),(7,'user12','user12@example.org'),(8,'user13','user13@example.org'),(9,'user14','user14@example.org'),(10,'user15','user15@example.com');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_home_rl`
--

DROP TABLE IF EXISTS `user_home_rl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_home_rl` (
  `user_id` int NOT NULL,
  `home_id` int NOT NULL,
  PRIMARY KEY (`user_id`,`home_id`),
  KEY `home_id` (`home_id`),
  CONSTRAINT `user_home_rl_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `user_home_rl_ibfk_2` FOREIGN KEY (`home_id`) REFERENCES `home` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_home_rl`
--

LOCK TABLES `user_home_rl` WRITE;
/*!40000 ALTER TABLE `user_home_rl` DISABLE KEYS */;
INSERT INTO `user_home_rl` VALUES (2,1),(3,1),(4,1),(1,2),(3,2),(4,2),(6,2),(3,3),(1,4),(2,4),(6,5),(8,5),(4,6),(5,7),(5,8),(4,9),(5,10),(5,11),(4,12),(4,13),(7,13),(8,13),(2,14),(1,15),(2,15),(3,15),(4,15),(6,15),(7,15),(8,15),(9,15),(10,15),(1,16),(4,17),(3,18),(4,18),(6,19),(8,61),(9,61),(8,62),(9,62),(1,63),(5,64),(6,64),(3,65),(4,65),(10,66),(10,67),(10,68),(10,69),(7,70),(8,70),(9,70),(9,71),(10,72),(10,73),(10,74),(10,75),(10,76),(10,77),(10,78),(5,79),(6,79),(7,79),(8,79),(9,79),(10,80),(10,81),(10,82),(10,83),(10,84),(10,85),(10,86),(10,87),(10,88),(3,89),(10,90),(10,91),(10,92),(10,93),(10,94),(10,95),(10,96),(10,97),(10,98),(10,99),(10,100),(10,101),(10,102),(10,103),(10,104),(10,105),(10,106),(10,107),(10,108),(10,109),(10,110);
/*!40000 ALTER TABLE `user_home_rl` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'home_db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-09-02 15:24:07
