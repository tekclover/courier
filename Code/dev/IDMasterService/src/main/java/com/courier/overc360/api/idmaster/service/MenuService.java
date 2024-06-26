package com.courier.overc360.api.idmaster.service;

import com.courier.overc360.api.idmaster.controller.exception.BadRequestException;
import com.courier.overc360.api.idmaster.primary.model.company.Company;
import com.courier.overc360.api.idmaster.primary.model.menu.AddMenu;
import com.courier.overc360.api.idmaster.primary.model.menu.Menu;
import com.courier.overc360.api.idmaster.primary.model.menu.UpdateMenu;
import com.courier.overc360.api.idmaster.primary.repository.CompanyRepository;
import com.courier.overc360.api.idmaster.primary.repository.MenuRepository;
import com.courier.overc360.api.idmaster.primary.util.CommonUtils;
import com.courier.overc360.api.idmaster.replica.model.IKeyValuePair;
import com.courier.overc360.api.idmaster.replica.model.menu.FindMenu;
import com.courier.overc360.api.idmaster.replica.model.menu.ReplicaMenu;
import com.courier.overc360.api.idmaster.replica.repository.ReplicaCompanyRepository;
import com.courier.overc360.api.idmaster.replica.repository.ReplicaMenuRepository;
import com.courier.overc360.api.idmaster.replica.repository.specification.ReplicaMenuSpecification;
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
public class MenuService {

    @Autowired
    private ReplicaCompanyRepository replicaCompanyRepository;

    @Autowired
    private MenuRepository menuRepository;

    @Autowired
    private ReplicaMenuRepository replicaMenuRepository;

    @Autowired
    private CompanyRepository companyRepository;

    /*--------------------------------------------------------PRIMARY------------------------------------------------*/

    /**
     * Get Menu
     *
     * @param languageId
     * @param companyId
     * @param menuId
     * @param subMenuId
     * @param authorizationObjectId
     * @return
     */
    public Menu getMenu(String languageId, String companyId, Long menuId, Long subMenuId, Long authorizationObjectId) {
        Optional<Menu> dbMenu =
                menuRepository.findByLanguageIdAndCompanyIdAndMenuIdAndSubMenuIdAndAuthorizationObjectIdAndDeletionIndicator(
                        languageId, companyId, menuId, subMenuId, authorizationObjectId, 0L);
        if (dbMenu.isEmpty()) {
            throw new BadRequestException("The given values : menuId - " + menuId + ", subMenuId - " + subMenuId +
                    " and authorizationObjectId - " + authorizationObjectId + " doesn't exists");
        }
        return dbMenu.get();
    }

    @Transactional
    public Menu createMenu(AddMenu addMenu, String loginUserID)
            throws IllegalAccessException, InvocationTargetException {
        try {
            Optional<Company> dbCompany = companyRepository.findByCompanyIdAndLanguageIdAndDeletionIndicator(
                    addMenu.getCompanyId(), addMenu.getLanguageId(), 0L);
            Optional<Menu> duplicateMenu = menuRepository.findByLanguageIdAndCompanyIdAndMenuIdAndSubMenuIdAndAuthorizationObjectIdAndDeletionIndicator(
                    addMenu.getLanguageId(), addMenu.getCompanyId(), addMenu.getMenuId(),
                    addMenu.getSubMenuId(), addMenu.getAuthorizationObjectId(), 0L);

            if (dbCompany.isEmpty()) {
                throw new BadRequestException("The given values - CompanyId - " + addMenu.getCompanyId()
                        + " and LanguageId - " + addMenu.getLanguageId() + " doesn't exists");
            } else if (duplicateMenu.isPresent()) {
                throw new BadRequestException("Record is Getting Duplicated with the given values : menuId - " + addMenu.getMenuId());
            } else {
                log.info("new Menu --> " + addMenu);
                Menu dbMenu = new Menu();
                IKeyValuePair iKeyValuePair = replicaCompanyRepository.getDescription(addMenu.getLanguageId(), addMenu.getCompanyId());
                BeanUtils.copyProperties(addMenu, dbMenu, CommonUtils.getNullPropertyNames(addMenu));
                if (iKeyValuePair != null) {
                    dbMenu.setLanguageIdAndDescription(iKeyValuePair.getLangDesc());
                    dbMenu.setCompanyIdAndDescription(iKeyValuePair.getCompanyDesc());
                }
                dbMenu.setDeletionIndicator(0L);
                dbMenu.setCreatedBy(loginUserID);
                dbMenu.setCreatedOn(new Date());
                dbMenu.setUpdatedBy(loginUserID);
                dbMenu.setUpdatedOn(new Date());
                return menuRepository.save(dbMenu);
            }
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    @Transactional
    public List<Menu> createMenuBulk(List<AddMenu> addMenuList, String loginUserID)
            throws IllegalAccessException, InvocationTargetException {
        try {
            List<Menu> newMenuList = new ArrayList<>();
            for (AddMenu addMenu : addMenuList) {
                Optional<Company> dbCompany = companyRepository.findByCompanyIdAndLanguageIdAndDeletionIndicator(
                        addMenu.getCompanyId(), addMenu.getLanguageId(), 0L);
                Optional<Menu> duplicateMenu = menuRepository.findByLanguageIdAndCompanyIdAndMenuIdAndSubMenuIdAndAuthorizationObjectIdAndDeletionIndicator(
                        addMenu.getLanguageId(), addMenu.getCompanyId(), addMenu.getMenuId(),
                        addMenu.getSubMenuId(), addMenu.getAuthorizationObjectId(), 0L);

                if (dbCompany.isEmpty()) {
                    throw new BadRequestException("The given values - CompanyId - " + addMenu.getCompanyId()
                            + " and LanguageId - " + addMenu.getLanguageId() + " doesn't exists");
                } else if (duplicateMenu.isPresent()) {
                    throw new BadRequestException("Record is Getting Duplicated with the given values : menuId - " + addMenu.getMenuId());
                } else {
                    log.info("new Menu --> " + addMenu);
                    Menu dbMenu = new Menu();
                    IKeyValuePair iKeyValuePair = replicaCompanyRepository.getDescription(addMenu.getLanguageId(), addMenu.getCompanyId());
                    BeanUtils.copyProperties(addMenu, dbMenu, CommonUtils.getNullPropertyNames(addMenu));
                    if (iKeyValuePair != null) {
                        dbMenu.setLanguageIdAndDescription(addMenu.getLanguageId() + " - " + iKeyValuePair.getLangDesc());
                        dbMenu.setCompanyIdAndDescription(addMenu.getCompanyId() + " - " + iKeyValuePair.getCompanyDesc());
                    }
                    dbMenu.setDeletionIndicator(0L);
                    dbMenu.setCreatedBy(loginUserID);
                    dbMenu.setCreatedOn(new Date());
                    dbMenu.setUpdatedBy(loginUserID);
                    dbMenu.setUpdatedOn(new Date());
                    newMenuList.add(menuRepository.save(dbMenu));
                }
            }
            return newMenuList;
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    @Transactional
    public Menu updateMenu(String languageId, String companyId, Long menuId, Long subMenuId, Long authorizationObjectId, String loginUserID, UpdateMenu updateMenu)
            throws IllegalAccessException, InvocationTargetException {
        try {
            Menu dbMenu = getMenu(languageId, companyId, menuId, subMenuId, authorizationObjectId);
            BeanUtils.copyProperties(updateMenu, dbMenu, CommonUtils.getNullPropertyNames(updateMenu));
            dbMenu.setUpdatedBy(loginUserID);
            dbMenu.setUpdatedOn(new Date());
            return menuRepository.save(dbMenu);
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    /**
     * Delete Menu
     *
     * @param languageId
     * @param companyId
     * @param menuId
     * @param subMenuId
     * @param authorizationObjectId
     * @param loginUserID
     */
    public void deleteMenu(String languageId, String companyId, Long menuId, Long subMenuId, Long authorizationObjectId, String loginUserID) {
        Menu dbMenu = getMenu(languageId, companyId, menuId, subMenuId, authorizationObjectId);
        if (dbMenu != null) {
            dbMenu.setDeletionIndicator(1L);
            dbMenu.setUpdatedBy(loginUserID);
            dbMenu.setUpdatedOn(new Date());
            menuRepository.save(dbMenu);
        } else {
            throw new EntityNotFoundException("Error in deleting MenuId - " + menuId);
        }
    }

    /*--------------------------------------------------REPLICA------------------------------------------------------*/

    /**
     * Get All Menu Details
     *
     * @return
     */
    public List<ReplicaMenu> getAllMenuDetails() {
        List<ReplicaMenu> menuList = replicaMenuRepository.findAll();
        menuList = menuList.stream().filter(i -> i.getDeletionIndicator() == 0).collect(Collectors.toList());
        return menuList;
    }

    /**
     * Get Menu Replica
     *
     * @param languageId
     * @param companyId
     * @param menuId
     * @param subMenuId
     * @param authorizationObjectId
     * @return
     */
    public ReplicaMenu getMenuReplica(String languageId, String companyId, Long menuId, Long subMenuId, Long authorizationObjectId) {
        Optional<ReplicaMenu> dbMenu =
                replicaMenuRepository.findByLanguageIdAndCompanyIdAndMenuIdAndSubMenuIdAndAuthorizationObjectIdAndDeletionIndicator(
                        languageId, companyId, menuId, subMenuId, authorizationObjectId, 0L);
        if (dbMenu.isEmpty()) {
            throw new BadRequestException("The given values : menuId - " + menuId + ", subMenuId - " + subMenuId +
                    " and authorizationObjectId - " + authorizationObjectId + " doesn't exists");
        }
        return dbMenu.get();
    }

    // Find Menus
    public List<ReplicaMenu> findMenus(FindMenu findMenu) throws ParseException {

        ReplicaMenuSpecification spec = new ReplicaMenuSpecification(findMenu);
        List<ReplicaMenu> results = replicaMenuRepository.findAll(spec);
        log.info("found Menu Details --> " + results);
        return results;
    }

}
