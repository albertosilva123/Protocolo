-- MySQL dump 10.13  Distrib 5.7.29, for Linux (x86_64)
--
-- Host: localhost    Database: Practica1
-- ------------------------------------------------------
-- Server version	5.7.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Academia`
--

DROP TABLE IF EXISTS `Academia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Academia` (
  `clave` varchar(20) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `presidente` varchar(20) NOT NULL,
  PRIMARY KEY (`clave`),
  KEY `presidente` (`presidente`),
  CONSTRAINT `Academia_ibfk_1` FOREIGN KEY (`presidente`) REFERENCES `Profesor` (`numEmp`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Academia`
--

LOCK TABLES `Academia` WRITE;
/*!40000 ALTER TABLE `Academia` DISABLE KEYS */;
INSERT INTO `Academia` VALUES ('0','Matemáticas','0'),('1','Ciencias','3');
/*!40000 ALTER TABLE `Academia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Alumno`
--

DROP TABLE IF EXISTS `Alumno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Alumno` (
  `boleta` varchar(15) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `usuario` varchar(20) NOT NULL,
  `password` varchar(25) NOT NULL,
  `numTT` varchar(10) NOT NULL,
  PRIMARY KEY (`boleta`),
  KEY `numTT` (`numTT`),
  CONSTRAINT `Alumno_ibfk_1` FOREIGN KEY (`numTT`) REFERENCES `Protocolo` (`numTT`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Alumno`
--

LOCK TABLES `Alumno` WRITE;
/*!40000 ALTER TABLE `Alumno` DISABLE KEYS */;
INSERT INTO `Alumno` VALUES ('20180','Alumno0','Alumno0@alumno.ipn.mx','Alumno0','Alumno0','0'),('20181','Alumno1','Alumno1@alumno.ipn.mx','Alumno1','Alumno1','0'),('20182','Alumno2','Alumno2@alumno.ipn.mx','Alumno2','Alumno2','0'),('20183','Alumno3','Alumno3@alumno.ipn.mx','Alumno3','Alumno3','1'),('20184','Alumno4','Alumno4@alumno.ipn.mx','Alumno4','Alumno4','1'),('20185','Alumno5','Alumno5@alumno.ipn.mx','Alumno5','Alumno5','1');
/*!40000 ALTER TABLE `Alumno` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `PalabraClave`
--

DROP TABLE IF EXISTS `PalabraClave`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `PalabraClave` (
  `numTT` int(11) NOT NULL,
  `palabra` varchar(25) NOT NULL,
  `discriminante` int(11) NOT NULL,
  PRIMARY KEY (`numTT`),
  UNIQUE KEY `discriminante` (`discriminante`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PalabraClave`
--

LOCK TABLES `PalabraClave` WRITE;
/*!40000 ALTER TABLE `PalabraClave` DISABLE KEYS */;
INSERT INTO `PalabraClave` VALUES (0,'Bases de datos',0),(1,'Lenguaje natural',1),(2,'Web',2),(3,'Minería de datos',3),(4,'Sistemas distribuidos',4);
/*!40000 ALTER TABLE `PalabraClave` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Profesor`
--

DROP TABLE IF EXISTS `Profesor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Profesor` (
  `numEmp` varchar(20) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `usuario` varchar(20) NOT NULL,
  `password` varchar(30) NOT NULL,
  PRIMARY KEY (`numEmp`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Profesor`
--

LOCK TABLES `Profesor` WRITE;
/*!40000 ALTER TABLE `Profesor` DISABLE KEYS */;
INSERT INTO `Profesor` VALUES ('0','profesor0','profesor0','profesor0'),('1','profesor1','profesor1','profesor1'),('2','profesor2','profesor2','profesor2'),('3','profesor3','profesor3','profesor3'),('4','profesor4','profesor4','profesor4'),('5','profesor5','profesor5','profesor5');
/*!40000 ALTER TABLE `Profesor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Protocolo`
--

DROP TABLE IF EXISTS `Protocolo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Protocolo` (
  `numTT` varchar(10) NOT NULL,
  `nombreTT` varchar(50) NOT NULL,
  `ruta_pdf` varchar(200) NOT NULL,
  PRIMARY KEY (`numTT`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Protocolo`
--

LOCK TABLES `Protocolo` WRITE;
/*!40000 ALTER TABLE `Protocolo` DISABLE KEYS */;
INSERT INTO `Protocolo` VALUES ('0','Analizador de datos online','/home/user/pdf0.pdf'),('1','Redactor de textos','/home/user/pdf1');
/*!40000 ALTER TABLE `Protocolo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `evaluacion`
--

DROP TABLE IF EXISTS `evaluacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `evaluacion` (
  `id_evaluacion` int(11) NOT NULL,
  `ruta_pdf_eval` varchar(200) NOT NULL,
  `estatus` varchar(30) NOT NULL,
  `numTT` varchar(10) NOT NULL,
  `sinodal` varchar(20) NOT NULL,
  PRIMARY KEY (`id_evaluacion`),
  UNIQUE KEY `numTT` (`numTT`,`sinodal`),
  KEY `sinodal` (`sinodal`),
  CONSTRAINT `evaluacion_ibfk_1` FOREIGN KEY (`numTT`) REFERENCES `Protocolo` (`numTT`),
  CONSTRAINT `evaluacion_ibfk_2` FOREIGN KEY (`sinodal`) REFERENCES `Profesor` (`numEmp`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `evaluacion`
--

LOCK TABLES `evaluacion` WRITE;
/*!40000 ALTER TABLE `evaluacion` DISABLE KEYS */;
/*!40000 ALTER TABLE `evaluacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pertenece`
--

DROP TABLE IF EXISTS `pertenece`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pertenece` (
  `numEmp` varchar(20) NOT NULL,
  `clave` varchar(20) NOT NULL,
  PRIMARY KEY (`numEmp`,`clave`),
  KEY `clave` (`clave`),
  CONSTRAINT `pertenece_ibfk_1` FOREIGN KEY (`numEmp`) REFERENCES `Profesor` (`numEmp`),
  CONSTRAINT `pertenece_ibfk_2` FOREIGN KEY (`clave`) REFERENCES `Academia` (`clave`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pertenece`
--

LOCK TABLES `pertenece` WRITE;
/*!40000 ALTER TABLE `pertenece` DISABLE KEYS */;
INSERT INTO `pertenece` VALUES ('0','0'),('1','0'),('2','0'),('3','1'),('4','1'),('5','1');
/*!40000 ALTER TABLE `pertenece` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tiene`
--

DROP TABLE IF EXISTS `tiene`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tiene` (
  `TT_numTT` varchar(10) NOT NULL,
  `PC_numTT` int(11) NOT NULL,
  PRIMARY KEY (`TT_numTT`,`PC_numTT`),
  KEY `PC_numTT` (`PC_numTT`),
  CONSTRAINT `tiene_ibfk_1` FOREIGN KEY (`TT_numTT`) REFERENCES `Protocolo` (`numTT`),
  CONSTRAINT `tiene_ibfk_2` FOREIGN KEY (`PC_numTT`) REFERENCES `PalabraClave` (`numTT`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tiene`
--

LOCK TABLES `tiene` WRITE;
/*!40000 ALTER TABLE `tiene` DISABLE KEYS */;
INSERT INTO `tiene` VALUES ('0',0),('1',1),('0',2),('1',3);
/*!40000 ALTER TABLE `tiene` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'Practica1'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-03-08 14:32:45
