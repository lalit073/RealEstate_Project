package com.pms.RealEstate.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.pms.RealEstate.model.Accounts;

@Repository
public interface AccountDao extends JpaRepository<Accounts, String> {

//	Accounts updateUser(String email_id, String password);
//
//	Accounts updateUser(String email_id, String password);

	@Query(value = "select * from accounts where email_id=?", nativeQuery = true)
	Accounts updateUser(String email_id, String password);
	
	
	@Query("SELECT a FROM Accounts a WHERE a.email_id = :email_id AND a.first_name = :first_name")
    Accounts findAccountByEmailIdAndFirstName(@Param("email_id") String email_id, @Param("first_name") String first_name);

}
