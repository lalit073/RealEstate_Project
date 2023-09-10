package com.pms.RealEstate.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pms.RealEstate.dao.AccountDao;
import com.pms.RealEstate.dto.LoginDto;
import com.pms.RealEstate.model.Accounts;
@Service
public class AccountServiceImpl implements AccountService {
	
	@Autowired
	AccountDao accountdao;

		 @Transactional
		    public Accounts registerUser(Accounts account) {
			 
		        return accountdao.save(account);
		    }

		 
           public List<Accounts> getAllAccounts() {
		        return accountdao.findAll();
		    }


	@Override
	public Accounts verifyaccount(LoginDto userlogin)
	{
	   List<Accounts> ac=accountdao.findAll();
	   for(Accounts A:ac)
	   {
		   if(A.getEmail_id().equalsIgnoreCase(userlogin.getEmail_id()) && A.getPassword().equalsIgnoreCase(userlogin.getPassword()))
				   {
			           return A;
			   
				   }
	   }
		return null;
		
	}


	@Override
	public boolean update(Accounts a) {
		
		Accounts ulog=accountdao.updateUser(a.getEmail_id(),a.getPassword());
		if(ulog!=null) {
			ulog.setPassword(a.getPassword());
			accountdao.save(ulog);
			return true;
		}
		return false;
	}
	
	
	
	
	public boolean updateAccountByEmailId(String emailId, Accounts updatedAccount) {
        Accounts existingAccount = accountdao.findById(emailId).orElse(null);
        if (existingAccount == null) {
            return false; // Account not found
        }
        existingAccount.setFirst_name(updatedAccount.getFirst_name());
        existingAccount.setLast_name(updatedAccount.getLast_name());
        existingAccount.setAddress(updatedAccount.getAddress());
        existingAccount.setContact(updatedAccount.getContact());
        existingAccount.setRole(updatedAccount.getRole());

        accountdao.save(existingAccount);
        return true;
    }


	@Override
	public void deleteaccount(String email_id) {

		accountdao.deleteById(email_id);
		
	}


	@Override
	public Accounts getEmailId(String email_id) {
		Optional<Accounts> op=accountdao.findById(email_id);
		if(op.isPresent())
		{
			return op.get();
		}
		else
		{
			return null;
		}
			
	}
	
	public void resetPassword(String email_id, String first_name, String password) {
        Accounts account = accountdao.findAccountByEmailIdAndFirstName(email_id, first_name);
        System.out.println(account);
        if (account != null) {
            account.setPassword(password);
            accountdao.save(account);
        } else {
            // Handle the case where the user is not found
            throw new RuntimeException("User not found");
        }
	
	}
	
}

	

