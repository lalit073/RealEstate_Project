package com.pms.RealEstate.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.pms.RealEstate.dto.PropertyDto;
import com.pms.RealEstate.model.Buying;
import com.pms.RealEstate.model.Property;
import com.pms.RealEstate.model.Rental;
import com.pms.RealEstate.service.BuyingService;
import com.pms.RealEstate.service.PropertyService;
import com.pms.RealEstate.service.RentalService;

@CrossOrigin(origins = "*")
@RestController
public class PropertyController {

	@Autowired
	PropertyService propertyservice;

	@Autowired
	RentalService rentalservice;

	@Autowired
	BuyingService buyingservice;

	@GetMapping("/properties")
	public ResponseEntity<List<Property>> getAllProperties() {
		List<Property> properties = propertyservice.getAllProperties();
		return ResponseEntity.ok(properties);
	}

	@GetMapping("/property/{id}")
	public ResponseEntity<Property> getById(@PathVariable int id) {
		Property p = propertyservice.getpropertybyId(id);
		if (p != null) {
			return ResponseEntity.ok(p);
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}

	// property insert api
	@PostMapping("api/properties")
	public ResponseEntity<String> addProperty(@RequestBody PropertyDto propertyDTO) {
		try {System.out.println("inside conroler");
			System.out.println(propertyDTO);
			propertyservice.addProperty1(propertyDTO);
			return ResponseEntity.ok("Property added successfully.");
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred.");
		}
	}

	@DeleteMapping("/deleteproperty/{id}")
	public ResponseEntity<String> deletePropertyDetails(@PathVariable int id) {
		propertyservice.deletepropertybyId(id);
		return ResponseEntity.ok("deleted successfully");
	}

	// http://localhost:8989/properties/search?city=Metroville

	@PutMapping("/update")
	public ResponseEntity<String> updatePropertyDetails(@RequestBody PropertyDto propertyDto) {
		propertyservice.updatePropertyDetails(propertyDto);
		return ResponseEntity.ok("Property details updated successfully.");
	}

	@GetMapping("/properties/search/{city}")
	public ResponseEntity<List<Property>> searchPropertiesByCity(@PathVariable String city) {
		List<Property> properties = propertyservice.getPropertiesByCity(city);
		System.out.println(city);
		return ResponseEntity.ok(properties);
	}

	@GetMapping("/properties/search/{city}/{state}/{propertyType}")
	public ResponseEntity<List<Property>> searchProperties(@PathVariable String city, @PathVariable String state,
			@PathVariable String propertyType) {
		List<Property> properties = propertyservice.getPropertiesByCityStateAndType(city, state, propertyType);
		return ResponseEntity.ok(properties);
	}

	@GetMapping("/rented-properties")
	public List<Rental> getRentedProperties() {
		return rentalservice.getAllRentedProperties();
	}

	@GetMapping("/buying-properties")
	public List<Buying> getBuyingProperties() {
		return buyingservice.getAllBuyingProperties();
	}
	
	
	
	
	
	
	
	@GetMapping("/property-details/{email_id}")
	public ResponseEntity<Map<String, Object>> getPropertyAndAccountsDetails(@PathVariable String email_id) {
		System.out.println(email_id);
	   Map<String, Object> details = propertyservice.getPropertyAndAccountsDetails(email_id);
	   
	   
	   if (details == null) {
	       return ResponseEntity.notFound().build();
	   }

	   return ResponseEntity.ok(details);
	}

	
	@GetMapping("/propertydetails/{emailId}")
    public ResponseEntity<List<Property>> getPropertyDetailsByEmailId(@PathVariable String emailId) {
        List<Property> propertyList = propertyservice.getPropertyDetailsByEmailId(emailId);
        
        if (propertyList.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(propertyList);
    }
	
	
	
	@DeleteMapping("/deletepropertye/{email_id}")
	public ResponseEntity<String> deletePropertyDetailse(@PathVariable String email_id) {
		propertyservice.deletepropertybyIdi(email_id);
		return ResponseEntity.ok("deleted successfully");
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}