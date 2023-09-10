package com.pms.RealEstate.controller;

import java.util.List;

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

import com.oracle.webservices.internal.api.message.PropertySet.Property;
import com.pms.RealEstate.dto.LoginDto;
import com.pms.RealEstate.dto.ResetPasswordDto;
import com.pms.RealEstate.model.Accounts;
import com.pms.RealEstate.service.AccountService;
import com.pms.RealEstate.service.PropertyService;


@CrossOrigin(origins="*")
@RestController
public class AccountController {

	@Autowired
	AccountService accountservice;
	@Autowired
	PropertyService propertyservice;
	
	
	@PostMapping("/register")
    public ResponseEntity<Accounts> registerUser(@RequestBody Accounts accounts) {
        Accounts newAccounts = accountservice.registerUser(accounts);
        return ResponseEntity.ok(newAccounts);
	}
	
	@PostMapping("/login")
    public Accounts dislogi(@RequestBody LoginDto userlogin)
    {
		System.out.println(userlogin.toString());
		return accountservice.verifyaccount(userlogin);
    }
	
	
	@GetMapping("/get")
    public ResponseEntity<List<Accounts>> getAllAccounts() {
        List<Accounts> accounts = accountservice.getAllAccounts();
        return ResponseEntity.ok(accounts);
    }
	
	@PutMapping("/forgot")
	public ResponseEntity<String> updateUser(@RequestBody Accounts a){
		System.out.println(a);
		boolean status=accountservice.update(a);
		if(status)
			return ResponseEntity.ok("success");
		
		return ResponseEntity.ok("User not found");
	
	}
	
	
	@PutMapping("update/{emailId}")
    public ResponseEntity<String> updateAccountDetails(@PathVariable String emailId,@RequestBody Accounts updatedAccount) {
        boolean updated = accountservice.updateAccountByEmailId(emailId, updatedAccount);
        if (updated) {
            return ResponseEntity.ok("Account details updated successfully.");
        } else {
            return ResponseEntity.notFound().build();
        }
    }
	
	@DeleteMapping("/delete/{email_id}")
	public void deleteByemail(@PathVariable String email_id)
	{
		List<com.pms.RealEstate.model.Property> prolist=propertyservice.getPropertyDetailsByEmailId(email_id);
		for(com.pms.RealEstate.model.Property p:prolist)
		{
		  propertyservice.deletepropertybyId(p.getProperty_id());
		}
		accountservice.deleteaccount(email_id);
	}
	
	
	@PostMapping("/reset-password")
    public ResponseEntity<String> resetPassword(@RequestBody ResetPasswordDto resetPasswordDto) {
        try {
            String email_id = resetPasswordDto.getEmail_id();
            String first_name = resetPasswordDto.getFirst_name();
            String password = resetPasswordDto.getPassword();
            System.out.println(resetPasswordDto);
            accountservice.resetPassword(email_id,first_name, password);
            
            return ResponseEntity.ok("Password reset successful");
        } catch (Exception e) {
            // Handle exceptions
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Password reset failed");
        }
    }
}
	
	
	
	
