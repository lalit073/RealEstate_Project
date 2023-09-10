package com.pms.RealEstate.service;

import java.util.List;

import com.pms.RealEstate.dto.LoginDto;
import com.pms.RealEstate.model.Accounts;

public interface AccountService {

	Accounts registerUser(Accounts accounts);

	List<Accounts> getAllAccounts();

	Accounts verifyaccount(LoginDto userlogin);

	boolean update(Accounts a);

	boolean updateAccountByEmailId(String emailId, Accounts updatedAccount);

	void deleteaccount(String email_id);

	Accounts getEmailId(String to);

	void resetPassword(String email_id, String first_name, String password);
}
