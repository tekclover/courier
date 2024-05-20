package com.courier.overc360.api.idmaster.replica.model.user;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor

/*
 *
 */
@Table(
		name = "tblusermanagement",
		uniqueConstraints = {
				@UniqueConstraint (
						name = "unique_key_strategyid", 
						columnNames = {"LANG_ID", "C_ID", "PLANT_ID", "WH_ID", "USR_ID"}
						)
				}
		)
@IdClass(UserManagementCompositeKey.class)
public class UserManagement {

    public enum Role {USER, ADMIN, USER_MANAGER}

    @Id
    @Column(name = "USR_ID")
    private String userId;
    
    @Id
    @Column(name = "LANG_ID")
	private String languageId;
    
    @Id
    @Column(name = "C_ID")
	private String companyCode;
    
    @Id
	@Column(name = "PLANT_ID")
	private String plantId;
	
    @Id
	@Column(name = "WH_ID")
	private String warehouseId;

	@Column(name = "USR_ROLE_ID")
	private Long userRoleId;

    @Column(name="COMP_ID_DESC")
    private String companyIdAndDescription;

    @Column(name="PLANT_ID_DESC")
    private String plantIdAndDescription;

    @Column(name="WH_ID_DESC")
    private String warehouseIdAndDescription;

    @Column(name="USR_ROLE_ID_DESC")
    private String userRoleIdAndDescription;

    @Column(name="USR_TYP_ID_DESC")
    private String userTypeIdAndDescription;

	@Column(name = "USR_TYP_ID")
	private Long userTypeId;
	
	//@JsonIgnore
    @Column(name = "PASSWORD")
    private String password;
	
    @Column(name = "USER_NM")
    private String userName;
    
    @Column(name = "FST_NM")
    private String firstName;
    
    @Column(name = "LST_NM")
    private String lastName;
    
    @Column(name = "STATUS_ID")
	private Long statusId;
    
    @Column(name = "DATE_FOR_ID")
   	private Long dateFormatId;
    
    @Column(name = "CUR_DECIMAL")
   	private Long currencyDecimal;

    @Column(name = "CREATE_HHT_USR")
    private Boolean createHhtUser;
    
    @Column(name = "TIME_ZONE")
    private String timeZone;

    @Column(name="IS_LOGGED_IN")
    private Boolean portalLoggedIn;

    @Column(name="HHT_LOGGED_IN")
    private Boolean hhtLoggedIn;

    @Column(name="RESET_PASSWORD")
    private Boolean resetPassword;
    
    @Column(name = "MAIL_ID")
    private String emailId;
    
    @Column(name = "IS_DELETED")
	private Long deletionIndicator = 0L;

	@Column(name = "CTD_BY")
	private String createdBy;

	@Column(name = "CTD_ON")
    private Date createdOn = new Date();

	@Column(name = "UTD_BY")
    private String updatedBy;

	@Column(name = "UTD_ON")
	private Date updatedOn = new Date();
}
