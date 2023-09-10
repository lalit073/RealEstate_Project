package com.pms.RealEstate.dao;

import java.util.List;
import java.util.Map;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.pms.RealEstate.model.Property;

@EnableJpaRepositories
@Repository
public interface PropertyDao extends JpaRepository<Property, Integer> {

	@Query(value = "select * from property", nativeQuery = true)
	List<Property> getAllDetails();

	List<Property> findByCity(String city);

	@Query(value = "SELECT * FROM property WHERE city = :city OR state = :state OR property_type = :property_type", nativeQuery = true)
	List<Property> findByLocality_CityAndLocality_StateAndPropertyType(String city, String state, String property_type);


	  @Query(value = "SELECT p.email_id, a.address, a.contact, a.first_name, a.last_name " +
	             "FROM property p " +
	             "JOIN accounts a ON p.email_id = a.email_id " +
	             "WHERE p.email_id = :emailId", nativeQuery = true)
	List<Map<String, Object>> getPropertyAndAccountsDetails(@Param("emailId") String emailId);

	@Query(value="select * from property where email_id=?",nativeQuery=true)
	List<Property> findByEmailId(String emailId);

	@Query(value="delete from property where email_id=?",nativeQuery=true)
	void deletebyemailid(String email_id);
	
	
}
