package com.courier.overc360.api.midmile.service;


import com.courier.overc360.api.midmile.primary.model.IKeyValuePair;
import com.courier.overc360.api.midmile.primary.model.consignment.PreAlert;
import com.courier.overc360.api.midmile.primary.repository.PreAlertRepository;
import com.courier.overc360.api.midmile.primary.util.CommonUtils;
import com.courier.overc360.api.midmile.replica.repository.ReplicaConsignmentEntityRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class PreAlertService {

    @Autowired
    PreAlertRepository preAlertRepository;

    @Autowired
    ReplicaConsignmentEntityRepository replicaConsignmentEntityRepository;

    /**
     *
     * @param preAlert
     * @param loginUserID
     * @return
     */
    public List<PreAlert> createPreAlertService(List<PreAlert> preAlert, String loginUserID) {

        List<PreAlert> preAlertList = new ArrayList<>();
        for (PreAlert dbPreAlert : preAlert) {

            // Fetching the description for a company
            IKeyValuePair iKeyValuePair = replicaConsignmentEntityRepository.getDescription(dbPreAlert.getCompanyId());

            Optional<PreAlert> preAlertOptional =
                    preAlertRepository.findByCompanyIdAndLanguageIdAndPartnerIdAndMasterAirwayBillAndDeletionIndicator(
                            dbPreAlert.getCompanyId(), iKeyValuePair.getLangId(), dbPreAlert.getPartnerId(), dbPreAlert.getMasterAirwayBill(), 0L);

            String getMasterAirwayBill = replicaConsignmentEntityRepository.getMasterAirwayBill(iKeyValuePair.getLangId(),
                    dbPreAlert.getCompanyId(), dbPreAlert.getPartnerId(), dbPreAlert.getPartnerHouseAirwayBill());

            log.info(iKeyValuePair.getLangId() + " Company " + dbPreAlert.getCompanyId() + " PartnerId " + dbPreAlert.getPartnerId()
                    + "PartnerHouseAirwayBill" + dbPreAlert.getPartnerHouseAirwayBill());

            if (!preAlertOptional.isPresent()) {
                PreAlert newPreAlert = new PreAlert();
                BeanUtils.copyProperties(dbPreAlert, newPreAlert, CommonUtils.getNullPropertyNames(dbPreAlert));
                newPreAlert.setLanguageId(iKeyValuePair.getLangId());
                newPreAlert.setMasterAirwayBill(getMasterAirwayBill);
                newPreAlert.setCreatedBy(loginUserID);
                newPreAlert.setUpdatedBy(null);
                newPreAlert.setCreatedOn(new Date());
                newPreAlert.setUpdatedOn(null);
                preAlertList.add(preAlertRepository.save(newPreAlert));
            } else {
                PreAlert getPreAlert = preAlertOptional.get();
                BeanUtils.copyProperties(dbPreAlert, getPreAlert, CommonUtils.getNullPropertyNames(dbPreAlert));
                getPreAlert.setUpdatedOn(new Date());
                getPreAlert.setUpdatedBy(loginUserID);
                preAlertList.add(preAlertRepository.save(getPreAlert));
            }
        }
        return preAlertList;
    }

}
