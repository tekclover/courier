package com.courier.overc360.api.controller;

import com.courier.overc360.api.model.idmaster.*;
import com.courier.overc360.api.service.IDMasterService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.SwaggerDefinition;
import io.swagger.annotations.Tag;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.lang.reflect.InvocationTargetException;

@Slf4j
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/wms-idmaster-service")
@Api(tags = {"IDMaster Service"}, value = "IDMaster Service Operations") // label for swagger
@SwaggerDefinition(tags = {@Tag(name = "User", description = "Operations related to IDMaster Service")})
public class IDMasterServiceController {

    @Autowired
    IDMasterService idmasterService;


    /* --------------------------------LOGIN-------------------------------------------------------------------------------------*/

//	@ApiOperation(response = Optional.class, value = "Login User") // label for swagger
//	@RequestMapping(value = "/login", method = RequestMethod.GET, produces = "application/json")
//	public ResponseEntity<?> loginUser(@RequestParam String name, @RequestParam String password,
//									   @RequestParam String authToken, @RequestParam(required = false) String version) {
//		try {
//			UserManagement loggedUser = idmasterService.validateUserID(name, password, authToken, version);
//			log.info("LoginUser::: " + loggedUser);
//			log.info("version::: " + version);
//			return new ResponseEntity<>(loggedUser, HttpStatus.OK);
//		} catch (BadRequestException e) {
//			log.error("Invalid user");
//			String str = "Either UserId is invalid or Password does not match.";
//			CustomErrorResponse error = new CustomErrorResponse();
//			error.setTimestamp(LocalDateTime.now());
//			error.setError(str);
//			error.setStatus(HttpStatus.BAD_REQUEST.value());
//			return new ResponseEntity<>(error, HttpStatus.UNAUTHORIZED);
//		}
//	}

    //==============================================NumberRange========================================================
    // Get All NumberRangeCode Details
    @ApiOperation(response = NumberRange[].class, value = "Get all NumberRange details") // label for swagger
    @GetMapping("/numberRange")
    public ResponseEntity<?> getAllNumberRangeDetails(@RequestParam String authToken) {
        NumberRange[] numberRanges = idmasterService.getAllNumberRanges(authToken);
        return new ResponseEntity<>(numberRanges, HttpStatus.OK);
    }

    // Get a NumberRange
    @ApiOperation(response = NumberRange.class, value = "Get a NumberRange") // label for swagger
    @GetMapping("/numberRange/{numberRangeCode}")
    public ResponseEntity<?> getCompany(@PathVariable Long numberRangeCode, @RequestParam String languageId, @RequestParam String authToken) {
        NumberRange numberRange = idmasterService.getNumberRange(languageId, numberRangeCode, authToken);
        return new ResponseEntity<>(numberRange, HttpStatus.OK);
    }

    // Create new NumberRange
    @ApiOperation(response = NumberRange.class, value = "Create new NumberRange") // label for swagger
    @PostMapping("/numberRange")
    public ResponseEntity<?> postNumberRange(@RequestBody AddNumberRange addNumberRange,
                                             @RequestParam String loginUserID, String authToken)
            throws IllegalAccessException, InvocationTargetException {
        NumberRange createdNumberRange = idmasterService.createNumberRange(addNumberRange, loginUserID, authToken);
        return new ResponseEntity<>(createdNumberRange, HttpStatus.OK);
    }

    // Update NumberRange
    @ApiOperation(response = NumberRange.class, value = "Update NumberRange") // label for swagger
    @PatchMapping("/numberRange/{numberRangeCode}")
    public ResponseEntity<?> patchNumberRange(@PathVariable Long numberRangeCode, @RequestParam String languageId,
                                              @RequestParam String loginUserID, @RequestBody UpdateNumberRange updateNumberRange,
                                              @RequestParam String authToken) throws IllegalAccessException, InvocationTargetException {
        NumberRange updatedNumberRange = idmasterService.updateNumberRange(languageId, numberRangeCode, loginUserID, updateNumberRange, authToken);
        return new ResponseEntity<>(updatedNumberRange, HttpStatus.OK);
    }

    // Delete NumberRange
    @ApiOperation(response = NumberRange.class, value = "Delete NumberRange") // label for swagger
    @DeleteMapping("/numberRange/{numberRangeCode}")
    public ResponseEntity<?> deleteNumberRange(@PathVariable Long numberRangeCode, @RequestParam String languageId,
                                               @RequestParam String numberRangeObject, @RequestParam String loginUserID,
                                               @RequestParam String authToken) {
        idmasterService.deleteNumberRange(languageId, numberRangeCode, numberRangeObject, loginUserID, authToken);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // Find NumberRange
    @ApiOperation(response = NumberRange[].class, value = "Find NumberRange") // label for swagger
    @PostMapping("/numberRange/find")
    public NumberRange[] findNumberRange(@RequestBody FindNumberRange findNumberRange,
                                         @RequestParam String authToken) throws Exception {
        return idmasterService.findNumberRange(findNumberRange, authToken);
    }

    //=================================================ErrorLog========================================================
    // Get All ErrorLog Details
    @ApiOperation(response = ErrorLog[].class, value = "Get all ErrorLogs") // label for Swagger
    @GetMapping("/errorLog/getAll")
    public ResponseEntity<?> getAllErrorLogs(@RequestParam String authToken) {
        ErrorLog[] errorLogs = idmasterService.getAllErrorLogs(authToken);
        return new ResponseEntity<>(errorLogs, HttpStatus.OK);
    }

    // Find ErrorLog
    @ApiOperation(response = ErrorLog[].class, value = "Find ErrorLog") //label for swagger
    @PostMapping("/errorLog/find")
    public ErrorLog[] findErrorLogs(@RequestBody FindErrorLog findErrorLog,
                                    @RequestParam String authToken) throws Exception {
        return idmasterService.findErrorLogs(findErrorLog, authToken);
    }

    //===============================================Language==========================================================
    // Get All Language Details
    @ApiOperation(response = Language[].class, value = "Get all Language details") // label for swagger
    @GetMapping("/language")
    public ResponseEntity<?> getAllLanguages(@RequestParam String authToken) {
        Language[] languages = idmasterService.getAllLanguages(authToken);
        return new ResponseEntity<>(languages, HttpStatus.OK);
    }

    // Get Language
    @ApiOperation(response = Language.class, value = "Get a Language") // label for swagger
    @GetMapping("/language/{languageId}")
    public ResponseEntity<?> getLanguage(@PathVariable String languageId, @RequestParam String authToken) {
        Language dbLanguage = idmasterService.getLanguage(languageId, authToken);
        return new ResponseEntity<>(dbLanguage, HttpStatus.OK);
    }

    // Create Language
    @ApiOperation(response = Language.class, value = "Create new Language") // label for swagger
    @PostMapping("/language")
    public ResponseEntity<?> postLanguage(@RequestBody AddLanguage newLanguage,
                                          @RequestParam String loginUserID, String authToken)
            throws IllegalAccessException, InvocationTargetException {
        Language createdLanguage = idmasterService.createLanguage(newLanguage, loginUserID, authToken);
        return new ResponseEntity<>(createdLanguage, HttpStatus.OK);
    }

    // Update Language
    @ApiOperation(response = Language.class, value = "Update Language") // label for swagger
    @PatchMapping("/language/{languageId}")
    public ResponseEntity<?> updateLanguage(@PathVariable String languageId, @RequestParam String loginUserID, @RequestBody UpdateLanguage updateLanguage,
                                            @RequestParam String authToken) throws IllegalAccessException, InvocationTargetException {
        Language updatedLanguage = idmasterService.updateLanguage(languageId, loginUserID, updateLanguage, authToken);
        return new ResponseEntity<>(updatedLanguage, HttpStatus.OK);
    }

    // Delete Language
    @ApiOperation(response = Language.class, value = "Delete Language") // label for swagger
    @DeleteMapping("/language/{languageId}")
    public ResponseEntity<?> deleteLanguage(@PathVariable String languageId,
                                            @RequestParam String loginUserID, @RequestParam String authToken) {
        idmasterService.deleteLanguage(languageId, loginUserID, authToken);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // Find Language
    @ApiOperation(response = Language[].class, value = "Find Language") //label for swagger
    @PostMapping("/language/find")
    public Language[] findLanguages(@RequestBody FindLanguage findLanguage,
                                    @RequestParam String authToken) throws Exception {
        return idmasterService.findLanguages(findLanguage, authToken);
    }

    //===============================================Company==========================================================
    // Get All Company Details
    @ApiOperation(response = Company[].class, value = "Get all Company details") // label for swagger
    @GetMapping("/company")
    public ResponseEntity<?> getAllCompanies(@RequestParam String authToken) {
        Company[] companies = idmasterService.getAllCompanies(authToken);
        return new ResponseEntity<>(companies, HttpStatus.OK);
    }

    // Get Company
    @ApiOperation(response = Company.class, value = "Get a Company") // label for swagger
    @GetMapping("/company/{companyId}")
    public ResponseEntity<?> getCompany(@PathVariable String companyId, @RequestParam String languageId, @RequestParam String authToken) {
        Company dbCompany = idmasterService.getCompany(languageId, companyId, authToken);
        return new ResponseEntity<>(dbCompany, HttpStatus.OK);
    }

    // Create Company
    @ApiOperation(response = Company.class, value = "Create new Company") // label for swagger
    @PostMapping("/company")
    public ResponseEntity<?> postCompany(@RequestBody AddCompany addCompany, @RequestParam String loginUserID, String authToken)
            throws IllegalAccessException, InvocationTargetException {
        Company createdCompany = idmasterService.createCompany(addCompany, loginUserID, authToken);
        return new ResponseEntity<>(createdCompany, HttpStatus.OK);
    }

    // Update Company
    @ApiOperation(response = Company.class, value = "Update Company") // label for swagger
    @PatchMapping("/company/{companyId}")
    public ResponseEntity<?> patchCompany(@PathVariable String companyId, @RequestParam String languageId,
                                          @RequestParam String loginUserID, @RequestBody UpdateCompany updateCompany,
                                          @RequestParam String authToken) throws IllegalAccessException, InvocationTargetException {
        Company updatedCompany = idmasterService.updateCompany(languageId, companyId, loginUserID, updateCompany, authToken);
        return new ResponseEntity<>(updatedCompany, HttpStatus.OK);
    }

    // Delete Company
    @ApiOperation(response = Company.class, value = "Delete Company") // label for swagger
    @DeleteMapping("/company/{companyId}")
    public ResponseEntity<?> deleteCompany(@PathVariable String companyId, @RequestParam String languageId,
                                           @RequestParam String loginUserID, @RequestParam String authToken) {
        idmasterService.deleteCompany(languageId, companyId, loginUserID, authToken);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // Find Company
    @ApiOperation(response = Company[].class, value = "Find Company")//label for swagger
    @PostMapping("/company/find")
    public Company[] findCompany(@RequestBody FindCompany findCompany,
                                 @RequestParam String authToken) throws Exception {
        return idmasterService.findCompany(findCompany, authToken);
    }

    //===============================================SubProduct========================================================
    // Get all SubProduct Details
    @ApiOperation(response = SubProduct.class, value = "Get All SubProduct Details") // label for swagger
    @GetMapping("/subProduct")
    public ResponseEntity<?> getAllSubProductDetails(@RequestParam String authToken) {
        SubProduct[] subProducts = idmasterService.getAllSubProducts(authToken);
        return new ResponseEntity<>(subProducts, HttpStatus.OK);
    }

    // Get SubProduct
    @ApiOperation(response = SubProduct.class, value = "Get SubProduct") // label for swagger
    @GetMapping("/subProduct/{subProductId}")
    public ResponseEntity<?> getSubProduct(@PathVariable String subProductId, @RequestParam String companyId,
                                           @RequestParam String languageId, @RequestParam String authToken) {
        SubProduct subProduct = idmasterService.getSubProduct(languageId, companyId, subProductId, authToken);
        return new ResponseEntity<>(subProduct, HttpStatus.OK);
    }

    // Create SubProduct
    @ApiOperation(response = SubProduct.class, value = "Create new SubProduct") // label for swagger
    @PostMapping("/subProduct")
    public ResponseEntity<?> createSubProduct(@RequestBody AddSubProduct addSubProduct, @RequestParam String loginUserID, @RequestParam String authToken) {
        SubProduct subProduct = idmasterService.createSubProduct(addSubProduct, loginUserID, authToken);
        return new ResponseEntity<>(subProduct, HttpStatus.OK);
    }

    // Update SubProduct
    @ApiOperation(response = SubProduct.class, value = "Update SubProduct") // label for swagger
    @PatchMapping("/subProduct/{subProductId}")
    public ResponseEntity<?> updateSubProduct(@PathVariable String subProductId, @RequestParam String languageId,
                                              @RequestParam String loginUserID, @RequestBody UpdateSubProduct updateSubProduct,
                                              @RequestParam String companyId, @RequestParam String authToken) {
        SubProduct subProduct = idmasterService.updateSubProduct(languageId, companyId, subProductId, updateSubProduct, loginUserID, authToken);
        return new ResponseEntity<>(subProduct, HttpStatus.OK);
    }

    // Delete SubProduct
    @ApiOperation(response = SubProduct.class, value = "Delete SubProduct") // label for swagger
    @DeleteMapping("/subProduct/{subProductId}")
    public ResponseEntity<?> deleteSubProduct(@PathVariable String subProductId, @RequestParam String languageId, @RequestParam String loginUserID,
                                              @RequestParam String companyId, @RequestParam String authToken) {
        idmasterService.deleteSubProduct(languageId, companyId, subProductId, loginUserID, authToken);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // Find SubProduct
    @ApiOperation(response = SubProduct[].class, value = "Find SubProduct") //label for swagger
    @PostMapping("/subProduct/find")
    public SubProduct[] findSubProducts(@RequestBody FindSubProduct findSubProduct, @RequestParam String authToken) throws Exception {
        return idmasterService.findSubProducts(findSubProduct, authToken);
    }

    //================================================Product==========================================================
    // Get all Product Details
    @ApiOperation(response = Product.class, value = "Get All Product Details") // label for swagger
    @GetMapping("/product")
    public ResponseEntity<?> getAllProductDetails(@RequestParam String authToken) {
        Product[] products = idmasterService.getAllProducts(authToken);
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    // Get a Product
    @ApiOperation(response = Product.class, value = "Get Product") // label for swagger
    @GetMapping("/product/{productId}")
    public ResponseEntity<?> getProduct(@PathVariable String productId, @RequestParam String companyId, @RequestParam String subProductId,
                                        @RequestParam String languageId, @RequestParam String authToken) {
        Product product = idmasterService.getProduct(languageId, companyId, subProductId, productId, authToken);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    // Create Product
    @ApiOperation(response = Product.class, value = "Create new Product") // label for swagger
    @PostMapping("/product")
    public ResponseEntity<?> createProduct(@RequestBody AddProduct addProduct, @RequestParam String loginUserID, @RequestParam String authToken) {
        Product product = idmasterService.createProduct(addProduct, loginUserID, authToken);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    // Update Product
    @ApiOperation(response = Product.class, value = "Update Product") // label for swagger
    @PatchMapping("/product/{productId}")
    public ResponseEntity<?> updateProduct(@PathVariable String productId, @RequestParam String languageId, @RequestParam String subProductId,
                                           @RequestParam String loginUserID, @RequestBody UpdateProduct updateProduct,
                                           @RequestParam String companyId, @RequestParam String authToken) {
        Product product = idmasterService.updateProduct(languageId, companyId, subProductId, productId, updateProduct, loginUserID, authToken);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    // Delete Product
    @ApiOperation(response = Product.class, value = "Delete Product") // label for swagger
    @DeleteMapping("/product/{productId}")
    public ResponseEntity<?> deleteProduct(@PathVariable String productId, @RequestParam String languageId, @RequestParam String loginUserID,
                                           @RequestParam String subProductId, @RequestParam String companyId, @RequestParam String authToken) {
        idmasterService.deleteProduct(languageId, companyId, subProductId, productId, loginUserID, authToken);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // Find Product
    @ApiOperation(response = Product[].class, value = "Find Product") //label for swagger
    @PostMapping("/product/find")
    public Product[] findProducts(@RequestBody FindProduct findProduct, @RequestParam String authToken) throws Exception {
        return idmasterService.findProducts(findProduct, authToken);
    }

    //==================================================ServiceType====================================================
    // Get All ServiceType Details
    @ApiOperation(response = ServiceType[].class, value = "Get all ServiceType details") // label for swagger
    @GetMapping("/serviceType")
    public ResponseEntity<?> getAllServiceTypes(@RequestParam String authToken) {
        ServiceType[] userServiceType = idmasterService.getAllServiceTypes(authToken);
        return new ResponseEntity<>(userServiceType, HttpStatus.OK);
    }

    // Get ServiceType
    @ApiOperation(response = ServiceType.class, value = "Get ServiceType") // label for swagger
    @GetMapping("/serviceType/{serviceTypeId}")
    public ResponseEntity<?> getServiceType(@PathVariable String serviceTypeId, @RequestParam String languageId,
                                            @RequestParam String companyId, @RequestParam String authToken) {
        ServiceType dbServiceType = idmasterService.getServiceType(companyId, languageId, serviceTypeId, authToken);
        return new ResponseEntity<>(dbServiceType, HttpStatus.OK);
    }


    // Create new ServiceType
    @ApiOperation(response = ServiceType.class, value = "Create new ServiceType") // label for swagger
    @PostMapping("/serviceType")
    public ResponseEntity<?> postServiceType(@RequestBody AddServiceType newServiceType,
                                             @RequestParam String loginUserID, String authToken)
            throws IllegalAccessException, InvocationTargetException {
        ServiceType createServiceType = idmasterService.createServiceType(newServiceType, loginUserID, authToken);
        return new ResponseEntity<>(createServiceType, HttpStatus.OK);
    }

    // Update ServiceType
    @ApiOperation(response = ServiceType.class, value = "Update ServiceType") // label for swagger
    @PatchMapping("/serviceType/{serviceTypeId}")
    public ResponseEntity<?> updateServiceType(@PathVariable String serviceTypeId, @RequestParam String languageId, @RequestParam String companyId, @RequestParam String loginUserID,
                                               @RequestBody UpdateServiceType updateServiceType, @RequestParam String authToken) {
        ServiceType updatedServiceType = idmasterService.updateServiceType(companyId, languageId, serviceTypeId, loginUserID, updateServiceType, authToken);
        return new ResponseEntity<>(updatedServiceType, HttpStatus.OK);
    }

    // Delete ServiceType
    @ApiOperation(response = ServiceType.class, value = "Delete ServiceType") // label for swagger
    @DeleteMapping("/serviceType/{serviceTypeId}")
    public ResponseEntity<?> deleteServiceType(@PathVariable String serviceTypeId, @RequestParam String languageId, @RequestParam String companyId,
                                               @RequestParam String loginUserID, @RequestParam String authToken) {
        idmasterService.deleteServiceType(companyId, languageId, serviceTypeId, loginUserID, authToken);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // Find ServiceType
    @ApiOperation(response = ServiceType[].class, value = "Find ServiceType")//label for swagger
    @PostMapping("/serviceType/find")
    public ServiceType[] findServiceType(@RequestBody FindServicetype findServiceType,
                                         @RequestParam String authToken) throws Exception {
        return idmasterService.findServiceType(findServiceType, authToken);
    }

    //==============================================ConsignmentType====================================================
    // Get All ConsignmentType Details
    @ApiOperation(response = ConsignmentType[].class, value = "Get all ConsignmentType details") // label for swagger
    @GetMapping("/consignmentType")
    public ResponseEntity<?> getConsignmentTypes(@RequestParam String authToken) {
        ConsignmentType[] userConsignmentType = idmasterService.getConsignmentTypes(authToken);
        return new ResponseEntity<>(userConsignmentType, HttpStatus.OK);
    }

    // Get ConsignmentType
    @ApiOperation(response = ConsignmentType.class, value = "Get ConsignmentType") // label for swagger
    @GetMapping("/consignmentType/{consignmentTypeId}")
    public ResponseEntity<?> getConsignmentType(@PathVariable String consignmentTypeId, @RequestParam String languageId,
                                                @RequestParam String companyId, @RequestParam String authToken) {
        ConsignmentType dbConsignmentType = idmasterService.getConsignmentType(companyId, languageId, consignmentTypeId, authToken);
        return new ResponseEntity<>(dbConsignmentType, HttpStatus.OK);
    }

    // Create new ConsignmentType
    @ApiOperation(response = ConsignmentType.class, value = "Create new ConsignmentType") // label for swagger
    @PostMapping("/consignmentType")
    public ResponseEntity<?> postConsignmentType(@RequestBody AddConsignmentType newConsignmentType,
                                                 @RequestParam String loginUserID, String authToken)
            throws IllegalAccessException, InvocationTargetException {
        ConsignmentType createConsignmentType = idmasterService.createConsignmentType(newConsignmentType, loginUserID, authToken);
        return new ResponseEntity<>(createConsignmentType, HttpStatus.OK);
    }

    // Update ConsignmentType
    @ApiOperation(response = ConsignmentType.class, value = "Update ConsignmentType") // label for swagger
    @RequestMapping(value = "/consignmentType/{consignmentTypeId}", method = RequestMethod.PATCH)
    public ResponseEntity<?> updateConsignmentType(@PathVariable String consignmentTypeId, @RequestParam String languageId, @RequestParam String companyId, @RequestParam String loginUserID,
                                                   @RequestBody UpdateConsignmentType updateConsignmentType, @RequestParam String authToken) throws IllegalAccessException, InvocationTargetException {
        ConsignmentType UpdateConsignmentType =
                idmasterService.updateConsignmentType(companyId, languageId, consignmentTypeId, loginUserID, updateConsignmentType, authToken);
        return new ResponseEntity<>(UpdateConsignmentType, HttpStatus.OK);
    }

    // Delete ConsignmentType
    @ApiOperation(response = ConsignmentType.class, value = "Delete ConsignmentType") // label for swagger
    @DeleteMapping("/consignmentType/{consignmentTypeId}")
    public ResponseEntity<?> deleteConsignmentType(@PathVariable String consignmentTypeId, @RequestParam String languageId, @RequestParam String companyId,
                                                   @RequestParam String loginUserID, @RequestParam String authToken) {
        idmasterService.deleteConsignmentType(companyId, languageId, consignmentTypeId, loginUserID, authToken);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // Find ConsignmentType
    @ApiOperation(response = ConsignmentType[].class, value = "Find ConsignmentType")//label for swagger
    @PostMapping("/consignmentType/findConsignmentType")
    public ConsignmentType[] findConsignmentType(@RequestBody FindConsignmentType findConsignmentType,
                                                 @RequestParam String authToken) throws Exception {
        return idmasterService.findConsignmentType(findConsignmentType, authToken);
    }

    //================================================LoadType=========================================================
    // Get All LoadType Details
    @ApiOperation(response = LoadType.class, value = "Get All LoadType Details") // label for swagger
    @GetMapping("/loadType")
    public ResponseEntity<?> getAllLoadTypeDetails(@RequestParam String authToken) {
        LoadType[] loadTypes = idmasterService.getAllLoadTypes(authToken);
        return new ResponseEntity<>(loadTypes, HttpStatus.OK);
    }

    // Get LoadType
    @ApiOperation(response = LoadType.class, value = "Get LoadType") // label for swagger
    @GetMapping("/loadType/{loadTypeId}")
    public ResponseEntity<?> getLoadType(@PathVariable String loadTypeId, @RequestParam String companyId,
                                         @RequestParam String languageId, @RequestParam String authToken) {
        LoadType loadType = idmasterService.getLoadType(languageId, companyId, loadTypeId, authToken);
        return new ResponseEntity<>(loadType, HttpStatus.OK);
    }

    // Create LoadType
    @ApiOperation(response = LoadType.class, value = "Create new LoadType") // label for swagger
    @PostMapping("/loadType")
    public ResponseEntity<?> createLoadType(@RequestBody AddLoadType addLoadType, @RequestParam String loginUserID, @RequestParam String authToken) {
        LoadType loadType = idmasterService.createLoadType(addLoadType, loginUserID, authToken);
        return new ResponseEntity<>(loadType, HttpStatus.OK);
    }

    // Update LoadType
    @ApiOperation(response = LoadType.class, value = "Update LoadType") // label for swagger
    @PatchMapping("/loadType/{loadTypeId}")
    public ResponseEntity<?> updateLoadType(@PathVariable String loadTypeId, @RequestParam String languageId,
                                            @RequestParam String loginUserID, @RequestBody UpdateLoadType updateLoadType,
                                            @RequestParam String companyId, @RequestParam String authToken) {
        LoadType loadType = idmasterService.updateLoadType(languageId, companyId, loadTypeId, updateLoadType, loginUserID, authToken);
        return new ResponseEntity<>(loadType, HttpStatus.OK);
    }

    // Delete LoadType
    @ApiOperation(response = LoadType.class, value = "Delete LoadType") // label for swagger
    @DeleteMapping("/loadType/{loadTypeId}")
    public ResponseEntity<?> deleteLoadType(@PathVariable String loadTypeId, @RequestParam String languageId, @RequestParam String loginUserID,
                                            @RequestParam String companyId, @RequestParam String authToken) {
        idmasterService.deleteLoadType(languageId, companyId, loadTypeId, loginUserID, authToken);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // Find LoadType
    @ApiOperation(response = LoadType[].class, value = "Find LoadType") //label for swagger
    @PostMapping("/loadType/find")
    public LoadType[] findLoadTypes(@RequestBody FindLoadType findLoadType, @RequestParam String authToken) throws Exception {
        return idmasterService.findLoadTypes(findLoadType, authToken);
    }

    //================================================Country==========================================================
    // Get Country
    @ApiOperation(response = Country.class, value = "Get All Country Details") // label for swagger
    @GetMapping("/country")
    public ResponseEntity<?> getAllCountryDetails(@RequestParam String authToken) {
        Country[] countries = idmasterService.getAllCountries(authToken);
        return new ResponseEntity<>(countries, HttpStatus.OK);
    }

    // Get Country
    @ApiOperation(response = Country.class, value = "Get Country") // label for swagger
    @GetMapping("/country/{countryId}")
    public ResponseEntity<?> getCountry(@PathVariable String countryId, @RequestParam String languageId, @RequestParam String companyId, @RequestParam String authToken) {
        Country country = idmasterService.getCountry(languageId, companyId, countryId, authToken);
        return new ResponseEntity<>(country, HttpStatus.OK);
    }

    // Create Country
    @ApiOperation(response = Country.class, value = "Create new Country") // label for swagger
    @PostMapping("/country")
    public ResponseEntity<?> createCountry(@RequestBody AddCountry addCountry, @RequestParam String loginUserID, @RequestParam String authToken) {
        Country country = idmasterService.createCountry(addCountry, loginUserID, authToken);
        return new ResponseEntity<>(country, HttpStatus.OK);
    }

    // Update Country
    @ApiOperation(response = Country.class, value = "Update Country") // label for swagger
    @PatchMapping("/country/{countryId}")
    public ResponseEntity<?> updateCountry(@PathVariable String countryId, @RequestParam String languageId, @RequestParam String loginUserID,
                                           @RequestParam String companyId, @RequestBody UpdateCountry updateCountry, @RequestParam String authToken) {
        Country country = idmasterService.updateCountry(languageId, companyId, countryId, updateCountry, loginUserID, authToken);
        return new ResponseEntity<>(country, HttpStatus.OK);
    }

    // Delete Country
    @ApiOperation(response = Country.class, value = "Delete Country") // label for swagger
    @DeleteMapping("/country/{countryId}")
    public ResponseEntity<?> deleteCountry(@PathVariable String countryId, @RequestParam String languageId, @RequestParam String companyId,
                                           @RequestParam String loginUserID, @RequestParam String authToken) {
        idmasterService.deleteCountry(languageId, companyId, countryId, loginUserID, authToken);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // Find Country
    @ApiOperation(response = Country[].class, value = "Find Country") //label for swagger
    @PostMapping("/country/find")
    public Country[] findCountries(@RequestBody FindCountry findCountry, @RequestParam String authToken) throws Exception {
        return idmasterService.findCountries(findCountry, authToken);
    }

    //==================================================Province=======================================================
    // Get All Province Details
    @ApiOperation(response = Province[].class, value = "Get all Province Details") // label for swagger
    @GetMapping("/province")
    public ResponseEntity<?> getAllProvinceDetails(@RequestParam String authToken) {
        Province[] provinceList = idmasterService.getAllProvinces(authToken);
        return new ResponseEntity<>(provinceList, HttpStatus.OK);
    }

    // Get Province
    @ApiOperation(response = Province.class, value = "Get a Province") // label for swagger
    @GetMapping("/province/{provinceId}")
    public ResponseEntity<?> getProvince(@PathVariable String provinceId, @RequestParam String countryId, @RequestParam String companyId,
                                         @RequestParam String languageId, @RequestParam String authToken) {
        Province dbProvince = idmasterService.getProvince(languageId, companyId, countryId, provinceId, authToken);
        return new ResponseEntity<>(dbProvince, HttpStatus.OK);
    }

    // Create new Province
    @ApiOperation(response = Province.class, value = "Create new Province") // label for swagger
    @PostMapping("/province")
    public ResponseEntity<?> postProvince(@RequestBody AddProvince addProvince, @RequestParam String loginUserID, @RequestParam String authToken)
            throws IllegalAccessException, InvocationTargetException {
        Province newProvince = idmasterService.createProvince(addProvince, loginUserID, authToken);
        return new ResponseEntity<>(newProvince, HttpStatus.OK);
    }

    // Update Province
    @ApiOperation(response = Province.class, value = "Update Province") // label for swagger
    @PatchMapping("/province/{provinceId}")
    public ResponseEntity<?> patchProvince(@PathVariable String provinceId, @RequestParam String countryId, @RequestParam String languageId, @RequestParam String companyId,
                                           @RequestParam String loginUserID, @RequestBody UpdateProvince updateProvince, @RequestParam String authToken)
            throws IllegalAccessException, InvocationTargetException {
        Province updatedProvince = idmasterService.updateProvince(languageId, companyId, countryId, provinceId, updateProvince, loginUserID, authToken);
        return new ResponseEntity<>(updatedProvince, HttpStatus.OK);
    }

    // Delete Province
    @ApiOperation(response = Province.class, value = "Delete Province") // label for swagger
    @DeleteMapping("/province/{provinceId}")
    public ResponseEntity<?> deleteProvince(@PathVariable String provinceId, @RequestParam String countryId, @RequestParam String languageId,
                                            @RequestParam String companyId, @RequestParam String loginUserID, @RequestParam String authToken) {
        idmasterService.deleteProvince(languageId, companyId, countryId, provinceId, loginUserID, authToken);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // Find Province
    @ApiOperation(response = Province[].class, value = "Find Province") // label for swagger
    @PostMapping("/province/find")
    public ResponseEntity<?> findProvince(@RequestBody FindProvince findProvince, @RequestParam String authToken) throws Exception {
        Province[] provinceList = idmasterService.findProvinces(findProvince, authToken);
        return new ResponseEntity<>(provinceList, HttpStatus.OK);
    }

    //===================================================City==========================================================
    // Get all City Details
    @ApiOperation(response = City.class, value = "Get All City Details") // label for swagger
    @GetMapping("/city")
    public ResponseEntity<?> getAllCityDetails(@RequestParam String authToken) {
        City[] city = idmasterService.getAllCities(authToken);
        return new ResponseEntity<>(city, HttpStatus.OK);
    }

    // Get City
    @ApiOperation(response = City.class, value = "Get City") // label for swagger
    @GetMapping("/city/{cityId}")
    public ResponseEntity<?> getCity(@PathVariable String cityId, @RequestParam String languageId, @RequestParam String companyId,
                                     @RequestParam String countryId, @RequestParam String partnerId, @RequestParam String authToken) {
        City city = idmasterService.getCity(languageId, companyId, countryId, partnerId, cityId, authToken);
        return new ResponseEntity<>(city, HttpStatus.OK);
    }

    // Create City
    @ApiOperation(response = City.class, value = "Create new City") // label for swagger
    @PostMapping("/city")
    public ResponseEntity<?> createCity(@RequestBody AddCity addCity, @RequestParam String loginUserID, @RequestParam String authToken) {
        City city = idmasterService.createCity(addCity, loginUserID, authToken);
        return new ResponseEntity<>(city, HttpStatus.OK);
    }

    // Update City
    @ApiOperation(response = City.class, value = "Update City") // label for swagger
    @PatchMapping("/city/{cityId}")
    public ResponseEntity<?> updateCity(@PathVariable String cityId, @RequestParam String languageId, @RequestParam String companyId,
                                        @RequestParam String countryId, @RequestParam String provinceId, @RequestParam String loginUserID,
                                        @RequestBody UpdateCity updateCity, @RequestParam String authToken) {
        City city = idmasterService.updateCity(languageId, companyId, countryId, provinceId, cityId, updateCity, loginUserID, authToken);
        return new ResponseEntity<>(city, HttpStatus.OK);
    }

    // Delete City
    @ApiOperation(response = City.class, value = "Delete City") // label for swagger
    @DeleteMapping("/city/{cityId}")
    public ResponseEntity<?> deleteCity(@PathVariable String cityId, @RequestParam String languageId, @RequestParam String companyId, @RequestParam String countryId,
                                        @RequestParam String provinceId, @RequestParam String loginUserID, @RequestParam String authToken) {
        idmasterService.deleteCity(languageId, companyId, countryId, provinceId, cityId, loginUserID, authToken);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // Find City
    @ApiOperation(response = City[].class, value = "Find City") //label for swagger
    @PostMapping("/city/find")
    public City[] findCity(@RequestBody FindCity findCity, @RequestParam String authToken) throws Exception {
        return idmasterService.findCity(findCity, authToken);
    }

    //===========================================RateParameter=========================================================
    // Get All RateParameter Details
    @ApiOperation(response = RateParameter[].class, value = "Get all RateParameter Details") // label for swagger
    @GetMapping("/rateParameter")
    public ResponseEntity<?> getAllRateParameterDetails(@RequestParam String authToken) {
        RateParameter[] rateParameterList = idmasterService.getAllRateParameters(authToken);
        return new ResponseEntity<>(rateParameterList, HttpStatus.OK);
    }

    // Get RateParameter
    @ApiOperation(response = RateParameter.class, value = "Get a RateParameter") // label for swagger
    @GetMapping("/rateParameter/{rateParameterId}")
    public ResponseEntity<?> getRateParameter(@PathVariable String rateParameterId, @RequestParam String companyId, @RequestParam String languageId,
                                              @RequestParam String authToken) {
        RateParameter dbRateParameter = idmasterService.getRateParameter(rateParameterId, companyId, languageId, authToken);
        return new ResponseEntity<>(dbRateParameter, HttpStatus.OK);
    }

    // Create new RateParameter
    @ApiOperation(response = RateParameter.class, value = "Create new RateParameter") // label for swagger
    @PostMapping("/rateParameter")
    public ResponseEntity<?> postRateParameter(@Valid @RequestBody AddRateParameter addRateParameter, @RequestParam String loginUserID, @RequestParam String authToken)
            throws IllegalAccessException, InvocationTargetException {
        RateParameter newRateParameter = idmasterService.createRateParameter(addRateParameter, loginUserID, authToken);
        return new ResponseEntity<>(newRateParameter, HttpStatus.OK);
    }

    // Update RateParameter
    @ApiOperation(response = RateParameter.class, value = "Update RateParameter") // label for swagger
    @PatchMapping("/rateParameter/{rateParameterId}")
    public ResponseEntity<?> patchRateParameter(@PathVariable String rateParameterId, @RequestParam String companyId, @RequestParam String languageId, @RequestParam String loginUserID,
                                                @RequestBody UpdateRateParameter updateRateParameter, @RequestParam String authToken)
            throws IllegalAccessException, InvocationTargetException {
        RateParameter updatedRateParameter = idmasterService.updateRateParameter(companyId, rateParameterId, languageId, updateRateParameter, loginUserID, authToken);
        return new ResponseEntity<>(updatedRateParameter, HttpStatus.OK);
    }

    // Delete RateParameter
    @ApiOperation(response = RateParameter.class, value = "Delete RateParameter") // label for swagger
    @DeleteMapping("/rateParameter/{rateParameterId}")
    public ResponseEntity<?> deleteRateParameter(@PathVariable String rateParameterId, @RequestParam String companyId, @RequestParam String languageId,
                                                 @RequestParam String loginUserID, @RequestParam String authToken) {
        idmasterService.deleteRateParameter(companyId, rateParameterId, languageId, loginUserID, authToken);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // Find RateParameter
    @ApiOperation(response = RateParameter[].class, value = "Find RateParameter") // label for swagger
    @PostMapping("/rateParameter/find")
    public ResponseEntity<?> findRateParameter(@Valid @RequestBody FindRateParameter findRateParameter, @RequestParam String authToken) throws Exception {
        RateParameter[] rateParameterList = idmasterService.findRateParameter(findRateParameter, authToken);
        return new ResponseEntity<>(rateParameterList, HttpStatus.OK);
    }

    //=================================================Status==========================================================
    // Get All Status Details
    @ApiOperation(response = Status[].class, value = "Get all Status Details") // label for swagger
    @GetMapping("/status")
    public ResponseEntity<?> getAllStatusDetails(@RequestParam String authToken) {
        Status[] statusList = idmasterService.getAllStatus(authToken);
        return new ResponseEntity<>(statusList, HttpStatus.OK);
    }

    // Get Status
    @ApiOperation(response = Status.class, value = "Get a Status") // label for swagger
    @GetMapping("/status/{statusId}")
    public ResponseEntity<?> getStatus(@PathVariable String statusId, @RequestParam String languageId, @RequestParam String authToken) {
        Status dbStatus = idmasterService.getStatus(languageId, statusId, authToken);
        return new ResponseEntity<>(dbStatus, HttpStatus.OK);
    }

    // Create new Status
    @ApiOperation(response = Status.class, value = "Create new Status") // label for swagger
    @PostMapping("/status")
    public ResponseEntity<?> postStatus(@RequestBody AddStatus addStatus, @RequestParam String loginUserID, @RequestParam String authToken)
            throws IllegalAccessException, InvocationTargetException {
        Status newStatus = idmasterService.createStatus(addStatus, loginUserID, authToken);
        return new ResponseEntity<>(newStatus, HttpStatus.OK);
    }

    // Update Status
    @ApiOperation(response = Status.class, value = "Update Status") // label for swagger
    @PatchMapping("/status/{statusId}")
    public ResponseEntity<?> patchStatus(@PathVariable String statusId, @RequestParam String languageId, @RequestParam String loginUserID,
                                         @RequestBody UpdateStatus updateStatus, @RequestParam String authToken)
            throws IllegalAccessException, InvocationTargetException {
        Status updatedStatus = idmasterService.updateStatus(languageId, statusId, updateStatus, loginUserID, authToken);
        return new ResponseEntity<>(updatedStatus, HttpStatus.OK);
    }

    // Delete Status
    @ApiOperation(response = Status.class, value = "Delete Status") // label for swagger
    @DeleteMapping("/status/{statusId}")
    public ResponseEntity<?> deleteStatus(@PathVariable String statusId, @RequestParam String languageId,
                                          @RequestParam String loginUserID, @RequestParam String authToken) {
        idmasterService.deleteStatus(languageId, statusId, loginUserID, authToken);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // Find Status
    @ApiOperation(response = Status[].class, value = "Find Status") // label for swagger
    @PostMapping("/status/find")
    public ResponseEntity<?> findStatus(@RequestBody FindStatus findStatus, @RequestParam String authToken) throws Exception {
        Status[] statusList = idmasterService.findStatus(findStatus, authToken);
        return new ResponseEntity<>(statusList, HttpStatus.OK);
    }

    //===============================================Currency==========================================================
    // Get All Currency Details
    @ApiOperation(response = Currency[].class, value = "Get all Currency Details") // label for swagger
    @GetMapping("/currency")
    public ResponseEntity<?> getAllCurrencyDetails(@RequestParam String authToken) {
        Currency[] currencyList = idmasterService.getAllCurrency(authToken);
        return new ResponseEntity<>(currencyList, HttpStatus.OK);
    }

    // Get Currency
    @ApiOperation(response = Currency.class, value = "Get a Currency") // label for swagger
    @GetMapping("/currency/{currencyId}")
    public ResponseEntity<?> getCurrency(@PathVariable String currencyId, @RequestParam String authToken) {
        Currency dbCurrency = idmasterService.getCurrency(currencyId, authToken);
        return new ResponseEntity<>(dbCurrency, HttpStatus.OK);
    }

    // Create new Currency
    @ApiOperation(response = Currency.class, value = "Create new Currency") // label for swagger
    @PostMapping("/currency")
    public ResponseEntity<?> postCurrency(@RequestBody AddCurrency addCurrency, @RequestParam String loginUserID, @RequestParam String authToken)
            throws IllegalAccessException, InvocationTargetException {
        Currency newCurrency = idmasterService.createCurrency(addCurrency, loginUserID, authToken);
        return new ResponseEntity<>(newCurrency, HttpStatus.OK);
    }

    // Update Currency
    @ApiOperation(response = Currency.class, value = "Update Currency") // label for swagger
    @PatchMapping("/currency/{currencyId}")
    public ResponseEntity<?> patchCurrency(@PathVariable String currencyId, @RequestParam String loginUserID,
                                           @RequestBody UpdateCurrency updateCurrency, @RequestParam String authToken)
            throws IllegalAccessException, InvocationTargetException {
        Currency updatedCurrency = idmasterService.updateCurrency(currencyId, updateCurrency, loginUserID, authToken);
        return new ResponseEntity<>(updatedCurrency, HttpStatus.OK);
    }

    // Delete Currency
    @ApiOperation(response = Currency.class, value = "Delete Currency") // label for swagger
    @DeleteMapping("/currency/{currencyId}")
    public ResponseEntity<?> deleteCurrency(@PathVariable String currencyId, @RequestParam String loginUserID, @RequestParam String authToken) {
        idmasterService.deleteCurrency(currencyId, loginUserID, authToken);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // Find Currency
    @ApiOperation(response = Currency[].class, value = "Find Currency") // label for swagger
    @PostMapping("/currency/find")
    public ResponseEntity<?> findCurrency(@RequestBody FindCurrency findCurrency, @RequestParam String authToken) throws Exception {
        Currency[] currencyList = idmasterService.findCurrency(findCurrency, authToken);
        return new ResponseEntity<>(currencyList, HttpStatus.OK);
    }

    //====================================================Hub==========================================================
    // Get Hub
    @ApiOperation(response = Hub.class, value = "Get All Hub Details") // label for swagger
    @GetMapping("/hub")
    public ResponseEntity<?> getAllHubDetails(@RequestParam String authToken) {
        Hub[] hubs = idmasterService.getAllHubs(authToken);
        return new ResponseEntity<>(hubs, HttpStatus.OK);
    }

    // Get Hub
    @ApiOperation(response = Hub.class, value = "Get Hub") // label for swagger
    @GetMapping("/hub/{hubCode}")
    public ResponseEntity<?> getHub(@PathVariable String hubCode, @RequestParam String companyId,
                                    @RequestParam String languageId, @RequestParam String authToken) {
        Hub hub = idmasterService.getHub(languageId, companyId, hubCode, authToken);
        return new ResponseEntity<>(hub, HttpStatus.OK);
    }

    // Create Hub
    @ApiOperation(response = Hub.class, value = "Create new Hub") // label for swagger
    @PostMapping("/hub")
    public ResponseEntity<?> postHub(@RequestBody AddHub addHub, @RequestParam String loginUserID, @RequestParam String authToken) {
        Hub hub = idmasterService.createHub(addHub, loginUserID, authToken);
        return new ResponseEntity<>(hub, HttpStatus.OK);
    }

    // Update Hub
    @ApiOperation(response = Hub.class, value = "Update Hub") // label for swagger
    @PatchMapping("/hub/{hubCode}")
    public ResponseEntity<?> patchHub(@PathVariable String hubCode, @RequestParam String languageId,
                                      @RequestParam String loginUserID, @RequestBody UpdateHub updateHub,
                                      @RequestParam String companyId, @RequestParam String authToken) {
        Hub hub = idmasterService.updateHub(languageId, companyId, hubCode, updateHub, loginUserID, authToken);
        return new ResponseEntity<>(hub, HttpStatus.OK);
    }

    // Delete Hub
    @ApiOperation(response = Hub.class, value = "Delete Hub") // label for swagger
    @DeleteMapping("/hub/{hubCode}")
    public ResponseEntity<?> deleteHub(@PathVariable String hubCode, @RequestParam String languageId, @RequestParam String loginUserID,
                                       @RequestParam String companyId, @RequestParam String authToken) {
        idmasterService.deleteHub(languageId, companyId, hubCode, loginUserID, authToken);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // Find Hub
    @ApiOperation(response = Hub[].class, value = "Find Hub") //label for swagger
    @PostMapping("/hub/find")
    public Hub[] findHubs(@RequestBody FindHub findHub, @RequestParam String authToken) throws Exception {
        return idmasterService.findHubs(findHub, authToken);
    }

    //==================================================Customer=======================================================
    // Get all Customer Details
    @ApiOperation(response = Customer.class, value = "Get All Customer Details") // label for swagger
    @GetMapping("/customer")
    public ResponseEntity<?> getAllCustomerDetails(@RequestParam String authToken) {
        Customer[] customers = idmasterService.getAllCustomers(authToken);
        return new ResponseEntity<>(customers, HttpStatus.OK);
    }

    // Get a Customer
    @ApiOperation(response = Customer.class, value = "Get Customer") // label for swagger
    @GetMapping("/customer/{customerId}")
    public ResponseEntity<?> getCustomer(@PathVariable String customerId, @RequestParam String companyId, @RequestParam String subProductId,
                                         @RequestParam String productId, @RequestParam String languageId, @RequestParam String authToken) {
        Customer customer = idmasterService.getCustomer(languageId, companyId, subProductId, productId, customerId, authToken);
        return new ResponseEntity<>(customer, HttpStatus.OK);
    }

    // Create Customer
    @ApiOperation(response = Customer.class, value = "Create new Customer") // label for swagger
    @PostMapping("/customer")
    public ResponseEntity<?> postCustomer(@RequestBody AddCustomer addCustomer, @RequestParam String loginUserID, @RequestParam String authToken) {
        Customer customer = idmasterService.createCustomer(addCustomer, loginUserID, authToken);
        return new ResponseEntity<>(customer, HttpStatus.OK);
    }

    // Update Customer
    @ApiOperation(response = Customer.class, value = "Update Customer") // label for swagger
    @PatchMapping("/customer/{customerId}")
    public ResponseEntity<?> patchCustomer(@PathVariable String customerId, @RequestParam String languageId, @RequestParam String companyId,
                                           @RequestParam String subProductId, @RequestParam String loginUserID, @RequestBody UpdateCustomer updateCustomer,
                                           @RequestParam String productId, @RequestParam String authToken) {
        Customer customer = idmasterService.updateCustomer(languageId, companyId, subProductId, productId, customerId, updateCustomer, loginUserID, authToken);
        return new ResponseEntity<>(customer, HttpStatus.OK);
    }

    // Delete Customer
    @ApiOperation(response = Customer.class, value = "Delete Customer") // label for swagger
    @DeleteMapping("/customer/{customerId}")
    public ResponseEntity<?> deleteCustomer(@PathVariable String customerId, @RequestParam String languageId, @RequestParam String companyId, @RequestParam String subProductId,
                                            @RequestParam String productId, @RequestParam String loginUserID, @RequestParam String authToken) {
        idmasterService.deleteCustomer(languageId, companyId, subProductId, productId, customerId, loginUserID, authToken);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // Find Customer
    @ApiOperation(response = Customer[].class, value = "Find Customer") //label for swagger
    @PostMapping("/customer/find")
    public Customer[] findCustomers(@RequestBody FindCustomer findCustomer, @RequestParam String authToken) throws Exception {
        return idmasterService.findCustomers(findCustomer, authToken);
    }

    //==================================================Shipper========================================================
    // Get all Shipper Details
    @ApiOperation(response = Shipper.class, value = "Get All Shipper Details") // label for swagger
    @GetMapping("/shipper")
    public ResponseEntity<?> getAllShipperDetails(@RequestParam String authToken) {
        Shipper[] shippers = idmasterService.getAllShippers(authToken);
        return new ResponseEntity<>(shippers, HttpStatus.OK);
    }

    // Get a Shipper
    @ApiOperation(response = Shipper.class, value = "Get Shipper") // label for swagger
    @GetMapping("/shipper/{shipperId}")
    public ResponseEntity<?> getShipper(@PathVariable String shipperId, @RequestParam String companyId, @RequestParam String subProductId,
                                        @RequestParam String productId, @RequestParam String customerId, @RequestParam String languageId, @RequestParam String authToken) {
        Shipper shipper = idmasterService.getShipper(languageId, companyId, subProductId, productId, customerId, shipperId, authToken);
        return new ResponseEntity<>(shipper, HttpStatus.OK);
    }

    // Create Shipper
    @ApiOperation(response = Shipper.class, value = "Create new Shipper") // label for swagger
    @PostMapping("/shipper")
    public ResponseEntity<?> postShipper(@RequestBody AddShipper addShipper, @RequestParam String loginUserID, @RequestParam String authToken) {
        Shipper shipper = idmasterService.createShipper(addShipper, loginUserID, authToken);
        return new ResponseEntity<>(shipper, HttpStatus.OK);
    }

    // Update Shipper
    @ApiOperation(response = Shipper.class, value = "Update Shipper") // label for swagger
    @PatchMapping("/shipper/{shipperId}")
    public ResponseEntity<?> patchShipper(@PathVariable String shipperId, @RequestParam String languageId, @RequestParam String companyId,
                                          @RequestParam String subProductId, @RequestParam String loginUserID, @RequestBody UpdateShipper updateShipper,
                                          @RequestParam String productId, @RequestParam String customerId, @RequestParam String authToken) {
        Shipper shipper = idmasterService.updateShipper(languageId, companyId, subProductId, productId, customerId, shipperId, updateShipper, loginUserID, authToken);
        return new ResponseEntity<>(shipper, HttpStatus.OK);
    }

    // Delete Shipper
    @ApiOperation(response = Shipper.class, value = "Delete Shipper") // label for swagger
    @DeleteMapping("/shipper/{shipperId}")
    public ResponseEntity<?> deleteShipper(@PathVariable String shipperId, @RequestParam String languageId, @RequestParam String companyId, @RequestParam String subProductId,
                                           @RequestParam String productId, @RequestParam String customerId, @RequestParam String loginUserID, @RequestParam String authToken) {
        idmasterService.deleteShipper(languageId, companyId, subProductId, productId, customerId, shipperId, loginUserID, authToken);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // Find Shipper
    @ApiOperation(response = Shipper[].class, value = "Find Shipper") //label for swagger
    @PostMapping("/shipper/find")
    public Shipper[] findShippers(@RequestBody FindShipper findShipper, @RequestParam String authToken) throws Exception {
        return idmasterService.findShippers(findShipper, authToken);
    }

    //===============================================PartnerHubMapping=================================================
    // Get All PartnerHubMapping Details
    @ApiOperation(response = PartnerHubMapping.class, value = "Get All PartnerHubMapping Details") // label for swagger
    @GetMapping("/partnerHubMapping")
    public ResponseEntity<?> getAllPartnerHubMappingDetails(@RequestParam String authToken) {
        PartnerHubMapping[] partnerHubMappings = idmasterService.getAllPartnerHubMappings(authToken);
        return new ResponseEntity<>(partnerHubMappings, HttpStatus.OK);
    }

    // Get PartnerHubMapping
    @ApiOperation(response = PartnerHubMapping.class, value = "Get PartnerHubMapping") // label for swagger
    @GetMapping("/partnerHubMapping/{partnerId}")
    public ResponseEntity<?> getPartnerHubMapping(@PathVariable String partnerId, @RequestParam String partnerType, @RequestParam String companyId,
                                                  @RequestParam String languageId, @RequestParam String hubCode, @RequestParam String authToken) {
        PartnerHubMapping partnerHubMapping = idmasterService.getPartnerHubMapping(languageId, companyId, hubCode, partnerType, partnerId, authToken);
        return new ResponseEntity<>(partnerHubMapping, HttpStatus.OK);
    }

    // Create PartnerHubMapping
    @ApiOperation(response = PartnerHubMapping.class, value = "Create new PartnerHubMapping") // label for swagger
    @PostMapping("/partnerHubMapping")
    public ResponseEntity<?> postPartnerHubMapping(@RequestBody AddPartnerHubMapping addPartnerHubMapping,
                                                   @RequestParam String loginUserID, @RequestParam String authToken) {
        PartnerHubMapping partnerHubMapping = idmasterService.createPartnerHubMapping(addPartnerHubMapping, loginUserID, authToken);
        return new ResponseEntity<>(partnerHubMapping, HttpStatus.OK);
    }

    // Update PartnerHubMapping
    @ApiOperation(response = PartnerHubMapping.class, value = "Update PartnerHubMapping") // label for swagger
    @PatchMapping("/partnerHubMapping/{partnerId}")
    public ResponseEntity<?> patchPartnerHubMapping(@PathVariable String partnerId, @RequestParam String partnerType, @RequestParam String languageId,
                                                    @RequestParam String loginUserID, @RequestBody UpdatePartnerHubMapping updatePartnerHubMapping,
                                                    @RequestParam String companyId, @RequestParam String hubCode, @RequestParam String authToken) {
        PartnerHubMapping partnerHubMapping = idmasterService.updatePartnerHubMapping(languageId, companyId, hubCode, partnerType,
                partnerId, updatePartnerHubMapping, loginUserID, authToken);
        return new ResponseEntity<>(partnerHubMapping, HttpStatus.OK);
    }

    // Delete PartnerHubMapping
    @ApiOperation(response = PartnerHubMapping.class, value = "Delete PartnerHubMapping") // label for swagger
    @DeleteMapping("/partnerHubMapping/{partnerId}")
    public ResponseEntity<?> deletePartnerHubMapping(@PathVariable String partnerId, @RequestParam String partnerType, @RequestParam String languageId,
                                                     @RequestParam String loginUserID, @RequestParam String companyId,
                                                     @RequestParam String hubCode, @RequestParam String authToken) {
        idmasterService.deletePartnerHubMapping(languageId, companyId, hubCode, partnerType, partnerId, loginUserID, authToken);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // Find PartnerHubMapping
    @ApiOperation(response = PartnerHubMapping[].class, value = "Find PartnerHubMapping") //label for swagger
    @PostMapping("/partnerHubMapping/find")
    public PartnerHubMapping[] findPartnerHubMappings(@RequestBody FindPartnerHubMapping findPartnerHubMapping,
                                                      @RequestParam String authToken) throws Exception {
        return idmasterService.findPartnerHubMappings(findPartnerHubMapping, authToken);
    }

    //=================================================HSCode==========================================================
    // Get All HSCode Details
    @ApiOperation(response = HSCode.class, value = "Get All HSCode Details") // label for swagger
    @GetMapping("/hsCode")
    public ResponseEntity<?> getAllHSCodeDetails(@RequestParam String authToken) {
        HSCode[] hsCodes = idmasterService.getAllHSCodes(authToken);
        return new ResponseEntity<>(hsCodes, HttpStatus.OK);
    }

    // Get HSCode
    @ApiOperation(response = HSCode.class, value = "Get HSCode") // label for swagger
    @GetMapping("/loadType/{hsCode}")
    public ResponseEntity<?> getHSCode(@PathVariable String hsCode, @RequestParam String companyId,
                                       @RequestParam String languageId, @RequestParam String authToken) {
        HSCode dbHsCode = idmasterService.getHSCode(languageId, companyId, hsCode, authToken);
        return new ResponseEntity<>(dbHsCode, HttpStatus.OK);
    }

    // Create HSCode
    @ApiOperation(response = HSCode.class, value = "Create new HSCode") // label for swagger
    @PostMapping("/hsCode")
    public ResponseEntity<?> createHSCode(@RequestBody AddHSCode addHSCode, @RequestParam String loginUserID, @RequestParam String authToken) {
        HSCode hsCode = idmasterService.createHSCode(addHSCode, loginUserID, authToken);
        return new ResponseEntity<>(hsCode, HttpStatus.OK);
    }

    // Update HSCode
    @ApiOperation(response = HSCode.class, value = "Update HSCode") // label for swagger
    @PatchMapping("/hsCode/{hsCode}")
    public ResponseEntity<?> updateHSCode(@PathVariable String hsCode, @RequestParam String languageId,
                                          @RequestParam String loginUserID, @RequestBody UpdateHSCode updateHSCode,
                                          @RequestParam String companyId, @RequestParam String authToken) {
        HSCode dbHSCode = idmasterService.updateHSCode(languageId, companyId, hsCode, updateHSCode, loginUserID, authToken);
        return new ResponseEntity<>(dbHSCode, HttpStatus.OK);
    }

    // Delete HSCode
    @ApiOperation(response = HSCode.class, value = "Delete HSCode") // label for swagger
    @DeleteMapping("/hsCode/{hsCode}")
    public ResponseEntity<?> deleteHSCode(@PathVariable String hsCode, @RequestParam String languageId, @RequestParam String loginUserID,
                                          @RequestParam String companyId, @RequestParam String authToken) {
        idmasterService.deleteHSCode(languageId, companyId, hsCode, loginUserID, authToken);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // Find HSCode
    @ApiOperation(response = HSCode[].class, value = "Find HSCode") //label for swagger
    @PostMapping("/hsCode/find")
    public HSCode[] findHSCodes(@RequestBody FindHSCode findHSCode, @RequestParam String authToken) throws Exception {
        return idmasterService.findHSCodes(findHSCode, authToken);
    }

    //================================================ProvinceMapping==================================================
    // Get All ProvinceMapping Details
    @ApiOperation(response = ProvinceMapping[].class, value = "Get all ProvinceMapping Details") // label for swagger
    @GetMapping("/provinceMapping")
    public ResponseEntity<?> getAllProvinceMappingDetails(@RequestParam String authToken) {
        ProvinceMapping[] provinceMappings = idmasterService.getAllProvinceMappings(authToken);
        return new ResponseEntity<>(provinceMappings, HttpStatus.OK);
    }

    // Get ProvinceMapping
    @ApiOperation(response = ProvinceMapping.class, value = "Get a ProvinceMapping") // label for swagger
    @GetMapping("/provinceMapping/{partnerId}")
    public ResponseEntity<?> getProvinceMapping(@PathVariable String partnerId, @RequestParam String provinceId, @RequestParam String companyId,
                                                @RequestParam String languageId, @RequestParam String authToken) {
        ProvinceMapping provinceMapping = idmasterService.getProvinceMapping(languageId, companyId, provinceId, partnerId, authToken);
        return new ResponseEntity<>(provinceMapping, HttpStatus.OK);
    }

    // Create new ProvinceMapping
    @ApiOperation(response = ProvinceMapping.class, value = "Create new ProvinceMapping") // label for swagger
    @PostMapping("/provinceMapping")
    public ResponseEntity<?> postProvinceMapping(@RequestBody AddProvinceMapping addProvinceMapping, @RequestParam String loginUserID, @RequestParam String authToken)
            throws IllegalAccessException, InvocationTargetException {
        ProvinceMapping provinceMapping = idmasterService.createProvinceMapping(addProvinceMapping, loginUserID, authToken);
        return new ResponseEntity<>(provinceMapping, HttpStatus.OK);
    }

    // Update ProvinceMapping
    @ApiOperation(response = Province.class, value = "Update ProvinceMapping") // label for swagger
    @PatchMapping("/provinceMapping/{partnerId}")
    public ResponseEntity<?> patchProvinceMapping(@PathVariable String partnerId, @RequestParam String provinceId, @RequestParam String languageId, @RequestParam String companyId,
                                                  @RequestParam String loginUserID, @RequestBody UpdateProvinceMapping updateProvinceMapping, @RequestParam String authToken)
            throws IllegalAccessException, InvocationTargetException {
        ProvinceMapping provinceMapping = idmasterService.updateProvinceMapping(languageId, companyId, provinceId, partnerId, updateProvinceMapping, loginUserID, authToken);
        return new ResponseEntity<>(provinceMapping, HttpStatus.OK);
    }

    // Delete ProvinceMapping
    @ApiOperation(response = ProvinceMapping.class, value = "Delete ProvinceMapping") // label for swagger
    @DeleteMapping("/provinceMapping/{partnerId}")
    public ResponseEntity<?> deleteProvinceMapping(@PathVariable String partnerId, @RequestParam String provinceId, @RequestParam String languageId,
                                                   @RequestParam String companyId, @RequestParam String loginUserID, @RequestParam String authToken) {
        idmasterService.deleteProvinceMapping(languageId, companyId, provinceId, partnerId, loginUserID, authToken);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // Find ProvinceMapping
    @ApiOperation(response = ProvinceMapping[].class, value = "Find ProvinceMapping") // label for swagger
    @PostMapping("/provinceMapping/find")
    public ResponseEntity<?> findProvinceMapping(@RequestBody FindProvinceMapping findProvinceMapping, @RequestParam String authToken) throws Exception {
        ProvinceMapping[] provinceMappings = idmasterService.findProvinceMappings(findProvinceMapping, authToken);
        return new ResponseEntity<>(provinceMappings, HttpStatus.OK);
    }


    //================================================CountryMapping==================================================
    // Get All CountryMapping Details
    @ApiOperation(response = CountryMapping[].class, value = "Get all CountryMapping Details") // label for swagger
    @GetMapping("/countryMapping")
    public ResponseEntity<?> getAllCountryMappingDetails(@RequestParam String authToken) {
        CountryMapping[] countryMappings = idmasterService.getAllCountryMappings(authToken);
        return new ResponseEntity<>(countryMappings, HttpStatus.OK);
    }

    // Get CountryMapping
    @ApiOperation(response = CountryMapping.class, value = "Get a CountryMapping") // label for swagger
    @GetMapping("/countryMapping/{countryId}")
    public ResponseEntity<?> getCountryMapping(@PathVariable String countryId, @RequestParam String partnerId, @RequestParam String companyId,
                                                @RequestParam String languageId, @RequestParam String authToken) {
        CountryMapping countryMapping = idmasterService.getCountryMapping(languageId, companyId, countryId, partnerId, authToken);
        return new ResponseEntity<>(countryMapping, HttpStatus.OK);
    }

    // Create new CountryMapping
    @ApiOperation(response = CountryMapping.class, value = "Create new CountryMapping") // label for swagger
    @PostMapping("/countryMapping")
    public ResponseEntity<?> postCountryMapping(@RequestBody AddCountryMapping addCountryMapping, @RequestParam String loginUserID, @RequestParam String authToken)
            throws IllegalAccessException, InvocationTargetException {
        CountryMapping countryMapping = idmasterService.createCountryMapping(addCountryMapping, loginUserID, authToken);
        return new ResponseEntity<>(countryMapping, HttpStatus.OK);
    }

    // Update CountryMapping
    @ApiOperation(response = Country.class, value = "Update CountryMapping") // label for swagger
    @PatchMapping("/countryMapping/{countryId}")
    public ResponseEntity<?> patchCountryMapping(@PathVariable String countryId, @RequestParam String partnerId, @RequestParam String languageId, @RequestParam String companyId,
                                                  @RequestParam String loginUserID, @RequestBody UpdateCountryMapping updateCountryMapping, @RequestParam String authToken)
            throws IllegalAccessException, InvocationTargetException {
        CountryMapping countryMapping = idmasterService.updateCountryMapping(languageId, companyId, countryId, partnerId, updateCountryMapping, loginUserID, authToken);
        return new ResponseEntity<>(countryMapping, HttpStatus.OK);
    }

    // Delete CountryMapping
    @ApiOperation(response = CountryMapping.class, value = "Delete CountryMapping") // label for swagger
    @DeleteMapping("/countryMapping/{countryId}")
    public ResponseEntity<?> deleteCountryMapping(@PathVariable String countryId, @RequestParam String partnerId, @RequestParam String languageId,
                                                   @RequestParam String companyId, @RequestParam String loginUserID, @RequestParam String authToken) {
        idmasterService.deleteCountryMapping(languageId, companyId, countryId, partnerId, loginUserID, authToken);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // Find CountryMapping
    @ApiOperation(response = CountryMapping[].class, value = "Find CountryMapping") // label for swagger
    @PostMapping("/countryMapping/find")
    public ResponseEntity<?> findCountryMapping(@RequestBody FindCountryMapping findCountryMapping, @RequestParam String authToken) throws Exception {
        CountryMapping[] countryMappings = idmasterService.findCountryMappings(findCountryMapping, authToken);
        return new ResponseEntity<>(countryMappings, HttpStatus.OK);
    }

    //===========================================Iata=======================================================

    // Get All Iata Details
    @ApiOperation(response = Iata[].class, value = "Get all Iata Details") // label for swagger
    @GetMapping("/iata")
    public ResponseEntity<?> getAllIataDetails(@RequestParam String authToken) {
        Iata[] iataList = idmasterService.getAllIata(authToken);
        return new ResponseEntity<>(iataList, HttpStatus.OK);
    }

    // Get Iata
    @ApiOperation(response = Iata.class, value = "Get a Iata") // label for swagger
    @GetMapping("/iata/{iataKd}")
    public ResponseEntity<?> getIata(@PathVariable String iataKd, @RequestParam String companyId, @RequestParam String languageId, @RequestParam String origin, @RequestParam String originCode,
                                     @RequestParam String authToken) {
        Iata dbIata = idmasterService.getIata(iataKd, companyId, languageId, origin, originCode, authToken);
        return new ResponseEntity<>(dbIata, HttpStatus.OK);
    }

    // Create new Iata
    @ApiOperation(response = Iata.class, value = "Create new Iata") // label for swagger
    @PostMapping("/iata")
    public ResponseEntity<?> postIata(@RequestBody AddIata addIata, @RequestParam String loginUserID, @RequestParam String authToken)
            throws IllegalAccessException, InvocationTargetException {
        Iata newIata = idmasterService.createIata(addIata, loginUserID, authToken);
        return new ResponseEntity<>(newIata, HttpStatus.OK);
    }

    // Update Iata
    @ApiOperation(response = Iata.class, value = "Update Iata") // label for swagger
    @PatchMapping("/iata/{iataKd}")
    public ResponseEntity<?> patchIata(@PathVariable String iataKd, @RequestParam String companyId, @RequestParam String languageId,@RequestParam String origin, @RequestParam String originCode, @RequestParam String loginUserID,
                                       @RequestBody UpdateIata updateIata, @RequestParam String authToken)
            throws IllegalAccessException, InvocationTargetException {
        Iata updatedIata = idmasterService.updateIata(companyId, iataKd, languageId, origin, originCode, updateIata, loginUserID, authToken);
        return new ResponseEntity<>(updatedIata, HttpStatus.OK);
    }

    // Delete Iata
    @ApiOperation(response = Iata.class, value = "Delete Iata") // label for swagger
    @DeleteMapping("/iata/{iataKd}")
    public ResponseEntity<?> deleteIata(@PathVariable String iataKd, @RequestParam String companyId, @RequestParam String languageId, @RequestParam String origin, @RequestParam String originCode,
                                        @RequestParam String loginUserID, @RequestParam String authToken) {
        idmasterService.deleteIata(companyId, iataKd, origin, originCode, languageId, loginUserID, authToken);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // Find Iata
    @ApiOperation(response = Iata[].class, value = "Find Iata") // label for swagger
    @PostMapping("/iata/find")
    public ResponseEntity<?> findRateParameter(@RequestBody FindIata findIata, @RequestParam String authToken) throws Exception {
        Iata[] iataList = idmasterService.findIata(findIata, authToken);
        return new ResponseEntity<>(iataList, HttpStatus.OK);
    }

}