package com.courier.overc360.api.idmaster.service;

import com.courier.overc360.api.idmaster.controller.exception.BadRequestException;
import com.courier.overc360.api.idmaster.primary.model.company.Company;
import com.courier.overc360.api.idmaster.primary.model.menu.Menu;
import com.courier.overc360.api.idmaster.primary.model.roleaccess.AddRoleAccess;
import com.courier.overc360.api.idmaster.primary.model.roleaccess.RoleAccess;
import com.courier.overc360.api.idmaster.primary.model.roleaccess.UpdateRoleAccess;
import com.courier.overc360.api.idmaster.primary.repository.CompanyRepository;
import com.courier.overc360.api.idmaster.primary.repository.MenuRepository;
import com.courier.overc360.api.idmaster.primary.repository.ModuleRepository;
import com.courier.overc360.api.idmaster.primary.repository.RoleAccessRepository;
import com.courier.overc360.api.idmaster.primary.util.CommonUtils;
import com.courier.overc360.api.idmaster.replica.model.IKeyValuePair;
import com.courier.overc360.api.idmaster.replica.model.roleaccess.FindRoleAccess;
import com.courier.overc360.api.idmaster.replica.model.roleaccess.ReplicaRoleAccess;
import com.courier.overc360.api.idmaster.replica.repository.ReplicaModuleRepository;
import com.courier.overc360.api.idmaster.replica.repository.ReplicaRoleAccessRepository;
import com.courier.overc360.api.idmaster.replica.repository.ReplicaStatusRepository;
import com.courier.overc360.api.idmaster.replica.repository.specification.ReplicaRoleAccessSpecification;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;
import java.lang.reflect.InvocationTargetException;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Slf4j
@Service
public class RoleAccessService {

    @Autowired
    private ReplicaStatusRepository replicaStatusRepository;

    @Autowired
    private ReplicaModuleRepository replicaModuleRepository;

    @Autowired
    private RoleAccessRepository roleAccessRepository;

    @Autowired
    private ReplicaRoleAccessRepository replicaRoleAccessRepository;

    @Autowired
    private CompanyRepository companyRepository;

    @Autowired
    private ModuleRepository moduleRepository;

    @Autowired
    private MenuRepository menuRepository;


    /*--------------------------------------------------------PRIMARY------------------------------------------------*/

    /**
     * Get RoleAccess
     *
     * @return
     */
    public RoleAccess getRoleAccess(String companyId, String languageId, Long roleId, Long menuId, Long subMenuId) {
        Optional<RoleAccess> dbRoleAccess = roleAccessRepository.findByCompanyIdAndAndLanguageIdAndRoleIdAndMenuIdAndSubMenuIdAndDeletionIndicator
                (companyId, languageId, roleId, menuId, subMenuId, 0L);
        if (dbRoleAccess.isEmpty()) {
            throw new BadRequestException("The given values : companyId - " + companyId + " languageId - " + languageId +
                    " roleId - " + roleId + " menuId - " + menuId + " submenuId - " + subMenuId + " doesn't exists");
        }
        return dbRoleAccess.get();
    }

    /**
     * Create new RoleAccess
     *
     * @param addRoleAccessList
     * @param loginUserID
     * @return
     * @throws IllegalAccessException
     * @throws InvocationTargetException
     * @throws ParseException
     */
    @Transactional
    public List<RoleAccess> createRoleAccess(List<AddRoleAccess> addRoleAccessList, String loginUserID)
            throws IllegalAccessException, InvocationTargetException, ParseException {
        Long roleId = roleAccessRepository.getRoleId();

        if (roleId == null) {
            roleId = 1L;
        }
        List<RoleAccess> newRoleAccessList = new ArrayList<>();

        for (AddRoleAccess addRoleAccess : addRoleAccessList) {

            Optional<Company> dbCompany = companyRepository.findByCompanyIdAndLanguageIdAndDeletionIndicator
                    (addRoleAccess.getCompanyId(), addRoleAccess.getLanguageId(), 0l);

            Optional<RoleAccess> duplicateRoleAccess = roleAccessRepository.findByCompanyIdAndAndLanguageIdAndRoleIdAndMenuIdAndSubMenuIdAndDeletionIndicator(
                    addRoleAccess.getCompanyId(), addRoleAccess.getLanguageId(), addRoleAccess.getRoleId(),
                    addRoleAccess.getMenuId(), addRoleAccess.getMenuId(), 0L);

            if (dbCompany.isEmpty()) {
                throw new BadRequestException("CompanyId - " + addRoleAccess.getCompanyId() + " and LanguageId - " + addRoleAccess.getLanguageId() + " doesn't exists");
            } else if (duplicateRoleAccess.isPresent()) {
                throw new EntityNotFoundException("Record is Getting Duplicated with roleId - " + addRoleAccess.getRoleId());
            } else {
                Optional<Menu> duplicateMenu = menuRepository.findByCompanyIdAndAndLanguageIdAndMenuIdAndSubMenuIdAndDeletionIndicator(
                        addRoleAccess.getCompanyId(), addRoleAccess.getLanguageId(), addRoleAccess.getMenuId(),
                        addRoleAccess.getSubMenuId(), 0L);

                if (duplicateMenu.isEmpty()) {
                    throw new IllegalAccessException("MenuId: " + addRoleAccess.getMenuId() + " and SubMenuId: "
                            + addRoleAccess.getSubMenuId() + " doesn't exists");
                } else {
//                    log.info("new RoleAccess --> {}", addRoleAccess);
                    RoleAccess roleAccess = new RoleAccess();
                    IKeyValuePair iKeyValuePair = replicaModuleRepository.getDescription(addRoleAccess.getLanguageId(),
                            addRoleAccess.getCompanyId(), addRoleAccess.getMenuId(), addRoleAccess.getSubMenuId());
                    BeanUtils.copyProperties(addRoleAccess, roleAccess, CommonUtils.getNullPropertyNames(addRoleAccess));
                    if (iKeyValuePair != null) {
                        roleAccess.setLanguageIdAndDescription(iKeyValuePair.getLangDesc());
                        roleAccess.setCompanyIdAndDescription(iKeyValuePair.getCompanyDesc());
                        roleAccess.setMenuName(iKeyValuePair.getMenuDesc());
                        roleAccess.setSubMenuName(iKeyValuePair.getSubMenuDesc());
                    }
                    String statusDesc = replicaStatusRepository.getStatusDescription(addRoleAccess.getStatusId());
                    if (statusDesc != null) {
                        roleAccess.setStatusDescription(statusDesc);
                    }
                    roleAccess.setStatusId("1"); // ACTIVE
                    roleAccess.setRoleId(roleId);
                    roleAccess.setDeletionIndicator(0L);
                    roleAccess.setCreatedBy(loginUserID);
                    roleAccess.setUpdatedBy(loginUserID);
                    roleAccess.setCreatedOn(new Date());
                    roleAccess.setUpdatedOn(new Date());

                    // Insert Record
                    RoleAccess createdRoleAccess = roleAccessRepository.save(roleAccess);
                    log.info("new RoleAccess created --> {}", createdRoleAccess);
                    newRoleAccessList.add(createdRoleAccess);
                }
            }
        }
        return newRoleAccessList;

    }

    /**
     * Update RoleAccess
     *
     * @param languageId
     * @param companyId
     * @param menuId
     * @param subMenuId
     * @param roleId
     * @param loginUserID
     * @param updateRoleAccess
     * @return
     * @throws IllegalAccessException
     * @throws InvocationTargetException
     */
    @Transactional
    public RoleAccess updateRoleAccess(String companyId, String languageId, Long roleId, Long menuId,
                                       Long subMenuId, String loginUserID, UpdateRoleAccess updateRoleAccess)
            throws IllegalAccessException, InvocationTargetException {
        try {
            RoleAccess dbRoleAccess = getRoleAccess(companyId, languageId, roleId, menuId, subMenuId);
            BeanUtils.copyProperties(updateRoleAccess, dbRoleAccess, CommonUtils.getNullPropertyNames(updateRoleAccess));
            if (updateRoleAccess.getStatusId() != null && !updateRoleAccess.getStatusId().isEmpty()) {
                String statusDesc = replicaStatusRepository.getStatusDescription(updateRoleAccess.getStatusId());
                if (statusDesc != null) {
                    dbRoleAccess.setStatusDescription(statusDesc);
                }
            }
            dbRoleAccess.setUpdatedBy(loginUserID);
            dbRoleAccess.setUpdatedOn(new Date());
            return roleAccessRepository.save(dbRoleAccess);
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    /**
     * Delete RoleAccess
     *
     * @param languageId
     * @param companyId
     * @param roleId
     * @param loginUserID
     */
    public void deleteRoleAccess(String languageId, String companyId, Long roleId, String loginUserID) {
        List<RoleAccess> dbRoleAccess = roleAccessRepository.findByCompanyIdAndRoleIdAndLanguageIdAndDeletionIndicator(
                companyId, roleId, languageId, 0L);
        if (dbRoleAccess != null) {
            for (RoleAccess roleAccess : dbRoleAccess) {
                if (roleAccess != null) {
                    roleAccess.setDeletionIndicator(1L);
                    roleAccess.setUpdatedBy(loginUserID);
                    roleAccess.setUpdatedOn(new Date());
                    roleAccessRepository.save(roleAccess);
                } else {
                    throw new BadRequestException("Error in deleting roleId: " + roleId);
                }
            }
        }
    }
    /*--------------------------------------------------REPLICA------------------------------------------------------*/

    /**
     * Get all RoleAccess Details
     *
     * @return
     */
    public List<ReplicaRoleAccess> getAllRoleAccesses() {
        List<ReplicaRoleAccess> roleAccessList = replicaRoleAccessRepository.findAll();
        roleAccessList = roleAccessList.stream().filter(i -> i.getDeletionIndicator() == 0).collect(Collectors.toList());
        return roleAccessList;
    }

    /**
     * Get RoleAccess
     *
     * @param companyId
     * @param languageId
     * @param roleId
     * @param menuId
     * @param subMenuId
     * @return
     */
    public ReplicaRoleAccess getReplicaRoleAccess(String companyId, String languageId, Long roleId, Long menuId, Long subMenuId) {
        Optional<ReplicaRoleAccess> dbRoleAccess = replicaRoleAccessRepository.findByLanguageIdAndCompanyIdAndRoleIdAndMenuIdAndSubMenuIdAndDeletionIndicator
                (languageId, companyId, roleId, menuId, subMenuId, 0L);
        if (dbRoleAccess.isEmpty()) {
            throw new BadRequestException("The given values : companyId - " + companyId + " languageId - " + languageId +
                    " roleId - " + roleId + " menuId - " + menuId + " submenuId - " + subMenuId + " doesn't exist.");
        }
        return dbRoleAccess.get();
    }

    /**
     * @param companyId
     * @param languageId
     * @param roleId
     * @return
     */
    public List<ReplicaRoleAccess> getReplicaRoleAccessList(String companyId, String languageId, Long roleId) {
        List<ReplicaRoleAccess> dbRoleAccessList = replicaRoleAccessRepository.findByLanguageIdAndCompanyIdAndRoleIdAndDeletionIndicator(
                languageId, companyId, roleId, 0L);
        if (dbRoleAccessList.isEmpty()) {
            throw new BadRequestException("The given values : companyId - " + companyId + " languageId - " + languageId +
                    " roleId - " + roleId + " doesn't exists");
        }
        return dbRoleAccessList;
    }

    /**
     * Find RoleAccesses
     *
     * @param findRoleAccess
     * @return
     * @throws ParseException
     */

    public List<ReplicaRoleAccess> findRoleAccess(FindRoleAccess findRoleAccess) throws ParseException {

        ReplicaRoleAccessSpecification spec = new ReplicaRoleAccessSpecification(findRoleAccess);
        List<ReplicaRoleAccess> results = replicaRoleAccessRepository.findAll(spec);
        log.info("results --> {}", results);
        return results;
    }
}



