package com.courier.overc360.api.service;

import com.courier.overc360.api.config.PropertiesConfig;
import com.courier.overc360.api.exception.BadRequestException;
import com.courier.overc360.api.model.auth.AuthToken;
import com.courier.overc360.api.model.transaction.*;
import lombok.extern.slf4j.Slf4j;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.DataFormatter;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

@Slf4j
@Service
public class FileStorageService {

	@Autowired
	PropertiesConfig propertiesConfig;

	private Path fileStorageLocation = null;

	@Autowired
	private AuthTokenService authTokenService;

	@Autowired
	private MidMileService midMileService;


	private RestTemplate getRestTemplate() {
		RestTemplate restTemplate = new RestTemplate();
		return restTemplate;
	}

	/**
	 *
	 * @param file
	 * @return
	 * @throws Exception
	 */
	public String storeFile(MultipartFile file, String filePath) throws Exception {

		if(!filePath.startsWith("/")){
			filePath = "/" + filePath;
		}

		this.fileStorageLocation = Paths.get(propertiesConfig.getDocStorageBasePath() + filePath).toAbsolutePath().normalize();
		if (!Files.exists(fileStorageLocation)) {
			try {
				Files.createDirectories(this.fileStorageLocation);
			} catch (Exception ex) {
				throw new BadRequestException(
						"Could not create the directory where the uploaded files will be stored.");
			}
		}

		log.info("location : " + fileStorageLocation);

		// Normalize file name
		String fileName = StringUtils.cleanPath(file.getOriginalFilename());
		log.info("filename before: " + fileName);
		fileName = fileName.replace(" ", "_");
		log.info("filename after: " + fileName);
		try {
			// Check if the file's name contains invalid characters
			if (fileName.contains("..")) {
				throw new BadRequestException("Sorry! Filename contains invalid path sequence " + fileName);
			}

			// Copy file to the target location (Replacing existing file with the same name)
			Path targetLocation = this.fileStorageLocation.resolve(fileName);
			Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);
			log.info("Copied : " + targetLocation);
		} catch (IOException ex) {
			ex.printStackTrace();
			throw new BadRequestException("Could not store file " + fileName + ". Please try again!");
		}
//		return Collections.singletonMap("message", "File uploaded successfully!");
		return fileName;
	}

	/**
	 *
	 * @param location
	 * @param file
	 * @return
	 * @throws Exception
	 */
	public String getQualifiedFilePath (String location, String file) throws Exception {
		String filePath = propertiesConfig.getDocStorageBasePath();

		log.info("getQualifiedFilePath---location------>: " + location);
		log.info("getQualifiedFilePath---file------>: " + file);

		if(location.startsWith("/")){
			filePath = filePath + location;
		} else {
			filePath = filePath + "/" + location;
		}

		if(location.endsWith("/")){
			filePath = filePath + file;
		} else {
			filePath = filePath + "/" + file;
		}
		log.info("filePath: " + filePath);
		return filePath;
	}

	public Map<String, String> processConsignmentOrders(MultipartFile file) {
		this.fileStorageLocation = Paths.get(propertiesConfig.getFileUploadDir()).toAbsolutePath().normalize();
		if (!Files.exists(fileStorageLocation)) {
			try {
				Files.createDirectories(this.fileStorageLocation);
			} catch (Exception ex) {
				throw new BadRequestException(
						"Could not create the directory where the uploaded files will be stored.");
			}
		}

		String fileName = StringUtils.cleanPath(file.getOriginalFilename());
		log.info("filename before: " + fileName);
		fileName = fileName.replace("", "_");
		log.info("filename after: " + fileName);

		try {
			if (fileName.contains("..")) {
				throw new BadRequestException("Sorry! Filename contains invalid path sequence " + fileName);
			}

			Path targetLocation = this.fileStorageLocation.resolve(fileName);
			Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);
			log.info("Copied : " + targetLocation);

			List<List<String>> allRowsList = readExcelData(targetLocation.toFile());
			List<AddConsignment> consignmentOrders = prepConsignmentData (allRowsList);
			log.info("consignmentOrders : " + consignmentOrders);

			// Uploading Orders
			UploadApiResponse[] dbUploadApiResponse = new UploadApiResponse[0];
			AuthToken authToken = authTokenService.getMidMileServiceAuthToken();
			dbUploadApiResponse = midMileService.postConsignmentUpload (consignmentOrders, "Uploaded", authToken.getAccess_token());

			if(dbUploadApiResponse != null) {
				Map<String, String> mapFileProps = new HashMap<>();
				mapFileProps.put("file", fileName);
				mapFileProps.put("status", "UPLOADED SUCCESSFULLY");
				return mapFileProps;
			}
		} catch (IOException ex) {
			ex.printStackTrace();
			throw new BadRequestException("Could not store file " + fileName + ". Please try again!");
		}
		return null;

	}

	private List<List<String>> readExcelData(File file) {
		try {
			Workbook workbook = new XSSFWorkbook(file);
			workbook.setMissingCellPolicy(Row.MissingCellPolicy.RETURN_BLANK_AS_NULL);
			org.apache.poi.ss.usermodel.Sheet sheet = workbook.getSheetAt(0);

			List<List<String>> allRowsList = new ArrayList<>();
			DataFormatter fmt = new DataFormatter();
			for (int rn=sheet.getFirstRowNum(); rn<=sheet.getLastRowNum(); rn++) {
				List<String> listUploadData = new ArrayList<String>();
				Row row = sheet.getRow(rn);
				log.info("Row:  "+ row.getRowNum());
				if (row == null) {
					// There is no data in this row, handle as needed
				} else if (row.getRowNum() != 0) {
					for (int cn = 0; cn <= row.getLastCellNum(); cn ++) {
						Cell cell = row.getCell(cn);
						if (cell == null) {
							log.info("cell empty: " + cell);
							listUploadData.add("");
						} else {
							String cellStr = fmt.formatCellValue(cell);
							log.info("cellStr: " + cellStr);
							listUploadData.add(cellStr);
						}
					}
					allRowsList.add(listUploadData);
				}
			}

			log.info("list data: " + allRowsList);
			return allRowsList;
		} catch (Exception ioe) {
			ioe.printStackTrace();
		}
		return null;
	}


    /**
     *
     * @param allRowsList
     * @return
     */
	public List<AddConsignment> prepConsignmentData(List<List<String>> allRowsList) {
		Map<String, AddConsignment> consignmentMap = new HashMap<>();
		Map<String, Map<String, AddPieceDetails>> pieceMap = new HashMap<>();

		// DateFormat
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

		for (List<String> listUploadedData : allRowsList) {
			// Create consignment key based on consignment fields
			String consignmentKey = String.join("_", listUploadedData.subList(0, 156));
			// Create piece key based on piece-specific fields
			String pieceKey = String.join("_", listUploadedData.subList(157, 170));

			AddConsignment addConsignment = consignmentMap.getOrDefault(consignmentKey, new AddConsignment());
			Map<String, AddPieceDetails> pieceDetailsMap = pieceMap.getOrDefault(consignmentKey, new HashMap<>());

            if (!consignmentMap.containsKey(consignmentKey)) {
                // Set Consignment Details
                addConsignment.setCompanyId(listUploadedData.get(0));
                addConsignment.setPartnerId(listUploadedData.get(1));
                addConsignment.setPartnerType(listUploadedData.get(2));
                addConsignment.setStatusId(listUploadedData.get(3));
                addConsignment.setPartnerMasterAirwayBill(listUploadedData.get(4));
                addConsignment.setPartnerHouseAirwayBill(listUploadedData.get(5));
                addConsignment.setProductId(listUploadedData.get(6));
                addConsignment.setSubProductId(listUploadedData.get(7));
                addConsignment.setServiceTypeId(listUploadedData.get(8));
                addConsignment.setServiceTypeText(listUploadedData.get(9));
                addConsignment.setShipperId(listUploadedData.get(10));
                addConsignment.setNoOfPieceHawb(listUploadedData.get(11));
                addConsignment.setNoOfPackageHawb(listUploadedData.get(12));
                addConsignment.setNoOfPackageMawb(listUploadedData.get(13));
                addConsignment.setLineNo(listUploadedData.get(14));
                addConsignment.setFlightNo(listUploadedData.get(15));
                addConsignment.setFlightName(listUploadedData.get(16));
                try {
                    Date flightArrivalTime = simpleDateFormat.parse(listUploadedData.get(17));
                    addConsignment.setFlightArrivalTime(flightArrivalTime);
                } catch (ParseException e) {
                    e.printStackTrace();
                }
                addConsignment.setConsigneeCivilId(listUploadedData.get(18));
                addConsignment.setInvoiceSupplierName(listUploadedData.get(19));
                addConsignment.setFreightCurrency(listUploadedData.get(20));
                addConsignment.setFreightCharges(listUploadedData.get(21));
                addConsignment.setCountryOfSupply(listUploadedData.get(22));
                addConsignment.setRemark(listUploadedData.get(23));
                addConsignment.setInvoiceAmount(listUploadedData.get(24));
                addConsignment.setInvoiceNumber(listUploadedData.get(25));
                addConsignment.setInvoiceDate(listUploadedData.get(26));
                addConsignment.setInvoiceType(listUploadedData.get(27));
                addConsignment.setInvoiceUrl(listUploadedData.get(28));
                addConsignment.setHsCode(listUploadedData.get(29));
                addConsignment.setCurrency(listUploadedData.get(30));
                addConsignment.setIncoTerms(listUploadedData.get(31));
                addConsignment.setGoodsDescription(listUploadedData.get(32));
                addConsignment.setCountryOfOrigin(listUploadedData.get(33));
                addConsignment.setManufacturer(listUploadedData.get(34));
                addConsignment.setNoOfPackages(listUploadedData.get(35));
                addConsignment.setItemTotalPrice(listUploadedData.get(36));
                addConsignment.setPackageType(listUploadedData.get(37));
                addConsignment.setQuantity(listUploadedData.get(38));
                addConsignment.setNetWeight(listUploadedData.get(39));
                addConsignment.setGrossWeight(listUploadedData.get(40));
                addConsignment.setNotifyParty(listUploadedData.get(41));
                addConsignment.setIsExempted(listUploadedData.get(42));
                addConsignment.setExemptionFor(listUploadedData.get(43));
                addConsignment.setExemptionBeneficiary(listUploadedData.get(44));
                addConsignment.setExemptionReference(listUploadedData.get(45));
                addConsignment.setAirportOriginCode(listUploadedData.get(46));
                addConsignment.setReferenceNumber(listUploadedData.get(47));
                addConsignment.setCustomerCode(listUploadedData.get(48));
                addConsignment.setCustomerReferenceNumber(listUploadedData.get(49));
                addConsignment.setActionType(listUploadedData.get(50));
                addConsignment.setMovementType(listUploadedData.get(51));
                addConsignment.setForwardReferenceNumber(listUploadedData.get(52));
                addConsignment.setWorkerCode(listUploadedData.get(53));
                addConsignment.setLoadType(listUploadedData.get(54));
                addConsignment.setDescription(listUploadedData.get(55));
                addConsignment.setNotes(listUploadedData.get(56));
                addConsignment.setCodAmount(listUploadedData.get(57));
                addConsignment.setCodFavorOf(listUploadedData.get(58));
                addConsignment.setCodCollectionMode(listUploadedData.get(59));
                addConsignment.setDeclaredValue(listUploadedData.get(60));
                addConsignment.setConsignmentCurrency(listUploadedData.get(61));
                addConsignment.setActualCurrency(listUploadedData.get(62));
                addConsignment.setTotalDuty(listUploadedData.get(63));
                addConsignment.setSpecialApprovalValue(listUploadedData.get(64));
                addConsignment.setDeclaredValueWithoutTax(listUploadedData.get(65));
                addConsignment.setLength(listUploadedData.get(66));
                addConsignment.setDimensionUnit(listUploadedData.get(67));
                addConsignment.setWidth(listUploadedData.get(68));
                addConsignment.setHeight(listUploadedData.get(69));
                addConsignment.setWeight(listUploadedData.get(70));
                addConsignment.setWeightUnit(listUploadedData.get(71));
                addConsignment.setVolume(listUploadedData.get(72));
                addConsignment.setVolumeUnit(listUploadedData.get(73));
                addConsignment.setUpstreamCreationTime(listUploadedData.get(74));
                addConsignment.setUpstreamCreationSource(listUploadedData.get(75));
                addConsignment.setAllocationTime(listUploadedData.get(76));
                addConsignment.setAutoAllocate(listUploadedData.get(77));
                addConsignment.setPriority(listUploadedData.get(78));
                addConsignment.setCourierPartner(listUploadedData.get(79));
                addConsignment.setCourierAccount(listUploadedData.get(80));
                addConsignment.setCourierPartnerReferenceNumber(listUploadedData.get(81));
                addConsignment.setPickupOtp(listUploadedData.get(82));
                addConsignment.setDeliveryOtp(listUploadedData.get(83));
                addConsignment.setRtoOtp(listUploadedData.get(84));
                addConsignment.setTags(listUploadedData.get(85));
                addConsignment.setServiceTime(listUploadedData.get(86));
                addConsignment.setPickupServiceTime(listUploadedData.get(87));
                addConsignment.setDeliveryServiceTime(listUploadedData.get(88));
                addConsignment.setPickupTimeSlotStart(listUploadedData.get(89));
                addConsignment.setPickupTimeSlotEnd(listUploadedData.get(90));
                addConsignment.setDeliveryTimeSlotStart(listUploadedData.get(91));
                addConsignment.setDeliveryTimeSlotEnd(listUploadedData.get(92));
                addConsignment.setScheduledAt(listUploadedData.get(93));
                addConsignment.setWorkerTipAmount(listUploadedData.get(94));
                addConsignment.setWorkerEligiblePayout(listUploadedData.get(95));
                addConsignment.setConstraintTags(listUploadedData.get(96));
                addConsignment.setEwayBill(listUploadedData.get(97));
                addConsignment.setProductCode(listUploadedData.get(98));
                addConsignment.setCustomsValue(listUploadedData.get(99));
                addConsignment.setAmount(listUploadedData.get(100));
                addConsignment.setIsCustomsDeclarable(listUploadedData.get(101));
                addConsignment.setPackDetails(listUploadedData.get(102));
                addConsignment.setStorageLocation(listUploadedData.get(103));
                addConsignment.setIsExchange(listUploadedData.get(104));
                addConsignment.setReverseReason(listUploadedData.get(105));
                addConsignment.setConsignmentValue(listUploadedData.get(106));
                addConsignment.setConsignmentType(listUploadedData.get(107));

                // Set Return Details
                AddReturnDetails returnDetails = new AddReturnDetails();
                returnDetails.setAddressHubCode(listUploadedData.get(108));
                returnDetails.setAccountId(listUploadedData.get(109));
                returnDetails.setEmail(listUploadedData.get(110));
                returnDetails.setCompanyName(listUploadedData.get(111));
                returnDetails.setName(listUploadedData.get(112));
                returnDetails.setPhone(listUploadedData.get(113));
                returnDetails.setAlternatePhone(listUploadedData.get(114));
                returnDetails.setAddressLine1(listUploadedData.get(115));
                returnDetails.setAddressLine2(listUploadedData.get(116));
                returnDetails.setPinCode(listUploadedData.get(117));
                returnDetails.setDistrict(listUploadedData.get(118));
                returnDetails.setCity(listUploadedData.get(119));
                returnDetails.setState(listUploadedData.get(120));
                returnDetails.setCountry(listUploadedData.get(121));
                returnDetails.setLatitude(listUploadedData.get(122));
                returnDetails.setLongitude(listUploadedData.get(123));
                addConsignment.setReturnDetails(returnDetails);

                // Set Origin Details
                AddOriginDetails originDetails = new AddOriginDetails();
                originDetails.setAddressHubCode(listUploadedData.get(124));
                originDetails.setAccountId(listUploadedData.get(125));
                originDetails.setEmail(listUploadedData.get(126));
                originDetails.setCompanyName(listUploadedData.get(127));
                originDetails.setName(listUploadedData.get(128));
                originDetails.setPhone(listUploadedData.get(129));
                originDetails.setAlternatePhone(listUploadedData.get(130));
                originDetails.setAddressLine1(listUploadedData.get(131));
                originDetails.setAddressLine2(listUploadedData.get(132));
                originDetails.setPinCode(listUploadedData.get(133));
                originDetails.setDistrict(listUploadedData.get(134));
                originDetails.setCity(listUploadedData.get(135));
                originDetails.setState(listUploadedData.get(136));
                originDetails.setCountry(listUploadedData.get(137));
                originDetails.setLatitude(listUploadedData.get(138));
                originDetails.setLongitude(listUploadedData.get(139));
                addConsignment.setOriginDetails(originDetails);

                // Set Destination Details
                AddDestinationDetails destinationDetails = new AddDestinationDetails();
                destinationDetails.setAddressHubCode(listUploadedData.get(140));
                destinationDetails.setAccountId(listUploadedData.get(141));
                destinationDetails.setEmail(listUploadedData.get(142));
                destinationDetails.setCompanyName(listUploadedData.get(143));
                destinationDetails.setName(listUploadedData.get(144));
                destinationDetails.setPhone(listUploadedData.get(145));
                destinationDetails.setAlternatePhone(listUploadedData.get(146));
                destinationDetails.setAddressLine1(listUploadedData.get(147));
                destinationDetails.setAddressLine2(listUploadedData.get(148));
                destinationDetails.setPinCode(listUploadedData.get(149));
                destinationDetails.setDistrict(listUploadedData.get(150));
                destinationDetails.setCity(listUploadedData.get(151));
                destinationDetails.setState(listUploadedData.get(152));
                destinationDetails.setCountry(listUploadedData.get(153));
                destinationDetails.setLatitude(listUploadedData.get(154));
                destinationDetails.setLongitude(listUploadedData.get(155));
                addConsignment.setDestinationDetails(destinationDetails);

//                ReferenceImageList imageReference = new ReferenceImageList();
//                imageReference.setReferenceImageUrl(listUploadedData.get(155));
//                addConsignment.getReferenceImageList().add(imageReference);

                consignmentMap.put(consignmentKey, addConsignment);
                pieceMap.put(consignmentKey, pieceDetailsMap);
            }

            AddPieceDetails pieceDetails = pieceDetailsMap.getOrDefault(pieceKey, new AddPieceDetails());
            pieceDetails.setDescription(listUploadedData.get(156));
            pieceDetails.setDeclaredValue(listUploadedData.get(157));
            pieceDetails.setCodAmount(listUploadedData.get(158));
            pieceDetails.setLength(listUploadedData.get(159));
            pieceDetails.setDimensionUnit(listUploadedData.get(160));
            pieceDetails.setWidth(listUploadedData.get(161));
            pieceDetails.setHeight(listUploadedData.get(162));
            pieceDetails.setWeight(listUploadedData.get(163));
            pieceDetails.setPartnerType(listUploadedData.get(164));
            pieceDetails.setWeight_unit(listUploadedData.get(165));
            pieceDetails.setVolume(listUploadedData.get(166));
            pieceDetails.setVolumeUnit(listUploadedData.get(167));
            pieceDetails.setPackReferenceNumber(listUploadedData.get(168));
            pieceDetails.setTags(listUploadedData.get(169));

            // Set Item Details
            AddItemDetails itemDetails = new AddItemDetails();
            itemDetails.setPartnerType(listUploadedData.get(170));
            itemDetails.setItemCode(listUploadedData.get(171));
            itemDetails.setHsCode(listUploadedData.get(172));
            itemDetails.setDeclaredValue(listUploadedData.get(173));
            itemDetails.setCodAmount(listUploadedData.get(174));
            itemDetails.setLength(listUploadedData.get(175));
            itemDetails.setDimensionUnit(listUploadedData.get(176));
            itemDetails.setWidth(listUploadedData.get(177));
            itemDetails.setHeight(listUploadedData.get(178));
            itemDetails.setWeight(listUploadedData.get(179));
            itemDetails.setWeightUnit(listUploadedData.get(180));
            itemDetails.setVolume(listUploadedData.get(181));
            itemDetails.setVolumeUnit(listUploadedData.get(182));
            if (listUploadedData.get(183).trim().length() > 0) {
                itemDetails.setDescription(listUploadedData.get(183));
            }

            // Add item to piece
            List<AddItemDetails> itemDetailsList = pieceDetails.getItemDetails();
            if (itemDetailsList == null) {
                itemDetailsList = new ArrayList<>();
                pieceDetails.setItemDetails(itemDetailsList);
            }
            itemDetailsList.add(itemDetails);

            // Add piece to piece map
            pieceDetailsMap.put(pieceKey, pieceDetails);

            // Add piece map to consignment map
            consignmentMap.get(consignmentKey).setPieceDetails(new ArrayList<>(pieceDetailsMap.values()));
        }

        return new ArrayList<>(consignmentMap.values());
    }


//	/**
//	 *
//	 * @param allRowsList
//	 * @return
//	 */
//	public List<AddConsignment> prepConsignment(List<List<String>> allRowsList) {
//		Map<String, AddConsignment> consignmentMap = new HashMap<>();
//		Map<String, List<AddPieceDetails>> pieceMap = new HashMap<>();
//		Map<String, List<AddItemDetails>> itemMap = new HashMap<>();
//
//		// DateFormat
//		SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
//
//		for (List<String> listUploadedData : allRowsList) {
//			// Create consignment key based on consignment fields
//			String consignmentKey = String.join("_", listUploadedData.subList(0, 154));
//			// Create piece key based on piece-specific fields
//			String pieceKey = String.join("_", listUploadedData.subList(155, 168));
//
//			AddConsignment addConsignment = consignmentMap.getOrDefault(consignmentKey, new AddConsignment());
//			List<AddPieceDetails> pieceDetailsList = pieceMap.getOrDefault(consignmentKey, new ArrayList<>());
//			List<AddItemDetails> itemDetailsList = itemMap.getOrDefault(pieceKey, new ArrayList<>());
//
//			if (!consignmentMap.containsKey(consignmentKey)) {
//				// Set Consignment Details
//				addConsignment.setCompanyId(listUploadedData.get(0));
//				addConsignment.setPartnerId(listUploadedData.get(1));
//				addConsignment.setPartnerType(listUploadedData.get(2));
//				addConsignment.setPartnerName(listUploadedData.get(3));
//				addConsignment.setStatusId(listUploadedData.get(4));
//				addConsignment.setPartnerMasterAirwayBill(listUploadedData.get(5));
//				addConsignment.setPartnerHouseAirwayBill(listUploadedData.get(6));
//				addConsignment.setProductId(listUploadedData.get(7));
//				addConsignment.setSubProductId(listUploadedData.get(8));
//				addConsignment.setServiceTypeId(listUploadedData.get(9));
//				addConsignment.setServiceTypeText(listUploadedData.get(10));
//				addConsignment.setShipperId(listUploadedData.get(11));
//				addConsignment.setNoOfPieceHawb(listUploadedData.get(12));
//				addConsignment.setNoOfPackageHawb(listUploadedData.get(13));
//				addConsignment.setNoOfPackageMawb(listUploadedData.get(14));
//				addConsignment.setLineNo(listUploadedData.get(15));
//				addConsignment.setFlightNo(listUploadedData.get(16));
//				addConsignment.setFlightName(listUploadedData.get(17));
//				try{
//					Date flightArrivalTime = simpleDateFormat.parse(listUploadedData.get(18));
//					addConsignment.setFlightArrivalTime(flightArrivalTime);
//				}catch (ParseException e){
//					e.printStackTrace();
//				}
//				addConsignment.setConsigneeCivilId(listUploadedData.get(19));
//				addConsignment.setInvoiceSupplierName(listUploadedData.get(20));
//				addConsignment.setFreightCurrency(listUploadedData.get(21));
//				addConsignment.setFreightCharges(listUploadedData.get(22));
//				addConsignment.setCountryOfSupply(listUploadedData.get(23));
//				addConsignment.setRemark(listUploadedData.get(24));
//				addConsignment.setInvoiceAmount(listUploadedData.get(25));
//				addConsignment.setInvoiceNumber(listUploadedData.get(26));
//				addConsignment.setInvoiceDate(listUploadedData.get(27));
//				addConsignment.setInvoiceType(listUploadedData.get(28));
//				addConsignment.setInvoiceUrl(listUploadedData.get(29));
//				addConsignment.setHsCode(listUploadedData.get(30));
//				addConsignment.setCurrency(listUploadedData.get(31));
//				addConsignment.setIncoTerms(listUploadedData.get(32));
//				addConsignment.setGoodsDescription(listUploadedData.get(33));
//				addConsignment.setCountryOfOrigin(listUploadedData.get(34));
//				addConsignment.setManufacturer(listUploadedData.get(35));
//				addConsignment.setNoOfPackages(listUploadedData.get(36));
//				addConsignment.setItemTotalPrice(listUploadedData.get(37));
//				addConsignment.setPackageType(listUploadedData.get(38));
//				addConsignment.setQuantity(listUploadedData.get(39));
//				addConsignment.setNetWeight(listUploadedData.get(40));
//				addConsignment.setGrossWeight(listUploadedData.get(41));
//				addConsignment.setNotifyParty(listUploadedData.get(42));
//				addConsignment.setIsExempted(listUploadedData.get(43));
//				addConsignment.setExemptionFor(listUploadedData.get(44));
//				addConsignment.setExemptionBeneficiary(listUploadedData.get(45));
//				addConsignment.setExemptionReference(listUploadedData.get(46));
//				addConsignment.setAirportOriginCode(listUploadedData.get(47));
//				addConsignment.setReferenceNumber(listUploadedData.get(48));
//				addConsignment.setCustomerCode(listUploadedData.get(49));
//				addConsignment.setCustomerReferenceNumber(listUploadedData.get(50));
//				addConsignment.setActionType(listUploadedData.get(51));
//				addConsignment.setMovementType(listUploadedData.get(52));
//				addConsignment.setForwardReferenceNumber(listUploadedData.get(53));
//				addConsignment.setWorkerCode(listUploadedData.get(54));
//				addConsignment.setLoadType(listUploadedData.get(55));
//				addConsignment.setDescription(listUploadedData.get(56));
//				addConsignment.setNotes(listUploadedData.get(57));
//				addConsignment.setCodAmount(listUploadedData.get(58));
//				addConsignment.setCodFavorOf(listUploadedData.get(59));
//				addConsignment.setCodCollectionMode(listUploadedData.get(60));
//				addConsignment.setDeclaredValue(listUploadedData.get(61));
//				addConsignment.setConsignmentCurrency(listUploadedData.get(62));
//				addConsignment.setActualCurrency(listUploadedData.get(63));
//				addConsignment.setTotalDuty(listUploadedData.get(64));
//				addConsignment.setSpecialApprovalValue(listUploadedData.get(65));
//				addConsignment.setDeclaredValueWithoutTax(listUploadedData.get(66));
//				addConsignment.setLength(listUploadedData.get(67));
//				addConsignment.setDimensionUnit(listUploadedData.get(68));
//				addConsignment.setWidth(listUploadedData.get(69));
//				addConsignment.setHeight(listUploadedData.get(70));
//				addConsignment.setWeight(listUploadedData.get(71));
//				addConsignment.setWeightUnit(listUploadedData.get(72));
//				addConsignment.setVolume(listUploadedData.get(73));
//				addConsignment.setVolumeUnit(listUploadedData.get(74));
//				addConsignment.setUpstreamCreationTime(listUploadedData.get(75));
//				addConsignment.setUpstreamCreationSource(listUploadedData.get(76));
//				addConsignment.setAllocationTime(listUploadedData.get(77));
//				addConsignment.setAutoAllocate(listUploadedData.get(78));
//				addConsignment.setPriority(listUploadedData.get(79));
//				addConsignment.setCourierPartner(listUploadedData.get(80));
//				addConsignment.setCourierAccount(listUploadedData.get(81));
//				addConsignment.setCourierPartnerReferenceNumber(listUploadedData.get(82));
//				addConsignment.setPickupOtp(listUploadedData.get(83));
//				addConsignment.setDeliveryOtp(listUploadedData.get(84));
//				addConsignment.setRtoOtp(listUploadedData.get(85));
//				addConsignment.setTags(listUploadedData.get(86));
//				addConsignment.setServiceTime(listUploadedData.get(87));
//				addConsignment.setPickupServiceTime(listUploadedData.get(88));
//				addConsignment.setDeliveryServiceTime(listUploadedData.get(89));
//				addConsignment.setPickupTimeSlotStart(listUploadedData.get(90));
//				addConsignment.setPickupTimeSlotEnd(listUploadedData.get(91));
//				addConsignment.setDeliveryTimeSlotStart(listUploadedData.get(92));
//				addConsignment.setDeliveryTimeSlotEnd(listUploadedData.get(93));
//				addConsignment.setScheduledAt(listUploadedData.get(94));
//				addConsignment.setWorkerTipAmount(listUploadedData.get(95));
//				addConsignment.setWorkerEligiblePayout(listUploadedData.get(96));
//				addConsignment.setConstraintTags(listUploadedData.get(97));
//				addConsignment.setEwayBill(listUploadedData.get(98));
//				addConsignment.setProductCode(listUploadedData.get(99));
//				addConsignment.setCustomsValue(listUploadedData.get(100));
//				addConsignment.setAmount(listUploadedData.get(101));
//				addConsignment.setIsCustomsDeclarable(listUploadedData.get(102));
//				addConsignment.setPackDetails(listUploadedData.get(103));
//				addConsignment.setStorageLocation(listUploadedData.get(104));
//				addConsignment.setIsExchange(listUploadedData.get(105));
//				addConsignment.setReverseReason(listUploadedData.get(106));
//
//				// Set Return Details
//				AddReturnDetails returnDetails = new AddReturnDetails();
//				returnDetails.setAddressHubCode(listUploadedData.get(107));
//				returnDetails.setAccountId(listUploadedData.get(108));
//				returnDetails.setEmail(listUploadedData.get(109));
//				returnDetails.setCompanyName(listUploadedData.get(110));
//				returnDetails.setName(listUploadedData.get(111));
//				returnDetails.setPhone(listUploadedData.get(112));
//				returnDetails.setAlternatePhone(listUploadedData.get(113));
//				returnDetails.setAddressLine1(listUploadedData.get(114));
//				returnDetails.setAddressLine2(listUploadedData.get(115));
//				returnDetails.setPinCode(listUploadedData.get(116));
//				returnDetails.setDistrict(listUploadedData.get(117));
//				returnDetails.setCity(listUploadedData.get(118));
//				returnDetails.setState(listUploadedData.get(119));
//				returnDetails.setCountry(listUploadedData.get(120));
//				returnDetails.setLatitude(listUploadedData.get(121));
//				returnDetails.setLongitude(listUploadedData.get(122));
//				addConsignment.setReturnDetails(returnDetails);
//
//				// Set Origin Details
//				AddOriginDetails originDetails = new AddOriginDetails();
//				originDetails.setAddressHubCode(listUploadedData.get(123));
//				originDetails.setAccountId(listUploadedData.get(124));
//				originDetails.setEmail(listUploadedData.get(125));
//				originDetails.setCompanyName(listUploadedData.get(126));
//				originDetails.setName(listUploadedData.get(127));
//				originDetails.setPhone(listUploadedData.get(128));
//				originDetails.setAlternatePhone(listUploadedData.get(129));
//				originDetails.setAddressLine1(listUploadedData.get(130));
//				originDetails.setAddressLine2(listUploadedData.get(131));
//				originDetails.setPinCode(listUploadedData.get(132));
//				originDetails.setDistrict(listUploadedData.get(133));
//				originDetails.setCity(listUploadedData.get(134));
//				originDetails.setState(listUploadedData.get(135));
//				originDetails.setCountry(listUploadedData.get(136));
//				originDetails.setLatitude(listUploadedData.get(137));
//				originDetails.setLongitude(listUploadedData.get(138));
//				addConsignment.setOriginDetails(originDetails);
//
//				// Set Destination Details
//				AddDestinationDetails destinationDetails = new AddDestinationDetails();
//				destinationDetails.setAddressHubCode(listUploadedData.get(139));
//				destinationDetails.setAccountId(listUploadedData.get(140));
//				destinationDetails.setEmail(listUploadedData.get(141));
//				destinationDetails.setCompanyName(listUploadedData.get(142));
//				destinationDetails.setName(listUploadedData.get(143));
//				destinationDetails.setPhone(listUploadedData.get(144));
//				destinationDetails.setAlternatePhone(listUploadedData.get(145));
//				destinationDetails.setAddressLine1(listUploadedData.get(146));
//				destinationDetails.setAddressLine2(listUploadedData.get(147));
//				destinationDetails.setPinCode(listUploadedData.get(148));
//				destinationDetails.setDistrict(listUploadedData.get(149));
//				destinationDetails.setCity(listUploadedData.get(150));
//				destinationDetails.setState(listUploadedData.get(151));
//				destinationDetails.setCountry(listUploadedData.get(152));
//				destinationDetails.setLatitude(listUploadedData.get(153));
//				destinationDetails.setLongitude(listUploadedData.get(154));
//				addConsignment.setDestinationDetails(destinationDetails);
//
//				consignmentMap.put(consignmentKey, addConsignment);
//			}
//
//			AddPieceDetails pieceDetails = new AddPieceDetails();
//			pieceDetails.setDescription(listUploadedData.get(155));
//			pieceDetails.setDeclaredValue(listUploadedData.get(156));
//			pieceDetails.setCodAmount(listUploadedData.get(157));
//			pieceDetails.setLength(listUploadedData.get(158));
//			pieceDetails.setDimensionUnit(listUploadedData.get(159));
//			pieceDetails.setWidth(listUploadedData.get(160));
//			pieceDetails.setHeight(listUploadedData.get(161));
//			pieceDetails.setWeight(listUploadedData.get(162));
//			pieceDetails.setPartnerType(listUploadedData.get(163));
//			pieceDetails.setWeight_unit(listUploadedData.get(164));
//			pieceDetails.setVolume(listUploadedData.get(165));
//			pieceDetails.setVolumeUnit(listUploadedData.get(166));
//			pieceDetails.setPackReferenceNumber(listUploadedData.get(167));
//			pieceDetails.setTags(listUploadedData.get(168));
//
//
//			// Set Item Details
//			AddItemDetails itemDetails = new AddItemDetails();
//			itemDetails.setPartnerType(listUploadedData.get(169));
//			itemDetails.setItemCode(listUploadedData.get(170));
//			itemDetails.setHsCode(listUploadedData.get(171));
//			itemDetails.setDeclaredValue(listUploadedData.get(172));
//			itemDetails.setCodAmount(listUploadedData.get(173));
//			itemDetails.setLength(listUploadedData.get(174));
//			itemDetails.setDimensionUnit(listUploadedData.get(175));
//			itemDetails.setWidth(listUploadedData.get(176));
//			itemDetails.setHeight(listUploadedData.get(177));
//			itemDetails.setWeight(listUploadedData.get(178));
//			itemDetails.setWeightUnit(listUploadedData.get(179));
//			itemDetails.setVolume(listUploadedData.get(180));
//			itemDetails.setVolumeUnit(listUploadedData.get(181));
//			if (listUploadedData.get(182).trim().length() > 0) {
//				itemDetails.setDescription(listUploadedData.get(182));
//
//			}
//
//			itemDetailsList.add(itemDetails);
//			pieceDetails.setItemDetails(itemDetailsList);
//
//			if (!pieceDetailsList.contains(pieceDetails)) {
//				pieceDetailsList.add(pieceDetails);
//			}
//
//			pieceMap.put(consignmentKey, pieceDetailsList);
//			itemMap.put(pieceKey, itemDetailsList);
//		}
//
//		for (String consignmentKey : consignmentMap.keySet()) {
//			AddConsignment consignment = consignmentMap.get(consignmentKey);
//			consignment.setPieceDetails(pieceMap.get(consignmentKey));
//		}
//
//		return new ArrayList<>(consignmentMap.values());
//	}



//	this is upload program i pass 50 records in excel difference different consignment but same piece and same item ok, 50 consignment, 50 piece, 50 item create but now create 50 consginment, 50 piece, each pieace 50 item created this is wrong , i send 50 records only but save item is 2500 records
//	public List<AddConsignment> prepConsignmentData(List<List<String>> allRowsList) {
//		Map<String, AddConsignment> consignmentMap = new HashMap<>();
//		Map<String, List<AddPieceDetails>> pieceMap = new HashMap<>();
//		Map<String, List<AddItemDetails>> itemMap = new HashMap<>();
//
//		for (List<String> listUploadedData : allRowsList) {
//			// Create keys based on all consignment fields
//			String consignmentKey = String.join("_", listUploadedData.subList(0, 16));
//			String pieceKey = consignmentKey + "_" + String.join("_", listUploadedData.subList(16, 35));
//
//			AddConsignment addConsignment = consignmentMap.getOrDefault(consignmentKey, new AddConsignment());
//			List<AddPieceDetails> pieceDetailsList = pieceMap.getOrDefault(consignmentKey, new ArrayList<>());
//			List<AddItemDetails> itemDetailsList = itemMap.getOrDefault(pieceKey, new ArrayList<>());
//
//			if (!consignmentMap.containsKey(consignmentKey)) {
//				// Set Consignment Details
//				addConsignment.setCompanyId(listUploadedData.get(0));
//				addConsignment.setCodAmount(listUploadedData.get(1));
//				addConsignment.setPartnerType(listUploadedData.get(2));
//				addConsignment.setPartnerName(listUploadedData.get(3));
//				addConsignment.setStatusId(listUploadedData.get(4));
//				addConsignment.setProductId(listUploadedData.get(5));
//				addConsignment.setProductName(listUploadedData.get(6));
//				addConsignment.setSubProductId(listUploadedData.get(7));
//				addConsignment.setSubProductName(listUploadedData.get(8));
//				addConsignment.setServiceTypeId(listUploadedData.get(9));
//				addConsignment.setServiceTypeText(listUploadedData.get(10));
//				addConsignment.setCourierPartnerReferenceNumber(listUploadedData.get(11));
//				addConsignment.setShipperName(listUploadedData.get(12));
//				addConsignment.setPartnerId(listUploadedData.get(12));
//				addConsignment.setNoOfPackageHawb(listUploadedData.get(13));
//				addConsignment.setNoOfPackageMawb(listUploadedData.get(14));
//				addConsignment.setNoOfPieceHawb(listUploadedData.get(15));
//
//				// Set Return Details
//				AddReturnDetails returnDetails = new AddReturnDetails();
//				returnDetails.setAccountId(listUploadedData.get(16));
//				returnDetails.setCity(listUploadedData.get(17));
//				returnDetails.setCountry(listUploadedData.get(18));
//				returnDetails.setEmail(listUploadedData.get(19));
//				returnDetails.setName(listUploadedData.get(20));
//				addConsignment.setReturnDetails(returnDetails);
//
//				// Set Origin Details
//				AddOriginDetails originDetails = new AddOriginDetails();
//				originDetails.setAddressHubCode(listUploadedData.get(21));
//				originDetails.setAlternatePhone(listUploadedData.get(22));
//				originDetails.setDistrict(listUploadedData.get(23));
//				originDetails.setPinCode(listUploadedData.get(24));
//				originDetails.setState(listUploadedData.get(25));
//				addConsignment.setOriginDetails(originDetails);
//
//				// Set Destination Details
//				AddDestinationDetails destinationDetails = new AddDestinationDetails();
//				destinationDetails.setDistrict(listUploadedData.get(26));
//				destinationDetails.setEmail(listUploadedData.get(27));
//				destinationDetails.setName(listUploadedData.get(28));
//				destinationDetails.setAddressLine1(listUploadedData.get(29));
//				destinationDetails.setLatitude(listUploadedData.get(30));
//				addConsignment.setDestinationDetails(destinationDetails);
//
//				consignmentMap.put(consignmentKey, addConsignment);
//			}
//
//			AddPieceDetails pieceDetails = new AddPieceDetails();
//			pieceDetails.setCodAmount(listUploadedData.get(31));
//			pieceDetails.setPartnerType(listUploadedData.get(32));
//			pieceDetails.setDeclaredValue(listUploadedData.get(33));
//			pieceDetails.setHeight(listUploadedData.get(34));
//
//			// Set Item Details
//			AddItemDetails itemDetails = new AddItemDetails();
//			itemDetails.setDimensionUnit(listUploadedData.get(35));
//			itemDetails.setHsCode(listUploadedData.get(36));
//			if (listUploadedData.get(37).trim().length() > 0) {
//				itemDetails.setItemCode(listUploadedData.get(37));
//			}
//
//			itemDetailsList.add(itemDetails);
//			pieceDetails.setItemDetails(itemDetailsList);
//
//			if (!pieceDetailsList.contains(pieceDetails)) {
//				pieceDetailsList.add(pieceDetails);
//			}
//
//			pieceMap.put(consignmentKey, pieceDetailsList);
//			itemMap.put(pieceKey, itemDetailsList);
//		}
//
//		for (String consignmentKey : consignmentMap.keySet()) {
//			AddConsignment consignment = consignmentMap.get(consignmentKey);
//			consignment.setPieceDetails(pieceMap.get(consignmentKey));
//		}
//
//		return new ArrayList<>(consignmentMap.values());
//	}

}
