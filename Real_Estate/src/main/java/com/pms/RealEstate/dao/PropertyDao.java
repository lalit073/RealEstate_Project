package com.pms.RealEstate.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.pms.RealEstate.model.Property;

@EnableJpaRepositories
@Repository
public interface PropertyDao extends JpaRepository<Property,Integer>
{

	
	@Query(value="select * from property", nativeQuery=true)
	   List<Property> getAllDetails();

	List<Property> findByCity(String city);

	
	@Query(value = "SELECT * FROM property WHERE city = :city OR state = :state OR property_type = :property_type", nativeQuery = true)
	List<Property> findByLocality_CityAndLocality_StateAndPropertyType(String city, String state, String property_type);
	
	
}
