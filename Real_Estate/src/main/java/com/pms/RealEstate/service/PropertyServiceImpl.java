package com.pms.RealEstate.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pms.RealEstate.dao.BuyingDao;
import com.pms.RealEstate.dao.PropertyDao;
import com.pms.RealEstate.dao.RentalDao;
import com.pms.RealEstate.dto.PropertyDto;
import com.pms.RealEstate.model.Buying;
import com.pms.RealEstate.model.Images;
import com.pms.RealEstate.model.Property;
import com.pms.RealEstate.model.Rental;

@Service
public class PropertyServiceImpl implements PropertyService {

	@Autowired
	PropertyDao propertydao;

	@Autowired
	RentalDao rentaldao;

	@Autowired
	BuyingDao buyingdao;

	// getall property
	public List<Property> getAllProperties() {
		return propertydao.findAll();
	}

	// addProperty
	public void addProperty1(PropertyDto propertyDTO) {
		Property property = createPropertyFromDTO(propertyDTO);

		if ("buy".equals(propertyDTO.getOperation())) {
			Buying buying = createBuyingFromDTO(propertyDTO);
			property.setBuying(buying);
			buying.setProperty(property);
		} else if ("rent".equals(propertyDTO.getOperation())) {
			Rental rental = createRentalFromDTO(propertyDTO);
			property.setRental(rental);
			rental.setProperty(property);
		}

		propertydao.save(property);
	}

	private Rental createRentalFromDTO(PropertyDto propertyDTO) {
		Rental rental = new Rental();
		rental.setExpected_rent(propertyDTO.getExpected_rent());
		rental.setExpected_deposit(propertyDTO.getExpected_deposit());
		rental.setPreferred_tenants(propertyDTO.getPreferred_tenants());
		return rental;
	}

	public Property createPropertyFromDTO(PropertyDto propertyDTO) {
		Property property = new Property();
		System.out.println(property);
		property.setEmail_id(propertyDTO.getEmail_id());
		property.setProperty_name(propertyDTO.getProperty_name());
		property.setProperty_type(propertyDTO.getProperty_type());
		property.setBhk_type(propertyDTO.getBhk_type());
		property.setBuildup_area(propertyDTO.getBuildup_area());
		property.setFurnishing_type(propertyDTO.getFurnishing_type());
		property.setFloor(propertyDTO.getFloor());
		property.setListing_date(propertyDTO.getListing_date());
		property.setLocality(propertyDTO.getLocality());
		property.setLandmark_street(propertyDTO.getLandmark_street());
		property.setCity(propertyDTO.getCity());
		property.setState(propertyDTO.getState());
		property.setPincode(propertyDTO.getPincode());
		property.setDescription(propertyDTO.getDescription());
		return property;
	}

	public Buying createBuyingFromDTO(PropertyDto propertyDTO) {
		Buying buying = new Buying();
		buying.setExpected_rate(propertyDTO.getExpected_rate());
		return buying;
	}

	// update property
	public void updatePropertyDetails(PropertyDto propertyDto) {
		Property existingProperty = propertydao.findById(propertyDto.getProperty_id()).orElse(null);
		if (existingProperty != null) {
			updateCommonPropertyDetails(existingProperty, propertyDto);

			if ("buy".equals(propertyDto.getOperation())) {
				updateBuyingPropertyDetails(existingProperty, propertyDto);
			} else if ("rent".equals(propertyDto.getOperation())) {
				updateRentalPropertyDetails(existingProperty, propertyDto);
			}

			propertydao.save(existingProperty);
		}
	}

	public void updateCommonPropertyDetails(Property property, PropertyDto propertyDto) {
		property.setProperty_name(propertyDto.getProperty_name());
		property.setProperty_type(propertyDto.getProperty_type());
		property.setBhk_type(propertyDto.getBhk_type());
		property.setBuildup_area(propertyDto.getBuildup_area());
		property.setFurnishing_type(propertyDto.getFurnishing_type());
		property.setFloor(propertyDto.getFloor());
		property.setListing_date(propertyDto.getListing_date());
		property.setLocality(propertyDto.getLocality());
		property.setLandmark_street(propertyDto.getLandmark_street());
		property.setCity(propertyDto.getCity());
		property.setState(propertyDto.getState());
		property.setPincode(propertyDto.getPincode());
		property.setDescription(propertyDto.getDescription());
		propertydao.save(property);
	}

	public void updateBuyingPropertyDetails(Property property, PropertyDto propertyDto) {
		Buying existingBuyingProperty = property.getBuying();
		if (existingBuyingProperty != null) {
			existingBuyingProperty.setExpected_rate(propertyDto.getExpected_rate());
			// Update other buying-specific fields
			buyingdao.save(existingBuyingProperty);
		}
	}

	private void updateRentalPropertyDetails(Property property, PropertyDto propertyDto) {
		Rental existingRentalProperty = property.getRental();
		if (existingRentalProperty != null) {
			existingRentalProperty.setExpected_rent(propertyDto.getExpected_rent());
			existingRentalProperty.setExpected_deposit(propertyDto.getExpected_deposit());
			existingRentalProperty.setPreferred_tenants(propertyDto.getPreferred_tenants());
			// Update other rental-specific fields
			rentaldao.save(existingRentalProperty);
		}
	}

	// image
	public Images createImagesFromDTO(PropertyDto propertyDTO) {
		Images images = new Images();
		images.setImage_1(propertyDTO.getImage_1());
		return images;
	}
//    
//    public Images createBuyingFromDTO(PropertyDto propertyDTO) {
//        Images image = new Images();
//        Images.setExpected_rate(propertyDTO.getExpected_rate());
//        return buying;
//    }

	// getproperty by id
	@Override
	public Property getpropertybyId(int id) {
		Optional<Property> op = propertydao.findById(id);
		if (op.isPresent()) {
			return op.get();
		} else {
			return null;
			// throw new ResourceAccessException("not found");
		}
	}
	
	

	// delete property by id
	@Override
	public void deletepropertybyId(int id) {
		propertydao.deleteById(id);

	}

	// get property by city
//	@Override
//	public List<Property> getPropertiesByCity(String city) {
//		return propertydao.findByCity(city);
//	}
	
	@Override
	public List<Property> getPropertiesByCity(String city) {
	List<Property> mm=new ArrayList<>();
	List<Property> all=propertydao.findAll();
	for(Property P:all)
	{
	if(P.getCity().equals(city)|| P.getLocality().equals(city) || P.getLocality().equals(city))
	    {
	   mm.add(P);
	                 }
	}
	return mm;
	}
	

	// get property by city and type
	@Override
	public List<Property> getPropertiesByCityStateAndType(String city, String state, String propertyType) {
		return propertydao.findByLocality_CityAndLocality_StateAndPropertyType(city, state, propertyType);
	}
	
	
	 public Map<String, Object> getPropertyAndAccountsDetails(String email_id) {
	       List<Map<String, Object>> result = propertydao.getPropertyAndAccountsDetails(email_id);

	       if (result.isEmpty()) {
	           return null;
	       }

	       // Assuming there's only one row in the result list
	       return result.get(0);
	   }

	    public List<Property> getPropertyDetailsByEmailId(String emailId) {
	        return propertydao.findByEmailId(emailId);
	    }

		@Override
		public void deletepropertybyIdi(String email_id) {
			propertydao.deletebyemailid(email_id);
			
		}


}
