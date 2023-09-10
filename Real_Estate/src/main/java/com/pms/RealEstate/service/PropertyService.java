package com.pms.RealEstate.service;

import java.util.List;
import java.util.Map;

import com.pms.RealEstate.dto.PropertyDto;
import com.pms.RealEstate.model.Buying;
import com.pms.RealEstate.model.Property;

public interface PropertyService {

	Property getpropertybyId(int id);

	void deletepropertybyId(int id);

	List<Property> getPropertiesByCity(String city);

	List<Property> getPropertiesByCityStateAndType(String city, String state, String propertyType);

	List<Property> getAllProperties();

	void addProperty1(PropertyDto propertyDTO);

	Property createPropertyFromDTO(PropertyDto propertyDTO);

	Buying createBuyingFromDTO(PropertyDto propertyDTO);

	void updatePropertyDetails(PropertyDto propertyDto);

	void updateCommonPropertyDetails(Property property, PropertyDto propertyDto);

	void updateBuyingPropertyDetails(Property property, PropertyDto propertyDto);

	Map<String, Object> getPropertyAndAccountsDetails(String email_id);

	List<Property> getPropertyDetailsByEmailId(String emailId);

	void deletepropertybyIdi(String email_id);

}
